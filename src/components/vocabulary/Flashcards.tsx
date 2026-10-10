"use client";

import { useMemo, useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { reviewFlashcard } from "@/lib/progress";
import type { VocabItem } from "@/lib/types";
import { today } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { PlayButton } from "@/components/media/TtsPlayer";

/** Leitner flashcards: cards in lower boxes come back sooner. */
export function Flashcards({ dictionary }: { dictionary: Record<string, VocabItem> }) {
  const progress = useProgress();
  const [flipped, setFlipped] = useState(false);
  const [practiseAll, setPractiseAll] = useState(false);
  const t = today();

  const cards = progress.savedWords.filter((w) => dictionary[w]);
  const due = useMemo(
    () =>
      cards
        .filter((w) => practiseAll || (progress.flashcards[w]?.due ?? t) <= t)
        .sort((a, b) => (progress.flashcards[a]?.box ?? 1) - (progress.flashcards[b]?.box ?? 1)),
    [cards, progress.flashcards, practiseAll, t],
  );
  const boxes = [1, 2, 3, 4, 5].map((b) => cards.filter((w) => (progress.flashcards[w]?.box ?? 1) === b).length);

  if (!cards.length)
    return (
      <p className="rounded-xl border border-dashed border-line p-10 text-center text-zinc-500">
        You have not saved any words yet. Use the bookmark button on a word to add it to your flashcards.
      </p>
    );

  const word = due[0];
  const item = word ? dictionary[word] : undefined;
  const answer = (knew: boolean) => {
    setFlipped(false);
    reviewFlashcard(word, knew);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_16rem]">
      <div>
        {item ? (
          <div className="rounded-lg border border-line">
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              aria-label={flipped ? "Show the word" : "Show the meaning"}
              className="flex min-h-64 w-full flex-col items-center justify-center gap-3 rounded-t-2xl p-8 text-center hover:bg-surface"
            >
              {!flipped ? (
                <>
                  <span className="text-3xl font-display-heading text-ink">{item.word}</span>
                  <span className="text-sm text-zinc-400">Do you know what it means? Tap to check.</span>
                </>
              ) : (
                <>
                  <span className="text-lg font-semibold text-ink">{item.word}</span>
                  <span className="max-w-md text-lg text-zinc-700">{item.meaning}</span>
                  <span className="max-w-md text-sm text-zinc-500 italic">“{item.example}”</span>
                </>
              )}
            </button>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line p-4">
              <PlayButton text={item.word} label="Say it" />
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => answer(false)}>
                  Not yet
                </Button>
                <Button onClick={() => answer(true)}>I knew it</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-line p-10 text-center">
            <p className="text-lg font-semibold">All done for today</p>
            <p className="mt-1 text-sm text-zinc-500">Come back tomorrow for your next review.</p>
            <Button variant="secondary" className="mt-4" onClick={() => setPractiseAll(true)}>
              Practise all saved words anyway
            </Button>
          </div>
        )}
        <p className="mt-3 text-sm text-zinc-500" aria-live="polite">
          {due.length} card{due.length === 1 ? "" : "s"} to review{practiseAll ? " (practising all)" : " today"}
        </p>
      </div>
      <aside className="rounded-lg border border-line p-5">
        <h3 className="font-semibold">Leitner boxes</h3>
        <p className="mt-1 text-xs text-zinc-500">
          Correct answers move a card up a box and it comes back later. Wrong answers send it back to box 1.
        </p>
        <ul className="mt-4 space-y-2">
          {boxes.map((n, i) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              <span className="w-12 text-zinc-500">Box {i + 1}</span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100">
                <span className="block h-full rounded-full bg-accent" style={{ width: `${cards.length ? (n / cards.length) * 100 : 0}%` }} />
              </span>
              <span className="w-6 text-right tabular-nums">{n}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
