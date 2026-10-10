"use client";

import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";
import { SKILLS, levelMeta, skillMeta } from "@/lib/meta";
import { recommendedSkill } from "@/lib/recommend";
import type { LessonSummary, Level } from "@/lib/types";
import { cn, formatDuration } from "@/lib/utils";
import { buttonClass } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SkillIcon, Tag } from "@/components/ui/Badge";
import { IconArrowRight, IconClock, IconPlay } from "@/components/ui/icons";

export type CourseLesson = Pick<LessonSummary, "slug" | "title" | "skill" | "level" | "order" | "minutes">;

const AREA_LABEL = { listening: "listening", reading: "reading", grammar: "grammar", vocabulary: "vocabulary" } as const;

/** The learner's four courses at their level, with a Start button for the recommended one. */
export function LevelCourses({ level, lessons }: { level: Level; lessons: CourseLesson[] }) {
  const progress = useProgress();
  const areas = progress.placementLevel === level ? progress.placementAreas : undefined;
  const recommended = recommendedSkill(areas);
  const weakestArea =
    areas && Object.keys(areas).length
      ? (Object.entries(areas) as [keyof typeof AREA_LABEL, number][]).reduce((a, b) => (b[1] < a[1] ? b : a))[0]
      : undefined;

  const courses = SKILLS.map((s) => {
    const list = lessons.filter((l) => l.skill === s.id && l.level === level).sort((a, b) => a.order - b.order);
    const done = list.filter((l) => progress.completed[l.slug]).length;
    const next = list.find((l) => !progress.completed[l.slug]) ?? list[0];
    return { skill: s.id, list, done, next, minutes: list.reduce((a, l) => a + l.minutes, 0) };
  }).sort((a, b) => (a.skill === recommended ? -1 : b.skill === recommended ? 1 : 0));

  const first = courses[0];
  const startHref = first.next ? `/lessons/${first.next.slug}/learn` : `/skills/${first.skill}`;
  const started = first.done > 0;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 rounded-lg bg-accent-soft p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-bold text-accent-hover">Recommended for you</div>
          <div className="font-display-heading mt-1 text-xl">
            {skillMeta(first.skill).name} {level} · {levelMeta(level).name} course
          </div>
          <p className="mt-1 text-sm text-zinc-700">
            {weakestArea
              ? `Your placement test showed ${AREA_LABEL[weakestArea]} as your weakest area, so start here.`
              : `A good first course at your level.`}{" "}
            {first.next && (started ? `Next: ${first.next.title}.` : `Lesson 1: ${first.next.title}.`)}
          </p>
        </div>
        <Link href={startHref} className={buttonClass("primary", "lg", "shrink-0")}>
          <IconPlay /> {started ? "Continue course" : "Start course"}
        </Link>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {courses.map((c) => (
          <li key={c.skill} className={cn("flex flex-col rounded-lg border p-4", c.skill === recommended ? "border-accent" : "border-line")}>
            <div className="flex items-start gap-3">
              <SkillIcon skill={c.skill} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold">
                    {skillMeta(c.skill).name} {level}
                  </span>
                  {c.skill === recommended && <Tag tone="purple">Start here</Tag>}
                </div>
                <div className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted">
                  {c.list.length} lessons · <IconClock /> {formatDuration(c.minutes)}
                </div>
              </div>
            </div>
            <ProgressBar className="mt-3" value={c.list.length ? (c.done / c.list.length) * 100 : 0} label={`${skillMeta(c.skill).name} ${level} progress`} />
            <div className="mt-1.5 flex items-center justify-between gap-2 text-xs text-muted">
              <span>
                {c.done} of {c.list.length} done
              </span>
              {c.next && (
                <Link href={`/lessons/${c.next.slug}/learn`} className="inline-flex items-center gap-1 text-sm font-bold text-link hover:underline">
                  {c.done === 0 ? "Start" : c.done === c.list.length ? "Review" : "Continue"} <IconArrowRight />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
