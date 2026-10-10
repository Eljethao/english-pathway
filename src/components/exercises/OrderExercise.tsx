"use client";

import { useMemo, useState } from "react";
import type { OrderExercise as OrderType } from "@/lib/types";
import { cn, seededShuffle } from "@/lib/utils";
import { Inline } from "@/components/lesson/RichText";
import { IconArrowLeft, IconChevronDown, IconGrip } from "@/components/ui/icons";
import { Explanation, ExerciseShell, useExerciseScore } from "./ExerciseShell";

export function OrderExercise({ exercise }: { exercise: OrderType }) {
  return exercise.mode === "words" ? <WordOrder exercise={exercise} /> : <LineOrder exercise={exercise} />;
}

/** "Build a Sentence": tap words to place them, tap again to remove. */
function WordOrder({ exercise }: { exercise: OrderType }) {
  const pool = useMemo(
    () => seededShuffle(exercise.items.map((_, i) => i), exercise.id + exercise.items.join()),
    [exercise],
  );
  const [placed, setPlaced] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const { save } = useExerciseScore(exercise.id);
  const total = exercise.items.length;
  const correct = placed.filter((idx, pos) => exercise.items[idx] === exercise.items[pos]).length;
  const allRight = correct === total;

  return (
    <ExerciseShell
      exercise={exercise}
      label="Build a sentence"
      checked={checked}
      result={{ correct: allRight ? 1 : 0, total: 1 }}
      canCheck={placed.length === total}
      onCheck={() => {
        setChecked(true);
        save(allRight ? 1 : 0, 1);
      }}
      onReset={() => {
        setChecked(false);
        setPlaced([]);
      }}
    >
      <div
        className={cn(
          "flex min-h-14 flex-wrap items-center gap-2 rounded-lg border border-dashed p-2",
          checked ? (allRight ? "border-emerald-400 bg-emerald-50" : "border-rose-400 bg-rose-50") : "border-zinc-300",
        )}
        aria-label="Your sentence"
      >
        {placed.length === 0 && <span className="px-2 text-sm text-zinc-400">Tap the words below in the right order</span>}
        {placed.map((idx) => (
          <button
            key={idx}
            type="button"
            disabled={checked}
            onClick={() => setPlaced((p) => p.filter((x) => x !== idx))}
            className="rounded-md border border-line bg-white px-2.5 py-1 text-sm shadow-sm hover:border-zinc-300"
          >
            {exercise.items[idx]}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2" aria-label="Words">
        {pool.map((idx) => {
          const used = placed.includes(idx);
          return (
            <button
              key={idx}
              type="button"
              disabled={used || checked}
              onClick={() => setPlaced((p) => [...p, idx])}
              className={cn(
                "rounded-md border px-2.5 py-1 text-sm transition-colors duration-150",
                used ? "border-transparent bg-surface text-transparent" : "border-line bg-white hover:border-zinc-300",
              )}
            >
              {exercise.items[idx]}
            </button>
          );
        })}
      </div>
      {checked && !allRight && (
        <Explanation>
          <span className="font-medium text-ink">Correct: </span>
          {exercise.items.join(" ")}
        </Explanation>
      )}
    </ExerciseShell>
  );
}

/** Reorder a list by dragging or with the move buttons (keyboard friendly). */
function LineOrder({ exercise }: { exercise: OrderType }) {
  const initial = useMemo(
    () => seededShuffle(exercise.items.map((_, i) => i), exercise.id + exercise.items.join()),
    [exercise],
  );
  const [order, setOrder] = useState(initial);
  const [checked, setChecked] = useState(false);
  const [dragging, setDragging] = useState<number | null>(null);
  const [announce, setAnnounce] = useState("");
  const { save } = useExerciseScore(exercise.id);
  const total = order.length;
  const correct = order.filter((idx, pos) => idx === pos).length;

  const move = (from: number, to: number) => {
    if (to < 0 || to >= order.length || from === to) return;
    setOrder((o) => {
      const next = [...o];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
    setAnnounce(`Moved to position ${to + 1} of ${order.length}`);
  };

  return (
    <ExerciseShell
      exercise={exercise}
      checked={checked}
      result={{ correct, total }}
      onCheck={() => {
        setChecked(true);
        save(correct, total);
      }}
      onReset={() => {
        setChecked(false);
        setOrder(initial);
      }}
    >
      <p className="sr-only" aria-live="polite">
        {announce}
      </p>
      <ol className="space-y-2">
        {order.map((idx, pos) => {
          const ok = idx === pos;
          return (
            <li
              key={idx}
              draggable={!checked}
              onDragStart={() => setDragging(pos)}
              onDragOver={(e) => {
                e.preventDefault();
                if (dragging !== null && dragging !== pos) {
                  move(dragging, pos);
                  setDragging(pos);
                }
              }}
              onDragEnd={() => setDragging(null)}
              className={cn(
                "flex items-start gap-2 rounded-lg border bg-white px-2 py-2 text-sm transition-colors duration-150",
                !checked && "cursor-grab active:cursor-grabbing",
                dragging === pos && "border-accent bg-accent-soft",
                !checked && dragging !== pos && "border-line",
                checked && (ok ? "border-emerald-300 bg-emerald-50" : "border-rose-300 bg-rose-50"),
              )}
            >
              {!checked && <IconGrip className="mt-0.5 shrink-0 text-zinc-300" />}
              <span className="w-5 shrink-0 font-medium text-zinc-400">{pos + 1}</span>
              <span className="flex-1 text-zinc-800">
                <Inline text={exercise.items[idx]} />
              </span>
              {checked && !ok && <span className="shrink-0 text-xs font-medium text-success">should be {idx + 1}</span>}
              {!checked && (
                <span className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    aria-label={`Move up: ${exercise.items[idx].slice(0, 40)}`}
                    onClick={() => move(pos, pos - 1)}
                    disabled={pos === 0}
                    className="rounded p-1 text-zinc-500 hover:bg-surface hover:text-ink disabled:opacity-30"
                  >
                    <IconArrowLeft className="rotate-90" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Move down: ${exercise.items[idx].slice(0, 40)}`}
                    onClick={() => move(pos, pos + 1)}
                    disabled={pos === order.length - 1}
                    className="rounded p-1 text-zinc-500 hover:bg-surface hover:text-ink disabled:opacity-30"
                  >
                    <IconChevronDown />
                  </button>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </ExerciseShell>
  );
}
