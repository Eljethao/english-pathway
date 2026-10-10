"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { Button, buttonClass } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { IconArrowLeft, IconArrowRight, IconCheck, IconChevronDown } from "@/components/ui/icons";

export interface PlayerStep {
  id: string;
  label: string;
  detail: string;
  /** Exercise ids in this step (a step counts as done when they are all checked). */
  exerciseIds: string[];
}

const storageKey = (slug: string) => `english-pathway:step:${slug}`;

function readSavedStep(slug: string) {
  try {
    return window.localStorage.getItem(storageKey(slug));
  } catch {
    return null;
  }
}

function saveStep(slug: string, id: string) {
  try {
    window.localStorage.setItem(storageKey(slug), id);
  } catch {
    /* storage unavailable */
  }
}

/**
 * Shows one lesson step at a time with Back / Next. All panels stay mounted (hidden),
 * so answers are kept when the learner moves back and forth.
 */
export function LessonPlayer({
  slug,
  title,
  steps,
  panels,
  overviewHref,
  nextLesson,
}: {
  slug: string;
  title: string;
  steps: PlayerStep[];
  panels: ReactNode[];
  overviewHref: string;
  nextLesson?: { href: string; title: string };
}) {
  const progress = useProgress();
  const [index, setIndex] = useState(0);
  const [visited, setVisited] = useState(0);
  const [listOpen, setListOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (i: number, scroll = true) => {
      const next = Math.max(0, Math.min(steps.length - 1, i));
      setIndex(next);
      setVisited((v) => Math.max(v, next));
      setListOpen(false);
      saveStep(slug, steps[next].id);
      window.history.replaceState(null, "", `#${steps[next].id}`);
      if (scroll && topRef.current) {
        const y = topRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    },
    [slug, steps],
  );

  // Open the step from the URL (#practice-1), or where the learner left off.
  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    const id = fromHash || readSavedStep(slug);
    const i = steps.findIndex((s) => s.id === id);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring position from the URL/storage after mount
    if (i > 0) go(i, false);
  }, [go, slug, steps]);

  // Keyboard: Alt + ← / → moves between steps.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!e.altKey) return;
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  const isDone = (s: PlayerStep, i: number) =>
    s.exerciseIds.length ? s.exerciseIds.every((id) => progress.exerciseScores[`${slug}/${id}`] !== undefined) : i < visited;
  const doneCount = steps.filter(isDone).length;
  const current = steps[index];
  const prev = steps[index - 1];
  const next = steps[index + 1];
  const last = index === steps.length - 1;

  const stepList = (
    <ol className="space-y-1">
      {steps.map((s, i) => {
        const done = isDone(s, i);
        const active = i === index;
        return (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => go(i)}
              aria-current={active ? "step" : undefined}
              className={cn(
                "flex w-full items-start gap-3 rounded-md px-3 py-2.5 text-left transition-colors duration-150",
                active ? "bg-accent-soft" : "hover:bg-surface",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  done ? "bg-accent text-white" : active ? "border-2 border-accent text-accent" : "border border-line text-muted",
                )}
              >
                {done ? <IconCheck /> : i + 1}
              </span>
              <span className="min-w-0">
                <span className={cn("block text-sm font-bold", active ? "text-accent-hover" : "text-ink")}>{s.label}</span>
                <span className="block truncate text-xs text-muted">{s.detail}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );

  return (
    <div ref={topRef} className="-mb-24 grid min-h-[calc(100vh-4.5rem)] lg:grid-cols-[19rem_1fr]">
      {/* Step list (desktop) */}
      <aside className="hidden border-r border-line bg-white lg:block" aria-label="Lesson steps">
        <div className="sticky top-[4.5rem] max-h-[calc(100vh-4.5rem)] overflow-y-auto p-4">
          <div className="px-3 pb-3">
            <div className="text-xs font-bold tracking-wide text-muted uppercase">Lesson progress</div>
            <ProgressBar className="mt-2" value={(doneCount / steps.length) * 100} label="Lesson progress" />
            <div className="mt-1.5 text-xs text-muted">
              {doneCount} of {steps.length} steps done
            </div>
          </div>
          {stepList}
        </div>
      </aside>

      <div className="flex min-w-0 flex-col">
        {/* Step header */}
        <div className="border-b border-line bg-surface px-4 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <Link href={overviewHref} className="inline-flex items-center gap-1 text-xs font-bold text-link hover:underline">
                <IconArrowLeft /> {title}
              </Link>
              <h2 className="font-display-heading mt-1 text-2xl sm:text-3xl" aria-live="polite">
                {current.label}
              </h2>
            </div>
            <div className="text-sm font-bold text-muted">
              Step {index + 1} of {steps.length}
            </div>
          </div>
          <ProgressBar className="mt-3" value={((index + 1) / steps.length) * 100} label="Step progress" />
          {/* Step list (mobile) */}
          <div className="mt-3 lg:hidden">
            <button
              type="button"
              onClick={() => setListOpen((o) => !o)}
              aria-expanded={listOpen}
              className="inline-flex items-center gap-1 text-sm font-bold text-ink"
            >
              All steps <IconChevronDown className={cn("transition-transform", listOpen && "rotate-180")} />
            </button>
            {listOpen && <div className="mt-2 rounded-lg border border-line bg-white p-2">{stepList}</div>}
          </div>
        </div>

        {/* Panels */}
        <div className="flex-1 px-4 py-8 sm:px-8 sm:py-10">
          {panels.map((panel, i) => (
            <section
              key={steps[i].id}
              id={`step-${steps[i].id}`}
              hidden={i !== index}
              aria-label={steps[i].label}
              className="animate-rise"
            >
              {panel}
            </section>
          ))}
        </div>

        {/* Back / Next */}
        <nav aria-label="Step navigation" className="sticky bottom-0 z-20 border-t border-line bg-white/95 backdrop-blur">
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-8">
            <Button variant="secondary" size="lg" onClick={() => go(index - 1)} disabled={!prev} className="min-w-0">
              <IconArrowLeft />
              <span className="hidden sm:inline">Back</span>
              {prev && <span className="hidden truncate font-normal text-muted md:inline">· {prev.label}</span>}
            </Button>
            <span className="hidden text-sm text-muted sm:block">
              {index + 1} / {steps.length}
            </span>
            {!last ? (
              <Button size="lg" onClick={() => go(index + 1)} className="min-w-0">
                <span>Next</span>
                {next && <span className="hidden truncate font-normal opacity-80 md:inline">· {next.label}</span>}
                <IconArrowRight />
              </Button>
            ) : nextLesson ? (
              <Link href={nextLesson.href} className={buttonClass("primary", "lg", "min-w-0")}>
                <span className="truncate">Next lesson</span> <IconArrowRight />
              </Link>
            ) : (
              <Link href={overviewHref} className={buttonClass("primary", "lg")}>
                Back to overview
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
