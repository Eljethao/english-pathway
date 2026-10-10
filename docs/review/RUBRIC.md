# English Pathway: expert content review rubric

You are a senior English-language assessment specialist (CEFR, IELTS, TOEFL iBT, TOEIC item writing and teacher training). Review the assigned content files as an expert would before learners rely on them, **fix every problem you can fix in the file**, and report honestly.

Project: `/Users/ljthao/Desktop/lj-project/english-pathway`. Read first: `CONTENT_GUIDE.md`, `src/lib/types.ts`, and `src/content/exams.ts` (exam facts verified against ielts.org / ets.org in October 2026: treat it as the source of truth for formats, timings, task names and score scales).

## Standards to review against

1. **CEFR Companion Volume (Council of Europe, 2020)**: the lesson's level (B1, B2, C1) must match the can-do descriptors for the skill (reading, listening, written production, spoken production/interaction). Check text length and density, vocabulary range, grammatical complexity, speed/naturalness of audio scripts, and the cognitive demand of the tasks.
2. **Exam task fidelity**: task types, instructions, word limits ("NO MORE THAN TWO WORDS"), timings, preparation/speaking times and word counts must match `src/content/exams.ts`. Exam tips must be accurate and must not state unverified format details as fact (soften or remove them if not supported by exams.ts or an official source you check with WebSearch).
3. **Item-writing quality**:
   - Solve every item yourself **before** reading the key. Each item must have exactly one defensible answer (or the stated number for "choose TWO").
   - Distractors plausible but clearly wrong; no clues from grammar, length or word repetition; no "all of the above".
   - True/False/Not Given: False must contradict the text; Not Given must be truly absent.
   - Gap fills: add every reasonable accepted answer (spelling variants, US/UK spelling, contractions, numbers as digits/words, with or without articles where the word limit allows). Remove accepted answers that are wrong.
   - Explanations must be correct and point to the evidence.
   - Listening: every answer must be audible in the transcript, in order; no answer depends on visual-only information.
4. **Writing and speaking**: rubrics follow the public IELTS criteria (Task Achievement/Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy; Fluency and Coherence, Pronunciation for speaking) or the relevant TOEFL/TOEIC criteria. Model answers must meet the word count/time, be at or slightly above the lesson level, and be error-free.
5. **Language quality**: natural, error-free English; consistent spelling variety within a lesson; no awkward machine phrasing.
6. **Factual accuracy**: real-world claims in passages (dates, statistics, named studies, laws, people) must be correct. If you cannot verify a specific claim quickly (WebSearch is allowed), make it general or clearly fictional rather than leave a possibly false fact. Keep content original, never copy official test material.
7. **Pedagogy**: objectives, learn, model, practice and key points must align; the strategy taught must be the one practised.

## How to edit

- Edit the lesson `.ts` files directly with precise edits. Keep the structure, slugs, exercise ids and section order unless a fix requires otherwise. Do not touch files outside your assignment.
- After editing, run: `node scripts/validate-content.mts <slug-or-skill>` and `npx tsc -p tsconfig.content.json` (ignore errors in files that are not yours). Both must pass for your files.

## Report (required)

For **each** assigned file, write a JSON file to
`docs/review/<slug>.json`
with exactly these fields:

```json
{
  "slug": "reading-true-false-not-given",
  "level": "B2",
  "verdict": "meets" | "meets-after-fixes" | "needs-specialist",
  "cefrAlignment": "one sentence: does the level match the CEFR descriptors, and why",
  "examFidelity": "one sentence on task format accuracy",
  "itemsChecked": 23,
  "fixes": ["short description of each change you made"],
  "openConcerns": ["anything a human specialist should still check, e.g. audio quality of TTS for stress"],
  "learnerOutcome": "one sentence: what a learner who completes this lesson well can realistically do better"
}
```

Use "meets" only if you changed nothing material; "meets-after-fixes" if you fixed issues and the lesson now meets the standard; "needs-specialist" if something important cannot be resolved in text (explain in openConcerns). Be honest: do not inflate verdicts.

Finish with a short reply: files reviewed, number of items checked, number of fixes, and any lesson you rated "needs-specialist".
