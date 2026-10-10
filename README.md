# English Pathway

A clean, minimal website that takes English learners from **B1 to C1** and prepares them for **IELTS, TOEFL iBT and TOEIC**. It covers listening, reading, writing and speaking. See [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for the full plan.

Built with Next.js 16 (App Router, Cache Components) and Tailwind CSS v4. Progress is stored in the browser's `localStorage`, and learners can optionally sign in (Supabase) to sync it across devices.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are prerendered)
npm start
```

## Supabase (optional cloud sync)

Learners sign in with an email magic link, and their progress is stored as one row per user in a `progress` table protected by row-level security. Everything runs in the browser, so all pages stay static. Without these settings the site works exactly the same, minus sign-in.

1. Copy `.env.example` to `.env.local` and fill in the project URL and **publishable** key (Project Settings → API Keys). Never put the service-role key or database password in a `NEXT_PUBLIC_` variable.
2. In the Supabase dashboard, open **SQL Editor** and run `supabase/migrations/20261009000000_progress.sql`.
3. In **Authentication → URL Configuration**, add your redirect URLs, e.g. `http://localhost:3000/**`, `http://localhost:3001/**` and your production URL followed by `/**`. Set **Site URL** to your production URL.
4. Optional: the built-in email service only sends a few emails per hour. Set up custom SMTP (Authentication → Emails) before launch.

Sync rules: on sign-in, local and cloud progress are merged (newest completion, best scores, all saved words, longest streak). After that, changes upload automatically a couple of seconds after they happen, and again whenever the tab becomes visible.

## Checks

```bash
npm run lint
npm run typecheck
npm run validate   # answer keys, gap placeholders, exercise counts for every lesson and practice set
```

## What's inside

| Route | Page |
|---|---|
| `/` | Home |
| `/placement` | 20-question placement test |
| `/lessons`, `/lessons/[slug]` | Catalog with filters/search, and 48 lessons |
| `/skills/[skill]` | Lessons for one skill, by level |
| `/exams`, `/exams/[exam]` | Exam comparison and exam hubs |
| `/practice`, `/practice/[exam]` | 12 timed practice sets |
| `/vocabulary` | Word lists and Leitner flashcards |
| `/grammar` | 14 grammar topics |
| `/progress` | Dashboard, export/import |
| `/about` | About |

## Content quality

All content was reviewed in October 2026 against the CEFR Companion Volume, official exam formats and IELTS band descriptors: 1,285 items checked, 313 fixes. See [docs/CONTENT_REVIEW.md](docs/CONTENT_REVIEW.md) for the method, results per lesson, and what still needs a human specialist (mainly recorded audio). Per-file notes are in `docs/review/`, and the reviewer rubric is `docs/review/RUBRIC.md`: use it when adding lessons.

## Adding content

Lessons are plain TypeScript files in `src/content/lessons/<skill>/<slug>.ts`. Read [CONTENT_GUIDE.md](CONTENT_GUIDE.md), then:

1. Add the lesson to `src/content/lessons/manifest.ts`.
2. Write the file (copy the structure of an existing lesson; types are in `src/lib/types.ts`).
3. Run `node scripts/gen-lesson-index.mts` to regenerate the lesson index.
4. Run `npm run validate`.

Exam facts live in `src/content/exams.ts` (last checked October 2026). Update them there when a test format changes.

## Browser features

- **Listening** uses the Web Speech API (`speechSynthesis`), with US/UK voices and 0.75×–1.25× speed. Set `src` on an `audio` section to use a real recording from `public/audio/` instead.
- **Speaking** records with `MediaRecorder` and shows a live transcript with `SpeechRecognition` (Chrome, Edge, Safari). Other browsers get recording only, or a timer and model answer.
