import type { ReactNode } from "react";
import { EXAM_NAMES, skillMeta } from "@/lib/meta";
import type { Exam, Level, Skill } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SKILL_ICONS } from "./icons";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2 py-0.5 text-xs font-medium text-zinc-600",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SkillDot({ skill, className }: { skill: Skill; className?: string }) {
  return <span aria-hidden="true" className={cn("inline-block size-2 shrink-0 rounded-full", skillMeta(skill).dot, className)} />;
}

/** Rounded square with the skill icon on a soft tint. */
export function SkillIcon({ skill, size = "md", className }: { skill: Skill; size?: "sm" | "md" | "lg"; className?: string }) {
  const Icon = SKILL_ICONS[skill];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center ring-1 ring-inset",
        skillMeta(skill).tile,
        size === "sm" && "size-8 rounded-lg text-base",
        size === "md" && "size-10 rounded-xl text-xl",
        size === "lg" && "size-14 rounded-lg text-2xl",
        className,
      )}
    >
      <Icon />
    </span>
  );
}

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <Badge>
      <SkillDot skill={skill} />
      {skillMeta(skill).name}
    </Badge>
  );
}

export function LevelBadge({ level }: { level: Level }) {
  return <Badge className="border-transparent bg-zinc-100 font-semibold text-ink">{level}</Badge>;
}

/** Yellow highlight tag (e.g. "Start here", "Mock test"). */
export function Tag({ children, tone = "yellow" }: { children: ReactNode; tone?: "yellow" | "purple" | "teal" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[0.7rem] font-bold",
        tone === "yellow" && "bg-badge text-badge-ink",
        tone === "purple" && "bg-accent-soft text-accent-hover",
        tone === "teal" && "bg-teal-100 text-teal-900",
      )}
    >
      {children}
    </span>
  );
}

export function ExamBadge({ exam, task }: { exam: Exam; task?: string }) {
  return (
    <Badge className="bg-white">
      <span className="font-semibold text-ink">{EXAM_NAMES[exam]}</span>
      {task && <span className="text-zinc-500">{task}</span>}
    </Badge>
  );
}
