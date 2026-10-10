"use client";

import { useState } from "react";
import { useRecorder } from "@/hooks/useRecorder";
import { useTimer } from "@/hooks/useTimer";
import type { SpeakExercise as SpeakType } from "@/lib/types";
import { cn, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { IconMic, IconRefresh, IconStop } from "@/components/ui/icons";
import { RichText } from "@/components/lesson/RichText";
import { PlayButton } from "@/components/media/TtsPlayer";
import { RecorderNotice, RecordingDot, SpeechStats } from "@/components/media/Recorder";
import { ExerciseShell } from "./ExerciseShell";

type Phase = "ready" | "prep" | "speaking" | "done";

const DEFAULT_CHECKLIST = [
  "I answered the question directly.",
  "I gave reasons and examples.",
  "I kept talking without long pauses.",
  "I used linking words (because, for example, however…).",
];

export function SpeakExercise({ exercise }: { exercise: SpeakType }) {
  const [phase, setPhase] = useState<Phase>("ready");
  const [notes, setNotes] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const rec = useRecorder();

  const speak = useTimer({
    seconds: exercise.speakSeconds,
    onEnd: () => finish(),
  });
  const prep = useTimer({
    seconds: exercise.prepSeconds,
    onEnd: () => startSpeaking(),
  });

  function startSpeaking() {
    prep.pause();
    setPhase("speaking");
    speak.reset();
    speak.start();
    if (rec.recordingSupported) rec.start();
  }

  function finish() {
    speak.pause();
    rec.stop();
    setPhase("done");
  }

  function begin() {
    if (exercise.prepSeconds > 0) {
      setPhase("prep");
      prep.reset();
      prep.start();
    } else startSpeaking();
  }

  function restart() {
    rec.reset();
    prep.reset();
    speak.reset();
    setShowModel(false);
    setChecks({});
    setPhase("ready");
  }

  const checklist = exercise.checklist ?? DEFAULT_CHECKLIST;
  const spokenSeconds = rec.duration || speak.elapsed;

  return (
    <ExerciseShell exercise={exercise} hideActions>
      <div className="space-y-4">
        <div className="rounded-lg border border-line bg-surface p-4">
          <RichText text={exercise.prompt} className="text-ink" />
          {exercise.cueCard && (
            <>
              <p className="mt-3 text-sm font-medium text-zinc-600">You should say:</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-zinc-700 marker:text-zinc-300">
                {exercise.cueCard.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-3 text-xs text-zinc-500">
            {exercise.prepSeconds > 0 ? `${exercise.prepSeconds} s preparation · ` : "No preparation time · "}
            {formatTime(exercise.speakSeconds)} speaking
          </p>
        </div>

        <RecorderNotice
          recordingSupported={rec.recordingSupported}
          recognitionSupported={rec.recognitionSupported}
          status={rec.status}
        />

        {phase === "ready" && (
          <div className="flex flex-wrap gap-2">
            <Button onClick={begin}>
              <IconMic /> {exercise.prepSeconds > 0 ? "Start preparation" : "Start speaking"}
            </Button>
            {exercise.prepSeconds > 0 && (
              <Button variant="secondary" onClick={startSpeaking}>
                Skip preparation
              </Button>
            )}
          </div>
        )}

        {phase === "prep" && (
          <div className="space-y-3 rounded-lg border border-line p-4" aria-live="polite">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink">Preparation time</span>
              <span className="font-mono text-lg tabular-nums">{formatTime(prep.remaining ?? 0)}</span>
            </div>
            <ProgressBar value={(prep.elapsed / exercise.prepSeconds) * 100} label="Preparation time used" />
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Make short notes (key words only)…"
              aria-label="Notes"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <Button onClick={startSpeaking}>Start speaking now</Button>
          </div>
        )}

        {phase === "speaking" && (
          <div className="space-y-3 rounded-lg border border-rose-200 bg-rose-50/40 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2 font-medium text-ink">
                <RecordingDot active={rec.status === "recording"} />
                {rec.status === "recording" ? "Recording… speak now" : "Speak now"}
              </span>
              <span className={cn("font-mono text-lg tabular-nums", (speak.remaining ?? 0) <= 10 && "text-error")}>
                {formatTime(speak.remaining ?? 0)}
              </span>
            </div>
            <ProgressBar value={(speak.elapsed / exercise.speakSeconds) * 100} label="Speaking time used" />
            {notes && <p className="text-sm whitespace-pre-line text-zinc-500">{notes}</p>}
            {rec.transcript && <p className="text-sm text-zinc-600 italic">{rec.transcript}</p>}
            <Button variant="secondary" onClick={finish}>
              <IconStop /> Finish
            </Button>
          </div>
        )}

        {phase === "done" && (
          <div className="space-y-4">
            {rec.audioUrl && (
              <div>
                <div className="mb-1.5 text-sm font-medium text-ink">Your answer</div>
                <audio controls src={rec.audioUrl} className="w-full" aria-label="Your recording" />
              </div>
            )}
            {rec.finalTranscript ? (
              <>
                <div>
                  <div className="mb-1.5 text-sm font-medium text-ink">What we heard</div>
                  <p className="rounded-lg bg-surface px-3 py-2 text-sm leading-6 text-zinc-700">{rec.finalTranscript}</p>
                </div>
                <SpeechStats transcript={rec.finalTranscript} seconds={spokenSeconds} targetPhrases={exercise.targetPhrases} />
              </>
            ) : (
              exercise.targetPhrases && (
                <div className="text-sm text-zinc-600">
                  <span className="font-medium text-ink">Did you use these phrases? </span>
                  {exercise.targetPhrases.join(" · ")}
                </div>
              )
            )}

            <fieldset className="rounded-lg border border-line p-4">
              <legend className="px-1 text-sm font-medium text-ink">Self-check</legend>
              <ul className="space-y-2">
                {checklist.map((c, i) => (
                  <li key={i}>
                    <label className="flex cursor-pointer items-start gap-2 text-sm text-zinc-700">
                      <input
                        type="checkbox"
                        className="mt-0.5 accent-blue-600"
                        checked={!!checks[i]}
                        onChange={(e) => setChecks((s) => ({ ...s, [i]: e.target.checked }))}
                      />
                      {c}
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>

            <div className="rounded-lg border border-line">
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                <button
                  type="button"
                  className="text-sm font-medium text-accent hover:underline"
                  aria-expanded={showModel}
                  onClick={() => setShowModel((s) => !s)}
                >
                  {showModel ? "Hide model answer" : "Show model answer"}
                </button>
                <PlayButton text={exercise.modelAnswer} label="Listen to model" />
              </div>
              {showModel && (
                <div className="border-t border-line px-4 py-3">
                  <RichText text={exercise.modelAnswer} />
                </div>
              )}
            </div>

            <Button variant="secondary" onClick={restart}>
              <IconRefresh /> Try again
            </Button>
          </div>
        )}
      </div>
    </ExerciseShell>
  );
}
