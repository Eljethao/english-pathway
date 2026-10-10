"use client";

import { useState } from "react";
import type { RespondExercise as RespondType } from "@/lib/types";
import { cn, LETTERS } from "@/lib/utils";
import { displayOrder } from "@/lib/shuffle-options";
import { PlayButton } from "@/components/media/TtsPlayer";
import { Inline } from "@/components/lesson/RichText";
import { Explanation, ExerciseShell, Mark, useExerciseScore } from "./ExerciseShell";

export function RespondExercise({ exercise }: { exercise: RespondType }) {
  const [chosen, setChosen] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const { save } = useExerciseScore(exercise.id);
  const total = exercise.items.length;
  const correct = exercise.items.filter((it, i) => chosen[i] === it.answer).length;

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
      <ol className="space-y-6">
        {exercise.items.map((it, i) => (
          <li key={i}>
            <fieldset>
              <legend className="mb-2 flex items-center gap-2">
                <span className="text-zinc-400">{i + 1}.</span>
                <PlayButton text={it.audio} cast={it.cast} label="Listen" />
                {checked && <Mark ok={chosen[i] === it.answer} />}
              </legend>
              <div className="grid gap-2">
                {displayOrder(exercise.id, i, it.audio, it.options, it.explanation).map((oi, pos) => {
                  const o = it.options[oi];
                  const selected = chosen[i] === oi;
                  return (
                    <label
                      key={oi}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 text-sm",
                        !checked && (selected ? "border-accent bg-accent-soft" : "border-line hover:border-zinc-300"),
                        checked && oi === it.answer && "border-emerald-300 bg-emerald-50",
                        checked && selected && oi !== it.answer && "border-rose-300 bg-rose-50",
                        checked && !selected && oi !== it.answer && "border-line opacity-70",
                      )}
                    >
                      <input
                        type="radio"
                        className="mt-0.5 accent-blue-600"
                        name={`${exercise.id}-r${i}`}
                        checked={selected}
                        disabled={checked}
                        onChange={() => setChosen((c) => ({ ...c, [i]: oi }))}
                      />
                      <span className="font-medium text-zinc-400">{LETTERS[pos]}</span>
                      <span>
                        <Inline text={o} />
                      </span>
                    </label>
                  );
                })}
              </div>
              {checked && (
                <Explanation>
                  <span className="font-medium text-ink">You heard: </span>“{it.audio}”
                  {it.explanation && (
                    <>
                      <br />
                      <Inline text={it.explanation} />
                    </>
                  )}
                </Explanation>
              )}
            </fieldset>
          </li>
        ))}
      </ol>
    </ExerciseShell>
  );
}
