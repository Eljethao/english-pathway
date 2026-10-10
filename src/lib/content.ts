import { LESSONS } from "@/content/lessons";
import { EXAMS } from "@/content/exams";
import { GRAMMAR_TOPICS } from "@/content/grammar";
import { PRACTICE_SETS } from "@/content/practice";
import { VOCAB_LISTS } from "@/content/vocabulary";
import type { Exam, Exercise, Lesson, LessonSummary, Level, Section, Skill, VocabItem } from "./types";

const SKILL_ORDER: Skill[] = ["listening", "reading", "writing", "speaking"];
const LEVEL_ORDER: Level[] = ["B1", "B2", "C1"];

const sorted = [...LESSONS].sort(
  (a, b) =>
    SKILL_ORDER.indexOf(a.skill) - SKILL_ORDER.indexOf(b.skill) ||
    LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) ||
    a.order - b.order,
);

export function getAllLessons(): Lesson[] {
  return sorted;
}

export function getLesson(slug: string): Lesson | undefined {
  return sorted.find((l) => l.slug === slug);
}

export function getLessonsBy(filter: { skill?: Skill; level?: Level; exam?: Exam }): Lesson[] {
  return sorted.filter(
    (l) =>
      (!filter.skill || l.skill === filter.skill) &&
      (!filter.level || l.level === filter.level) &&
      (!filter.exam || l.exams.some((e) => e.exam === filter.exam)),
  );
}

export function toSummary(lesson: Lesson): LessonSummary {
  return {
    slug: lesson.slug,
    title: lesson.title,
    summary: lesson.summary,
    skill: lesson.skill,
    level: lesson.level,
    order: lesson.order,
    minutes: lesson.minutes,
    exams: lesson.exams,
    objectives: lesson.objectives,
    warmUp: lesson.warmUp,
    keyPoints: lesson.keyPoints,
    exerciseCount: exerciseCount(lesson),
  };
}

export function getAllSummaries(): LessonSummary[] {
  return sorted.map(toSummary);
}

/** Previous/next lesson inside the same skill path (B1 → B2 → C1). */
export function getAdjacentLessons(slug: string) {
  const lesson = getLesson(slug);
  if (!lesson) return { prev: undefined, next: undefined };
  const path = sorted.filter((l) => l.skill === lesson.skill);
  const i = path.findIndex((l) => l.slug === slug);
  return { prev: path[i - 1], next: path[i + 1] };
}

export function lessonSections(lesson: Lesson): Section[] {
  return [...lesson.learn, ...lesson.model, ...lesson.practice];
}

const AUTO_GRADED = new Set<Exercise["kind"]>(["mcq", "tfng", "gap", "match", "order", "dictation", "respond"]);

export function isAutoGraded(ex: Exercise) {
  return AUTO_GRADED.has(ex.kind);
}

/** IDs of exercises that produce a score. */
export function gradedExerciseIds(sections: Section[]) {
  return sections.flatMap((s) => (s.type === "exercise" && isAutoGraded(s.exercise) ? [s.exercise.id] : []));
}

export function exerciseCount(lesson: Lesson) {
  return lessonSections(lesson).filter((s) => s.type === "exercise").length;
}

/* ---------- Exams, practice, grammar, vocabulary ---------- */


export function getExams() {
  return EXAMS;
}

export function getExam(id: Exam) {
  return EXAMS.find((e) => e.id === id);
}

export function getPracticeSets(exam?: Exam) {
  return PRACTICE_SETS.filter((s) => !exam || s.exam === exam).sort(
    (a, b) => SKILL_ORDER.indexOf(a.skill) - SKILL_ORDER.indexOf(b.skill),
  );
}

export function getGrammarTopics() {
  return [...GRAMMAR_TOPICS].sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level));
}

/** Topic lists plus one list per lesson level built from lesson vocabulary. */
export function getVocabLists() {
  const fromLessons = LEVEL_ORDER.map((level) => {
    const seen = new Set<string>();
    const words: VocabItem[] = [];
    for (const l of sorted) {
      for (const v of l.vocabulary) {
        const lv = v.level ?? l.level;
        if (lv !== level || seen.has(v.word.toLowerCase())) continue;
        seen.add(v.word.toLowerCase());
        words.push({ ...v, level: lv });
      }
    }
    return {
      id: `lessons-${level.toLowerCase()}`,
      title: `Lesson words ${level}`,
      topic: "academic" as const,
      level,
      description: `Every key word from the ${level} lessons.`,
      words,
    };
  });
  return { lessonLists: fromLessons, topicLists: VOCAB_LISTS };
}

/** A course is one skill at one level (e.g. Listening B1). */
export function getCourse(skill: Skill, level: Level) {
  const lessons = getLessonsBy({ skill, level });
  return { skill, level, lessons, minutes: lessons.reduce((a, l) => a + l.minutes, 0) };
}

/** Total study time of all lessons and practice sets, in minutes. */
export function getTotalMinutes() {
  return {
    lessons: sorted.reduce((a, l) => a + l.minutes, 0),
    practice: PRACTICE_SETS.reduce((a, p) => a + p.minutes, 0),
  };
}

