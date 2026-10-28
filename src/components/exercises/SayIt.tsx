"use client";

import { useRecorder } from "@/hooks/useRecorder";
import type { FeedbackRequest } from "@/lib/ai-feedback";
import { Button } from "@/components/ui/Button";
import { IconMic, IconStop } from "@/components/ui/icons";
import { AiFeedback } from "@/components/media/AiFeedback";
import { RecordingDot } from "@/components/media/Recorder";
import { PlayButton } from "@/components/media/TtsPlayer";

/**
 * "Say it" row for a pronunciation question: record the word or sentence, play it back and check it with AI.
 * The model pronunciation is only offered once the answers are checked, so it does not give the answer away.
 */
export function SayIt({ text, request, showModel }: { text: string; request: FeedbackRequest; showModel: boolean }) {
  const rec = useRecorder();
  const recording = rec.status === "recording";
  if (!rec.recordingSupported) return null;
  return (
    <div className="mt-3 space-y-2 rounded-lg bg-surface px-3 py-2.5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-zinc-600">
          Say it: <span className="font-medium text-ink">“{text}”</span>
        </span>
        {recording ? (
          <Button size="sm" variant="secondary" onClick={rec.stop}>
            <RecordingDot active /> <IconStop /> Stop
          </Button>
        ) : (
          <Button size="sm" variant="secondary" onClick={rec.start}>
            <IconMic /> {rec.status === "stopped" ? "Record again" : "Record"}
          </Button>
        )}
        {showModel && <PlayButton text={text} label="Listen to the model" rate={0.9} />}
        {rec.audioUrl && <audio controls src={rec.audioUrl} className="h-8 max-w-full" aria-label="Your recording" />}
      </div>
      {rec.status === "denied" && (
        <p className="text-sm text-amber-800">Microphone access was blocked. Allow the microphone in your browser&apos;s address bar.</p>
      )}
      {rec.status === "stopped" && <AiFeedback key={rec.audioUrl} compact recording={rec.audioBlob} request={request} />}
    </div>
  );
}
