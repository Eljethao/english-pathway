"use client";

import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";
import { levelMeta, skillMeta } from "@/lib/meta";
import type { LessonSummary } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { IconPlay } from "@/components/ui/icons";
import { LessonThumb } from "@/components/lesson/LessonThumb";

type Lite = Pick<LessonSummary, "slug" | "title" | "skill" | "level">;

/** "Continue learning" strip for returning learners (renders nothing for new visitors). */
export function ContinueCard({ lessons }: { lessons: Lite[] }) {
  const progress = useProgress();
  const last = lessons.find((l) => l.slug === progress.lastLesson);
  if (!last) return null;
  const skillLessons = lessons.filter((l) => l.skill === last.skill);
  const done = skillLessons.filter((l) => progress.completed[l.slug]).length;
  return (
    <section className="pt-12">
      <Container>
        <h2 className="font-display-heading text-2xl">Let&apos;s keep learning</h2>
        <Link
          href={`/lessons/${last.slug}/learn`}
          className="group mt-4 flex max-w-xl overflow-hidden rounded-lg border border-line bg-white transition-shadow duration-200 hover:shadow-lift"
        >
          <div className="relative min-h-24 w-36 shrink-0 sm:w-48">
            <LessonThumb slug={last.slug} skill={last.skill} level={last.level} title={last.title} fill className="absolute inset-0" />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/20 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="flex size-10 items-center justify-center rounded-full bg-white text-ink">
                <IconPlay />
              </span>
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center p-4">
            <div className="text-xs font-bold text-muted">
              {skillMeta(last.skill).name} · {last.level} {levelMeta(last.level).name}
            </div>
            <div className="mt-1 truncate font-bold text-ink">{last.title}</div>
            <ProgressBar className="mt-3" value={(done / skillLessons.length) * 100} label={`${skillMeta(last.skill).name} progress`} />
            <div className="mt-1.5 text-xs text-muted">
              {done} of {skillLessons.length} {skillMeta(last.skill).name.toLowerCase()} lessons completed
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
