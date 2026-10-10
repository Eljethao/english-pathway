import Link from "next/link";
import type { LessonSummary } from "@/lib/types";
import { EXAM_NAMES, levelMeta, skillMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/ui/Badge";
import { IconClock } from "@/components/ui/icons";
import { CompletedDot } from "./LessonClient";
import { LessonThumb } from "./LessonThumb";

export function lessonTag(lesson: Pick<LessonSummary, "slug" | "level" | "order">) {
  if (lesson.slug.endsWith("practice-test")) return { label: "Mock test", tone: "yellow" as const };
  if (lesson.level === "B1" && lesson.order === 1) return { label: "Start here", tone: "teal" as const };
  return null;
}

/** Vertical lesson card with a cover, used in grids and carousels. */
export function LessonCard({ lesson, showSkill = true }: { lesson: LessonSummary; showSkill?: boolean }) {
  const exams = [...new Set(lesson.exams.map((e) => e.exam))];
  const tag = lessonTag(lesson);
  return (
    <Link href={`/lessons/${lesson.slug}`} className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-lg border border-line">
        <LessonThumb slug={lesson.slug} skill={lesson.skill} level={lesson.level} title={lesson.title} />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-200 group-hover:bg-ink/10" />
      </div>
      <h3 className="mt-2.5 line-clamp-2 leading-snug font-bold text-ink group-hover:underline group-hover:decoration-1 group-hover:underline-offset-2">
        {lesson.title}
      </h3>
      <p className="mt-1 text-xs text-muted">
        {showSkill && `${skillMeta(lesson.skill).name} · `}
        {lesson.level} {levelMeta(lesson.level).name}
      </p>
      <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
        <IconClock /> {lesson.minutes} min · {lesson.exerciseCount} exercises
      </p>
      <p className="mt-1 text-xs font-medium text-zinc-600">{exams.map((e) => EXAM_NAMES[e]).join(" · ")}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <span className="font-bold text-ink">Free</span>
        {tag && <Tag tone={tag.tone}>{tag.label}</Tag>}
        <CompletedDot slug={lesson.slug} />
      </div>
    </Link>
  );
}

/** Horizontal lesson row, used in search results. */
export function LessonRow({ lesson, className }: { lesson: LessonSummary; className?: string }) {
  const tag = lessonTag(lesson);
  return (
    <Link href={`/lessons/${lesson.slug}`} className={cn("group flex gap-4 py-5", className)}>
      <div className="relative w-36 shrink-0 self-start overflow-hidden rounded-md border border-line sm:w-64">
        <LessonThumb slug={lesson.slug} skill={lesson.skill} level={lesson.level} title={lesson.title} />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-200 group-hover:bg-ink/10" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="leading-snug font-bold text-ink group-hover:underline group-hover:decoration-1 group-hover:underline-offset-2">
          {lesson.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-700">{lesson.summary}</p>
        <p className="mt-1.5 text-xs text-muted">
          {skillMeta(lesson.skill).name} · {lesson.level} {levelMeta(lesson.level).name} · {lesson.minutes} min ·{" "}
          {lesson.exerciseCount} exercises
        </p>
        <p className="mt-1 hidden text-xs text-muted sm:block">
          {lesson.exams.map((e) => `${EXAM_NAMES[e.exam]} ${e.task}`).join(" · ")}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {tag && <Tag tone={tag.tone}>{tag.label}</Tag>}
          <CompletedDot slug={lesson.slug} />
        </div>
      </div>
      <div className="hidden shrink-0 font-bold text-ink md:block">Free</div>
    </Link>
  );
}
