"use client";

import { useState } from "react";
import type { TfngExercise as TfngType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Inline } from "@/components/lesson/RichText";
import { Explanation, ExerciseShell, Mark, useExerciseScore } from "./ExerciseShell";

type Answer = "T" | "F" | "NG";

export function TfngExercise({ exercise }: { exercise: TfngType }) {
  const [chosen, setChosen] = useState<Record<number, Answer>>({});
  const [checked, setChecked] = useState(false);
  const { save } = useExerciseScore(exercise.id);
  const yn = exercise.variant === "ynng";
  const labels: Record<Answer, string> = yn
    ? { T: "Yes", F: "No", NG: "Not Given" }
    : { T: "True", F: "False", NG: "Not Given" };

  const correct = exercise.statements.filter((s, i) => chosen[i] === s.answer).length;
  const total = exercise.statements.length;

  return (
    <ExerciseShell
      exercise={exercise}
      label={yn ? "Yes / No / Not Given" : "True / False / Not Given"}
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
      <ol className="space-y-4">
        {exercise.statements.map((s, i) => (
          <li key={i} className="border-b border-line pb-4 last:border-0 last:pb-0">
            <fieldset>
              <legend className="mb-2 flex gap-2 text-ink">
                <span className="text-zinc-400">{i + 1}.</span>
                <span>
                  <Inline text={s.text} />
                </span>
                {checked && <Mark ok={chosen[i] === s.answer} />}
              </legend>
              <div className="flex flex-wrap gap-2">
                {(["T", "F", "NG"] as Answer[]).map((a) => {
                  const selected = chosen[i] === a;
                  return (
                    <label
                      key={a}
                      className={cn(
                        "cursor-pointer rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors duration-150 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent",
                        !checked && (selected ? "border-accent bg-accent-soft text-accent" : "border-line text-zinc-600 hover:border-zinc-300"),
                        checked && a === s.answer && "border-emerald-300 bg-emerald-50 text-emerald-700",
                        checked && selected && a !== s.answer && "border-rose-300 bg-rose-50 text-rose-700",
                        checked && !selected && a !== s.answer && "border-line text-zinc-400",
                        checked && "cursor-default",
                      )}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        name={`${exercise.id}-s${i}`}
                        checked={selected}
                        disabled={checked}
                        onChange={() => setChosen((c) => ({ ...c, [i]: a }))}
                      />
                      {labels[a]}
                    </label>
                  );
                })}
              </div>
              {checked && s.explanation && (
                <Explanation>
                  <span className="font-medium text-ink">{labels[s.answer]}. </span>
                  <Inline text={s.explanation} />
                </Explanation>
              )}
            </fieldset>
          </li>
        ))}
      </ol>
    </ExerciseShell>
  );
}
