"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useProgress } from "@/hooks/useProgress";
import { completeLesson, setLastLesson, toggleSavedWord, uncompleteLesson } from "@/lib/progress";
import type { VocabItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconBookmark, IconCheck } from "@/components/ui/icons";
import { PlayButton } from "@/components/media/TtsPlayer";

/** Remembers the last opened lesson for "continue where you left off". */
export function LessonTracker({ slug }: { slug: string }) {
  useEffect(() => setLastLesson(slug), [slug]);
  return null;
}

export function CompleteButton({ slug, gradedIds }: { slug: string; gradedIds: string[] }) {
  const progress = useProgress();
  const done = progress.completed[slug];
  const scores = gradedIds.map((id) => progress.exerciseScores[`${slug}/${id}`]).filter((s): s is number => s !== undefined);
  const average = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : undefined;

  return (
    <div className="flex flex-wrap items-center gap-3" aria-live="polite">
      {done ? (
        <>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-emerald-100">
            <IconCheck /> Completed{done.score !== undefined ? ` · ${done.score}%` : ""}
          </span>
          <Button variant="ghost" size="sm" onClick={() => uncompleteLesson(slug)}>
            Undo
          </Button>
          {average !== undefined && average !== done.score && (
            <Button variant="ghost" size="sm" onClick={() => completeLesson(slug, average)}>
              Update score ({average}%)
            </Button>
          )}
        </>
      ) : (
        <>
          <Button size="lg" onClick={() => completeLesson(slug, average)}>
            <IconCheck /> Mark as complete
          </Button>
          <span className="text-sm text-zinc-500">
            {scores.length
              ? `Exercise score so far: ${average}% (${scores.length} of ${gradedIds.length} checked)`
              : gradedIds.length
                ? "Check your answers in the practice exercises to record a score."
                : "This lesson is self-assessed."}
          </span>
        </>
      )}
    </div>
  );
}

export function VocabList({ items }: { items: (VocabItem & { level: string })[] }) {
  const progress = useProgress();
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((v) => {
        const saved = progress.savedWords.includes(v.word);
        return (
          <li key={v.word} className="rounded-lg border border-line bg-white p-4 shadow-soft">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-semibold text-ink">{v.word}</div>
                <div className="mt-0.5 text-sm text-zinc-600">{v.meaning}</div>
              </div>
              <div className="flex shrink-0 gap-1">
                <PlayButton text={v.word} label="Say" className="h-8 px-2" />
                <button
                  type="button"
                  onClick={() => toggleSavedWord(v.word)}
                  aria-pressed={saved}
                  aria-label={saved ? `Remove ${v.word} from your word list` : `Save ${v.word} to your word list`}
                  className={cn(
                    "inline-flex size-8 items-center justify-center rounded-full border transition-colors duration-150",
                    saved ? "border-blue-200 bg-accent-soft text-accent" : "border-line text-zinc-400 hover:text-ink",
                  )}
                >
                  <IconBookmark filled={saved} />
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm text-zinc-500 italic">“{v.example}”</p>
          </li>
        );
      })}
    </ul>
  );
}

export function SaveAllWords({ words }: { words: string[] }) {
  const progress = useProgress();
  const missing = words.filter((w) => !progress.savedWords.includes(w));
  if (!missing.length)
    return (
      <Link href="/vocabulary#flashcards" className="text-sm font-medium text-accent hover:underline">
        All saved · Review flashcards
      </Link>
    );
  return (
    <Button variant="secondary" size="sm" onClick={() => missing.forEach(toggleSavedWord)}>
      <IconBookmark /> Save all {missing.length} words
    </Button>
  );
}

export function CompletedDot({ slug }: { slug: string }) {
  const progress = useProgress();
  if (!progress.completed[slug]) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-1.5 py-0.5 text-[0.7rem] font-bold text-emerald-800">
      <IconCheck /> Completed
    </span>
  );
}
