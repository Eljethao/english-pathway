"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getRecognitionCtor, isRecordingSupported, type Recognition } from "@/lib/speech";
import { useHydrated } from "./useProgress";

export type RecorderStatus = "idle" | "recording" | "stopped" | "denied" | "error";

/**
 * Records audio with MediaRecorder and, where supported, a live transcript with SpeechRecognition.
 * `onStop` receives each finished recording.
 */
export function useRecorder({ onStop }: { onStop?: (recording: Blob) => void } = {}) {
  const hydrated = useHydrated();
  const [status, setStatus] = useState<RecorderStatus>("idle");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [finalText, setFinalText] = useState("");
  const [interim, setInterim] = useState("");
  const [duration, setDuration] = useState(0);

  const mediaRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recogRef = useRef<Recognition | null>(null);
  const activeRef = useRef(false);
  const startedAt = useRef(0);
  const urlRef = useRef<string | null>(null);
  const onStopRef = useRef(onStop);
  useEffect(() => {
    onStopRef.current = onStop;
  });

  const cleanup = useCallback(() => {
    activeRef.current = false;
    recogRef.current?.abort();
    recogRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const start = useCallback(async () => {
    if (!isRecordingSupported()) {
      setStatus("error");
      return;
    }
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
    setAudioUrl(null);
    setAudioBlob(null);
    setFinalText("");
    setInterim("");
    setDuration(0);
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setStatus("denied");
      return;
    }
    streamRef.current = stream;
    const chunks: Blob[] = [];
    const rec = new MediaRecorder(stream);
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    rec.onstop = () => {
      const blob = new Blob(chunks, { type: rec.mimeType || "audio/webm" });
      const url = URL.createObjectURL(blob);
      urlRef.current = url;
      setAudioUrl(url);
      setAudioBlob(blob);
      onStopRef.current?.(blob);
    };
    mediaRef.current = rec;
    rec.start();
    startedAt.current = Date.now();
    activeRef.current = true;
    setStatus("recording");

    const Ctor = getRecognitionCtor();
    if (Ctor) {
      const startRecognition = () => {
        const r = new Ctor();
        r.lang = "en-US";
        r.continuous = true;
        r.interimResults = true;
        r.onresult = (e) => {
          let fin = "";
          let tmp = "";
          for (let i = e.resultIndex; i < e.results.length; i++) {
            const res = e.results[i];
            if (res.isFinal) fin += res[0].transcript + " ";
            else tmp += res[0].transcript;
          }
          if (fin) setFinalText((t) => (t + " " + fin).replace(/\s+/g, " ").trim());
          setInterim(tmp);
        };
        r.onerror = () => {};
        // Chrome ends recognition after silences; restart while still recording.
        r.onend = () => {
          if (activeRef.current) {
            try {
              startRecognition();
            } catch {
              /* ignore */
            }
          }
        };
        recogRef.current = r;
        try {
          r.start();
        } catch {
          /* already started */
        }
      };
      startRecognition();
    }
  }, []);

  const stop = useCallback(() => {
    if (!activeRef.current) return;
    setDuration((Date.now() - startedAt.current) / 1000);
    activeRef.current = false;
    if (mediaRef.current?.state === "recording") mediaRef.current.stop();
    recogRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
    setInterim("");
    setStatus("stopped");
  }, []);

  const reset = useCallback(() => {
    cleanup();
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
    setAudioUrl(null);
    setAudioBlob(null);
    setFinalText("");
    setInterim("");
    setDuration(0);
    setStatus("idle");
  }, [cleanup]);

  useEffect(
    () => () => {
      cleanup();
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    },
    [cleanup],
  );

  return {
    recordingSupported: hydrated && isRecordingSupported(),
    recognitionSupported: hydrated && getRecognitionCtor() !== null,
    status,
    audioUrl,
    /** The finished recording, for AI feedback. */
    audioBlob,
    transcript: (finalText + " " + interim).trim(),
    finalTranscript: finalText,
    duration,
    start,
    stop,
    reset,
  };
}
