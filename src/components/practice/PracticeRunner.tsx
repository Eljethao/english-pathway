"use client";

import { useState, type ReactNode } from "react";
import { useProgress } from "@/hooks/useProgress";
import { useTimer } from "@/hooks/useTimer";
import { cn, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { IconClock, IconPlay } from "@/components/ui/icons";

/** Shows a practice set behind a Start button, with a countdown and a running score. */
export function PracticeRunner({
  id,
  minutes,
  gradedIds,
  children,
}: {
  id: string;
  minutes: number;
  gradedIds: string[];
  children: ReactNode;
}) {
  const [started, setStarted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const timer = useTimer({ seconds: minutes * 60, onEnd: () => setTimeUp(true) });
  const progress = useProgress();
  const scores = gradedIds
    .map((g) => progress.exerciseScores[`practice/${id}/${g}`])
    .filter((s): s is number => s !== undefined);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;

  if (!started)
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Button
          onClick={() => {
            setStarted(true);
            timer.start();
          }}
        >
          <IconPlay /> Start ({minutes} min)
        </Button>
        {avg !== null && <span className="text-sm text-zinc-500">Last score: {avg}%</span>}
      </div>
    );

  const remaining = timer.remaining ?? 0;
  return (
    <div>
      <div className="sticky top-[4.5rem] z-20 -mx-4 mb-6 border-b border-line bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-sm">
            <IconClock className="text-zinc-400" />
            <span className={cn("font-mono text-lg tabular-nums", (timeUp || remaining < 60) && "text-error")}>
              {formatTime(remaining)}
            </span>
            {timeUp && <span className="text-error">Time is up</span>}
          </span>
          <div className="flex items-center gap-3 text-sm">
            {gradedIds.length > 0 && (
              <span className="text-zinc-500" aria-live="polite">
                {scores.length}/{gradedIds.length} checked{avg !== null && ` · ${avg}%`}
              </span>
            )}
            {timer.running ? (
              <Button size="sm" variant="secondary" onClick={timer.pause}>
                Pause
              </Button>
            ) : (
              !timeUp && (
                <Button size="sm" variant="secondary" onClick={timer.start}>
                  Resume
                </Button>
              )
            )}
          </div>
        </div>
        <ProgressBar className="mt-2" value={(timer.elapsed / (minutes * 60)) * 100} label="Time used" />
      </div>
      {children}
    </div>
  );
}
