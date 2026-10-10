import type { Exercise, Lesson, Section } from "./types";

/** One screen of the lesson player. */
export interface LessonStep {
  id: string;
  label: string;
  /** Short description for the step list, e.g. "2 questions" or "True / False / Not Given". */
  detail: string;
  kind: "warm-up" | "sections" | "exam-tips" | "vocabulary" | "summary";
  sections?: Section[];
}

const KIND_LABEL: Record<Exercise["kind"], string> = {
  mcq: "Multiple choice",
  tfng: "True / False / Not Given",
  gap: "Gap fill",
  match: "Matching",
  order: "Put in order",
  dictation: "Dictation",
  respond: "Choose a response",
  shadow: "Listen and repeat",
  speak: "Speaking task",
  write: "Writing task",
};

const STIMULUS = new Set<Section["type"]>(["passage", "audio", "image", "chart", "table"]);

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/**
 * Splits practice into screens: material (passage, audio, chart…) stays with every exercise that follows it,
 * and other exercises get a screen each.
 */
function splitPractice(practice: Section[]): Section[][] {
  const steps: Section[][] = [];
  let pending: Section[] = [];
  for (let i = 0; i < practice.length; i++) {
    const s = practice[i];
    if (STIMULUS.has(s.type) && practice[i + 1]?.type === "exercise") {
      const group = [s];
      while (practice[i + 1]?.type === "exercise") group.push(practice[++i]);
      steps.push([...pending, ...group]);
      pending = [];
    } else if (s.type === "exercise") {
      steps.push([...pending, s]);
      pending = [];
    } else {
      pending.push(s);
    }
  }
  if (pending.length) {
    if (steps.length) steps[steps.length - 1].push(...pending);
    else steps.push(pending);
  }
  return steps;
}

const mediaTitle = (s: Section) =>
  s.type === "passage" || s.type === "audio" ? s.title : s.type === "chart" ? s.chart.title : s.type === "table" ? (s.title ?? "") : "";

/** Brings in passages/audio/tables from elsewhere in the lesson that an exercise mentions by name. */
function withReferencedMedia(step: Section[], all: Section[]): Section[] {
  const text = JSON.stringify(step.filter((s) => s.type === "exercise")).toLowerCase();
  const extra = all.filter((m) => {
    if (!STIMULUS.has(m.type) || step.includes(m)) return false;
    const title = mediaTitle(m).toLowerCase();
    return title.length >= 6 && text.includes(title.slice(0, 25));
  });
  return extra.length ? [...extra, ...step] : step;
}

function practiceDetail(sections: Section[]) {
  const exercises = sections.flatMap((s) => (s.type === "exercise" ? [s.exercise] : []));
  if (!exercises.length) return "Reading";
  const first = exercises[0];
  const named = first.title && !/^practice\s*\d*$/i.test(first.title) ? first.title : KIND_LABEL[first.kind];
  return exercises.length > 1 ? `${named} + ${exercises.length - 1} more` : named;
}

export function buildLessonSteps(lesson: Lesson): LessonStep[] {
  const all = [...lesson.learn, ...lesson.model, ...lesson.practice];
  const practice = splitPractice(lesson.practice).map((sections) => withReferencedMedia(sections, all));
  return [
    { id: "warm-up", label: "Warm-up", detail: plural(lesson.warmUp.length, "question"), kind: "warm-up" },
    { id: "learn", label: "Learn", detail: "The skill and the strategy", kind: "sections", sections: lesson.learn },
    { id: "model", label: "Model", detail: "See how it's done", kind: "sections", sections: lesson.model },
    ...practice.map((sections, i) => ({
      id: `practice-${i + 1}`,
      label: practice.length > 1 ? `Practice ${i + 1}` : "Practice",
      detail: practiceDetail(sections),
      kind: "sections" as const,
      sections,
    })),
    { id: "exam-tips", label: "Exam tips", detail: plural(lesson.examTips.length, "tip"), kind: "exam-tips" },
    { id: "vocabulary", label: "Key vocabulary", detail: plural(lesson.vocabulary.length, "word"), kind: "vocabulary" },
    { id: "summary", label: "Summary", detail: "Review and finish", kind: "summary" },
  ];
}
