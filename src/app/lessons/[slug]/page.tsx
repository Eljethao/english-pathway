import type { Metadata } from "next";
import { PhotoBackdrop } from "@/components/ui/Photo";
import Link from "next/link";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/layout/PageSkeleton";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CompletedDot, LessonTracker } from "@/components/lesson/LessonClient";
import { lessonTag } from "@/components/lesson/LessonCard";
import { LessonThumb } from "@/components/lesson/LessonThumb";
import { Tag } from "@/components/ui/Badge";
import { buttonClass } from "@/components/ui/Button";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBook,
  IconBookmark,
  IconCheck,
  IconClock,
  IconHeadphones,
  IconLightbulb,
  IconMic,
  IconPen,
  IconPlay,
  IconTarget,
} from "@/components/ui/icons";
import { buildLessonSteps } from "@/lib/lesson-steps";
import { getAdjacentLessons, getAllLessons, getLesson, getLessonsBy, lessonSections } from "@/lib/content";
import { EXAM_NAMES, levelMeta, skillMeta } from "@/lib/meta";

export function generateStaticParams() {
  return getAllLessons().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lessons/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} (${lesson.level} ${skillMeta(lesson.skill).name})`,
    description: lesson.summary,
    alternates: { canonical: `/lessons/${lesson.slug}` },
    openGraph: { title: lesson.title, description: lesson.summary, type: "article" },
  };
}

export default function LessonPage({ params }: PageProps<"/lessons/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Lesson params={params} />
    </Suspense>
  );
}

async function Lesson({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  const skill = skillMeta(lesson.skill);
  const { prev, next } = getAdjacentLessons(slug);
  const tag = lessonTag(lesson);
  const all = lessonSections(lesson);
  const kinds = all.flatMap((s) => (s.type === "exercise" ? [s.exercise.kind] : []));
  const counts = {
    exercises: kinds.length,
    audio: all.filter((s) => s.type === "audio").length,
    passages: all.filter((s) => s.type === "passage").length,
    writing: kinds.filter((k) => k === "write").length,
    speaking: kinds.filter((k) => k === "speak" || k === "shadow").length,
  };
  const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
  const steps = buildLessonSteps(lesson);
  const courseSize = getLessonsBy({ skill: lesson.skill, level: lesson.level }).length;
  const learnHref = `/lessons/${lesson.slug}/learn`;
  const includes = [
    { icon: IconClock, label: `${lesson.minutes} minutes of study` },
    { icon: IconTarget, label: `${plural(counts.exercises, "interactive exercise")} with instant feedback` },
    counts.audio > 0 && { icon: IconHeadphones, label: plural(counts.audio, "audio clip") },
    counts.passages > 0 && { icon: IconBook, label: plural(counts.passages, "reading passage") },
    counts.writing > 0 && { icon: IconPen, label: `${plural(counts.writing, "timed writing task")} with model answers` },
    counts.speaking > 0 && { icon: IconMic, label: plural(counts.speaking, "speaking task") },
    { icon: IconBookmark, label: `${plural(lesson.vocabulary.length, "key word")} for flashcards` },
    { icon: IconLightbulb, label: plural(lesson.examTips.length, "exam tip") },
  ].filter((x): x is { icon: typeof IconClock; label: string } => Boolean(x));

  return (
    <>
      <LessonTracker slug={lesson.slug} />
      {/* Course-style banner */}
      <div className="relative bg-ink text-white">
        <PhotoBackdrop name={lesson.skill} preload />
        <Container className="relative py-8 lg:py-12">
          <div className="lg:pr-[25rem]">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-bold text-sky-300">
              <Link href="/lessons" className="hover:underline">
                Lessons
              </Link>
              <span className="text-zinc-500">›</span>
              <Link href={`/skills/${lesson.skill}`} className="hover:underline">
                {skill.name}
              </Link>
              <span className="text-zinc-500">›</span>
              <Link href={`/lessons?skill=${lesson.skill}&level=${lesson.level}`} className="hover:underline">
                {lesson.level} {levelMeta(lesson.level).name}
              </Link>
            </nav>
            <h1 className="font-display-heading mt-4 text-3xl text-balance sm:text-4xl">{lesson.title}</h1>
            <p className="mt-3 text-lg text-pretty text-zinc-200">{lesson.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {tag && <Tag tone={tag.tone}>{tag.label}</Tag>}
              <span className="font-bold text-sky-300">Level {lesson.level}</span>
              <span className="inline-flex items-center gap-1 text-zinc-300">
                <IconClock /> {lesson.minutes} min
              </span>
              <span className="text-zinc-300">{counts.exercises} exercises</span>
              <span className="text-zinc-300">
                Lesson {lesson.order} of {courseSize} in {skill.name} {lesson.level}
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-300">
              Trains:{" "}
              {lesson.exams.map((e, i) => (
                <span key={`${e.exam}-${e.task}`}>
                  {i > 0 && ", "}
                  <Link href={`/exams/${e.exam}`} className="text-sky-300 underline underline-offset-2 hover:text-sky-200">
                    {EXAM_NAMES[e.exam]} {e.task}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          {/* Floating lesson card */}
          <aside className="mt-8 max-w-md overflow-hidden rounded-lg bg-white text-ink shadow-lift lg:absolute lg:top-8 lg:right-6 lg:mt-0 lg:w-[21rem]">
            <Link href={learnHref} className="group relative block" aria-label="Start the lesson">
              <LessonThumb slug={lesson.slug} skill={lesson.skill} level={lesson.level} title={lesson.title} />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/25 transition-colors group-hover:bg-ink/35">
                <span className="flex size-16 items-center justify-center rounded-full bg-white text-2xl text-ink shadow-lift">
                  <IconPlay />
                </span>
              </span>
            </Link>
            <div className="p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display-heading text-3xl">Free</span>
                <CompletedDot slug={lesson.slug} />
              </div>
              <Link href={learnHref} className={buttonClass("primary", "lg", "mt-4 w-full")}>
                Start lesson
              </Link>
              <Link href={`/skills/${lesson.skill}`} className={buttonClass("secondary", "lg", "mt-2 w-full")}>
                All {skill.name.toLowerCase()} lessons
              </Link>
              <h2 className="mt-5 font-bold">This lesson includes:</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
                {includes.map((it) => (
                  <li key={it.label} className="flex items-center gap-2.5">
                    <it.icon className="shrink-0 text-base text-ink" /> {it.label}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </div>

      {/* Overview */}
      <Container className="py-8 lg:min-h-[24rem]">
        <div className="space-y-8 lg:pr-[25rem]">
          <section className="rounded-lg border border-line p-6" aria-labelledby="learn-h">
            <h2 id="learn-h" className="font-display-heading text-2xl">
              What you&apos;ll learn
            </h2>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {lesson.objectives.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-zinc-800">
                  <IconCheck className="mt-0.5 shrink-0 text-base" />
                  {o}
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="outline-h">
            <h2 id="outline-h" className="font-display-heading text-2xl">
              Lesson content
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              {steps.length} steps · {counts.exercises} exercises · {lesson.minutes} min total
            </p>
            <ol className="mt-3 divide-y divide-line overflow-hidden rounded-lg border border-line">
              {steps.map((o, i) => (
                <li key={o.id}>
                  <Link
                    href={`${learnHref}#${o.id}`}
                    className="flex items-center justify-between gap-3 bg-surface px-5 py-3.5 text-sm hover:bg-accent-soft"
                  >
                    <span className="font-bold text-ink">
                      {i + 1}. {o.label}
                    </span>
                    <span className="truncate text-muted">{o.detail}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </Container>

      <Container className="pb-4">
        <div className="lg:pr-[25rem]">
          <Link href={learnHref} className={buttonClass("primary", "lg", "w-full sm:w-auto")}>
            Start lesson <IconArrowRight />
          </Link>
        </div>
      </Container>

      <Container className="pt-8">
        <nav aria-label="Lesson navigation" className="grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
          {prev ? (
            <Link href={`/lessons/${prev.slug}`} className="group rounded-lg border border-line p-5 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <IconArrowLeft /> Previous · {prev.level}
              </span>
              <span className="mt-1 block font-medium text-ink group-hover:text-accent">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/lessons/${next.slug}`} className="group rounded-lg border border-line p-5 text-right shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
              <span className="flex items-center justify-end gap-1 text-xs text-zinc-500">
                Next · {next.level} <IconArrowRight />
              </span>
              <span className="mt-1 block font-medium text-ink group-hover:text-accent">{next.title}</span>
            </Link>
          )}
        </nav>
      </Container>
    </>
  );
}
