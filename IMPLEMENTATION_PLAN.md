# English Pathway: Implementation Plan

> A clean, minimal, white-themed website for learners from **pre-intermediate/intermediate (B1)** to **advanced (C1+)** level, built to help them pass **IELTS, TOEFL iBT and TOEIC**. Covers all four skills: **Listening, Reading, Writing, Speaking**.

**Tech stack:** Next.js 16 (App Router, TypeScript) + Tailwind CSS v4. Nothing else is required.
**Project folder:** `~/Desktop/lj-project/english-pathway`

---

## 1. Goals

| Goal | How we meet it |
|---|---|
| Take a learner from B1 to C1 | 3 levels × 4 skills, structured lesson path, placement test |
| Prepare for IELTS / TOEFL / TOEIC | Every lesson is tagged with the exam task it trains, plus exam hubs and mock practice sets |
| Many lessons | MVP = **48 lessons**, full version = **120+ lessons** (content is just data files, easy to add) |
| Clean, modern, minimal, white | Small design system: white background, one accent color, thin borders, lots of whitespace |
| Simple stack | Next.js + Tailwind only. No database, no auth, no backend in v1 |

### Non-goals for v1

- User accounts and cloud sync (progress is saved in the browser's `localStorage`)
- AI grading (we use self-assessment rubrics, model answers and simple automatic checks instead)
- Payments

---

## 2. Levels and exam mapping

| Level | CEFR | IELTS (band) | TOEFL iBT (2026 scale 1–6) | TOEIC L&R (10–990) |
|---|---|---|---|---|
| **Foundation** | B1 | 4.0 – 5.0 | 3 | ~550 – 780 |
| **Intermediate** | B2 | 5.5 – 6.5 | 4 | ~785 – 940 |
| **Advanced** | C1+ | 7.0 – 8.0+ | 5 – 6 | 945+ |

> Mappings are approximate. Double-check against the official IELTS, ETS TOEFL and ETS TOEIC concordance tables before showing them on the site.

### Exam formats the content must cover

**IELTS (Academic and General Training)**
- Listening: 4 parts, 40 questions (form/note completion, multiple choice, map/plan labelling, matching)
- Reading: 3 passages, 40 questions (True/False/Not Given, matching headings, summary completion, etc.)
- Writing: Task 1 (Academic: chart/process/map; GT: letter) + Task 2 (essay)
- Speaking: Part 1 (interview), Part 2 (2-minute long turn with cue card), Part 3 (discussion)

**TOEFL iBT (new format since January 2026)**
- Reading: Complete the Words, Read in Daily Life, Read an Academic Passage
- Listening: Listen and Choose a Response, Conversation, Announcement, Academic Talk
- Writing: Build a Sentence, Write an Email, Academic Discussion
- Speaking: Listen and Repeat, Take an Interview
- Score reported on a 1–6 band scale

**TOEIC**
- Listening & Reading: Parts 1–4 (photos, question-response, conversations, talks) and Parts 5–7 (incomplete sentences, text completion, reading comprehension)
- Speaking & Writing (optional module): read aloud, describe a picture, respond to questions, express an opinion, write sentences from a picture, respond to an email, opinion essay

---

## 3. Learning design

### 3.1 Lesson anatomy (every lesson follows the same structure)

1. **Overview**: goal, level, skill, time (10–20 min), exam tags (e.g. `IELTS Reading`, `TOEIC Part 7`)
2. **Warm-up**: 1–2 quick questions to activate vocabulary
3. **Learn**: short explanation of the skill/strategy with examples
4. **Model**: a model passage, audio transcript, essay or spoken answer
5. **Practice**: 2–4 interactive exercises with instant feedback
6. **Exam tip**: how this appears in IELTS / TOEFL / TOEIC
7. **Key vocabulary**: 8–12 words or phrases (saved to the learner's word list)
8. **Summary + Mark as complete**

### 3.2 Exercise types (reusable components)

| Type | Used for |
|---|---|
| Multiple choice (single/multi) | All skills |
| True / False / Not Given (Yes / No / Not Given) | Reading |
| Gap fill (type the word) | Listening, reading, grammar |
| Matching (headings, features, speakers) | Reading, listening |
| Drag to order (sentences, paragraph order, "Build a Sentence") | Reading, writing |
| Dictation (listen and type) | Listening |
| Listen and choose a response | Listening (TOEFL, TOEIC Part 2) |
| Record and compare (speak, then play back next to model) | Speaking |
| Shadowing / Listen and repeat | Speaking, pronunciation |
| Timed writing (editor + word count + timer + rubric) | Writing |

### 3.3 How each skill works without a backend

- **Listening**: audio is generated in the browser with the **Web Speech API (`speechSynthesis`)** from the transcript. Controls: play/pause, speed (0.75× / 1× / 1.25×), accent (US/UK voice if available), transcript hidden until answered. Later we can replace it with real MP3 files in `/public/audio` without changing the lesson format.
- **Reading**: split view on desktop (passage left, questions right), stacked on mobile. Optional timer, highlight tool.
- **Writing**: textarea editor with live word count, timer (20 min Task 1 / 40 min Task 2), automatic checks (word count target, number of linking words, repeated words, average sentence length), a band-descriptor self-check list, and a model answer to reveal after submitting.
- **Speaking**: record with **`MediaRecorder`** and play it back; live transcript with **`SpeechRecognition`** (Chrome, Edge, Safari) showing words per minute, filler words ("um", "like"), and target phrases used. Shows a fallback message when the browser doesn't support it (e.g. Firefox).

---

## 4. Curriculum: MVP (48 lessons)

4 skills × 3 levels × 4 lessons. Each row shows the exam task it trains.

### Listening
| # | Level | Lesson | Exam link |
|---|---|---|---|
| 1 | B1 | Understanding everyday conversations | IELTS L Part 1, TOEIC Part 3 |
| 2 | B1 | Numbers, dates, spelling and addresses | IELTS L Part 1 |
| 3 | B1 | Announcements and instructions | TOEFL Announcement, TOEIC Part 4 |
| 4 | B1 | Question–response: choosing the right reply | TOEIC Part 2, TOEFL Listen and Choose a Response |
| 5 | B2 | Predicting answers before you listen | All exams |
| 6 | B2 | Beating multiple-choice distractors | IELTS L Parts 2–3 |
| 7 | B2 | Map and plan labelling | IELTS L Part 2 |
| 8 | B2 | Note-taking for talks and lectures | IELTS L Part 4, TOEFL Academic Talk |
| 9 | C1 | Signposting and lecture structure | IELTS L Part 4, TOEFL Academic Talk |
| 10 | C1 | Speaker attitude, opinion and inference | IELTS L Part 3, TOEFL Conversation |
| 11 | C1 | Recognising paraphrase at natural speed | All exams |
| 12 | C1 | Full listening practice test | Mock |

### Reading
| # | Level | Lesson | Exam link |
|---|---|---|---|
| 13 | B1 | Skimming for the main idea | All exams |
| 14 | B1 | Scanning for details | All exams |
| 15 | B1 | Guessing vocabulary from context | All exams |
| 16 | B1 | Notices, emails and ads | TOEFL Read in Daily Life, TOEIC Part 7 |
| 17 | B2 | True / False / Not Given | IELTS R |
| 18 | B2 | Matching headings | IELTS R |
| 19 | B2 | Sentence and summary completion | IELTS R |
| 20 | B2 | Grammar in context and word completion | TOEIC Parts 5–6, TOEFL Complete the Words |
| 21 | C1 | Inference and the writer's purpose | IELTS R, TOEFL Academic Passage |
| 22 | C1 | Long academic passages | IELTS Academic R |
| 23 | C1 | Time management strategies | All exams |
| 24 | C1 | Full reading practice test | Mock |

### Writing
| # | Level | Lesson | Exam link |
|---|---|---|---|
| 25 | B1 | Sentence structure and punctuation | TOEFL Build a Sentence |
| 26 | B1 | Writing a clear paragraph | All exams |
| 27 | B1 | Formal vs informal emails | TOEFL Write an Email, IELTS GT Task 1, TOEIC W |
| 28 | B1 | Linking words and cohesion basics | All exams |
| 29 | B2 | Describing line and bar charts | IELTS Academic Task 1 |
| 30 | B2 | Describing processes and maps | IELTS Academic Task 1 |
| 31 | B2 | Opinion essay structure | IELTS Task 2, TOEIC opinion essay |
| 32 | B2 | Academic discussion posts | TOEFL Academic Discussion |
| 33 | C1 | Complex sentences and advanced cohesion | All exams |
| 34 | C1 | Collocations and paraphrasing (lexical resource) | IELTS W band 7+ |
| 35 | C1 | Discussion and problem–solution essays | IELTS Task 2 |
| 36 | C1 | Editing to band 7+: common errors | All exams |

### Speaking
| # | Level | Lesson | Exam link |
|---|---|---|---|
| 37 | B1 | Pronunciation basics: sounds and word stress | All exams |
| 38 | B1 | Talking about yourself | IELTS S Part 1, TOEFL Interview |
| 39 | B1 | Listen and repeat | TOEFL Listen and Repeat, TOEIC read aloud |
| 40 | B1 | Describing a picture | TOEIC S&W |
| 41 | B2 | The 2-minute long turn (cue cards) | IELTS S Part 2 |
| 42 | B2 | Fluency: fillers and discourse markers | All exams |
| 43 | B2 | Giving and supporting opinions | TOEFL Interview, TOEIC S |
| 44 | B2 | Intonation and connected speech | All exams |
| 45 | C1 | Abstract discussion | IELTS S Part 3 |
| 46 | C1 | Speculating, hedging and comparing | IELTS S Part 3 |
| 47 | C1 | Less common vocabulary and idioms (used naturally) | IELTS S band 7+ |
| 48 | C1 | Full speaking practice test | Mock |

### After MVP (to reach 120+ lessons)
- 6 lessons per skill per level (72), then topic-based units (Education, Environment, Technology, Health, Work, Travel, Society, Science)
- Grammar track (B1–C1): tenses review, conditionals, passive, relative clauses, articles, inversion, cleft sentences
- Vocabulary track: Academic Word List (570 word families) split into 10 sublists, plus business vocabulary for TOEIC

> **Content rule:** all passages, audio scripts, questions and model answers are original. Do not copy from official Cambridge/ETS books.

---

## 5. Pages and routes

| Route | Page |
|---|---|
| `/` | Home: hero, 4 skill cards, level path, exam tracks, how it works, CTA |
| `/placement` | 20-question placement test → recommends a starting level |
| `/lessons` | Lesson catalog with filters (skill, level, exam) and search |
| `/skills/[skill]` | Skill overview (listening, reading, writing, speaking) + lessons by level |
| `/lessons/[slug]` | Lesson page (the core of the site) |
| `/exams` | Compare IELTS vs TOEFL vs TOEIC |
| `/exams/[exam]` | Exam hub: format, scoring, strategies, recommended lessons |
| `/practice/[exam]` | Mock practice sets per exam (timed) |
| `/vocabulary` | Word lists by level/topic + flashcards (Leitner spaced repetition) |
| `/grammar` | Grammar reference |
| `/progress` | Dashboard: completed lessons, scores per skill, streak, saved words |
| `/about` | About the site |

All lesson, skill and exam pages are **statically generated** with `generateStaticParams`, so the site is fast and can be hosted anywhere.

---

## 6. Folder structure

```
english-pathway/
├── IMPLEMENTATION_PLAN.md
├── public/
│   ├── images/
│   └── audio/                  # optional real recordings later
├── src/
│   ├── app/
│   │   ├── layout.tsx          # fonts, header, footer, metadata
│   │   ├── page.tsx            # home
│   │   ├── globals.css         # Tailwind v4 + @theme tokens
│   │   ├── lessons/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── skills/[skill]/page.tsx
│   │   ├── exams/
│   │   │   ├── page.tsx
│   │   │   └── [exam]/page.tsx
│   │   ├── practice/[exam]/page.tsx
│   │   ├── placement/page.tsx
│   │   ├── vocabulary/page.tsx
│   │   ├── grammar/page.tsx
│   │   ├── progress/page.tsx
│   │   ├── about/page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/             # Header, Footer, Container, MobileNav
│   │   ├── ui/                 # Button, Card, Badge, Tabs, Progress, Timer, Modal
│   │   ├── lesson/             # LessonHeader, SectionRenderer, ExamTip, VocabList, CompleteButton
│   │   ├── exercises/          # MultipleChoice, TFNG, GapFill, Matching, DragOrder,
│   │   │                       # Dictation, ChooseResponse, RecordCompare, TimedWriting
│   │   └── media/              # TtsPlayer, Recorder, SpeechTranscript, PassageViewer
│   ├── content/
│   │   ├── lessons/
│   │   │   ├── listening/      # one .ts file per lesson
│   │   │   ├── reading/
│   │   │   ├── writing/
│   │   │   └── speaking/
│   │   ├── exams.ts
│   │   ├── vocabulary.ts
│   │   ├── grammar.ts
│   │   └── placement.ts
│   ├── lib/
│   │   ├── types.ts            # Lesson, Exercise, Skill, Level, Exam types
│   │   ├── content.ts          # getAllLessons, getLesson, getLessonsBy(skill/level/exam)
│   │   ├── progress.ts         # localStorage read/write (versioned)
│   │   ├── speech.ts           # TTS + SpeechRecognition helpers with feature detection
│   │   ├── writing-checks.ts   # word count, linking words, repetition
│   │   └── utils.ts            # cn(), formatTime(), etc.
│   └── hooks/
│       ├── useProgress.ts
│       ├── useTimer.ts
│       └── useSpeech.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 7. Data model (`src/lib/types.ts`)

```ts
export type Skill = "listening" | "reading" | "writing" | "speaking";
export type Level = "B1" | "B2" | "C1";
export type Exam = "ielts" | "toefl" | "toeic";

export interface Lesson {
  slug: string;              // "reading-true-false-not-given"
  title: string;
  skill: Skill;
  level: Level;
  order: number;             // position inside skill + level
  minutes: number;
  exams: { exam: Exam; task: string }[];   // e.g. { exam: "ielts", task: "Reading – TFNG" }
  objectives: string[];
  sections: Section[];
  vocabulary: VocabItem[];
}

export type Section =
  | { type: "text"; title?: string; body: string }              // simple markdown-like text
  | { type: "example"; title?: string; items: string[] }
  | { type: "passage"; title: string; paragraphs: string[] }
  | { type: "audio"; title: string; transcript: string; voice?: "us" | "uk"; src?: string }
  | { type: "tip"; exam: Exam; body: string }
  | { type: "exercise"; exercise: Exercise };

export type Exercise =
  | { kind: "mcq"; id: string; prompt: string; options: string[]; answer: number | number[]; explanation?: string }
  | { kind: "tfng"; id: string; statements: { text: string; answer: "T" | "F" | "NG" }[]; variant?: "tfng" | "ynng" }
  | { kind: "gap"; id: string; text: string; answers: string[][] }          // "The {{0}} is..." with accepted answers
  | { kind: "match"; id: string; left: string[]; right: string[]; answer: number[] }
  | { kind: "order"; id: string; items: string[] }                          // correct order = given order, shuffled on render
  | { kind: "dictation"; id: string; sentence: string }
  | { kind: "respond"; id: string; audio: string; options: string[]; answer: number }
  | { kind: "speak"; id: string; prompt: string; prepSeconds: number; speakSeconds: number; modelAnswer: string; targetPhrases?: string[] }
  | { kind: "write"; id: string; prompt: string; minWords: number; minutes: number; rubric: string[]; modelAnswer: string };

export interface VocabItem { word: string; meaning: string; example: string; level: Level }

export interface Progress {
  version: 1;
  completed: Record<string, { date: string; score?: number }>;  // by lesson slug
  exerciseScores: Record<string, number>;
  savedWords: string[];
  streak: { current: number; lastActive: string };
  placementLevel?: Level;
}
```

Content files are plain TypeScript, so we get type checking and autocomplete with **zero extra libraries**. If the content team prefers writing in Markdown later, we can switch to MDX.

---

## 8. Design system (white, clean, minimal)

**Principles:** lots of whitespace, one accent color, borders instead of heavy shadows, readable text, no clutter.

| Token | Value (Tailwind) | Use |
|---|---|---|
| Background | `white` | Page |
| Surface | `zinc-50` | Subtle sections, code/passage boxes |
| Border | `zinc-200` | Cards, dividers |
| Text | `zinc-900` | Headings, body |
| Muted text | `zinc-500` | Meta, helper text |
| Accent | `blue-600` (hover `blue-700`) | Primary buttons, links, progress |
| Success / Error | `emerald-600` / `rose-600` | Exercise feedback only |
| Skill dots | Listening `sky-500`, Reading `emerald-500`, Writing `amber-500`, Speaking `violet-500` | Tiny dots/badges only, never big blocks of color |

- **Font:** Geist Sans via `next/font` (Inter as alternative); reading passages at 17–18px, line height 1.7, max ~70 characters per line
- **Layout:** `max-w-6xl` container, `px-4` on mobile (16px gutter), 8px spacing scale
- **Shapes:** `rounded-xl` cards, `rounded-lg` buttons, `border border-zinc-200`, `shadow-sm` only on hover
- **Motion:** small CSS transitions (150–200 ms) only; no animation library
- **Icons:** small inline SVG components (no icon package needed)
- **Accessibility:** WCAG AA contrast, visible focus rings, keyboard-operable exercises, `aria-live` for feedback, captions/transcripts for all audio

Tokens are defined in `globals.css` with Tailwind v4's `@theme` block.

---

## 9. Implementation phases

### Phase 0: Project setup (0.5 day)
- [ ] Create the app inside `~/Desktop/lj-project/english-pathway`:
  ```bash
  cd ~/Desktop/lj-project/english-pathway
  npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*"
  ```
- [ ] Clean starter files, set up `globals.css` theme tokens, Geist font
- [ ] Add Prettier (+ `prettier-plugin-tailwindcss`) as dev dependencies (optional)
- [ ] Create the folder structure from section 6
- [ ] `git init` and first commit

### Phase 1: Design system and layout (1–2 days)
- [ ] UI components: Button, Card, Badge, Tabs, ProgressBar, Timer, Modal
- [ ] Header (logo, Lessons, Skills, Exams, Vocabulary, Progress) + mobile menu
- [ ] Footer
- [ ] Home page: hero, 4 skill cards, B1 → B2 → C1 path, exam cards, CTA

### Phase 2: Content engine and lesson page (2–3 days)
- [ ] `types.ts` and `content.ts` (load, sort, filter lessons)
- [ ] `/lessons` catalog with filters (skill, level, exam) and search
- [ ] `/lessons/[slug]` with `generateStaticParams` + `generateMetadata`
- [ ] `SectionRenderer` for text, example, passage, audio, tip, exercise
- [ ] Previous / next lesson navigation, "Mark as complete"
- [ ] Write 4 sample lessons (one per skill) to test everything

### Phase 3: Exercise components (3–4 days)
- [ ] MCQ, TFNG, GapFill, Matching, DragOrder (pointer + keyboard)
- [ ] Shared "Check answers / Try again / Show explanation" behavior
- [ ] Score saved to progress

### Phase 4: Skill-specific tools (3–4 days)
- [ ] **TtsPlayer**: speechSynthesis wrapper, voice picker (US/UK), speed, hidden transcript
- [ ] **Dictation** and **ChooseResponse** exercises
- [ ] **PassageViewer**: split view, highlight, optional timer
- [ ] **TimedWriting**: editor, word count, timer, automatic checks, rubric checklist, model answer
- [ ] **Recorder + SpeechTranscript**: record/playback, live transcript, WPM, filler count, prep/speak countdown like the real exams
- [ ] Feature detection + friendly fallbacks for unsupported browsers

### Phase 5: Content production, MVP 48 lessons (ongoing, ~2–3 weeks part-time)
- [ ] Listening 12 → Reading 12 → Writing 12 → Speaking 12 (see section 4)
- [ ] Review every lesson: level-appropriate language, answer keys correct, exam tags correct
- [ ] Vocabulary lists per lesson (~500 words total)

### Phase 6: Exams, placement, practice (3–4 days)
- [ ] `/exams` comparison page and `/exams/[exam]` hubs (format, scoring, strategies, lesson map)
- [ ] `/placement` test (20 questions, mixed grammar/vocab/reading/listening) → recommended level
- [ ] `/practice/[exam]` timed mock sections built from existing exercise components

### Phase 7: Progress and vocabulary (2–3 days)
- [ ] `useProgress` hook: localStorage, versioned schema, safe try/catch
- [ ] `/progress` dashboard: completion by skill and level, average scores, streak, continue where you left off
- [ ] `/vocabulary`: lists by level/topic, save words, flashcards with Leitner boxes
- [ ] Export / import progress as JSON (so learners can move devices)

### Phase 8: Polish, SEO and launch (2 days)
- [ ] Responsive check at 360px, 768px, 1280px
- [ ] Accessibility pass (keyboard, contrast, screen reader labels)
- [ ] Metadata, Open Graph images, `sitemap.ts`, `robots.ts`
- [ ] Lighthouse ≥ 95 on performance, accessibility, SEO
- [ ] Deploy to Vercel (or `output: "export"` for any static host)

**Rough total:** ~3–4 weeks for the platform + content writing in parallel.

---

## 10. Definition of done (MVP)

- 48 lessons live, 12 per skill, covering B1, B2, C1
- Every lesson has at least 2 interactive exercises and at least one exam tip
- Listening works with TTS in Chrome, Edge and Safari; speaking recorder works in Chrome/Edge/Safari with a fallback message elsewhere
- Progress persists across reloads, dashboard shows it correctly
- Exam hubs for IELTS, TOEFL and TOEIC with lesson mapping
- Mobile friendly, no horizontal scrolling, Lighthouse ≥ 95

---

## 11. Risks and decisions

| Risk | Mitigation |
|---|---|
| Browser TTS voices sound robotic or differ by device | Allow voice selection; plan for real MP3 recordings later (`src` field already in the `audio` section type) |
| `SpeechRecognition` not supported in Firefox | Recording + self-assessment still works; transcript feature shows a notice |
| No real teacher/AI feedback on writing and speaking | Rubrics based on official band descriptors, model answers, automatic checks; AI feedback planned for v2 |
| Progress lost if browser data is cleared | Export/import JSON; accounts in v2 |
| Copyright | Write all content ourselves; never copy official test material |
| Exam formats change (e.g. TOEFL 2026 update) | Exam info kept in one file (`content/exams.ts`), easy to update |

---

## 12. Future (v2+)

- Accounts and cloud progress (e.g. Supabase or a Next.js API + database)
- AI feedback for writing and speaking through Next.js Route Handlers
- Real audio recordings with multiple accents (UK, US, AU)
- Full-length timed mock tests with estimated band/score
- Lao translations for vocabulary and instructions
- Dark mode (optional, the default stays white)
