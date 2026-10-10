"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Countdown (when `seconds` is given) or stopwatch.
 * `remaining` counts down for countdowns; `elapsed` always counts up.
 */
export function useTimer({ seconds, onEnd }: { seconds?: number; onEnd?: () => void } = {}) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const startRef = useRef(0);
  const baseRef = useRef(0);
  const onEndRef = useRef(onEnd);
  useEffect(() => {
    onEndRef.current = onEnd;
  });

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const e = baseRef.current + (Date.now() - startRef.current) / 1000;
      if (seconds !== undefined && e >= seconds) {
        setElapsed(seconds);
        setRunning(false);
        onEndRef.current?.();
      } else {
        setElapsed(e);
      }
    }, 200);
    return () => clearInterval(id);
  }, [running, seconds]);

  const start = useCallback(() => {
    startRef.current = Date.now();
    setRunning(true);
  }, []);

  const pause = useCallback(() => {
    setRunning((r) => {
      if (r) baseRef.current += (Date.now() - startRef.current) / 1000;
      return false;
    });
  }, []);

  const reset = useCallback(() => {
    baseRef.current = 0;
    setElapsed(0);
    setRunning(false);
  }, []);

  return {
    elapsed,
    remaining: seconds !== undefined ? Math.max(0, seconds - elapsed) : undefined,
    running,
    start,
    pause,
    reset,
  };
}
