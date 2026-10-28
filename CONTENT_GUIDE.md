# English Pathway: content guide

How to write lessons and other content for English Pathway. Read `IMPLEMENTATION_PLAN.md` (sections 2–4) for the curriculum and exam formats.

## Golden rules

1. **All content is original.** Never copy or closely paraphrase passages, scripts or questions from Cambridge, IDP, British Council or ETS materials, or any other published source.
2. **Level-appropriate language.** Instructions and explanations in B1 lessons use short sentences and common words. C1 lessons can be denser, but explanations stay clear.
3. **Answer keys must be unambiguous.** Each question has exactly one defensible answer (or the stated number of answers for "choose TWO"). Give an `explanation` for every TFNG statement and most MCQs, and point to where the answer is ("Paragraph B says…").
4. **Every lesson must work without a teacher.** Learners get instant feedback, model answers and self-check rubrics.

## Files

- One lesson per file: `src/content/lessons/<skill>/<slug>.ts`. Slugs, skill, level, order and titles are fixed in `src/content/lessons/manifest.ts`.
- Format: copy the structure of the reference lesson `src/content/lessons/reading/reading-true-false-not-given.ts`:

```ts
import type { Lesson } from "@/lib/types";

const lesson: Lesson = { /* … */ };

export default lesson;
```

- Use `import type` only (no runtime imports), plain object literals, double quotes.
- All types are in `src/lib/types.ts`. Read it: it documents every field.
- Do **not** create or edit index files. The lesson index is generated later.

## Lesson anatomy (the fields)

| Field | Content |
|---|---|
| `summary` | 1–2 sentences for cards and SEO |
| `minutes` | 10–20 for lessons 1–4; **25 for lessons 5–11** of each course; review/mock tests (lesson 12) 35–45 |
| `exams` | Exam tags, using the task names below |
| `objectives` | 2–4 "can do" goals |
| `warmUp` | 1–2 short questions to activate vocabulary |
| `learn` | Short explanation of the skill or strategy with examples (`text`, `example`, `table`, `tip`; a quick exercise is fine) |
| `model` | A model passage, audio transcript, essay or spoken answer, plus a short "how a strong learner does it" walkthrough |
| `practice` | 2–4 interactive exercises with the passages/audio they need |
| `examTips` | At least one; ideally one per relevant exam |
| `vocabulary` | 8–12 items, each with `meaning`, natural `example` and a `topic` |
| `keyPoints` | 3–5 summary bullets |

A lesson needs **at least 2 interactive exercises** in total. Use 3–4 where possible, mixing auto-checked types. **Lessons 5–12 of each course (the October 2026 expansion) need 4–5 exercises** so the listed 25 minutes is real study time; review/mock tests need enough items to fill 35–45 minutes.

## Body text markup

`text.body` (and `examTips[].body`, `tip.body`) use a tiny markup:

- a blank line (`\n\n`) separates paragraphs
- a block whose lines all start with `- ` is a bullet list; `1. `, `2. ` … is a numbered list (lines separated by a single `\n`)
- `**bold**` and `*italic*`

No headings, links or HTML inside body text. Use the section `title` for headings.

## Section types

| type | Notes |
|---|---|
| `text` | Explanations |
| `example` | List of example sentences; `**bold**` the key part |
| `passage` | Reading passage. `labelled: true` shows paragraph letters A, B, C… (needed for matching headings/information). `timerMinutes` adds an optional timer. Exercises that come straight after a passage are shown beside it on desktop |
| `audio` | Played with the browser's text-to-speech. Transcript is hidden until the learner reveals it |
| `table` | `headers` + `rows` (each row has the same number of cells) |
| `chart` | Line or bar chart for IELTS Task 1 (`categories` + `series[].values` with the same length) |
| `image` | `src` relative to `/public`, e.g. `/images/listening-map-plan-labelling-map.svg`. Always write meaningful `alt` text |
| `tip` | Inline exam tip |
| `exercise` | An interactive exercise (see below) |

### Writing audio transcripts (TTS)

- Dialogues: one turn per line, `Speaker: text`, e.g. `"Receptionist: Good morning, Riverside Sports Centre.\nMan: Hi, I'd like to book a court."`. Each speaker automatically gets a different voice. Keep speaker names short (one or two words).
- Monologues: no speaker prefix, natural paragraphs.
- Write numbers the way you want them read when it matters ("four fifteen", "the twenty-third of May"). To spell a word, separate letters with commas: "That's M, O, R, R, I, S."
- Avoid symbols TTS reads badly (/, &, emoji, brackets). Write "per cent" or "percent" carefully; "£12.50" is fine.
- Each question must be answerable from the audio alone, in the same order as the audio.
- Length: B1 60–150 words per clip; B2 150–300; C1 250–450. Full tests may have several clips.

## Exercise kinds

All exercises need a lesson-unique `id` ("ex1", "ex2"…). Optional `title` and `instructions`.

