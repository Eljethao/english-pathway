/*
 * AI speaking feedback: shared types plus the browser side (WAV conversion and the request).
 * The server side is src/app/api/speaking-feedback/route.ts, which calls Gemini.
 */

import type { Level, Voice } from "./types";

export type FeedbackMode = "shadow" | "speak";

export interface FeedbackRequest {
  mode: FeedbackMode;
  /** shadow: the sentence the learner tried to repeat. speak: the task prompt. */
  text: string;
  level?: Level;
  /** shadow: the accent of the model they copied. */
  accent?: Voice;
}

export interface WordIssue {
  word: string;
  /** What it sounded like, e.g. "tree" for "three". Empty when not useful. */
  heard: string;
  issue: string;
  tip: string;
}

export interface SpeakingFeedback {
  speechDetected: boolean;
  transcript: string;
  /** 0–100 each. */
  scores: { pronunciation: number; fluency: number; intonation: number };
  /** How the learner's accent affects clarity (not how "native" it sounds). */
  accent: string;
  words: WordIssue[];
  strengths: string[];
  tips: string[];
  /** speak mode: one sentence on whether the answer addressed the task. */
  taskComment: string;
  model: string;
}

/** Longest recording we send (the longest task is 120 s). */
export const MAX_SECONDS = 150;
/** 16 kHz mono 16-bit WAV is 32 kB per second: 150 s is about 4.8 MB. */
export const MAX_UPLOAD_BYTES = 5_000_000;

export type FeedbackErrorKind = "not-configured" | "rate-limited" | "quota" | "too-long" | "no-audio" | "failed";

export class FeedbackError extends Error {
  constructor(readonly kind: FeedbackErrorKind) {
    super(kind);
  }
}

export const FEEDBACK_ERROR_TEXT: Record<FeedbackErrorKind, string> = {
  "not-configured": "AI feedback is not switched on for this site yet.",
  "rate-limited": "You have asked for a lot of feedback in a short time. Wait a few minutes, then try again.",
  quota: "The free AI service is busy right now. Please try again later.",
  "too-long": "The recording is too long for AI feedback (2½ minutes at most).",
  "no-audio": "We could not read the recording. Record again and retry.",
  failed: "AI feedback failed. Check your connection and try again.",
};

/* ---------- browser: recording → 16 kHz mono WAV ---------- */

const TARGET_RATE = 16_000;

/**
 * MediaRecorder gives WebM/Opus (Chrome, Firefox) or MP4/AAC (Safari). Gemini documents WAV, MP3, AAC, OGG and FLAC,
 * so we decode in the browser and send a small mono WAV that works the same everywhere.
 */
export async function toWav(blob: Blob): Promise<{ wav: Blob; seconds: number }> {
  const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new Ctx();
  let decoded: AudioBuffer;
  try {
    decoded = await ctx.decodeAudioData(await blob.arrayBuffer());
  } catch {
    throw new FeedbackError("no-audio");
  } finally {
    void ctx.close();
  }
  if (decoded.duration > MAX_SECONDS) throw new FeedbackError("too-long");
  const frames = Math.ceil(decoded.duration * TARGET_RATE);
  if (!frames) throw new FeedbackError("no-audio");
  const offline = new OfflineAudioContext(1, frames, TARGET_RATE);
  const src = offline.createBufferSource();
  src.buffer = decoded;
  src.connect(offline.destination); // down-mixes to mono and resamples
  src.start();
  const pcm = (await offline.startRendering()).getChannelData(0);

  const buf = new ArrayBuffer(44 + pcm.length * 2);
  const v = new DataView(buf);
  const str = (o: number, s: string) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
  str(0, "RIFF");
  v.setUint32(4, 36 + pcm.length * 2, true);
  str(8, "WAVE");
  str(12, "fmt ");
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true); // PCM
  v.setUint16(22, 1, true); // mono
  v.setUint32(24, TARGET_RATE, true);
  v.setUint32(28, TARGET_RATE * 2, true);
  v.setUint16(32, 2, true);
  v.setUint16(34, 16, true);
  str(36, "data");
  v.setUint32(40, pcm.length * 2, true);
  for (let i = 0; i < pcm.length; i++) {
    const s = Math.max(-1, Math.min(1, pcm[i]));
    v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return { wav: new Blob([buf], { type: "audio/wav" }), seconds: decoded.duration };
}

/** Sends a recording for AI feedback. Throws FeedbackError. */
export async function requestFeedback(recording: Blob, req: FeedbackRequest): Promise<SpeakingFeedback> {
  const { wav } = await toWav(recording);
  const form = new FormData();
  form.set("audio", wav, "recording.wav");
  form.set("mode", req.mode);
  form.set("text", req.text);
  if (req.level) form.set("level", req.level);
  if (req.accent) form.set("accent", req.accent);
  let res: Response;
  try {
    res = await fetch("/api/speaking-feedback", { method: "POST", body: form });
  } catch {
    throw new FeedbackError("failed");
  }
  if (res.ok) return (await res.json()) as SpeakingFeedback;
  const { error } = (await res.json().catch(() => ({}))) as { error?: FeedbackErrorKind };
  throw new FeedbackError(error && error in FEEDBACK_ERROR_TEXT ? error : "failed");
}
