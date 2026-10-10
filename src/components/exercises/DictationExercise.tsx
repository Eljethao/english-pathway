"use client";

import { useState } from "react";
import type { DictationExercise as DictationType, Voice } from "@/lib/types";
import { cn, words } from "@/lib/utils";
import { PlayButton, SpeedAccent } from "@/components/media/TtsPlayer";
import { ExerciseShell, useExerciseScore } from "./ExerciseShell";

/** Marks which words of the target sentence the learner typed (longest common subsequence). */
export function diffWords(target: string, typed: string) {
  const t = target.split(/\s+/).filter(Boolean);
  const tk = t.map((w) => words(w).join("").replace(/-/g, ""));
  const yn = words(typed).map((w) => w.replace(/-/g, ""));
  const dp = Array.from({ length: tk.length + 1 }, () => new Array(yn.length + 1).fill(0));
  for (let i = tk.length - 1; i >= 0; i--)
    for (let j = yn.length - 1; j >= 0; j--)
      dp[i][j] = tk[i] === yn[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(t.length).fill(false);
  let i = 0;
  let j = 0;
  while (i < tk.length && j < yn.length) {
    if (tk[i] === yn[j]) {
      hit[i] = true;
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  const scorable = tk.filter(Boolean).length;
  return { tokens: t, hit, correct: hit.filter((h, k) => h && tk[k]).length, total: scorable };
}

export function DictationExercise({ exercise }: { exercise: DictationType }) {
  const [values, setValues] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [rate, setRate] = useState(1);
  const [accent, setAccent] = useState<Voice>(exercise.voice ?? "us");
  const { save } = useExerciseScore(exercise.id);

  const results = exercise.sentences.map((s, i) => diffWords(s, values[i] ?? ""));
  const correct = results.reduce((n, r) => n + r.correct, 0);
  const total = results.reduce((n, r) => n + r.total, 0);

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
        setValues({});
      }}
    >
      <div className="mb-4">
        <SpeedAccent rate={rate} setRate={setRate} accent={accent} setAccent={setAccent} />
      </div>
      <ol className="space-y-4">
        {exercise.sentences.map((s, i) => (
          <li key={i} className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 text-zinc-400">{i + 1}.</span>
              <PlayButton text={s} label={`Play sentence ${i + 1}`} accent={accent} rate={rate} />
            </div>
            <textarea
              rows={2}
              aria-label={`Type sentence ${i + 1}`}
              value={values[i] ?? ""}
              disabled={checked}
              autoCapitalize="off"
              spellCheck={false}
              onChange={(e) => setValues((v) => ({ ...v, [i]: e.target.value }))}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-base outline-none focus:border-accent disabled:bg-surface"
              placeholder="Type what you hear…"
            />
            {checked && (
              <p className="rounded-lg bg-surface px-3 py-2 text-sm leading-7">
                {results[i].tokens.map((w, k) => (
                  <span key={k} className={cn(results[i].hit[k] ? "text-emerald-700" : "rounded bg-rose-100 px-0.5 text-rose-700")}>
                    {w}{" "}
                  </span>
                ))}
                <span className="ml-1 text-xs text-zinc-500">
                  ({results[i].correct}/{results[i].total} words)
                </span>
              </p>
            )}
          </li>
        ))}
      </ol>
    </ExerciseShell>
  );
}
