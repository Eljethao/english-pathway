import type { Level, Progress } from "./types";
import { addDays, today } from "./utils";

const KEY = "english-pathway:progress";
/** Leitner box intervals in days (box 1 → review tomorrow … box 5 → in 16 days). */
const BOX_DAYS = [0, 1, 2, 4, 8, 16];

export const EMPTY_PROGRESS: Progress = Object.freeze({
  version: 1,
  completed: {},
  exerciseScores: {},
  savedWords: [],
  flashcards: {},
  streak: { current: 0, longest: 0, lastActive: "" },
}) as Progress;

/* ---------- storage (safe: private mode / blocked storage never throws) ---------- */

let cache: { raw: string | null; value: Progress } = { raw: null, value: EMPTY_PROGRESS };
const listeners = new Set<() => void>();

function readRaw() {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function migrate(data: unknown): Progress {
  if (!data || typeof data !== "object") return EMPTY_PROGRESS;
  const d = data as Partial<Progress>;
  return {
    version: 1,
    completed: d.completed ?? {},
    exerciseScores: d.exerciseScores ?? {},
    savedWords: Array.isArray(d.savedWords) ? d.savedWords : [],
    flashcards: d.flashcards ?? {},
    streak: { current: 0, longest: 0, lastActive: "", ...d.streak },
    placementLevel: d.placementLevel,
    placementDate: d.placementDate,
    placementAreas: d.placementAreas,
    lastLesson: d.lastLesson,
  };
}

export function getProgress(): Progress {
  const raw = readRaw();
  if (raw === cache.raw) return cache.value;
  let value = EMPTY_PROGRESS;
  try {
    value = raw ? migrate(JSON.parse(raw)) : EMPTY_PROGRESS;
  } catch {
    value = EMPTY_PROGRESS;
  }
  cache = { raw, value };
  return value;
}

export function getServerProgress(): Progress {
  return EMPTY_PROGRESS;
}

function save(next: Progress) {
  const raw = JSON.stringify(next);
  try {
    window.localStorage.setItem(KEY, raw);
  } catch {
    // Storage unavailable: keep the change for this session only.
  }
  // If storage failed, readRaw() still returns the old value, so the cache keeps `next` for this session.
  cache = { raw: readRaw(), value: next };
  listeners.forEach((l) => l());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => e.key === KEY && listener();
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function update(fn: (p: Progress) => Progress) {
  save(fn(getProgress()));
}

/* ---------- actions ---------- */

function withStreak(p: Progress): Progress {
  const t = today();
  const { current, longest, lastActive } = p.streak;
  if (lastActive === t) return p;
  const next = lastActive === addDays(t, -1) ? current + 1 : 1;
  return { ...p, streak: { current: next, longest: Math.max(longest, next), lastActive: t } };
}

export function completeLesson(slug: string, score?: number) {
  update((p) => withStreak({ ...p, completed: { ...p.completed, [slug]: { date: today(), score } } }));
}

export function uncompleteLesson(slug: string) {
  update((p) => {
    const completed = { ...p.completed };
    delete completed[slug];
    return { ...p, completed };
  });
}

export function setExerciseScore(key: string, score: number) {
  update((p) => withStreak({ ...p, exerciseScores: { ...p.exerciseScores, [key]: score } }));
}

export function setLastLesson(slug: string) {
  if (getProgress().lastLesson === slug) return;
  update((p) => ({ ...p, lastLesson: slug }));
}

export function toggleSavedWord(word: string) {
  update((p) => {
    const saved = p.savedWords.includes(word);
    const flashcards = { ...p.flashcards };
    if (saved) delete flashcards[word];
    else flashcards[word] = { box: 1, due: today() };
    return {
      ...p,
      savedWords: saved ? p.savedWords.filter((w) => w !== word) : [...p.savedWords, word],
      flashcards,
    };
  });
}

/** Leitner review: correct moves the card up a box, wrong sends it back to box 1. */
export function reviewFlashcard(word: string, knewIt: boolean) {
  update((p) => {
    const card = p.flashcards[word] ?? { box: 1, due: today() };
    const box = knewIt ? Math.min(card.box + 1, 5) : 1;
    return withStreak({ ...p, flashcards: { ...p.flashcards, [word]: { box, due: addDays(today(), BOX_DAYS[box]) } } });
  });
}

export function setPlacementLevel(level: Level, areas?: Progress["placementAreas"]) {
  update((p) => withStreak({ ...p, placementLevel: level, placementDate: today(), placementAreas: areas }));
}

export function exportProgress() {
  return JSON.stringify(getProgress(), null, 2);
}

export function importProgress(json: string) {
  const data = JSON.parse(json);
  if (!data || data.version !== 1 || typeof data.completed !== "object") {
    throw new Error("This file is not an English Pathway progress file.");
  }
  save(migrate(data));
}

export function resetProgress() {
  save(EMPTY_PROGRESS);
}

/* ---------- cloud sync helpers ---------- */

/** Validates unknown data (e.g. from the cloud) into a Progress object. */
export function parseProgress(data: unknown): Progress {
  return migrate(data);
}

/** Replaces local progress, e.g. after merging with the cloud copy. */
export function replaceProgress(next: Progress) {
  save(next);
}

/**
 * Combines two copies of progress (this device and another one) without losing work:
 * newest completion, best score, union of saved words, most advanced flashcard, longest streak.
 */
export function mergeProgress(local: Progress, remote: Progress): Progress {
  const completed = { ...remote.completed };
  for (const [slug, entry] of Object.entries(local.completed)) {
    const other = completed[slug];
    if (!other || entry.date > other.date || (entry.date === other.date && (entry.score ?? -1) >= (other.score ?? -1)))
      completed[slug] = entry;
  }

  const exerciseScores = { ...remote.exerciseScores };
  for (const [key, score] of Object.entries(local.exerciseScores))
    exerciseScores[key] = Math.max(score, exerciseScores[key] ?? 0);

  const savedWords = [...new Set([...local.savedWords, ...remote.savedWords])];
  const flashcards: Progress["flashcards"] = {};
  for (const w of savedWords) {
    const a = local.flashcards[w];
    const b = remote.flashcards[w];
    flashcards[w] = !a ? b : !b ? a : a.due > b.due || (a.due === b.due && a.box >= b.box) ? a : b;
    if (!flashcards[w]) flashcards[w] = { box: 1, due: today() };
  }

  const newer = local.streak.lastActive >= remote.streak.lastActive ? local.streak : remote.streak;
  return {
    version: 1,
    completed,
    exerciseScores,
    savedWords,
    flashcards,
    streak: { ...newer, longest: Math.max(local.streak.longest, remote.streak.longest) },
    // The most recent placement result wins (older data has no date, so it loses to dated results).
    ...((remote.placementDate ?? "") > (local.placementDate ?? "") || !local.placementLevel
      ? {
          placementLevel: remote.placementLevel ?? local.placementLevel,
          placementDate: remote.placementDate ?? local.placementDate,
          placementAreas: remote.placementAreas ?? local.placementAreas,
        }
      : { placementLevel: local.placementLevel, placementDate: local.placementDate, placementAreas: local.placementAreas }),
    lastLesson: local.lastLesson ?? remote.lastLesson,
  };
}
