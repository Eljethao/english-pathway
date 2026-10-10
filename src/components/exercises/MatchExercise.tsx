"use client";

import { useState } from "react";
import type { MatchExercise as MatchType } from "@/lib/types";
import { cn, LETTERS } from "@/lib/utils";
import { Inline } from "@/components/lesson/RichText";
import { ExerciseShell, Mark, useExerciseScore } from "./ExerciseShell";

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv"];

export function MatchExercise({ exercise }: { exercise: MatchType }) {
  const label = (i: number) => (exercise.labels === "roman" ? ROMAN[i] : LETTERS[i]);
  const [chosen, setChosen] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const { save } = useExerciseScore(exercise.id);

  const total = exercise.left.length;
  const correct = exercise.left.filter((_, i) => chosen[i] === exercise.answer[i]).length;

  return (
    <ExerciseShell
      exercise={exercise}
      checked={checked}
      result={{ correct, total }}
      canCheck={Object.keys(chosen).length > 0}
      onCheck={() => {
        setChecked(true);
        save(correct, total);
      }}
      onReset={() => {
        setChecked(false);
        setChosen({});
      }}
    >
      <div className="mb-5 rounded-lg bg-surface p-3">
        <ul className="grid gap-1.5 text-sm">
          {exercise.right.map((r, i) => (
            <li key={i} className="flex gap-2">
              <span className="w-5 shrink-0 font-semibold text-ink">{label(i)}</span>
              <span className="text-zinc-700">
                <Inline text={r} />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <ol className="space-y-3">
        {exercise.left.map((l, i) => {
          const ok = chosen[i] === exercise.answer[i];
          return (
            <li key={i} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
              <label htmlFor={`${exercise.id}-m${i}`} className="flex gap-2 text-zinc-800">
                <span className="text-zinc-400">{i + 1}.</span>
                <span>
                  <Inline text={l} />
                </span>
              </label>
              <div className="flex items-center gap-2">
                <select
                  id={`${exercise.id}-m${i}`}
                  value={chosen[i] ?? ""}
                  disabled={checked}
                  onChange={(e) => setChosen((c) => ({ ...c, [i]: Number(e.target.value) }))}
                  className={cn(
                    "h-9 w-full rounded-md border bg-white px-2 text-sm sm:w-28",
                    !checked && "border-zinc-300",
                    checked && ok && "border-emerald-400 bg-emerald-50",
                    checked && !ok && "border-rose-400 bg-rose-50",
                  )}
                >
                  <option value="" disabled>
                    Choose…
                  </option>
                  {exercise.right.map((_, ri) => (
                    <option key={ri} value={ri}>
                      {label(ri)}
                    </option>
                  ))}
                </select>
                {checked && <Mark ok={ok} />}
                {checked && !ok && (
                  <span className="text-sm font-medium whitespace-nowrap text-success">{label(exercise.answer[i])}</span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </ExerciseShell>
  );
}
