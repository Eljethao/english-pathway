import Link from "next/link";
import { Container, SectionTitle } from "@/components/layout/Container";
import { ContinueCard } from "@/components/home/ContinueCard";
import { HeroPreview } from "@/components/home/HeroPreview";
import { SkillTabs } from "@/components/home/SkillTabs";
import { LessonThumb } from "@/components/lesson/LessonThumb";
import { ButtonLink } from "@/components/ui/Button";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { IconArrowRight, IconBook, IconCheck, IconClock, IconFlame, IconPen, IconTarget } from "@/components/ui/icons";
import { getAllSummaries, getCourse, getExams, getLessonsBy, getPracticeSets, getVocabLists } from "@/lib/content";
import { EXAM_NAMES, LEVELS, SKILLS } from "@/lib/meta";
import type { PhotoKey } from "@/lib/photos";
import { Photo } from "@/components/ui/Photo";

/** Big coloured tile for the "Exam prep and more" grid. */
const CATEGORY_TILES: { href: string; label: string; sub: string; photo: PhotoKey }[] = [
  { href: "/exams/ielts", label: "IELTS", sub: "Academic and General Training", photo: "ielts" },
  { href: "/exams/toefl", label: "TOEFL iBT", sub: "Updated for the 2026 format", photo: "toefl" },
  { href: "/exams/toeic", label: "TOEIC", sub: "English for work", photo: "toeic" },
  { href: "/practice", label: "Practice tests", sub: "Timed and exam-style", photo: "practice" },
  { href: "/vocabulary", label: "Vocabulary", sub: "Word lists and flashcards", photo: "vocabulary" },
  { href: "/grammar", label: "Grammar", sub: "B1 to C1 reference", photo: "grammar" },
  { href: "/placement", label: "Placement test", sub: "Find your level in 10 minutes", photo: "placement" },
  { href: "/lessons", label: "All lessons", sub: "Search and filter", photo: "lessons" },
];

const GOALS = [
  {
    icon: IconTarget,
    title: "Built around real exam tasks",
    body: "Every lesson is tagged with the IELTS, TOEFL iBT or TOEIC task it trains, from True/False/Not Given to Take an Interview.",
  },
  {
    icon: IconPen,
    title: "Hands-on practice, instant feedback",
    body: "Ten exercise types check your answers immediately. Writing and speaking come with timers, rubrics and model answers.",
  },
  {
    icon: IconFlame,
    title: "Track your progress",
    body: "Scores, streaks and spaced-repetition flashcards. Sign in to keep your progress on every device.",
  },
];

