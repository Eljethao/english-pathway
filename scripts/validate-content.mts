// Checks lesson and practice content for broken answer keys and missing parts.
// Run: node scripts/validate-content.ts [slug-or-skill-filter]
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { Cast, Exercise, Lesson, PlacementQuestion, PracticeSet, Section } from "../src/lib/types.ts";
import { inferGender, parseTranscript, speakerGender } from "../src/lib/speech.ts";

const root = path.resolve(import.meta.dirname, "..");
const filter = process.argv[2];
const errors: string[] = [];
const warnings: string[] = [];

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

/** Every speaker must have a known gender so the right voice is used; `narrator` is needed for unlabelled lines. */
function checkCast(at: string, text: string, cast: Cast | undefined, needNarrator: boolean) {
  const lines = parseTranscript(text);
  const speakers = new Set(lines.map((l) => l.speaker).filter(Boolean) as string[]);
  for (const sp of speakers) if (!speakerGender(sp, cast)) errors.push(`${at}: no gender for speaker "${sp}" (add it to cast)`);
  if (needNarrator && lines.some((l) => !l.speaker) && !cast?.narrator)
    errors.push(`${at}: lines without a speaker need cast.narrator`);
  // "This is Kenji" read by a female voice: the name and the voice must agree.
  for (const l of lines) {
    const g = speakerGender(l.speaker, cast);
    for (const m of l.text.matchAll(/\b(?:this is|it's|my name's|my name is|I'm|I am)\s+(?:Dr |Mr |Mrs |Ms |Professor )?(\p{Lu}\p{Ll}+)/gu)) {
      const named = inferGender(m[1]);
      if (named && g && named !== g) errors.push(`${at}: ${l.speaker ?? "narrator"} is ${g} but says "${m[0]}"`);
    }
  }
  for (const [k, g] of Object.entries(cast ?? {})) {
    if (g !== "male" && g !== "female") errors.push(`${at}: cast "${k}" must be male or female`);
    if (k !== "narrator" && !speakers.has(k)) errors.push(`${at}: cast "${k}" is not a speaker in the transcript`);
  }
}

function checkExercise(where: string, ex: Exercise, ids: Set<string>) {
  const at = `${where} [${ex.id}]`;
  if (ids.has(ex.id)) errors.push(`${at}: duplicate exercise id`);
  ids.add(ex.id);
  const inRange = (n: number, len: number) => Number.isInteger(n) && n >= 0 && n < len;
  switch (ex.kind) {
    case "mcq":
      if (!ex.questions.length) errors.push(`${at}: no questions`);
      ex.questions.forEach((q, i) => {
        if (q.options.length < 2) errors.push(`${at} q${i + 1}: needs 2+ options`);
        const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
        if (!answers.length || answers.some((a) => !inRange(a, q.options.length)))
          errors.push(`${at} q${i + 1}: answer out of range`);
        if (new Set(q.options).size !== q.options.length) errors.push(`${at} q${i + 1}: duplicate options`);
        if (q.say !== undefined && !q.say.trim()) errors.push(`${at} q${i + 1}: say must not be empty`);
      });
      break;
    case "tfng":
      if (!ex.statements.length) errors.push(`${at}: no statements`);
      ex.statements.forEach((s, i) => {
        if (!["T", "F", "NG"].includes(s.answer)) errors.push(`${at} s${i + 1}: answer must be T, F or NG`);
      });
      break;
    case "gap": {
      const found = [...ex.text.matchAll(/\{\{(\d+)\}\}/g)].map((m) => Number(m[1]));
      const expected = ex.answers.map((_, i) => i);
      if (found.length !== ex.answers.length || !expected.every((i) => found.includes(i)))
        errors.push(`${at}: gaps {{n}} (${found.join(",")}) do not match answers (${ex.answers.length})`);
      ex.answers.forEach((a, i) => {
        if (!a.length || a.some((s) => !s.trim())) errors.push(`${at} gap ${i}: empty accepted answer`);
      });
      if (ex.wordBank) {
        ex.answers.forEach((a, i) => {
          if (!a.some((s) => ex.wordBank!.some((w) => w.toLowerCase() === s.toLowerCase())))
            warnings.push(`${at} gap ${i}: no accepted answer is in the word bank`);
        });
      }
      break;
    }
    case "match":
      if (ex.answer.length !== ex.left.length) errors.push(`${at}: answer length must equal left length`);
      if (ex.answer.some((a) => !inRange(a, ex.right.length))) errors.push(`${at}: answer index out of range`);
      break;
    case "order":
      if (ex.items.length < 3) errors.push(`${at}: needs 3+ items`);
      if (new Set(ex.items).size !== ex.items.length) errors.push(`${at}: duplicate items make the order ambiguous`);
      break;
    case "dictation":
    case "shadow":
      if (!ex.sentences.length) errors.push(`${at}: no sentences`);
      break;
    case "respond":
      ex.items.forEach((it, i) => {
        if (!inRange(it.answer, it.options.length)) errors.push(`${at} item ${i + 1}: answer out of range`);
        checkCast(`${at} item ${i + 1}`, it.audio, it.cast, false);
      });
      break;
    case "speak":
      if (ex.speakSeconds <= 0) errors.push(`${at}: speakSeconds must be > 0`);
      if (!ex.modelAnswer.trim()) errors.push(`${at}: missing model answer`);
      break;
    case "write":
      if (!ex.rubric.length) errors.push(`${at}: missing rubric`);
      if (wordCount(ex.modelAnswer) < ex.minWords)
        warnings.push(`${at}: model answer (${wordCount(ex.modelAnswer)} words) is shorter than minWords ${ex.minWords}`);
      break;
    default:
      errors.push(`${at}: unknown exercise kind ${(ex as { kind: string }).kind}`);
  }
}

function checkSections(where: string, sections: Section[], ids: Set<string>) {
  let exercises = 0;
  for (const s of sections) {
    if (s.type === "exercise") {
      exercises++;
      checkExercise(where, s.exercise, ids);
    } else if (s.type === "chart") {
      s.chart.series.forEach((se) => {
        if (se.values.length !== s.chart.categories.length)
          errors.push(`${where}: chart series "${se.name}" length != categories length`);
      });
    } else if (s.type === "image") {
      if (!s.src.startsWith("http") && !existsSync(path.join(root, "public", s.src)))
        errors.push(`${where}: image not found in /public: ${s.src}`);
    } else if (s.type === "table") {
      s.rows.forEach((r, i) => {
        if (r.length !== s.headers.length) errors.push(`${where}: table row ${i + 1} has wrong number of cells`);
      });
    } else if (s.type === "passage") {
      if (!s.paragraphs.length) errors.push(`${where}: empty passage`);
    } else if (s.type === "audio") {
      if (!s.transcript.trim()) errors.push(`${where}: empty audio transcript`);
      checkCast(`${where} audio "${s.title}"`, s.transcript, s.cast, true);
    }
  }
  return exercises;
}

async function main() {
  const { LESSON_MANIFEST } = await import(pathToFileURL(path.join(root, "src/content/lessons/manifest.ts")).href);
  const manifest = (LESSON_MANIFEST as { slug: string; skill: string; level: string; order: number }[]).filter(
    (m) => !filter || m.slug.includes(filter) || m.skill === filter,
  );
  let checked = 0;
  const courseMinutes: Record<string, number> = {};
  const courseCounts: Record<string, number> = {};
  for (const m of manifest) {
    const file = path.join(root, "src/content/lessons", m.skill, `${m.slug}.ts`);
    if (!existsSync(file)) {
      warnings.push(`${m.slug}: file not written yet`);
      continue;
    }
    let lesson: Lesson;
    try {
      lesson = (await import(pathToFileURL(file).href)).default;
    } catch (e) {
      errors.push(`${m.slug}: failed to import – ${(e as Error).message}`);
      continue;
    }
    checked++;
    const w = m.slug;
    if (!lesson) {
      errors.push(`${w}: missing default export`);
      continue;
    }
    if (lesson.slug !== m.slug) errors.push(`${w}: slug mismatch (${lesson.slug})`);
    if (lesson.skill !== m.skill || lesson.level !== m.level || lesson.order !== m.order)
      errors.push(`${w}: skill/level/order must be ${m.skill}/${m.level}/${m.order}`);
    if (lesson.warmUp.length < 1 || lesson.warmUp.length > 2) errors.push(`${w}: warmUp needs 1–2 questions`);
    if (!lesson.objectives.length) errors.push(`${w}: no objectives`);
    if (lesson.keyPoints.length < 2) errors.push(`${w}: keyPoints needs 2+ items`);
    if (!lesson.examTips.length) errors.push(`${w}: needs at least one exam tip`);
    if (lesson.vocabulary.length < 8 || lesson.vocabulary.length > 12)
      errors.push(`${w}: vocabulary needs 8–12 items (has ${lesson.vocabulary.length})`);
    if (!lesson.learn.length || !lesson.model.length || !lesson.practice.length)
      errors.push(`${w}: learn, model and practice must not be empty`);
    const ids = new Set<string>();
    const n =
      checkSections(`${w} learn`, lesson.learn, ids) +
      checkSections(`${w} model`, lesson.model, ids) +
      checkSections(`${w} practice`, lesson.practice, ids);
    if (n < 2) errors.push(`${w}: needs at least 2 interactive exercises (has ${n})`);
    if (m.order >= 5 && m.order <= 11 && n < 4) errors.push(`${w}: expansion lessons need at least 4 exercises (has ${n})`);
    if (m.order === 12 && n < 3) errors.push(`${w}: review/mock tests need at least 3 exercises (has ${n})`);
    courseMinutes[`${m.skill} ${m.level}`] = (courseMinutes[`${m.skill} ${m.level}`] ?? 0) + lesson.minutes;
    courseCounts[`${m.skill} ${m.level}`] = (courseCounts[`${m.skill} ${m.level}`] ?? 0) + 1;
  }

  // Each skill + level course must add up to at least 4 hours once all its lessons exist.
  for (const [course, minutes] of Object.entries(courseMinutes)) {
    const planned = manifest.filter((m) => `${m.skill} ${m.level}` === course).length;
    if (courseCounts[course] === planned && planned >= 12 && minutes < 240)
      errors.push(`course ${course}: ${minutes} minutes in total, needs at least 240`);
  }

  const practiceFile = path.join(root, "src/content/practice.ts");
  if (existsSync(practiceFile) && (!filter || filter === "practice")) {
    const { PRACTICE_SETS } = await import(pathToFileURL(practiceFile).href);
    const setIds = new Set<string>();
    for (const set of PRACTICE_SETS as PracticeSet[]) {
      if (setIds.has(set.id)) errors.push(`practice ${set.id}: duplicate set id`);
      setIds.add(set.id);
      const n = checkSections(`practice ${set.id}`, set.sections, new Set());
      if (n < 1) errors.push(`practice ${set.id}: no exercises`);
      checked++;
    }
  }

  if (!filter || filter === "placement") {
    const { PLACEMENT_QUESTIONS } = await import(pathToFileURL(path.join(root, "src/content/placement.ts")).href);
    for (const q of PLACEMENT_QUESTIONS as PlacementQuestion[]) if (q.audio) checkCast(`placement ${q.id}`, q.audio, q.cast, true);
    checked++;
  }

  for (const msg of warnings) console.log(`warn  ${msg}`);
  for (const msg of errors) console.log(`ERROR ${msg}`);
  console.log(`\nChecked ${checked} item(s): ${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(errors.length ? 1 : 0);
}

main();
