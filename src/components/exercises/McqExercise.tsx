"use client";

import { useState } from "react";
import type { McqExercise as McqType } from "@/lib/types";
import { cn, LETTERS } from "@/lib/utils";
import { displayOrder } from "@/lib/shuffle-options";
import { Inline } from "@/components/lesson/RichText";
import { Explanation, ExerciseShell, Mark, useExerciseLevel, useExerciseScore } from "./ExerciseShell";
import { SayIt } from "./SayIt";

const answersOf = (a: number | number[]) => (Array.isArray(a) ? a : [a]);
const sameSet = (a: number[], b: number[]) => a.length === b.length && a.every((x) => b.includes(x));

export function McqExercise({ exercise }: { exercise: McqType }) {
  const [chosen, setChosen] = useState<Record<number, number[]>>({});
  const [checked, setChecked] = useState(false);
  const { save } = useExerciseScore(exercise.id);
  const level = useExerciseLevel();

  const correct = exercise.questions.filter((q, i) => sameSet(chosen[i] ?? [], answersOf(q.answer))).length;
  const total = exercise.questions.length;

  const pick = (qi: number, oi: number, multi: number) => {
    if (checked) return;
    setChosen((c) => {
      const cur = c[qi] ?? [];
      if (multi <= 1) return { ...c, [qi]: [oi] };
      if (cur.includes(oi)) return { ...c, [qi]: cur.filter((x) => x !== oi) };
      return { ...c, [qi]: cur.length >= multi ? [...cur.slice(1), oi] : [...cur, oi] };
    });
  };

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
        {exercise.questions.map((q, qi) => {
          const answers = answersOf(q.answer);
          const multi = answers.length;
          const mine = chosen[qi] ?? [];
          const ok = sameSet(mine, answers);
          return (
            <li key={qi}>
              <fieldset>
                <legend className="mb-2 flex gap-2 font-medium text-ink">
                  <span className="text-zinc-400">{qi + 1}.</span>
                  <span>
                    <Inline text={q.prompt} />
                    {multi > 1 && <span className="ml-1 text-sm font-normal text-zinc-500">(Choose {multi === 2 ? "TWO" : multi})</span>}
                  </span>
                  {checked && <Mark ok={ok} />}
                </legend>
                <div className="grid gap-2">
                  {displayOrder(exercise.id, qi, q.prompt, q.options, q.explanation).map((oi, pos) => {
                    const opt = q.options[oi];
                    const selected = mine.includes(oi);
                    const isAnswer = answers.includes(oi);
                    return (
                      <label
                        key={oi}
                        className={cn(
                          "flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors duration-150",
                          !checked && (selected ? "border-accent bg-accent-soft" : "border-line hover:border-zinc-300"),
                          checked && isAnswer && "border-emerald-300 bg-emerald-50",
                          checked && selected && !isAnswer && "border-rose-300 bg-rose-50",
                          checked && !selected && !isAnswer && "border-line opacity-70",
                          checked && "cursor-default",
                        )}
                      >
                        <input
                          type={multi > 1 ? "checkbox" : "radio"}
                          name={`${exercise.id}-q${qi}`}
                          className="mt-0.5 accent-blue-600"
                          checked={selected}
                          disabled={checked}
                          onChange={() => pick(qi, oi, multi)}
                        />
                        <span className="font-medium text-zinc-400">{LETTERS[pos]}</span>
                        <span className="text-zinc-800">
                          <Inline text={opt} />
                        </span>
                      </label>
                    );
                  })}
                </div>
                {q.say && (
                  <SayIt
                    text={q.say}
                    showModel={checked}
                    request={{
                      mode: "say",
                      text: q.say,
                      level,
                      target: answers.map((a) => q.options[a]).join(" / "),
                      context: [exercise.title, exercise.instructions, `Question: ${q.prompt}`, q.explanation && `Explanation: ${q.explanation}`]
                        .filter(Boolean)
                        .join("\n"),
                    }}
                  />
                )}
                {checked && q.explanation && (
                  <Explanation>
                    <Inline text={q.explanation} />
                  </Explanation>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>
    </ExerciseShell>
  );
}
