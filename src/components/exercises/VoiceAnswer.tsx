"use client";

import { useState } from "react";
import { useHydrated } from "@/hooks/useProgress";
import { useRecorder } from "@/hooks/useRecorder";
import { FEEDBACK_ERROR_TEXT, FeedbackError, requestChoice, type FeedbackErrorKind } from "@/lib/ai-feedback";
import type { Level } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { IconMic, IconStop } from "@/components/ui/icons";
import { RecordingDot } from "@/components/media/Recorder";

type State =
  | { status: "idle" }
  | { status: "checking" }
  | { status: "heard"; option: number }
  | { status: "unclear"; transcript: string }
  | { status: "error"; kind: FeedbackErrorKind };

/**
 * Answer a multiple-choice question by voice: the learner records the word, AI decides which option it was,
 * and `onAnswer` receives that option. The recording is sent as soon as the learner stops.
 * `onFallback` asks the parent to show the clickable options instead (no microphone, or AI unavailable).
 */
export function VoiceAnswer({
  prompt,
  options,
  level,
  onAnswer,
  onFallback,
}: {
  prompt: string;
  options: string[];
  level?: Level;
  onAnswer: (option: number) => void;
  onFallback: () => void;
}) {
  const hydrated = useHydrated();
  const [state, setState] = useState<State>({ status: "idle" });
  // Each finished recording is sent straight away.
  const rec = useRecorder({ onStop: check });
  const recording = rec.status === "recording";

  function check(recording: Blob) {
    setState({ status: "checking" });
    requestChoice(recording, { prompt, options, level }).then(
      (r) => {
        if (r.heardOption === null) setState({ status: "unclear", transcript: r.speechDetected ? r.transcript : "" });
        else {
          setState({ status: "heard", option: r.heardOption });
          onAnswer(r.heardOption);
        }
      },
      (e) => {
        const kind = e instanceof FeedbackError ? e.kind : "failed";
        setState({ status: "error", kind });
        if (kind === "not-configured" || kind === "quota") onFallback();
      },
    );
  }

  if (hydrated && !rec.recordingSupported) {
    return (
      <p className="text-sm text-zinc-500">
        Recording is not available in this browser.{" "}
        <button type="button" className="font-medium text-link underline underline-offset-2" onClick={onFallback}>
          Choose the word instead
        </button>
      </p>
    );
  }

  return (
    <div className="space-y-2" aria-live="polite">
      <div className="flex flex-wrap items-center gap-2">
        {recording ? (
          <Button variant="secondary" onClick={rec.stop}>
            <RecordingDot active /> <IconStop /> Stop
          </Button>
        ) : (
          <Button variant="secondary" onClick={rec.start} disabled={!hydrated || state.status === "checking"}>
            <IconMic /> {state.status === "idle" ? "Record your answer" : "Record again"}
          </Button>
        )}
        {rec.audioUrl && !recording && <audio controls src={rec.audioUrl} className="h-8 max-w-full" aria-label="Your recording" />}
        <span className="text-xs text-zinc-400">{options.join(" or ")}?</span>
      </div>

      {recording && <p className="text-sm text-zinc-600">Recording… say just the word, then press Stop.</p>}
      {state.status === "checking" && <p className="animate-pulse text-sm text-zinc-600">Listening to your answer…</p>}
      {state.status === "heard" && (
        <p className="text-sm text-ink">
          We heard: <span className="rounded-md bg-accent-soft px-2 py-0.5 font-bold">{options[state.option]}</span>
          <span className="ml-2 text-zinc-500">Not what you meant? Record again.</span>
        </p>
      )}
      {state.status === "unclear" && (
        <p className="text-sm text-amber-800">
          We couldn&apos;t tell which word you said{state.transcript ? ` (we heard “${state.transcript}”)` : ""}. Record again
          and make the sound clear.
        </p>
      )}
      {state.status === "error" && (
        <p className="text-sm text-error">
          {FEEDBACK_ERROR_TEXT[state.kind]}{" "}
          <button type="button" className="font-medium underline underline-offset-2" onClick={onFallback}>
            Choose the word instead
          </button>
        </p>
      )}
      {rec.status === "denied" && (
        <p className="text-sm text-amber-800">
          Microphone access was blocked. Allow the microphone in your browser&apos;s address bar, or{" "}
          <button type="button" className="font-medium underline underline-offset-2" onClick={onFallback}>
            choose the word instead
          </button>
          .
        </p>
      )}
    </div>
  );
}
