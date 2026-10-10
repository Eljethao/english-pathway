"use client";

import { Fragment, useRef, useState } from "react";
import type { GapExercise as GapType } from "@/lib/types";
import { cn, normalizeAnswer } from "@/lib/utils";
import { Inline } from "@/components/lesson/RichText";
import { ExerciseShell, useExerciseScore } from "./ExerciseShell";

export function isGapCorrect(value: string, accepted: string[]) {
  const v = normalizeAnswer(value);
  if (!v) return false;
  // Also ignore spacing, so "0161 496 3370" matches "01614963370".
  const squash = (s: string) => s.replace(/[\s-]/g, "");
  return accepted.some((a) => normalizeAnswer(a) === v || squash(normalizeAnswer(a)) === squash(v));
}

export function GapExercise({ exercise }: { exercise: GapType }) {
  const [values, setValues] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const lastFocused = useRef<number | null>(null);
  const { save } = useExerciseScore(exercise.id);

  const total = exercise.answers.length;
  const correct = exercise.answers.filter((a, i) => isGapCorrect(values[i] ?? "", a)).length;
  const parts = exercise.text.split(/(\{\{\d+\}\})/g);

  const insertWord = (w: string) => {
    if (checked) return;
    const target =
      lastFocused.current !== null && !values[lastFocused.current]
        ? lastFocused.current
        : exercise.answers.findIndex((_, i) => !values[i]);
    if (target === -1 || target === null) return;
    setValues((v) => ({ ...v, [target]: w }));
    lastFocused.current = null;
  };

  return (
    <ExerciseShell
      exercise={exercise}
      checked={checked}
      result={{ correct, total }}
      canCheck={Object.values(values).some((v) => v.trim())}
      onCheck={() => {
        setChecked(true);
        save(correct, total);
      }}
      onReset={() => {
        setChecked(false);
        setShowAnswers(false);
        setValues({});
      }}
      footer={
        checked &&
        correct < total && (
          <button type="button" className="px-2 text-sm text-accent hover:underline" onClick={() => setShowAnswers((s) => !s)}>
            {showAnswers ? "Hide answers" : "Show answers"}
          </button>
        )
      }
    >
      {exercise.wordBank && (
        <div className="mb-4 flex flex-wrap gap-2 rounded-lg bg-surface p-3" aria-label="Word bank">
          {exercise.wordBank.map((w) => {
            const used = Object.values(values).some((v) => normalizeAnswer(v) === normalizeAnswer(w));
            return (
              <button
                key={w}
                type="button"
                onClick={() => insertWord(w)}
                disabled={checked}
                className={cn(
                  "rounded-md border border-line bg-white px-2.5 py-1 text-sm transition-colors duration-150 hover:border-zinc-300",
                  used && "text-zinc-400 line-through",
                )}
              >
                {w}
              </button>
            );
          })}
        </div>
      )}
      <div className="leading-10 whitespace-pre-line text-zinc-800">
        {parts.map((p, i) => {
          const m = p.match(/^\{\{(\d+)\}\}$/);
          if (!m) return <Inline key={i} text={p} />;
          const gi = Number(m[1]);
          const accepted = exercise.answers[gi] ?? [];
          const ok = isGapCorrect(values[gi] ?? "", accepted);
          const width = Math.max(6, Math.min(22, Math.max(...accepted.map((a) => a.length)) + 3));
          return (
            <Fragment key={i}>
              <span className="inline-flex items-baseline gap-1">
                <span className="text-xs text-zinc-400" aria-hidden="true">
                  {gi + 1}
                </span>
                <input
                  type="text"
                  aria-label={`Gap ${gi + 1}`}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  value={values[gi] ?? ""}
                  disabled={checked}
                  onFocus={() => (lastFocused.current = gi)}
                  onChange={(e) => setValues((v) => ({ ...v, [gi]: e.target.value }))}
                  style={{ width: `${width}ch` }}
                  className={cn(
                    "h-8 max-w-full rounded-md border bg-white px-2 text-base leading-none outline-none transition-colors duration-150 focus:border-accent",
                    !checked && "border-zinc-300",
                    checked && ok && "border-emerald-400 bg-emerald-50 text-emerald-800",
                    checked && !ok && "border-rose-400 bg-rose-50 text-rose-800",
                  )}
                />
                {checked && !ok && showAnswers && (
                  <span className="text-sm font-medium text-success">{accepted[0]}</span>
                )}
              </span>
            </Fragment>
          );
        })}
      </div>
    </ExerciseShell>
  );
}
