import type { Exam, Level, Skill } from "./types";

export const SKILLS: {
  id: Skill;
  name: string;
  tagline: string;
  description: string;
  dot: string;
  text: string;
  /** Icon tile: soft background + coloured icon. */
  tile: string;
  /** Very light page-header wash. */
  wash: string;
}[] = [
  {
    id: "listening",
    name: "Listening",
    tagline: "Conversations, announcements and lectures",
    description:
      "Train your ear with conversations, announcements and lectures at natural speed. Practise form completion, multiple choice, map labelling and note-taking.",
    dot: "bg-listening",
    text: "text-sky-700",
    tile: "bg-sky-50 text-sky-600 ring-sky-100",
    wash: "from-sky-50/80",
  },
  {
    id: "reading",
    name: "Reading",
    tagline: "Skim, scan and read between the lines",
    description:
      "Read faster and more accurately. Master True/False/Not Given, matching headings, summary completion and long academic passages.",
    dot: "bg-reading",
    text: "text-emerald-700",
    tile: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    wash: "from-emerald-50/80",
  },
  {
    id: "writing",
    name: "Writing",
    tagline: "Emails, charts and essays",
    description:
      "Write clear emails, chart descriptions, essays and discussion posts, with timers, automatic checks, rubrics and model answers.",
    dot: "bg-writing",
    text: "text-amber-700",
    tile: "bg-amber-50 text-amber-600 ring-amber-100",
    wash: "from-amber-50/80",
  },
  {
    id: "speaking",
    name: "Speaking",
    tagline: "Fluency, pronunciation and exam tasks",
    description:
      "Record yourself, compare with model answers and build fluency for interviews, long turns and discussions.",
    dot: "bg-speaking",
    text: "text-fuchsia-700",
    tile: "bg-fuchsia-50 text-fuchsia-600 ring-fuchsia-100",
    wash: "from-fuchsia-50/80",
  },
];

export const LEVELS: {
  id: Level;
  name: string;
  cefr: string;
  description: string;
  ielts: string;
  toefl: string;
  toeic: string;
}[] = [
  {
    id: "B1",
    name: "Foundation",
    cefr: "B1",
    description: "Understand the main points of clear, everyday English and build core exam strategies.",
    ielts: "4.0–5.0",
    toefl: "3–3.5",
    toeic: "~550–780",
  },
  {
    id: "B2",
    name: "Intermediate",
    cefr: "B2",
    description: "Handle exam-style tasks with confidence and express ideas clearly and in detail.",
    ielts: "5.5–6.5",
    toefl: "4–4.5",
    toeic: "~785–940",
  },
  {
    id: "C1",
    name: "Advanced",
    cefr: "C1+",
    description: "Understand complex, academic English and use language flexibly for band 7+.",
    ielts: "7.0–8.0+",
    toefl: "5–6",
    toeic: "945+",
  },
];

export const EXAM_NAMES: Record<Exam, string> = { ielts: "IELTS", toefl: "TOEFL iBT", toeic: "TOEIC" };
export const EXAM_IDS: Exam[] = ["ielts", "toefl", "toeic"];

export const skillMeta = (id: Skill) => SKILLS.find((s) => s.id === id)!;
export const levelMeta = (id: Level) => LEVELS.find((l) => l.id === id)!;
export const isSkill = (v: string): v is Skill => SKILLS.some((s) => s.id === v);
export const isExam = (v: string): v is Exam => (EXAM_IDS as string[]).includes(v);

export const SITE = {
  name: "English Pathway",
  description:
    "Free structured English lessons from B1 to C1 for IELTS, TOEFL iBT and TOEIC. Listening, reading, writing and speaking with instant feedback.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://english-pathway.vercel.app",
};
