"use client";

import { useState } from "react";
import { useHydrated, useProgress } from "@/hooks/useProgress";
import { isTtsSupported } from "@/lib/speech";
import { setPlacementLevel } from "@/lib/progress";
import { levelMeta, skillMeta } from "@/lib/meta";
import { recommendedSkill } from "@/lib/recommend";
import type { LessonSummary, Level, PlacementQuestion } from "@/lib/types";
import { cn, LETTERS, percent } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { IconArrowRight, IconCheck, IconX } from "@/components/ui/icons";
import { PlayButton } from "@/components/media/TtsPlayer";
import { LessonCard } from "@/components/lesson/LessonCard";

const LEVELS: Level[] = ["B1", "B2", "C1"];

function scoreByLevel(questions: PlacementQuestion[], answers: Record<string, number>) {
  return Object.fromEntries(
    LEVELS.map((l) => {
      const qs = questions.filter((x) => x.level === l);
      return [l, { correct: qs.filter((x) => answers[x.id] === x.answer).length, total: qs.length }];
    }),
  ) as Record<Level, { correct: number; total: number }>;
}

/**
 * Placement rule (reviewed): needs most of the lower levels plus at least 4 of 7 at the target level,
 * and allows one slip at a lower level when the higher level is strong. Ratios keep it working
 * when listening items are skipped.
 */
function scoreByArea(questions: PlacementQuestion[], answers: Record<string, number>) {
  const out: Partial<Record<PlacementQuestion["area"], number>> = {};
  for (const area of ["grammar", "vocabulary", "reading", "listening"] as const) {
    const qs = questions.filter((q) => q.area === area);
    if (qs.length) out[area] = percent(qs.filter((q) => answers[q.id] === q.answer).length, qs.length);
  }
  return out;
}

export function recommendLevel(byLevel: Record<Level, { correct: number; total: number }>): Level {
  const eps = 0.001;
  const r = (l: Level) => (byLevel[l].total ? byLevel[l].correct / byLevel[l].total : 0);
  const lower = byLevel.B1.total + byLevel.B2.total;
  const lowerRatio = lower ? (byLevel.B1.correct + byLevel.B2.correct) / lower : 0;
  if (r("C1") >= 4 / 7 - eps && r("B2") >= 5 / 7 - eps && lowerRatio >= 10 / 13 - eps) return "C1";
  if ((r("B1") >= 5 / 6 - eps && r("B2") >= 4 / 7 - eps) || (r("B1") >= 4 / 6 - eps && r("B2") >= 5 / 7 - eps)) return "B2";
  return "B1";
}

/** True when the learner struggled even with the B1 questions. */
export function belowB1(byLevel: Record<Level, { correct: number; total: number }>) {
  return byLevel.B1.total > 0 && byLevel.B1.correct / byLevel.B1.total <= 2 / 6 + 0.001;
}

