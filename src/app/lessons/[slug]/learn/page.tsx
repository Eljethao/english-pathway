import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/layout/PageSkeleton";
import { ExerciseScope } from "@/components/exercises/ExerciseShell";
import { CompleteButton, LessonTracker, SaveAllWords, VocabList } from "@/components/lesson/LessonClient";
import { LessonPlayer, type PlayerStep } from "@/components/lesson/LessonPlayer";
import { LessonThumb } from "@/components/lesson/LessonThumb";
import { Inline } from "@/components/lesson/RichText";
import { ExamTipBox, SectionList } from "@/components/lesson/SectionRenderer";
import { IconArrowRight, IconCheck, IconTarget } from "@/components/ui/icons";
import { getAdjacentLessons, getAllLessons, getLesson, gradedExerciseIds, lessonSections } from "@/lib/content";
import { buildLessonSteps, type LessonStep } from "@/lib/lesson-steps";
import { levelMeta, skillMeta } from "@/lib/meta";
import type { Lesson } from "@/lib/types";

export function generateStaticParams() {
  return getAllLessons().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lessons/[slug]/learn">): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title}: learn`,
    description: lesson.summary,
    alternates: { canonical: `/lessons/${lesson.slug}/learn` },
  };
}

export default function LearnPage({ params }: PageProps<"/lessons/[slug]/learn">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Learn params={params} />
    </Suspense>
  );
}

function Panel({ step, lesson, gradedIds, next }: { step: LessonStep; lesson: Lesson; gradedIds: string[]; next?: Lesson }) {
  switch (step.kind) {
    case "warm-up":
      return (
        <div className="max-w-3xl space-y-8">
          <div className="rounded-lg border border-line p-6">
            <h3 className="flex items-center gap-2 font-bold">
              <IconTarget className="text-accent" /> In this lesson you will
            </h3>
            <ul className="mt-3 space-y-2">
              {lesson.objectives.map((o) => (
                <li key={o} className="flex gap-2.5 text-zinc-800">
                  <IconCheck className="mt-1 shrink-0 text-success" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-6">
            <h3 className="font-bold">Before you start</h3>
            <p className="mt-1 text-sm text-muted">Think about these questions, or answer them aloud.</p>
            <ul className="mt-4 space-y-3">
              {lesson.warmUp.map((q) => (
                <li key={q} className="flex gap-3 text-lg text-ink">
                  <span className="text-accent">→</span>
                  <span>
                    <Inline text={q} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "sections":
      return <SectionList sections={step.sections ?? []} />;
    case "exam-tips":
      return (
        <div className="grid max-w-3xl gap-3">
          {lesson.examTips.map((t, i) => (
            <ExamTipBox key={i} exam={t.exam} body={t.body} />
          ))}
        </div>
      );
    case "vocabulary": {
      const vocab = lesson.vocabulary.map((v) => ({ ...v, level: v.level ?? lesson.level }));
      return (
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted">Save words to review them later with flashcards.</p>
            <SaveAllWords words={vocab.map((v) => v.word)} />
          </div>
          <VocabList items={vocab} />
        </div>
      );
    }
    case "summary":
      return (
        <div className="max-w-3xl space-y-8">
          <div className="rounded-lg border border-line p-6">
            <h3 className="font-bold">Key points</h3>
            <ul className="mt-3 space-y-2.5">
              {lesson.keyPoints.map((k) => (
                <li key={k} className="flex gap-2.5 text-zinc-800">
                  <IconCheck className="mt-1 shrink-0 text-success" />
                  <span>
                    <Inline text={k} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <CompleteButton slug={lesson.slug} gradedIds={gradedIds} />
          {next && (
            <Link
              href={`/lessons/${next.slug}`}
              className="group flex max-w-xl overflow-hidden rounded-lg border border-line transition-shadow hover:shadow-lift"
            >
              <div className="w-40 shrink-0">
                <LessonThumb slug={next.slug} skill={next.skill} level={next.level} title={next.title} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center p-4">
                <div className="text-xs font-bold text-muted">
                  Up next · {skillMeta(next.skill).name} {next.level} {levelMeta(next.level).name}
                </div>
                <div className="mt-1 font-bold text-ink group-hover:underline">{next.title}</div>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-link">
                  Go to lesson <IconArrowRight />
                </span>
              </div>
            </Link>
          )}
        </div>
      );
  }
}

async function Learn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  const steps = buildLessonSteps(lesson);
  const gradedIds = gradedExerciseIds(lessonSections(lesson));
  const { next } = getAdjacentLessons(slug);

  const playerSteps: PlayerStep[] = steps.map((s) => ({
    id: s.id,
    label: s.label,
    detail: s.detail,
    // Practice steps count as done once their auto-checked exercises are checked; others once visited.
    exerciseIds: s.id.startsWith("practice") ? gradedExerciseIds(s.sections ?? []) : [],
  }));

  return (
    <ExerciseScope scope={lesson.slug} level={lesson.level}>
      <LessonTracker slug={lesson.slug} />
      <h1 className="sr-only">{lesson.title}</h1>
      <LessonPlayer
        slug={lesson.slug}
        title={lesson.title}
        steps={playerSteps}
        overviewHref={`/lessons/${lesson.slug}`}
        nextLesson={next ? { href: `/lessons/${next.slug}`, title: next.title } : undefined}
        panels={steps.map((s) => (
          <Panel key={s.id} step={s} lesson={lesson} gradedIds={gradedIds} next={next} />
        ))}
      />
    </ExerciseScope>
  );
}
