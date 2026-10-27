import { MAX_UPLOAD_BYTES, type FeedbackErrorKind, type SpeakingFeedback, type WordIssue } from "@/lib/ai-feedback";
import { GeminiError, generateJson, geminiConfigured } from "@/lib/gemini";
import type { Level } from "@/lib/types";

/*
 * POST /api/speaking-feedback (multipart): audio (WAV), mode ("shadow" | "speak"), text, level?, accent?
 * Sends the learner's recording to Gemini and returns pronunciation, accent and fluency feedback.
 * The API key never reaches the browser.
 */

export const maxDuration = 60;

/* ---------- light abuse protection (per server instance, best effort) ---------- */

const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 30;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > WINDOW_MS) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

const fail = (error: FeedbackErrorKind, status: number) => Response.json({ error }, { status });

/* ---------- prompt ---------- */

const SYSTEM = `You are an experienced English pronunciation coach and speaking examiner (IELTS, TOEFL iBT, TOEIC).
You listen to a recording of an English learner and give short, specific, encouraging feedback.

Rules:
- Judge clarity and intelligibility, not how "native" the learner sounds. A noticeable accent is fine when it does not
  make words hard to understand (this is how the IELTS Pronunciation criterion works).
- Only comment on what you can actually hear. Never invent words the learner did not say.
- transcript: exactly what the learner said, including mistakes, repetitions and fillers (um, uh). Transcribe the
  audio itself: if the learner said a different word from the target sentence, write the word they actually said.
- words: up to 6 words that were mispronounced or unclear, most important first. "heard" is what the word sounded
  like (or "" if not useful). "issue" names the problem (wrong vowel, missing final consonant, word stress, th sound…).
  "tip" says how to fix it in one short, practical sentence a learner can follow.
- scores are 0–100: pronunciation (individual sounds and word stress), fluency (smoothness, pauses, speed),
  intonation (sentence stress, rhythm, pitch). 85+ means very clear and natural; 60–84 clear with some issues;
  40–59 often hard to follow; below 40 very hard to understand.
- accent: one or two sentences on the accent features that most affect clarity, e.g. "Final consonants are often
  dropped, so 'light' and 'like' sound the same." Be kind and neutral; never mock or label a nationality.
- strengths: 1–3 things the learner did well. tips: 1–3 practical next steps, most useful first.
- Write for a learner at the given CEFR level: short sentences and common words. Use British spelling
  (practise as a verb, colour, recognise), like the rest of the course.
- If there is no clear speech (silence, noise, or not English), set speechDetected to false, scores to 0,
  and use tips to say what to do (for example, move closer to the microphone).`;

const SCHEMA = {
  type: "OBJECT",
  properties: {
    speechDetected: { type: "BOOLEAN" },
    transcript: { type: "STRING" },
    scores: {
      type: "OBJECT",
      properties: {
        pronunciation: { type: "INTEGER" },
        fluency: { type: "INTEGER" },
        intonation: { type: "INTEGER" },
      },
      required: ["pronunciation", "fluency", "intonation"],
    },
    accent: { type: "STRING" },
    words: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          word: { type: "STRING" },
          heard: { type: "STRING" },
          issue: { type: "STRING" },
          tip: { type: "STRING" },
        },
        required: ["word", "heard", "issue", "tip"],
      },
    },
    strengths: { type: "ARRAY", items: { type: "STRING" } },
    tips: { type: "ARRAY", items: { type: "STRING" } },
    taskComment: { type: "STRING" },
  },
  required: ["speechDetected", "transcript", "scores", "accent", "words", "strengths", "tips", "taskComment"],
  propertyOrdering: ["speechDetected", "transcript", "scores", "accent", "words", "strengths", "tips", "taskComment"],
};

function instructions(mode: string, text: string, level: Level, accent: string) {
  if (mode === "shadow")
    return `Listen-and-repeat task. Level: ${level}. The learner heard a ${accent === "uk" ? "British" : "American"} English
model and tried to repeat this sentence exactly:
"${text}"
Compare what they said with the sentence word by word. In "words", include any words they missed or changed as well as
mispronounced ones. Set taskComment to "".`;
  return `Speaking task. Level: ${level}. The learner answered this task:
"${text}"
Focus on pronunciation, accent, fluency and intonation. In taskComment, write one sentence on whether the answer
addressed the task.`;
}

/* ---------- output clean-up: never trust the model's JSON shape ---------- */

const str = (v: unknown, max = 400) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const score = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? Math.round(Math.min(100, Math.max(0, v))) : 0);
const strList = (v: unknown, n: number) => (Array.isArray(v) ? v.map((x) => str(x, 300)).filter(Boolean).slice(0, n) : []);