| kind | Use | Rules |
|---|---|---|
| `mcq` | Any skill | `questions[]`, each with `options` and `answer` index (0-based) or index array for "choose TWO". Pronunciation questions can add `say`: the exact word or sentence to say aloud (e.g. `"hotel"`, `"No, I work in London."`). Learners can then record it and get an AI check against the correct option. Leave `say` out when saying it would read out the answer |
| `tfng` | Reading | `statements[]` with `answer` "T", "F" or "NG"; `variant: "ynng"` for opinions |
| `gap` | Note/form/summary/sentence completion, grammar | `text` with `{{0}}`, `{{1}}`…; `answers[i]` = all accepted spellings (e.g. `["15", "fifteen"]`). Matching is case-insensitive and ignores extra spaces/final punctuation. Optional `wordBank` |
| `match` | Headings, features, speakers, map labels | `answer[i]` = index in `right` for `left[i]`. `right` may include distractors |
| `order` | Paragraph order, Build a Sentence | `items` in the CORRECT order (shuffled on screen). `mode: "words"` for sentence building. No duplicate items |
| `dictation` | Listening | `sentences[]` the learner hears and types |
| `respond` | TOEIC Part 2, TOEFL Listen and Choose a Response | `items[]`: `audio` is spoken, learner chooses a reply |
| `shadow` | Listen and repeat, pronunciation | `sentences[]`; learner listens, records, compares |
| `speak` | Speaking tasks | `prepSeconds`, `speakSeconds` like the real exam; `modelAnswer`; optional `cueCard`, `targetPhrases`, `checklist` |
| `write` | Writing tasks | `minWords`, `minutes`, `rubric` (band-descriptor style self-checks), `modelAnswer` that meets `minWords` |

Exam timings to copy: IELTS Speaking Part 2 = 60 s prep, 120 s speaking. IELTS Part 1 answers ≈ 20–30 s, Part 3 ≈ 45–60 s. TOEFL Take an Interview ≈ 45 s per answer, no prep. TOEIC describe a picture ≈ 45 s prep / 30 s speak; express an opinion ≈ 45 s prep / 60 s speak. IELTS Writing Task 1 = 20 min / 150 words; Task 2 = 40 min / 250 words; TOEFL Academic Discussion ≈ 10 min / 100+ words; TOEFL Write an Email ≈ 7 min / 80+ words; TOEIC opinion essay = 30 min / 300 words.

### Skill-specific expectations

- **Listening**: every practice exercise depends on an `audio` section placed just before it. Use `mcq`, `gap` (form/note completion), `match`, `dictation` and `respond`. For map/plan labelling, create a simple, clean SVG map in `public/images/` (white background, thin grey lines, labelled with letters A–H) and use `match`.
- **Reading**: `passage` + `tfng` / `mcq` / `gap` / `match` / `order`. B1 passages 200–350 words, B2 350–550, C1 550–800.
- **Writing**: at least one `write` task with a full model answer, plus at least one auto-checked exercise (`gap`, `order`, `mcq`, `match`) on the sub-skill. Task 1 lessons use `chart` / `table` / `image` sections as the stimulus.
- **Speaking**: at least one `speak` task, plus `shadow` and/or auto-checked exercises (word stress as `mcq`, phrases as `match`/`gap`). Model answers should sound spoken, natural and at the target level.

## Exam task names (use these exact strings in `exams[].task`)

- **IELTS**: "Listening Part 1", "Listening Part 2", "Listening Part 3", "Listening Part 4", "Reading – True/False/Not Given", "Reading – Yes/No/Not Given", "Reading – Matching headings", "Reading – Matching information", "Reading – Sentence completion", "Reading – Summary completion", "Reading – Multiple choice", "Reading – Matching features", "Reading – Matching sentence endings", "Reading – Note, table and flow-chart completion", "Reading – Diagram label completion", "Reading – Short-answer questions", "Writing Task 1 (Academic)", "Writing Task 1 (General Training)", "Writing Task 2", "Speaking Part 1", "Speaking Part 2", "Speaking Part 3"
- **TOEFL**: "Reading – Complete the Words", "Reading – Read in Daily Life", "Reading – Read an Academic Passage", "Listening – Listen and Choose a Response", "Listening – Conversation", "Listening – Announcement", "Listening – Academic Talk", "Writing – Build a Sentence", "Writing – Write an Email", "Writing – Academic Discussion", "Speaking – Listen and Repeat", "Speaking – Take an Interview"
- **TOEIC**: "Listening Part 1 – Photographs", "Listening Part 2 – Question-Response", "Listening Part 3 – Conversations", "Listening Part 4 – Talks", "Reading Part 5 – Incomplete Sentences", "Reading Part 6 – Text Completion", "Reading Part 7 – Reading Comprehension", "Speaking – Read a text aloud", "Speaking – Describe a picture", "Speaking – Respond to questions", "Speaking – Respond to questions using information provided", "Speaking – Express an opinion", "Writing – Write a sentence based on a picture", "Writing – Respond to a written request", "Writing – Write an opinion essay"
- Full practice tests use "Mock test" plus the main parts covered.

Lessons marked "All exams" in the plan get one tag per exam with the most relevant task.

## Courses (skill + level)

Each skill + level (for example Listening B1) is a **course of 12 lessons that must total at least 4 hours** (sum of `minutes`). Lessons 1–4 are the core strategy lessons; 5–11 extend them to new task types, topics and exam formats; 12 is a review or mock test for the course. New lessons must not repeat a strategy already taught in the same course: build on it, practise a different exam task, or use new topics. Before writing, read the existing lessons of your course so the new ones fit the sequence.

## Quality standard

All content is reviewed against `docs/review/RUBRIC.md` (CEFR levels, official exam formats in `src/content/exams.ts`, item-writing quality, factual accuracy). Write to that standard from the start: solve every item yourself, accept every correct spelling, keep facts general unless you have verified them, and never copy official test material.

## Checking your work

```bash
node scripts/validate-content.mts <slug-or-skill>   # answer keys, gaps, counts
npx tsc -p tsconfig.content.json                    # types (content only)
```

Both must pass with 0 errors. Then re-read each file once as a learner: is every answer key correct and is every question answerable?