export default function Home() {
  const lessons = getAllSummaries();
  const exams = getExams();
  const sets = getPracticeSets();
  const { lessonLists, topicLists } = getVocabLists();
  const courses = SKILLS.flatMap((s) => LEVELS.map((l) => getCourse(s.id, l.id)));
  const courseSize = Math.max(...courses.map((c) => c.lessons.length));
  const courseHours = Math.round(courses.reduce((a, c) => a + c.minutes, 0) / courses.length / 60);
  const wordCount = new Set([...lessonLists, ...topicLists].flatMap((l) => l.words.map((w) => w.word))).size;

  return (
    <>
      {/* Billboard */}
      <section>
        <Container className="pt-6 sm:pt-8">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 via-sky-50 to-white">
            <div className="pointer-events-none absolute -top-24 -right-16 size-96 rounded-full bg-blue-200/50" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 size-80 rounded-full bg-sky-200/60" aria-hidden="true" />
            <div className="relative grid items-center gap-6 lg:min-h-[26rem] lg:grid-cols-[minmax(0,26rem)_1fr]">
              <div className="z-10 m-4 rounded-lg bg-white p-6 shadow-lift sm:m-8 sm:p-8 lg:my-12 lg:ml-12">
                <h1 className="font-display-heading text-4xl leading-tight text-balance sm:text-[2.6rem]">
                  English for the exam you need
                </h1>
                <p className="mt-3 text-lg text-zinc-700">
                  Short lessons from B1 to C1 for IELTS, TOEFL iBT and TOEIC. Free, with instant feedback on every answer.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <ButtonLink href="/placement" size="lg">
                    Find your level
                  </ButtonLink>
                  <ButtonLink href="/lessons" size="lg" variant="secondary">
                    Browse lessons
                  </ButtonLink>
                </div>
              </div>
              <div className="hidden px-6 pb-6 sm:block lg:px-10 lg:py-6">
                <HeroPreview />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick facts */}
      <section>
        <Container>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg bg-surface px-6 py-5 text-sm sm:grid-cols-4">
            {[
              [`${lessons.length} lessons`, "4 skills, B1 to C1"],
              [`${sets.length} practice tests`, "Timed and exam-style"],
              [`${wordCount} words`, "With flashcards"],
              ["100% free", "No sign-up needed"],
            ].map(([a, b]) => (
              <li key={a} className="flex items-center gap-3">
                <IconCheck className="shrink-0 text-lg text-success" />
                <span>
                  <span className="block font-bold text-ink">{a}</span>
                  <span className="text-muted">{b}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContinueCard lessons={lessons.map(({ slug, title, skill, level }) => ({ slug, title, skill, level }))} />

      {/* Skills */}
      <section>
        <Container className="pt-16">
          <SectionTitle
            title="All four skills, in one place"
            subtitle={`Each skill has three courses (B1, B2, C1) of ${courseSize} lessons, about ${courseHours} hours each.`}
          />
          <div className="mt-6">
            <SkillTabs lessons={lessons} />
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section>
        <Container className="pt-16">
          <SectionTitle title="Exam prep and more" />
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CATEGORY_TILES.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface">
                    <Photo
                      name={c.photo}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    <span className="font-display-heading absolute bottom-3 left-4 text-2xl text-white drop-shadow sm:text-3xl">
                      {c.label}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted group-hover:text-ink">{c.sub}</div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Practice tests */}
      <section>
        <Container className="pt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionTitle title="Timed practice tests" subtitle="Exam-style sections for every skill, with a countdown and a score." />
            <Link href="/practice" className="inline-flex items-center gap-1 text-sm font-bold text-link hover:underline">
              See all practice tests <IconArrowRight />
            </Link>
          </div>
          <Carousel label="Practice tests" className="mt-6">
            {sets.map((p) => (
              <CarouselItem key={p.id}>
                <Link href={`/practice/${p.exam}#${p.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg border border-line">
                    <LessonThumb slug={p.id} skill={p.skill} level="B2" title="practice test" />
                    <span className="absolute top-3 right-3 rounded bg-white px-1.5 py-0.5 text-[0.7rem] font-bold text-ink">
                      {EXAM_NAMES[p.exam]}
                    </span>
                    <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
                  </div>
                  <h3 className="mt-2.5 line-clamp-2 leading-snug font-bold text-ink group-hover:underline">{p.title}</h3>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                    <IconClock /> {p.minutes} min · <span className="capitalize">{p.skill}</span>
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-bold">Free</span>
                    <span className="rounded bg-badge px-1.5 py-0.5 text-[0.7rem] font-bold text-badge-ink">Timed</span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Goals band */}
      <section className="mt-20 bg-ink text-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:py-20">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Photo name="community" sizes="(max-width: 1024px) 100vw, 560px" />
            </div>
            <div className="absolute -bottom-6 left-6 hidden rounded-lg bg-white p-4 text-ink shadow-lift sm:block" aria-hidden="true">
              <div className="text-xs font-bold text-muted">This week</div>
              <div className="mt-1 flex items-center gap-2 font-bold">
                <IconFlame className="text-orange-500" /> 5 lessons · 7-day streak
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-display-heading text-3xl sm:text-4xl">Learning focused on your exam goals</h2>
            <p className="mt-3 text-zinc-300">Everything runs in your browser: listening audio, speaking recordings and writing checks.</p>
            <ul className="mt-8 space-y-6">
              {GOALS.map((g) => (
                <li key={g.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl text-sky-300">
                    <g.icon />
                  </span>
                  <div>
                    <h3 className="font-bold">{g.title}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{g.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ButtonLink href="/exams" variant="light" className="mt-8">
              Compare IELTS, TOEFL and TOEIC
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Exams */}
      <section>
        <Container className="pt-16">
          <SectionTitle title="Prepare for your exam" subtitle="Format, scoring, strategies and a study plan for each test." />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {exams.map((e) => (
              <Link key={e.id} href={`/exams/${e.id}`} className="group flex flex-col rounded-lg border border-line p-6 transition-shadow hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="font-display-heading text-2xl">{e.name}</span>
                  <span className="text-xs font-bold text-muted">{getLessonsBy({ exam: e.id }).length} lessons</span>
                </div>
                <p className="mt-1 text-sm text-muted">{e.fullName}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {e.bestFor.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-2">
                      <IconCheck className="mt-0.5 shrink-0 text-success" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-link group-hover:underline">
                  Open {e.name} hub <IconArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Levels + placement */}
      <section>
        <Container className="pt-16">
          <div className="grid overflow-hidden rounded-lg border border-line lg:grid-cols-[16rem_1fr]">
            <div className="relative hidden min-h-72 lg:block">
              <Photo name="conversation" sizes="260px" />
            </div>
            <div className="grid gap-8 p-6 sm:p-10 xl:grid-cols-[1fr_1.3fr] xl:items-center">
            <div>
              <IconBook className="text-3xl text-accent" />
              <h2 className="font-display-heading mt-3 text-3xl">Not sure where to start?</h2>
              <p className="mt-2 text-lg text-zinc-700">
                Take the 10-minute placement test. We will recommend your level and your first lessons.
              </p>
              <ButtonLink href="/placement" size="lg" className="mt-6">
                Take the placement test
              </ButtonLink>
            </div>
            <ol className="grid gap-3 sm:grid-cols-3">
              {LEVELS.map((l) => (
                <li key={l.id}>
                  <Link href={`/lessons?level=${l.id}`} className="block h-full rounded-lg bg-surface p-4 transition-colors hover:bg-accent-soft">
                    <div className="font-display-heading text-3xl text-accent">{l.id}</div>
                    <div className="mt-1 font-bold">{l.name}</div>
                    <dl className="mt-3 space-y-1 text-xs text-zinc-700">
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">IELTS</dt>
                        <dd className="font-bold">{l.ielts}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">TOEFL</dt>
                        <dd className="font-bold">{l.toefl}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">TOEIC</dt>
                        <dd className="font-bold">{l.toeic}</dd>
                      </div>
                    </dl>
                  </Link>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
