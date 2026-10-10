"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { isTtsSupported, parseTranscript, speakLines, type SpokenLine } from "@/lib/speech";
import type { Cast, Voice } from "@/lib/types";
import { useHydrated } from "./useProgress";

/** Text-to-speech playback state for one piece of text. */
export function useSpeech() {
  const hydrated = useHydrated();
  const [speaking, setSpeaking] = useState(false);
  const [line, setLine] = useState(-1);
  const [paused, setPaused] = useState(false);
  const cancelRef = useRef<(() => void) | null>(null);

  const stop = useCallback(() => {
    cancelRef.current?.();
    cancelRef.current = null;
    setSpeaking(false);
    setPaused(false);
    setLine(-1);
  }, []);

  const pause = useCallback(() => {
    speechSynthesis.pause();
    setPaused(true);
  }, []);

  const resume = useCallback(() => {
    speechSynthesis.resume();
    setPaused(false);
  }, []);

  const play = useCallback(
    async (text: string | SpokenLine[], opts: { accent?: Voice; rate?: number; cast?: Cast } = {}) => {
      cancelRef.current?.();
      const lines = typeof text === "string" ? parseTranscript(text) : text;
      setSpeaking(true);
      setPaused(false);
      cancelRef.current = await speakLines(lines, {
        ...opts,
        onLine: setLine,
        onEnd: () => {
          setSpeaking(false);
          setPaused(false);
          setLine(-1);
        },
      });
    },
    [],
  );

  useEffect(() => () => cancelRef.current?.(), []);

  return { supported: hydrated && isTtsSupported(), hydrated, speaking, paused, line, play, stop, pause, resume };
}