function clean(raw: Record<string, unknown>, model: string): SpeakingFeedback {
  const scores = (raw.scores ?? {}) as Record<string, unknown>;
  const speechDetected = raw.speechDetected !== false;
  return {
    speechDetected,
    transcript: str(raw.transcript, 4000),
    scores: speechDetected
      ? { pronunciation: score(scores.pronunciation), fluency: score(scores.fluency), intonation: score(scores.intonation) }
      : { pronunciation: 0, fluency: 0, intonation: 0 },
    accent: str(raw.accent, 600),
    words: (Array.isArray(raw.words) ? raw.words : [])
      .map((w: Record<string, unknown>): WordIssue => ({ word: str(w?.word, 60), heard: str(w?.heard, 60), issue: str(w?.issue, 200), tip: str(w?.tip, 300) }))
      // Drop words the model lists as fine ("clear", "correct"…): they are not problems.
      .filter((w) => w.word && !/^(clear|correct|good|fine|ok|none|no issue)\b/i.test(w.issue))
      .slice(0, 6),
    strengths: strList(raw.strengths, 3),
    tips: strList(raw.tips, 3),
    taskComment: str(raw.taskComment, 400),
    model,
  };
}

/* ---------- listen and repeat: target words the learner missed or changed ---------- */

/** Lower-case words with contractions expanded, so "I'd like" matches "I would like". */
const tokens = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\bcan't\b/g, "can not")
    .replace(/\bwon't\b/g, "will not")
    .replace(/\blet's\b/g, "let us")
    .replace(/n't\b/g, " not")
    .replace(/'d\b/g, " would")
    .replace(/'m\b/g, " am")
    .replace(/'re\b/g, " are")
    .replace(/'ve\b/g, " have")
    .replace(/'ll\b/g, " will")
    .replace(/'s\b/g, "") // is / has / possessive: compare the base word only
    .replace(/\bcannot\b/g, "can not")
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

/** Target words that are not matched in the transcript (longest common subsequence). */
function missedWords(target: string, transcript: string) {
  const a = tokens(target);
  const b = tokens(transcript);
  const dp = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const missed: string[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length) {
    if (j < b.length && a[i] === b[j]) {
      i++;
      j++;
    } else if (j < b.length && dp[i][j + 1] >= dp[i + 1][j]) j++;
    else missed.push(a[i++]);
  }
  return missed;
}

/** Makes sure every missed target word is listed, even if the model left it out. */
function addMissed(fb: SpeakingFeedback, target: string): SpeakingFeedback {
  if (!fb.speechDetected || !fb.transcript) return fb;
  const listed = new Set(fb.words.map((w) => w.word.toLowerCase()));
  const extra = [...new Set(missedWords(target, fb.transcript))]
    .filter((w) => !listed.has(w))
    .map((word): WordIssue => ({ word, heard: "", issue: "missed or changed", tip: "Listen to the model again and include this word." }));
  return { ...fb, words: [...fb.words, ...extra].slice(0, 10) };
}

/* ---------- handler ---------- */

export async function POST(request: Request) {
  if (!geminiConfigured()) return fail("not-configured", 503);

  // Only this site's pages may call the route from a browser.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host && URL.parse(origin)?.host !== host) return fail("failed", 403);

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || request.headers.get("x-real-ip") || "local";
  if (rateLimited(ip)) return fail("rate-limited", 429);

  if (Number(request.headers.get("content-length") ?? 0) > MAX_UPLOAD_BYTES + 100_000) return fail("too-long", 413);
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail("no-audio", 400);
  }
  const audio = form.get("audio");
  const mode = form.get("mode") === "shadow" ? "shadow" : "speak";
  const text = String(form.get("text") ?? "").slice(0, 3000);
  const level = (["B1", "B2", "C1"] as const).find((l) => l === form.get("level")) ?? "B2";
  const accent = form.get("accent") === "uk" ? "uk" : "us";
  if (!(audio instanceof Blob) || audio.size < 1000) return fail("no-audio", 400);
  if (audio.size > MAX_UPLOAD_BYTES) return fail("too-long", 413);
  if (!text.trim()) return fail("failed", 400);

  const mimeType = audio.type.startsWith("audio/") ? audio.type : "audio/wav";
  const data = Buffer.from(await audio.arrayBuffer()).toString("base64");

  try {
    const { model, value } = await generateJson<Record<string, unknown>>(
      [{ inlineData: { mimeType, data } }, { text: instructions(mode, text, level, accent) }],
      SCHEMA,
      { system: SYSTEM },
    );
    const feedback = clean(value, model);
    return Response.json(mode === "shadow" ? addMissed(feedback, text) : feedback);
  } catch (e) {
    console.error("[speaking-feedback]", e instanceof Error ? e.message : e);
    return fail(e instanceof GeminiError && e.kind === "quota" ? "quota" : "failed", 502);
  }
}
