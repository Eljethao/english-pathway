"use client";

import { useEffect } from "react";
import { startCloud } from "@/lib/cloud";

/** Mounted once in the root layout: restores the session and keeps progress in sync. */
export function CloudSync() {
  useEffect(() => startCloud(), []);
  return null;
}
