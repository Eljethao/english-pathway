"use client";

import { useProgress } from "@/hooks/useProgress";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function SkillProgress({ slugs, label = "completed" }: { slugs: string[]; label?: string }) {
  const progress = useProgress();
  const done = slugs.filter((s) => progress.completed[s]).length;
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-zinc-500">
          {done} of {slugs.length} {label}
        </span>
        <span className="font-medium tabular-nums text-ink">{slugs.length ? Math.round((done / slugs.length) * 100) : 0}%</span>
      </div>
      <ProgressBar value={slugs.length ? (done / slugs.length) * 100 : 0} label={`Lessons ${label}`} />
    </div>
  );
}
