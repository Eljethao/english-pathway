import type { Cast, Gender, Voice } from "./types";

/* ---------- Text-to-speech ---------- */

export function isTtsSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

/** Voices load asynchronously in Chrome; wait for them (max ~1.5 s). */
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (!isTtsSupported()) return Promise.resolve([]);
  const now = speechSynthesis.getVoices();
  if (now.length) return Promise.resolve(now);
  voicesPromise ??= new Promise((resolve) => {
    const done = () => resolve(speechSynthesis.getVoices());
    speechSynthesis.addEventListener("voiceschanged", done, { once: true });
    setTimeout(done, 1500);
  });
  return voicesPromise;
}

const ACCENT_LANG: Record<Voice, string> = { us: "en-US", uk: "en-GB" };

/* Browsers don't report a voice's gender, so it is read from the voice name. */
const NOVELTY_VOICE =
  /^(bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|pipe organ|superstar|trinoids|whisper|wobble|zarvox|albert|hysterical|deranged)\b/i;
const FEMALE_VOICE =
  /\b(female|google us english|samantha|kathy|flo|sandy|shelley|grandma|karen|moira|tessa|tara|veena|fiona|victoria|allison|ava|susan|zoe|nicky|kate|serena|martha|catherine|joelle|noelle|zira|aria|jenny|michelle|ana|emma|hazel|libby|sonia|maisie|heera|neerja|natasha|clara|emily|molly|leah|luna|jane|nancy|sara|ashley|cora|elizabeth|monica|amber|isabella|rosa)\b/i;
const MALE_VOICE =
  /\b(male|alex|daniel|fred|junior|ralph|eddy|reed|rocko|grandpa|rishi|aman|lee|gordon|oliver|arthur|tom|evan|nathan|aaron|david|mark|guy|christopher|eric|roger|steffan|andrew|brian|george|ryan|thomas|ravi|prabhat|william|liam|connor|mitchell|james|davis|tony|jason|kai|sean|elliot|noah|derek)\b/i;
const ROBOTIC_VOICE = /\b(fred|junior|ralph|kathy|grandma|grandpa)\b/i;
const GOOD_VOICE = /\b(samantha|daniel|reed|eddy|flo|sandy|shelley|rocko|karen|moira|tessa|rishi|aman|tara|ava|zoe|tom|evan|nathan|serena|kate|oliver|arthur|martha)\b/i;

export function voiceGender(v: SpeechSynthesisVoice): Gender | undefined {
  if (FEMALE_VOICE.test(v.name)) return "female";
  if (MALE_VOICE.test(v.name)) return "male";
  return undefined;
}

function voiceQuality(v: SpeechSynthesisVoice) {
  return (
    (/natural|neural|premium|enhanced|online/i.test(v.name) ? 4 : 0) +
    (/google/i.test(v.name) ? 3 : 0) +
    (GOOD_VOICE.test(v.name) ? 2 : 0) -
    (ROBOTIC_VOICE.test(v.name) ? 3 : 0) +
    (v.localService ? 0 : 1)
  );
}

const normLang = (v: SpeechSynthesisVoice) => v.lang.toLowerCase().replace("_", "-");

/** English voices for an accent, best-sounding first (other English accents follow). */
export function voicesFor(voices: SpeechSynthesisVoice[], accent: Voice) {
  const lang = ACCENT_LANG[accent].toLowerCase();
  const english = voices.filter((v) => normLang(v).startsWith("en") && !NOVELTY_VOICE.test(v.name));
  const rank = (v: SpeechSynthesisVoice) => (normLang(v) === lang ? 100 : 0) + voiceQuality(v);
  return english.slice().sort((a, b) => rank(b) - rank(a));
}

