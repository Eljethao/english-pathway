"use client";

import { useSyncExternalStore } from "react";
import { getProgress, getServerProgress, subscribe } from "@/lib/progress";

/** Current learner progress. Returns empty progress during server render and hydration. */
export function useProgress() {
  return useSyncExternalStore(subscribe, getProgress, getServerProgress);
}

const noop = () => () => {};

/** False during server render and hydration, true afterwards. */
export function useHydrated() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
