"use client";

import { useSyncExternalStore } from "react";
import { SERVER_CLOUD_STATE, getCloudState, subscribeCloud } from "@/lib/cloud";

/** Sign-in and sync state for Supabase cloud sync. */
export function useCloud() {
  return useSyncExternalStore(subscribeCloud, getCloudState, () => SERVER_CLOUD_STATE);
}
