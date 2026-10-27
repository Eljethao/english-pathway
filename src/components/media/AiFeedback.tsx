"use client";

import { useState } from "react";
import {
  FEEDBACK_ERROR_TEXT,
  FeedbackError,
  requestFeedback,
  type FeedbackErrorKind,
  type FeedbackRequest,
  type SpeakingFeedback,
} from "@/lib/ai-feedback";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconCheck, IconSparkle } from "@/components/ui/icons";
import { PlayButton } from "./TtsPlayer";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; result: SpeakingFeedback }
  | { status: "error"; kind: FeedbackErrorKind };

function Meter({ label, value }: { label: string; value: number }) {
  const tone = value >= 85 ? "bg-success" : value >= 60 ? "bg-accent" : "bg-amber-500";
  return (
    <div className="rounded-lg border border-line px-3 py-2">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs text-zinc-500">{label}</span>
        <span className="text-lg font-semibold tabular-nums text-ink">{value}</span>
      </div>
      <div
        role="meter"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-1 h-1.5 overflow-hidden rounded-full bg-zinc-100"
      >
        <div className={cn("h-full rounded-full", tone)} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Result({ result, request }: { result: SpeakingFeedback; request: FeedbackRequest }) {
  if (!result.speechDetected)
    return (
      <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
        <p>The AI could not hear clear English speech in this recording.</p>
        {result.tips.length > 0 && (
          <ul className="mt-1 list-disc pl-5">
            {result.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    );

  return (
    <div className="space-y-4">
      <dl className="grid gap-2 sm:grid-cols-3">
        <Meter label="Pronunciation" value={result.scores.pronunciation} />
        <Meter label="Fluency" value={result.scores.fluency} />
        <Meter label="Stress & intonation" value={result.scores.intonation} />
      </dl>

      {result.transcript && (
        <div>
          <div className="mb-1 text-sm font-medium text-ink">What the AI heard</div>
          <p className="rounded-lg bg-surface px-3 py-2 text-sm leading-6 text-zinc-700">{result.transcript}</p>
        </div>
      )}

      {result.accent && (
        <div>
          <div className="mb-1 text-sm font-medium text-ink">Your accent and clarity</div>
          <p className="text-sm leading-6 text-zinc-700">{result.accent}</p>
        </div>
      )}

      {result.words.length > 0 && (
        <div>
          <div className="mb-1.5 text-sm font-medium text-ink">Words to practise</div>
          <ul className="divide-y divide-line rounded-lg border border-line">
            {result.words.map((w, i) => (
              <li key={`${w.word}-${i}`} className="flex flex-wrap items-start justify-between gap-2 px-3 py-2.5">
                <div className="min-w-0 flex-1 text-sm">
                  <span className="font-bold text-ink">{w.word}</span>
                  {w.heard && w.heard.toLowerCase() !== w.word.toLowerCase() && (
                    <span className="text-zinc-500"> · sounded like “{w.heard}”</span>
                  )}
                  {w.issue && <span className="text-zinc-500"> · {w.issue}</span>}
                  {w.tip && <p className="mt-0.5 text-zinc-700">{w.tip}</p>}
                </div>
                <PlayButton text={w.word} label={`Hear “${w.word}”`} accent={request.accent} rate={0.85} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.taskComment && <p className="text-sm text-zinc-700">{result.taskComment}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        {result.strengths.length > 0 && (
          <div>
            <div className="mb-1 text-sm font-medium text-ink">What went well</div>
            <ul className="space-y-1 text-sm text-zinc-700">
              {result.strengths.map((s) => (
                <li key={s} className="flex gap-2">
                  <IconCheck className="mt-0.5 shrink-0 text-success" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        {result.tips.length > 0 && (
          <div>
            <div className="mb-1 text-sm font-medium text-ink">Next steps</div>
            <ol className="list-decimal space-y-1 pl-5 text-sm text-zinc-700 marker:text-zinc-400">
              {result.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </div>
        )}
      </div>

      <p className="text-xs text-zinc-500">AI feedback can be wrong. Use it as a guide, not an exam score.</p>
    </div>
  );
}

/**
 * "Check with AI" for a finished recording. Remount it (key) when the recording changes.
 * The recording is only uploaded when the learner presses the button.
 */
export function AiFeedback({ recording, request, compact }: { recording: Blob | null; request: FeedbackRequest; compact?: boolean }) {
  const [state, setState] = useState<State>({ status: "idle" });
  if (!recording) return null;

  async function check() {
    setState({ status: "loading" });
    try {
      setState({ status: "done", result: await requestFeedback(recording!, request) });
    } catch (e) {
      setState({ status: "error", kind: e instanceof FeedbackError ? e.kind : "failed" });
    }
  }

  return (
    <div className={cn(compact ? "space-y-2" : "space-y-3 rounded-lg border border-line p-4")} aria-live="polite">
      {(state.status === "idle" || state.status === "error") && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Button size="sm" variant={compact ? "secondary" : "primary"} onClick={check}>
            <IconSparkle /> {state.status === "error" ? "Try AI feedback again" : "Check my pronunciation with AI"}
          </Button>
          <span className="text-xs text-zinc-500">Sends this recording to Google Gemini for analysis.</span>
        </div>
      )}
      {state.status === "loading" && (
        <p className="inline-flex items-center gap-2 text-sm text-zinc-600">
          <IconSparkle className="animate-pulse text-accent" /> Listening to your recording…
        </p>
      )}
      {state.status === "error" && <p className="text-sm text-error">{FEEDBACK_ERROR_TEXT[state.kind]}</p>}
      {state.status === "done" && (
        <>
          {!compact && (
            <h4 className="flex items-center gap-2 text-sm font-bold text-ink">
              <IconSparkle className="text-accent" /> AI pronunciation feedback
            </h4>
          )}
          <Result result={state.result} request={request} />
        </>
      )}
    </div>
  );
}
