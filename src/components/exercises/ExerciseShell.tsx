"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useProgress } from "@/hooks/useProgress";
import { setExerciseScore } from "@/lib/progress";
import type { Exercise, Level } from "@/lib/types";
import { cn, percent } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconCheck, IconRefresh, IconX } from "@/components/ui/icons";
import { Inline } from "@/components/lesson/RichText";

/** Where exercise scores are stored: a lesson slug, or "practice/<set id>". */
const ScopeContext = createContext("misc");
/** Level of the lesson the exercises belong to (used to pitch AI feedback). */
const LevelContext = createContext<Level | undefined>(undefined);

export function ExerciseScope({ scope, level, children }: { scope: string; level?: Level; children: ReactNode }) {
  return (
    <ScopeContext.Provider value={scope}>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </ScopeContext.Provider>
  );
}

export function useExerciseScope() {
  return useContext(ScopeContext);
}

export function useExerciseLevel() {
  return useContext(LevelContext);
}

/** Saves a 0–100 score for an exercise and returns the saved best. */
export function useExerciseScore(id: string) {
  const scope = useContext(ScopeContext);
  const key = `${scope}/${id}`;
  const progress = useProgress();
  const saved = progress.exerciseScores[key];
  const save = useCallback(
    (correct: number, total: number) => {
      setExerciseScore(key, percent(correct, total));
    },
    [key],
  );
  return { saved, save };
}

const KIND_LABEL: Record<Exercise["kind"], string> = {
  mcq: "Multiple choice",
  tfng: "True / False / Not Given",
  gap: "Gap fill",
  match: "Matching",
  order: "Put in order",
  dictation: "Dictation",
  respond: "Choose a response",
  shadow: "Listen and repeat",
  speak: "Speaking task",
  write: "Writing task",
};

export function ExerciseShell({
  exercise,
  label,
  children,
  checked,
  result,
  onCheck,
  onReset,
  canCheck = true,
  footer,
  hideActions,
}: {
  exercise: Exercise;
  label?: string;
  children: ReactNode;
  checked?: boolean;
  result?: { correct: number; total: number };
  onCheck?: () => void;
  onReset?: () => void;
  canCheck?: boolean;
  footer?: ReactNode;
  hideActions?: boolean;
}) {
  const { saved } = useExerciseScore(exercise.id);
  const pct = result ? percent(result.correct, result.total) : 0;
  return (
    <section
      className="overflow-hidden rounded-lg border border-line bg-white shadow-soft"
      aria-labelledby={`ex-${exercise.id}-title`}
      id={`exercise-${exercise.id}`}
    >
      <header className="flex flex-wrap items-start justify-between gap-2 border-b border-line bg-gradient-to-b from-surface to-white px-4 py-3.5 sm:px-6">
        <div>
          <div className="text-[0.7rem] font-semibold tracking-wider text-accent uppercase">{label ?? KIND_LABEL[exercise.kind]}</div>
          <h3 id={`ex-${exercise.id}-title`} className="mt-0.5 font-semibold text-ink">
            {exercise.title ?? "Practice"}
          </h3>
        </div>
        {saved !== undefined && !checked && (
          <span className="rounded-full bg-white px-2.5 py-1 text-xs text-zinc-500 ring-1 ring-line">Last score {saved}%</span>
        )}
      </header>
      <div className="px-4 py-5 sm:px-6">
        {exercise.instructions && (
          <p className="mb-4 text-sm text-zinc-600">
            <Inline text={exercise.instructions} />
          </p>
        )}
        {children}
      </div>
      {!hideActions && (
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface/60 px-4 py-3 sm:px-6">
          <div aria-live="polite" className="text-sm">
            {checked && result && (
              <span className={cn("inline-flex items-center gap-1.5 font-medium", pct >= 60 ? "text-success" : "text-error")}>
                {pct >= 60 ? <IconCheck /> : <IconX />}
                {result.correct} / {result.total} correct ({pct}%)
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {footer}
            {checked ? (
              <Button variant="secondary" onClick={onReset}>
                <IconRefresh /> Try again
              </Button>
            ) : (
              <Button onClick={onCheck} disabled={!canCheck}>
                Check answers
              </Button>
            )}
          </div>
        </footer>
      )}
    </section>
  );
}

/** Small "correct / incorrect" marker next to an item. */
export function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center text-success" aria-label="Correct">
      <IconCheck />
    </span>
  ) : (
    <span className="inline-flex items-center text-error" aria-label="Incorrect">
      <IconX />
    </span>
  );
}

export function Explanation({ children }: { children: ReactNode }) {
  return <div className="mt-2 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-zinc-600">{children}</div>;
}
