"use client";

import { countFillers, phrasesUsed, wordsPerMinute } from "@/lib/speech";
import { cn, formatTime } from "@/lib/utils";
import type { RecorderStatus } from "@/hooks/useRecorder";
import { useHydrated } from "@/hooks/useProgress";

export function RecorderNotice({
  recordingSupported,
  recognitionSupported,
  status,
}: {
  recordingSupported: boolean;
  recognitionSupported: boolean;
  status: RecorderStatus;
}) {
  const hydrated = useHydrated();
  if (!hydrated) return null;
  if (status === "denied")
    return (
      <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
        Microphone access was blocked. Allow the microphone in your browser&apos;s address bar to record yourself. You can
        still practise speaking aloud with the timer.
      </p>
    );
  if (!recordingSupported)
    return (
      <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
        Recording is not available in this browser. You can still practise aloud with the timer and compare with the model
        answer.
      </p>
    );
  if (!recognitionSupported)
    return (
      <p className="rounded-lg bg-surface px-3 py-2 text-sm text-zinc-600">
        Live transcripts need Chrome, Edge or Safari. Recording and playback still work here.
      </p>
    );
  return null;
}

export function RecordingDot({ active }: { active: boolean }) {
  return (
    <span className="relative inline-flex size-2.5">
      {active && <span className="absolute inline-flex size-full animate-ping rounded-full bg-rose-400 opacity-75" />}
      <span className={cn("relative inline-flex size-2.5 rounded-full", active ? "bg-rose-500" : "bg-zinc-300")} />
    </span>
  );
}

/** Words per minute, fillers and target phrases for a spoken answer. */
export function SpeechStats({
  transcript,
  seconds,
  targetPhrases = [],
}: {
  transcript: string;
  seconds: number;
  targetPhrases?: string[];
}) {
  const fillers = countFillers(transcript);
  const fillerTotal = Object.values(fillers).reduce((a, b) => a + b, 0);
  const wpm = wordsPerMinute(transcript, seconds);
  const used = phrasesUsed(transcript, targetPhrases);
  const wordCount = transcript.split(/\s+/).filter(Boolean).length;
  return (
    <div className="space-y-3">
      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { k: "Time", v: formatTime(seconds) },
          { k: "Words", v: String(wordCount) },
          { k: "Words / min", v: String(wpm), hint: wpm ? (wpm < 90 ? "A little slow" : wpm > 170 ? "Quite fast" : "Good pace") : "" },
          { k: "Fillers", v: String(fillerTotal), hint: Object.entries(fillers).map(([w, n]) => `${w} ×${n}`).join(", ") },
        ].map((s) => (
          <div key={s.k} className="rounded-lg border border-line px-3 py-2">
            <dt className="text-xs text-zinc-500">{s.k}</dt>
            <dd className="text-lg font-semibold tabular-nums text-ink">{s.v}</dd>
            {s.hint && <dd className="truncate text-xs text-zinc-500" title={s.hint}>{s.hint}</dd>}
          </div>
        ))}
      </dl>
      {targetPhrases.length > 0 && (
        <div>
          <div className="mb-1.5 text-xs font-medium text-zinc-500">
            Target phrases used: {used.length} / {targetPhrases.length}
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {targetPhrases.map((p) => {
              const ok = used.includes(p);
              return (
                <li
                  key={p}
                  className={cn(
                    "rounded-md border px-2 py-0.5 text-xs",
                    ok ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-line text-zinc-500",
                  )}
                >
                  {ok ? "✓ " : ""}
                  {p}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
