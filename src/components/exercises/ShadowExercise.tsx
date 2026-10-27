"use client";

import { useState } from "react";
import { useRecorder } from "@/hooks/useRecorder";
import type { ShadowExercise as ShadowType, Voice } from "@/lib/types";
import { cn, percent } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconMic, IconStop } from "@/components/ui/icons";
import { PlayButton, SpeedAccent } from "@/components/media/TtsPlayer";
import { AiFeedback } from "@/components/media/AiFeedback";
import { RecorderNotice, RecordingDot } from "@/components/media/Recorder";
import { diffWords } from "./DictationExercise";
import { ExerciseShell, useExerciseLevel } from "./ExerciseShell";

function SentenceRow({ sentence, index, accent, rate }: { sentence: string; index: number; accent: Voice; rate: number }) {
  const rec = useRecorder();
  const level = useExerciseLevel();
  const recording = rec.status === "recording";
  const diff = rec.finalTranscript ? diffWords(sentence, rec.transcript) : null;
  return (
    <li className="space-y-2 border-b border-line pb-4 last:border-0 last:pb-0">
      <p className="flex gap-2 text-ink">
        <span className="text-zinc-400">{index + 1}.</span>
        {diff && rec.status === "stopped" ? (
          <span>
            {diff.tokens.map((w, k) => (
              <span key={k} className={cn(diff.hit[k] ? "text-emerald-700" : "text-rose-600 underline decoration-dotted")}>
                {w}{" "}
              </span>
            ))}
          </span>
        ) : (
          <span>{sentence}</span>
        )}
      </p>
      <div className="flex flex-wrap items-center gap-2 pl-6">
        <PlayButton text={sentence} label="Listen" accent={accent} rate={rate} />
        {recording ? (
          <Button size="sm" variant="secondary" onClick={rec.stop}>
            <RecordingDot active /> <IconStop /> Stop
          </Button>
        ) : (
          <Button size="sm" variant="secondary" onClick={rec.start} disabled={!rec.recordingSupported}>
            <IconMic /> {rec.status === "stopped" ? "Record again" : "Record"}
          </Button>
        )}
        {rec.audioUrl && <audio controls src={rec.audioUrl} className="h-8 max-w-full" aria-label="Your recording" />}
        {diff && rec.status === "stopped" && (
          <span
            className={cn(
              "text-sm font-medium",
              percent(diff.correct, diff.total) >= 80 ? "text-success" : "text-amber-600",
            )}
          >
            {percent(diff.correct, diff.total)}% of words recognised
          </span>
        )}
      </div>
      {recording && rec.transcript && <p className="pl-6 text-sm text-zinc-500 italic">{rec.transcript}</p>}
      {rec.status === "stopped" && (
        <div className="pl-6">
          <AiFeedback
            key={rec.audioUrl}
            compact
            recording={rec.audioBlob}
            request={{ mode: "shadow", text: sentence, level, accent }}
          />
        </div>
      )}
      {rec.status === "denied" && (
        <div className="pl-6">
          <RecorderNotice recordingSupported recognitionSupported status="denied" />
        </div>
      )}
    </li>
  );
}

export function ShadowExercise({ exercise }: { exercise: ShadowType }) {
  const [rate, setRate] = useState(1);
  const [accent, setAccent] = useState<Voice>(exercise.voice ?? "us");
  const probe = useRecorder();
  return (
    <ExerciseShell exercise={exercise} hideActions>
      <div className="mb-4 space-y-3">
        <p className="text-sm text-zinc-600">
          Listen to each sentence, then record yourself saying it the same way. Copy the rhythm, stress and intonation.
        </p>
        <SpeedAccent rate={rate} setRate={setRate} accent={accent} setAccent={setAccent} />
        <RecorderNotice
          recordingSupported={probe.recordingSupported}
          recognitionSupported={probe.recognitionSupported}
          status="idle"
        />
      </div>
      <ol className="space-y-4">
        {exercise.sentences.map((s, i) => (
          <SentenceRow key={i} sentence={s} index={i} accent={accent} rate={rate} />
        ))}
      </ol>
    </ExerciseShell>
  );
}