export function PlacementTest({
  questions: allQuestions,
  starters,
}: {
  questions: PlacementQuestion[];
  starters: Record<Level, LessonSummary[]>;
}) {
  const progress = useProgress();
  const hydrated = useHydrated();
  // Without browser speech the listening items can't be heard, so leave them out instead of marking them wrong.
  const audioOk = !hydrated || isTtsSupported();
  const questions = audioOk ? allQuestions : allQuestions.filter((q) => q.area !== "listening");
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const q = questions[step];
  const finished = step >= questions.length;

  if (step === -1)
    return (
      <div className="max-w-2xl">
        <ul className="space-y-2 text-zinc-700">
          {[
            `${questions.length} questions: grammar, vocabulary, reading${audioOk ? " and listening" : ""}`,
            "About 10 minutes, no time limit",
            "Questions get harder as you go. Don't worry if you can't answer the last ones",
            "Listening questions use your browser's audio, so turn your sound on",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <IconCheck className="mt-1 shrink-0 text-success" /> {t}
            </li>
          ))}
        </ul>
        {progress.placementLevel && (
          <p className="mt-6 rounded-lg bg-surface px-4 py-3 text-sm text-zinc-600">
            Your last result: <strong className="text-ink">{progress.placementLevel}</strong> (
            {levelMeta(progress.placementLevel).name}). You can take the test again at any time.
          </p>
        )}
        <Button size="lg" className="mt-8" onClick={() => setStep(0)}>
          Start the test <IconArrowRight />
        </Button>
      </div>
    );

  if (finished) {
    const byLevel = scoreByLevel(questions, answers);
    const areas = ["grammar", "vocabulary", "reading", "listening"] as const;
    const correct = questions.filter((x) => answers[x.id] === x.answer).length;
    const level = recommendLevel(byLevel);
    const meta = levelMeta(level);
    const firstSkill = recommendedSkill(scoreByArea(questions, answers));
    const firstLesson = starters[level].find((l) => l.skill === firstSkill);
    return (
      <div className="space-y-10" aria-live="polite">
        <div className="rounded-lg border border-line p-6 sm:p-8">
          <div className="text-sm text-zinc-500">Recommended starting level</div>
          <div className="mt-2 flex flex-wrap items-baseline gap-3">
            <span className="text-5xl font-display-heading text-accent">{level}</span>
            <span className="text-xl font-semibold">{meta.name}</span>
          </div>
          <p className="mt-3 max-w-2xl text-zinc-600">{meta.description}</p>
          <p className="mt-2 text-sm text-zinc-500">
            Roughly IELTS {meta.ielts} · TOEFL iBT {meta.toefl} · TOEIC {meta.toeic}. This is a short test, so treat it as a
            starting point, not an exam score.
          </p>
          {belowB1(byLevel) && (
            <p className="mt-3 max-w-2xl rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Some B1 questions were difficult for you. The Foundation lessons are still the right place to start, but
              take them slowly, use the transcripts, and consider some general English practice (A2 level) alongside them.
            </p>
          )}
          {!audioOk && (
            <p className="mt-3 max-w-2xl text-sm text-zinc-500">
              Your browser could not play audio, so the listening questions were left out of this result.
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {firstLesson && (
              <ButtonLink href={`/lessons/${firstLesson.slug}/learn`}>
                Start {skillMeta(firstSkill).name} {level} course <IconArrowRight />
              </ButtonLink>
            )}
            <ButtonLink href={`/lessons?level=${level}`} variant={firstLesson ? "secondary" : "primary"}>
              See all {level} lessons
            </ButtonLink>
            <Button
              variant="secondary"
              onClick={() => {
                setAnswers({});
                setStep(-1);
              }}
            >
              Retake the test
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-line p-5">
            <h2 className="font-semibold">Score by level</h2>
            <p className="text-sm text-zinc-500">
              {correct} / {questions.length} correct overall
            </p>
            <ul className="mt-4 space-y-3">
              {LEVELS.map((l) => (
                <li key={l}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{l}</span>
                    <span className="tabular-nums text-zinc-500">
                      {byLevel[l].correct}/{byLevel[l].total}
                    </span>
                  </div>
                  <ProgressBar value={percent(byLevel[l].correct, byLevel[l].total)} label={`${l} score`} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-line p-5">
            <h2 className="font-semibold">Score by area</h2>
            <ul className="mt-4 space-y-3">
              {areas.map((a) => {
                const qs = questions.filter((x) => x.area === a);
                const c = qs.filter((x) => answers[x.id] === x.answer).length;
                return (
                  <li key={a}>
                    <div className="mb-1 flex justify-between text-sm capitalize">
                      <span>{a}</span>
                      <span className="tabular-nums text-zinc-500">
                        {c}/{qs.length}
                      </span>
                    </div>
                    <ProgressBar value={percent(c, qs.length)} label={`${a} score`} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-display-heading">Start here</h2>
          <p className="mt-1 text-sm text-zinc-500">The first {level} lesson in each skill.</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {starters[level].map((l) => (
              <li key={l.slug}>
                <LessonCard lesson={l} />
              </li>
            ))}
          </ul>
        </div>

        <details className="rounded-lg border border-line p-5">
          <summary className="cursor-pointer font-medium">Review your answers</summary>
          <ol className="mt-4 space-y-3 text-sm">
            {questions.map((x, i) => {
              const ok = answers[x.id] === x.answer;
              return (
                <li key={x.id} className="flex gap-2">
                  <span className={ok ? "text-success" : "text-error"}>{ok ? <IconCheck /> : <IconX />}</span>
                  <span>
                    <span className="text-zinc-400">{i + 1}.</span> {x.prompt}{" "}
                    <span className="font-medium text-success">{x.options[x.answer]}</span>
                    {!ok && answers[x.id] !== undefined && (
                      <span className="text-error"> (you chose {x.options[answers[x.id]]})</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
        </details>
      </div>
    );
  }

  const chosen = answers[q.id];
  const next = () => {
    if (step === questions.length - 1) {
      setPlacementLevel(recommendLevel(scoreByLevel(questions, answers)), scoreByArea(questions, answers));
    }
    setStep((s) => s + 1);
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-sm text-zinc-500">
          <span>
            Question {step + 1} of {questions.length}
          </span>
          <span className="capitalize">{q.area}</span>
        </div>
        <ProgressBar value={(step / questions.length) * 100} label="Test progress" />
      </div>
      <fieldset key={q.id}>
        <legend className="text-lg font-medium text-ink">{q.prompt}</legend>
        {q.passage && (
          <p className="prose-passage mt-4 rounded-lg border border-line bg-surface p-4 text-zinc-800">{q.passage}</p>
        )}
        {q.audio && (
          <div className="mt-4">
            <PlayButton text={q.audio} cast={q.cast} label="Play audio" />
          </div>
        )}
        <div className="mt-5 grid gap-2">
          {q.options.map((o, i) => (
            <label
              key={i}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors duration-150",
                chosen === i ? "border-accent bg-accent-soft" : "border-line hover:border-zinc-300",
              )}
            >
              <input
                type="radio"
                name={q.id}
                className="accent-blue-600"
                checked={chosen === i}
                onChange={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
              />
              <span className="font-medium text-zinc-400">{LETTERS[i]}</span>
              <span>{o}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-8 flex justify-between gap-3">
        <Button variant="ghost" onClick={() => setStep((s) => s - 1)} disabled={step === 0}>
          Back
        </Button>
        <div className="flex gap-2">
          {chosen === undefined && (
            <Button variant="ghost" onClick={next}>
              I don&apos;t know
            </Button>
          )}
          <Button onClick={next} disabled={chosen === undefined}>
            {step === questions.length - 1 ? "See my result" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
