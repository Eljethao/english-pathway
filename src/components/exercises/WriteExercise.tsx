"use client";

import { useEffect, useState } from "react";
import { useTimer } from "@/hooks/useTimer";
import type { WriteExercise as WriteType } from "@/lib/types";
import { analyseWriting, countWords } from "@/lib/writing-checks";
import { cn, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconClock, IconRefresh } from "@/components/ui/icons";
import { RichText } from "@/components/lesson/RichText";
import { ExerciseShell, useExerciseScope } from "./ExerciseShell";

function loadDraft(key: string) {
  try {
    return window.localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function saveDraft(key: string, text: string) {
  try {
    if (text) window.localStorage.setItem(key, text);
    else window.localStorage.removeItem(key);
  } catch {
    /* storage unavailable */
  }
}

export function WriteExercise({ exercise }: { exercise: WriteType }) {
  const scope = useExerciseScope();
  const draftKey = `english-pathway:draft:${scope}/${exercise.id}`;
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const [timeUp, setTimeUp] = useState(false);
  const timer = useTimer({ seconds: exercise.minutes * 60, onEnd: () => setTimeUp(true) });

  // Restore an unsent draft (per browser only).
  useEffect(() => {
    const d = loadDraft(draftKey);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading browser storage after mount
    if (d) setText(d);
  }, [draftKey]);

  const wc = countWords(text);
  const enough = wc >= exercise.minWords;
  const over = exercise.maxWords !== undefined && wc > exercise.maxWords;
  const report = submitted ? analyseWriting(text) : null;
  const modelWords = countWords(exercise.modelAnswer);

  const onChange = (v: string) => {
    setText(v);
    saveDraft(draftKey, v);
    if (!timer.running && timer.elapsed === 0 && v.trim()) timer.start();
  };

  const reset = () => {
    setText("");
    saveDraft(draftKey, "");
    setSubmitted(false);
    setShowModel(false);
    setChecks({});
    setTimeUp(false);
    timer.reset();
  };

  return (
    <ExerciseShell exercise={exercise} hideActions>
      <div className="space-y-4">
        <div className="rounded-lg border border-line bg-surface p-4">
          <RichText text={exercise.prompt} className="text-ink" />
          <p className="mt-3 text-xs text-zinc-500">
            Write at least {exercise.minWords} words{exercise.maxWords ? ` (max ${exercise.maxWords})` : ""} · about{" "}
            {exercise.minutes} minutes
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="inline-flex items-center gap-2 text-zinc-600">
            <IconClock className="text-zinc-400" />
            <span className={cn("font-mono tabular-nums", timeUp ? "text-error" : "text-ink")}>
              {formatTime(timer.remaining ?? 0)}
            </span>
            {!submitted &&
              (timer.running ? (
                <button type="button" onClick={timer.pause} className="text-accent hover:underline">
                  Pause
                </button>
              ) : (
                <button type="button" onClick={timer.start} className="text-accent hover:underline" disabled={timeUp}>
                  {timer.elapsed ? "Resume" : "Start timer"}
                </button>
              ))}
          </span>
          <span
            className={cn("font-medium tabular-nums", over ? "text-error" : enough ? "text-success" : "text-zinc-500")}
            aria-live="polite"
          >
            {wc} / {exercise.minWords} words
          </span>
        </div>
        {timeUp && !submitted && (
          <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
            Time is up. In the exam you would stop now. Finish your sentence and submit.
          </p>
        )}

        <textarea
          value={text}
          onChange={(e) => onChange(e.target.value)}
          readOnly={submitted}
          rows={12}
          aria-label="Your answer"
          placeholder="Start writing here. The timer starts when you type."
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base leading-7 outline-none focus:border-accent read-only:bg-surface"
        />

        {!submitted ? (
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => {
                setSubmitted(true);
                timer.pause();
              }}
              disabled={wc < 10}
            >
              Submit and check
            </Button>
            <Button variant="ghost" onClick={() => setShowModel((s) => !s)}>
              {showModel ? "Hide model answer" : "Peek at model answer"}
            </Button>
          </div>
        ) : (
          report && (
            <div className="space-y-4" aria-live="polite">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-ink">Automatic checks</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  <Check ok={enough && !over} label="Word count">
                    {report.words} words (target {exercise.minWords}
                    {exercise.maxWords ? `–${exercise.maxWords}` : "+"})
                  </Check>
                  <Check ok={report.paragraphs >= (exercise.minWords >= 150 ? 3 : 1)} label="Paragraphs">
                    {report.paragraphs} paragraph{report.paragraphs === 1 ? "" : "s"}
                    {exercise.minWords >= 150 && report.paragraphs < 3 && ". Use separate paragraphs for each main idea."}
                  </Check>
                  <Check ok={report.linkingWords.length >= Math.min(5, Math.ceil(exercise.minWords / 50))} label="Linking words">
                    {report.linkingWords.length ? report.linkingWords.join(", ") : "None found. Try however, for example, as a result."}
                  </Check>
                  <Check ok={report.avgSentenceLength >= 10 && report.avgSentenceLength <= 28} label="Sentence length">
                    {report.avgSentenceLength} words on average
                    {report.avgSentenceLength < 10 && ". Combine some short sentences."}
                    {report.avgSentenceLength > 28 && ". Split some long sentences."}
                  </Check>
                  <Check ok={report.repeated.length === 0} label="Repetition">
                    {report.repeated.length
                      ? report.repeated.map((r) => `${r.word} ×${r.count}`).join(", ") + ". Use synonyms or pronouns."
                      : "No words over-repeated."}
                  </Check>
                </ul>
              </div>

              <fieldset className="rounded-lg border border-line p-4">
                <legend className="px-1 text-sm font-semibold text-ink">Self-check (band descriptors)</legend>
                <ul className="space-y-2">
                  {exercise.rubric.map((r, i) => (
                    <li key={i}>
                      <label className="flex cursor-pointer items-start gap-2 text-sm text-zinc-700">
                        <input
                          type="checkbox"
                          className="mt-0.5 accent-blue-600"
                          checked={!!checks[i]}
                          onChange={(e) => setChecks((c) => ({ ...c, [i]: e.target.checked }))}
                        />
                        {r}
                      </label>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-zinc-500">
                  {Object.values(checks).filter(Boolean).length} of {exercise.rubric.length} ticked
                </p>
              </fieldset>

              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" onClick={() => setShowModel((s) => !s)}>
                  {showModel ? "Hide model answer" : "Show model answer"}
                </Button>
                <Button variant="secondary" onClick={() => setSubmitted(false)}>
                  Keep editing
                </Button>
                <Button variant="ghost" onClick={reset}>
                  <IconRefresh /> Start again
                </Button>
              </div>
            </div>
          )
        )}

        {showModel && (
          <div className="rounded-lg border border-line">
            <div className="flex items-center justify-between border-b border-line px-4 py-2 text-sm">
              <span className="font-semibold text-ink">Model answer</span>
              <span className="text-zinc-500">{modelWords} words</span>
            </div>
            <div className="px-4 py-3">
              <RichText text={exercise.modelAnswer} />
            </div>
          </div>
        )}
      </div>
    </ExerciseShell>
  );
}

function Check({ ok, label, children }: { ok: boolean; label: string; children: React.ReactNode }) {
  return (
    <li className={cn("rounded-lg border px-3 py-2 text-sm", ok ? "border-emerald-200 bg-emerald-50/50" : "border-amber-200 bg-amber-50/50")}>
      <div className={cn("text-xs font-semibold", ok ? "text-emerald-700" : "text-amber-700")}>
        {ok ? "✓ " : "! "}
        {label}
      </div>
      <div className="mt-0.5 text-zinc-700">{children}</div>
    </li>
  );
}