/* Speaker labels whose gender is clear from the label itself. */
const MALE_WORDS = new Set(["man", "mr", "sir", "boy", "father", "dad", "husband", "son", "brother", "gentleman", "grandfather"]);
const FEMALE_WORDS = new Set(["woman", "mrs", "ms", "miss", "madam", "girl", "mother", "mum", "mom", "wife", "daughter", "sister", "lady", "grandmother"]);
const MALE_NAMES = new Set(
  "tom daniel leo ben omar ravi owen kenji lucas liam callum jack andre ryan jon felix tariq marco kevin hassan grant marcus victor arjun jonas kofi hiro theo joel paul david james john michael peter mark adam ahmed ali carlos diego ethan george harry henry ivan james javier jamal kwame luis matteo max nathan nick noah oscar pablo raj rob sean simon steve thomas tim wei yusuf".split(" "),
);
const FEMALE_NAMES = new Set(
  "nadia lena mia maya hana ines priya leah ruth ana rosa aisha grace sara sarah hannah amara zoe emma jasmine lucy mei olivia ellen diane kirsty zara erin marta sofia amira anna alice amy chloe claire elena fatima helen jane julia kate laura lisa maria mary nina rachel sophie yuki".split(" "),
);

/** Gender implied by a speaker label ("Man", "Mrs Patel", "Tom"), if any. */
export function inferGender(label: string): Gender | undefined {
  const words = label.toLowerCase().replace(/[.’']/g, "").split(/\s+/).filter(Boolean);
  const first = words[0];
  if (!first) return undefined;
  if (MALE_WORDS.has(first)) return "male";
  if (FEMALE_WORDS.has(first)) return "female";
  if (words.length === 1 && MALE_NAMES.has(first)) return "male";
  if (words.length === 1 && FEMALE_NAMES.has(first)) return "female";
  return undefined;
}

/** The gender for a speaker (or the narrator when `speaker` is empty). */
export function speakerGender(speaker: string | undefined, cast?: Cast): Gender | undefined {
  if (!speaker) return cast?.narrator;
  return cast?.[speaker] ?? inferGender(speaker);
}

export interface SpokenLine {
  speaker?: string;
  text: string;
}

const SPEAKER_RE = /^(\p{Lu}[\p{L}.'’ ]{0,24}):\s+(.+)$/u;

/** Splits a transcript into lines; "Name: text" lines keep their speaker. */
export function parseTranscript(transcript: string): SpokenLine[] {
  return transcript
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const m = line.match(SPEAKER_RE);
      return m ? { speaker: m[1].trim(), text: m[2] } : { text: line };
    });
}

/** Chrome stops long utterances after ~15 s, so speak in sentence-sized chunks. */
function chunk(text: string, max = 180) {
  const sentences = text.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [text];
  const out: string[] = [];
  let cur = "";
  for (const s of sentences) {
    if ((cur + s).length > max && cur) {
      out.push(cur.trim());
      cur = "";
    }
    cur += s;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

export interface SpeakOptions {
  accent?: Voice;
  rate?: number;
  /** Speaker genders, so men and women get matching voices. */
  cast?: Cast;
  /** Called with the index of the line being spoken. */
  onLine?: (index: number) => void;
  onEnd?: () => void;
}

/**
 * Speaks lines one after another, giving each speaker a different voice.
 * Returns a function that cancels playback.
 */
export async function speakLines(lines: SpokenLine[], opts: SpeakOptions = {}) {
  if (!isTtsSupported()) return () => {};
  const voices = voicesFor(await loadVoices(), opts.accent ?? "us");
  const byGender = {
    male: voices.filter((v) => voiceGender(v) === "male"),
    female: voices.filter((v) => voiceGender(v) === "female"),
  };

  // Give every speaker (and the narrator) a voice of the right gender. Speakers of the
  // same gender get different voices when there are enough, otherwise a different pitch.
  const keys = [...new Set(lines.map((l) => l.speaker ?? ""))];
  const used = { male: 0, female: 0 };
  const assigned = new Map<string, { voice?: SpeechSynthesisVoice; pitch: number }>();
  for (const key of keys) {
    let gender = speakerGender(key || undefined, opts.cast);
    // Unknown: use the gender heard least so far, so speakers still sound different.
    gender ??= keys.length === 1 && voices[0] ? (voiceGender(voices[0]) ?? "female") : used.female <= used.male ? "female" : "male";
    const n = used[gender]++;
    const pool = byGender[gender];
    if (pool.length) {
      const round = Math.floor(n / pool.length);
      assigned.set(key, { voice: pool[n % pool.length], pitch: [1, 0.9, 1.1][round % 3] });
    } else {
      // No voice of this gender on this device: shift the pitch of another voice.
      assigned.set(key, { voice: voices[0], pitch: gender === "male" ? 0.7 : 1.25 });
    }
  }
  const voiceFor = (speaker?: string) => assigned.get(speaker ?? "")?.voice;
  const pitchFor = (speaker?: string) => assigned.get(speaker ?? "")?.pitch ?? 1;

  speechSynthesis.cancel();
  let cancelled = false;
  const utterances: SpeechSynthesisUtterance[] = [];
  lines.forEach((line, index) => {
    chunk(line.text).forEach((part, ci) => {
      const u = new SpeechSynthesisUtterance(part);
      const v = voiceFor(line.speaker);
      if (v) {
        u.voice = v;
        u.lang = v.lang;
      } else {
        u.lang = ACCENT_LANG[opts.accent ?? "us"];
      }
      u.rate = opts.rate ?? 1;
      u.pitch = pitchFor(line.speaker);
      if (ci === 0) u.onstart = () => !cancelled && opts.onLine?.(index);
      utterances.push(u);
    });
  });
  if (!utterances.length) {
    opts.onEnd?.();
    return () => {};
  }
  const last = utterances[utterances.length - 1];
  last.onend = () => !cancelled && opts.onEnd?.();
  last.onerror = () => !cancelled && opts.onEnd?.();
  utterances.forEach((u) => speechSynthesis.speak(u));
  return () => {
    cancelled = true;
    speechSynthesis.cancel();
  };
}

export function speakText(text: string, opts: SpeakOptions = {}) {
  return speakLines(parseTranscript(text), opts);
}

export function stopSpeaking() {
  if (isTtsSupported()) speechSynthesis.cancel();
}

/* ---------- Speech recognition ---------- */

interface RecognitionAlternative {
  transcript: string;
}
interface RecognitionResult {
  isFinal: boolean;
  0: RecognitionAlternative;
}
export interface RecognitionEvent {
  resultIndex: number;
  results: ArrayLike<RecognitionResult>;
}
export interface Recognition {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: RecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: { error: string }) => void) | null;
}

type RecognitionCtor = new () => Recognition;

export function getRecognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function isRecognitionSupported() {
  return getRecognitionCtor() !== null;
}

export function isRecordingSupported() {
  return (
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof window.MediaRecorder !== "undefined"
  );
}

/* ---------- Analysis ---------- */

const FILLERS = ["um", "uh", "er", "erm", "ah", "like", "you know", "i mean", "sort of", "kind of", "basically", "actually"];

export function countFillers(transcript: string) {
  const text = ` ${transcript.toLowerCase().replace(/[^a-z' ]/g, " ")} `;
  const counts: Record<string, number> = {};
  for (const f of FILLERS) {
    const n = text.split(` ${f} `).length - 1;
    if (n) counts[f] = n;
  }
  return counts;
}

export function wordsPerMinute(transcript: string, seconds: number) {
  const n = transcript.trim().split(/\s+/).filter(Boolean).length;
  return seconds > 0 ? Math.round((n / seconds) * 60) : 0;
}

export function phrasesUsed(transcript: string, phrases: string[]) {
  const clean = (x: string) => x.toLowerCase().replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
  const t = ` ${clean(transcript)} `;
  // A phrase like "partly… and partly…" counts when each part appears, in order.
  return phrases.filter((p) => {
    const parts = p.split(/…|\.\.\./).map(clean).filter(Boolean);
    let from = 0;
    for (const part of parts) {
      const at = t.indexOf(` ${part} `, from) >= 0 ? t.indexOf(` ${part} `, from) : t.indexOf(part, from);
      if (at < 0) return false;
      from = at + part.length;
    }
    return parts.length > 0;
  });
}
