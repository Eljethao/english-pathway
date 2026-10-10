"use client";

import { useMemo, useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { toggleSavedWord } from "@/lib/progress";
import type { VocabItem, VocabList } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Tabs } from "@/components/ui/Tabs";
import { IconBookmark, IconSearch } from "@/components/ui/icons";
import { PlayButton } from "@/components/media/TtsPlayer";
import { Flashcards } from "./Flashcards";

export function VocabularyBrowser({ lessonLists, topicLists }: { lessonLists: VocabList[]; topicLists: VocabList[] }) {
  const progress = useProgress();
  const [tab, setTab] = useState<"lists" | "flashcards" | "saved">("lists");
  const all = useMemo(() => [...topicLists, ...lessonLists], [topicLists, lessonLists]);
  const [listId, setListId] = useState(all[0]?.id ?? "");
  const [query, setQuery] = useState("");

  const dictionary = useMemo(() => {
    const d: Record<string, VocabItem> = {};
    for (const l of all) for (const w of l.words) d[w.word] ??= w;
    return d;
  }, [all]);

  const q = query.trim().toLowerCase();
  const list = all.find((l) => l.id === listId) ?? all[0];
  const words = q
    ? Object.values(dictionary).filter((w) => `${w.word} ${w.meaning}`.toLowerCase().includes(q))
    : tab === "saved"
      ? progress.savedWords.map((w) => dictionary[w]).filter(Boolean)
      : list.words;

  return (
    <div id="flashcards" className="scroll-mt-24">
      <Tabs
        label="Vocabulary view"
        value={tab}
        onChange={setTab}
        options={[
          { value: "lists", label: "Word lists" },
          { value: "saved", label: `My words (${progress.savedWords.length})` },
          { value: "flashcards", label: "Flashcards" },
        ]}
      />
      <div className="mt-6">
        {tab === "flashcards" ? (
          <Flashcards dictionary={dictionary} />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
            {tab === "lists" && (
              <nav aria-label="Word lists" className="min-w-0 space-y-5">
                {[
                  { title: "Exam topics", lists: topicLists },
                  { title: "From the lessons", lists: lessonLists },
                ].map((g) => (
                  <div key={g.title}>
                    <div className="mb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase">{g.title}</div>
                    <ul className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                      {g.lists.map((l) => (
                        <li key={l.id} className="shrink-0">
                          <button
                            type="button"
                            aria-current={l.id === list.id && !q}
                            onClick={() => {
                              setListId(l.id);
                              setQuery("");
                            }}
                            className={cn(
                              "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors duration-150",
                              l.id === list.id && !q ? "bg-surface font-medium text-ink" : "text-zinc-600 hover:bg-surface",
                            )}
                          >
                            <span>{l.title}</span>
                            <span className="text-xs text-zinc-400">{l.level}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            )}
            <div className={cn("min-w-0", tab === "saved" && "lg:col-span-2")}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">
                    {q ? `Results for “${query.trim()}”` : tab === "saved" ? "My words" : list.title}
                  </h2>
                  {!q && tab === "lists" && <p className="text-sm text-zinc-500">{list.description}</p>}
                </div>
                <label className="relative w-full sm:w-64">
                  <span className="sr-only">Search all words</span>
                  <IconSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search all words"
                    className="h-9 w-full rounded-lg border border-line pr-3 pl-9 text-sm outline-none focus:border-accent"
                  />
                </label>
              </div>
              {words.length ? (
                <ul className="divide-y divide-line rounded-lg border border-line">
                  {words.map((w) => {
                    const saved = progress.savedWords.includes(w.word);
                    return (
                      <li key={w.word} className="flex items-start gap-3 px-4 py-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <span className="font-semibold text-ink">{w.word}</span>
                            {w.level && <span className="text-xs text-zinc-400">{w.level}</span>}
                          </div>
                          <p className="text-sm text-zinc-600">{w.meaning}</p>
                          <p className="mt-0.5 text-sm text-zinc-500 italic">“{w.example}”</p>
                        </div>
                        <PlayButton text={w.word} label="Say" className="h-8 px-2" />
                        <button
                          type="button"
                          onClick={() => toggleSavedWord(w.word)}
                          aria-pressed={saved}
                          aria-label={saved ? `Remove ${w.word}` : `Save ${w.word}`}
                          className={cn(
                            "inline-flex size-8 shrink-0 items-center justify-center rounded-lg border",
                            saved ? "border-blue-200 bg-accent-soft text-accent" : "border-line text-zinc-400 hover:text-ink",
                          )}
                        >
                          <IconBookmark filled={saved} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="rounded-xl border border-dashed border-line p-10 text-center text-zinc-500">
                  {tab === "saved" && !q ? "No saved words yet." : "No words found."}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
