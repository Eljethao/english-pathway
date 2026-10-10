"use client";

import { useTimer } from "@/hooks/useTimer";
import { formatTime, cn } from "@/lib/utils";
import { Button } from "./Button";
import { IconClock } from "./icons";

/** Self-contained optional countdown timer with start/pause/reset. */
export function Timer({ minutes, label = "Timer", className }: { minutes: number; label?: string; className?: string }) {
  const t = useTimer({ seconds: minutes * 60 });
  const done = t.remaining === 0;
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-lg border border-line bg-white px-2 py-1", className)}>
      <IconClock className="text-zinc-400" />
      <span
        className={cn("min-w-12 font-mono text-sm tabular-nums", done ? "text-error" : "text-ink")}
        aria-label={`${label}: ${formatTime(t.remaining ?? 0)} remaining`}
      >
        {formatTime(t.remaining ?? 0)}
      </span>
      {t.running ? (
        <Button size="sm" variant="ghost" onClick={t.pause}>
          Pause
        </Button>
      ) : (
        <Button size="sm" variant="ghost" onClick={done ? t.reset : t.start}>
          {done ? "Reset" : t.elapsed ? "Resume" : "Start"}
        </Button>
      )}
      {!t.running && t.elapsed > 0 && !done && (
        <Button size="sm" variant="ghost" onClick={t.reset}>
          Reset
        </Button>
      )}
    </div>
  );
}

export function TimeDisplay({ seconds, warn }: { seconds: number; warn?: boolean }) {
  return (
    <span className={cn("font-mono tabular-nums", warn ? "text-error" : "text-ink")}>{formatTime(seconds)}</span>
  );
}
