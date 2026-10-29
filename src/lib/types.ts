export type Skill = "listening" | "reading" | "writing" | "speaking";
export type Level = "B1" | "B2" | "C1";
export type Exam = "ielts" | "toefl" | "toeic";
export type Voice = "us" | "uk";
export type Gender = "male" | "female";
/**
 * Who is speaking, so the right voice is used: speaker label → gender, and
 * "narrator" for lines without a label (a monologue or a single remark).
 * Names like "Tom" or "Woman" are recognised automatically; roles such as
 * "Examiner" or "Professor Lin" need an entry here.
 */
export type Cast = Partial<Record<string, Gender>>;

export type Topic =
  | "education"
  | "environment"
  | "technology"
  | "health"
  | "work"
  | "travel"
  | "society"
  | "science"
  | "business"
  | "academic"
  | "everyday";

export interface ExamTag {
  exam: Exam;
  /** e.g. "Reading – True/False/Not Given", "Part 7", "Academic Discussion" */
  task: string;
}

export interface ExamTip {
  exam: Exam;
  body: string;
}

export interface VocabItem {
  word: string;
  meaning: string;
  example: string;
  /** Defaults to the lesson level when omitted. */
  level?: Level;
  topic?: Topic;
}

export interface ChartData {
  kind: "line" | "bar";
  title: string;
  /** Axis unit, e.g. "%" or "millions". */
  unit?: string;
  /** X-axis labels (years, countries, ...). */
  categories: string[];
  /** One value per category in each series. */
  series: { name: string; values: number[] }[];
}

/**
 * Body text uses a tiny markup:
 * - blank line ("\n\n") separates paragraphs
 * - a block whose lines start with "- " becomes a bullet list
 * - a block whose lines start with "1. ", "2. " … becomes a numbered list
 * - **bold** and *italic*
 */
export type Section =
  | { type: "text"; title?: string; body: string }
  | { type: "example"; title?: string; items: string[] }
  | {
      type: "passage";
      title: string;
      paragraphs: string[];
      /** Show paragraph letters A, B, C… (for matching headings / information). */
      labelled?: boolean;
      /** Show an optional countdown timer with this many minutes. */
      timerMinutes?: number;
    }
  | {
      type: "audio";
      title: string;
      /**
       * The text that is spoken with the browser's text-to-speech.
       * Dialogues: one turn per line, prefixed with the speaker name, e.g.
       * "Anna: Hi, is this the sports centre?\nReceptionist: Yes, how can I help?"
       * Different speakers get different voices automatically.
       */
      transcript: string;
      voice?: Voice;
      cast?: Cast;
      /** Optional real recording in /public/audio (used instead of TTS). */
      src?: string;
    }
  | { type: "tip"; exam: Exam; body: string }
  | { type: "table"; title?: string; headers: string[]; rows: string[][] }
  | { type: "chart"; chart: ChartData }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "exercise"; exercise: Exercise };

interface ExerciseBase {
  /** Unique inside the lesson, e.g. "ex1". */
  id: string;
  title?: string;
  instructions?: string;
}

export interface McqQuestion {
  prompt: string;
  options: string[];
  /** Index of the correct option, or several indexes for "choose TWO" questions. */
  answer: number | number[];
  explanation?: string;
  /**
   * Pronunciation questions: the exact word or sentence the learner should say aloud, e.g. "hotel" or
   * "No, I work in London." Adds a recorder with an AI check against the correct option.
   * Leave it out when saying it would simply read out the answer.
   */
  say?: string;
}

export interface TfngStatement {
  text: string;
  answer: "T" | "F" | "NG";
  explanation?: string;
}

export interface RespondItem {
  /** What the learner hears (spoken with TTS). */
  audio: string;
  cast?: Cast;
  options: string[];
  answer: number;
  explanation?: string;
}

export type McqExercise = ExerciseBase & {
  kind: "mcq";
  questions: McqQuestion[];
  /**
   * "voice": learners answer by recording themselves instead of clicking an option (minimal pairs such as
   * ship / sheep). AI decides which option they said, and that becomes their answer. The options are still shown
   * after checking, and as a fallback when recording or AI is not available. Single-answer questions only.
   */
  answerBy?: "voice";
};
export type TfngExercise = ExerciseBase & {
  kind: "tfng";
  variant?: "tfng" | "ynng";
  statements: TfngStatement[];
};
export type GapExercise = ExerciseBase & {
  kind: "gap";
  /** Use {{0}}, {{1}} … for the gaps. Line breaks ("\n") are kept. */
  text: string;
  /** Accepted answers for each gap (case-insensitive). */
  answers: string[][];
  /** Optional box of words to choose from. */
  wordBank?: string[];
};
export type MatchExercise = ExerciseBase & {
  kind: "match";
  left: string[];
  /** May contain extra distractors. */
  right: string[];
  /** answer[i] = index in `right` that matches left[i]. */
  answer: number[];
  /** How to label the options: A, B, C (default) or i, ii, iii (IELTS heading lists, so they don't clash with paragraph letters). */
  labels?: "letters" | "roman";
};
export type OrderExercise = ExerciseBase & {
  kind: "order";
  /** In the CORRECT order; shuffled when rendered. */
  items: string[];
  /** "words" joins items with spaces (Build a Sentence); "lines" shows them as a list. */
  mode?: "words" | "lines";
};
export type DictationExercise = ExerciseBase & {
  kind: "dictation";
  sentences: string[];
  voice?: Voice;
};
export type RespondExercise = ExerciseBase & { kind: "respond"; items: RespondItem[] };
export type ShadowExercise = ExerciseBase & {
  kind: "shadow";
  /** Sentences the learner listens to and repeats. */
  sentences: string[];
  voice?: Voice;
};
export type SpeakExercise = ExerciseBase & {
  kind: "speak";
  prompt: string;
  /** Bullet points for an IELTS-style cue card. */
  cueCard?: string[];
  prepSeconds: number;
  speakSeconds: number;
  modelAnswer: string;
  targetPhrases?: string[];
  /** Self-assessment checklist shown after speaking. */
  checklist?: string[];
};
export type WriteExercise = ExerciseBase & {
  kind: "write";
  prompt: string;
  minWords: number;
  maxWords?: number;
  minutes: number;
  /** Band-descriptor style self-check items. */
  rubric: string[];
  modelAnswer: string;
};

export type Exercise =
  | McqExercise
  | TfngExercise
  | GapExercise
  | MatchExercise
  | OrderExercise
  | DictationExercise
  | RespondExercise
  | ShadowExercise
  | SpeakExercise
  | WriteExercise;

export interface Lesson {
  slug: string;
  title: string;
  /** One or two sentences used on cards and for SEO. */
  summary: string;
  skill: Skill;
  level: Level;
  /** Position inside skill + level (1–4). */
  order: number;
  minutes: number;
  exams: ExamTag[];
  objectives: string[];
  /** 1–2 quick questions to activate vocabulary. */
  warmUp: string[];
  /** Short explanation of the skill or strategy. */
  learn: Section[];
  /** A model passage, transcript, essay or spoken answer. */
  model: Section[];
  /** 2–4 interactive exercises (with any passages/audio they need). */
  practice: Section[];
  examTips: ExamTip[];
  vocabulary: VocabItem[];
  /** Summary bullets shown at the end. */
  keyPoints: string[];
}

export type LessonSummary = Omit<Lesson, "learn" | "model" | "practice" | "vocabulary" | "examTips"> & {
  /** Number of interactive exercises in the lesson. */
  exerciseCount: number;
};

export interface Progress {
  version: 1;
  completed: Record<string, { date: string; score?: number }>;
  /** Keyed "lessonSlug/exerciseId" or "practice/setId/exerciseId"; value 0–100. */
  exerciseScores: Record<string, number>;
  savedWords: string[];
  /** Leitner box (1–5) and next due date (YYYY-MM-DD) per word. */
  flashcards: Record<string, { box: number; due: string }>;
  streak: { current: number; longest: number; lastActive: string };
  placementLevel?: Level;
  /** When the placement test was last taken (YYYY-MM-DD). */
  placementDate?: string;
  /** Placement test score per area (0–100), used to suggest which course to start with. */
  placementAreas?: Partial<Record<PlacementQuestion["area"], number>>;
  lastLesson?: string;
}

/* ---------- Exams, practice, placement, grammar, vocabulary ---------- */

export interface ExamPart {
  skill: Skill;
  name: string;
  /** e.g. "about 30 minutes" */
  duration: string;
  /** e.g. "40 questions", "2 tasks" */
  questions: string;
  tasks: { name: string; description: string }[];
}

export interface ExamInfo {
  id: Exam;
  name: string;
  fullName: string;
  /** Who runs it, e.g. "British Council, IDP and Cambridge English". */
  provider: string;
  /** One-paragraph overview. */
  summary: string;
  /** Who usually takes it. */
  bestFor: string[];
  /** Versions/modules, e.g. Academic and General Training. */
  versions: { name: string; description: string }[];
  totalTime: string;
  scoring: { scale: string; description: string; levels: { level: Level; score: string }[] };
  parts: ExamPart[];
  strategies: string[];
  /** Lesson slugs recommended for this exam, in a sensible order. */
  recommendedLessons: string[];
  /** Official site for checking the latest information. */
  officialUrl: string;
  lastChecked: string;
}

export interface PracticeSet {
  id: string;
  exam: Exam;
  skill: Skill;
  title: string;
  description: string;
  minutes: number;
  sections: Section[];
}

export interface PlacementQuestion {
  id: string;
  area: "grammar" | "vocabulary" | "reading" | "listening";
  level: Level;
  prompt: string;
  /** Short text for reading questions. */
  passage?: string;
  /** Spoken with TTS for listening questions. */
  audio?: string;
  cast?: Cast;
  options: string[];
  answer: number;
}

export interface GrammarTopic {
  slug: string;
  title: string;
  level: Level;
  summary: string;
  /** Same tiny markup as text sections. */
  explanation: string;
  forms?: { headers: string[]; rows: string[][] };
  examples: string[];
  mistakes: { wrong: string; right: string; note: string }[];
  examUse: string;
}

export interface VocabList {
  id: string;
  title: string;
  topic: Topic;
  level: Level;
  description: string;
  words: VocabItem[];
}
