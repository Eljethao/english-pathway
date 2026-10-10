"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useCloud } from "@/hooks/useCloud";
import { useHydrated, useProgress } from "@/hooks/useProgress";
import { cloudConfigured } from "@/lib/cloud";
import { exportProgress, importProgress, resetProgress } from "@/lib/progress";
import { LEVELS, SKILLS, levelMeta } from "@/lib/meta";
import type { LessonSummary } from "@/lib/types";
import { addDays, today } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SkillDot } from "@/components/ui/Badge";
import { IconArrowRight, IconBookmark, IconCheck, IconFlame, IconTarget } from "@/components/ui/icons";

type Lite = Pick<LessonSummary, "slug" | "title" | "skill" | "level">;

export function ProgressDashboard({ lessons }: { lessons: Lite[] }) {
  const hydrated = useHydrated();
  const progress = useProgress();
  const cloud = useCloud();
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  // Dates depend on the visitor's clock, so render the dashboard only in the browser.
  if (!hydrated) return <div className="h-96 animate-pulse rounded-xl bg-surface" aria-busy="true" />;


  const done = lessons.filter((l) => progress.completed[l.slug]);
  const scored = done.map((l) => progress.completed[l.slug].score).filter((s): s is number => s !== undefined);
  const avg = scored.length ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length) : null;
  const last = lessons.find((l) => l.slug === progress.lastLesson);
  const nextUp = lessons.find(
    (l) => !progress.completed[l.slug] && (!progress.placementLevel || l.level === progress.placementLevel),
  ) ?? lessons.find((l) => !progress.completed[l.slug]);
  const dueCards = progress.savedWords.filter((w) => (progress.flashcards[w]?.due ?? today()) <= today()).length;
  const streakActive = progress.streak.lastActive >= addDays(today(), -1);

  const download = () => {
    const blob = new Blob([exportProgress()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `english-pathway-progress-${today()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const upload = async (file: File) => {
    try {
      importProgress(await file.text());
      setMessage("Progress imported.");
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Could not read that file.");
    }
  };

  const stats = [
    { label: "Lessons completed", value: `${done.length} / ${lessons.length}`, icon: IconCheck },
    { label: "Average score", value: avg === null ? "–" : `${avg}%`, icon: IconTarget },
    { label: "Day streak", value: String(streakActive ? progress.streak.current : 0), hint: `Best ${progress.streak.longest}`, icon: IconFlame },
    { label: "Saved words", value: String(progress.savedWords.length), hint: dueCards ? `${dueCards} due today` : undefined, icon: IconBookmark },
  ];

  return (
    <div className="space-y-10">
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-line p-5">
            <dt className="flex items-center gap-2 text-sm text-zinc-500">
              <s.icon className="text-zinc-400" /> {s.label}
            </dt>
            <dd className="mt-2 text-3xl font-display-heading tabular-nums">{s.value}</dd>
            {s.hint && <dd className="mt-1 text-xs text-zinc-500">{s.hint}</dd>}
          </div>
        ))}
      </dl>

      <div className="grid gap-4 md:grid-cols-2">
        {last && !progress.completed[last.slug] ? (
          <Link href={`/lessons/${last.slug}/learn`} className="group rounded-lg border border-line p-5 hover:border-zinc-300">
            <div className="text-sm text-zinc-500">Continue where you left off</div>
            <div className="mt-1 flex items-center gap-2 font-semibold group-hover:text-accent">
              <SkillDot skill={last.skill} /> {last.title} <IconArrowRight className="ml-auto text-zinc-400" />
            </div>
          </Link>
        ) : nextUp ? (
          <Link href={`/lessons/${nextUp.slug}`} className="group rounded-lg border border-line p-5 hover:border-zinc-300">
            <div className="text-sm text-zinc-500">Suggested next lesson</div>
            <div className="mt-1 flex items-center gap-2 font-semibold group-hover:text-accent">
              <SkillDot skill={nextUp.skill} /> {nextUp.title} <span className="text-xs text-zinc-400">{nextUp.level}</span>
              <IconArrowRight className="ml-auto text-zinc-400" />
            </div>
          </Link>
        ) : null}
        <div className="rounded-lg border border-line p-5">
          <div className="text-sm text-zinc-500">Placement level</div>
          {progress.placementLevel ? (
            <div className="mt-1 font-semibold">
              {progress.placementLevel} · {levelMeta(progress.placementLevel).name}
            </div>
          ) : (
            <Link href="/placement" className="mt-1 inline-flex items-center gap-1 font-semibold text-accent">
              Take the placement test <IconArrowRight />
            </Link>
          )}
        </div>
      </div>

      <section>
        <h2 className="text-xl font-display-heading">By skill and level</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-surface text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Skill</th>
                {LEVELS.map((l) => (
                  <th key={l.id} className="px-4 py-3 font-medium">
                    {l.id}
                  </th>
                ))}
                <th className="px-4 py-3 font-medium">Avg score</th>
              </tr>
            </thead>
            <tbody>
              {SKILLS.map((s) => {
                const sk = lessons.filter((l) => l.skill === s.id);
                const sc = sk.map((l) => progress.completed[l.slug]?.score).filter((x): x is number => x !== undefined);
                return (
                  <tr key={s.id} className="border-t border-line">
                    <th scope="row" className="px-4 py-3 text-left font-medium">
                      <Link href={`/skills/${s.id}`} className="inline-flex items-center gap-2 hover:text-accent">
                        <SkillDot skill={s.id} /> {s.name}
                      </Link>
                    </th>
                    {LEVELS.map((lv) => {
                      const list = sk.filter((l) => l.level === lv.id);
                      const n = list.filter((l) => progress.completed[l.slug]).length;
                      return (
                        <td key={lv.id} className="px-4 py-3">
                          <div className="mb-1 text-xs text-zinc-500 tabular-nums">
                            {n}/{list.length}
                          </div>
                          <ProgressBar value={list.length ? (n / list.length) * 100 : 0} label={`${s.name} ${lv.id}`} className="w-24" />
                        </td>
                      );
                    })}
                    <td className="px-4 py-3 tabular-nums text-zinc-700">
                      {sc.length ? `${Math.round(sc.reduce((a, b) => a + b, 0) / sc.length)}%` : "–"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-display-heading">Completed lessons</h2>
        {done.length ? (
          <ul className="mt-4 divide-y divide-line rounded-lg border border-line">
            {[...done]
              .sort((a, b) => progress.completed[b.slug].date.localeCompare(progress.completed[a.slug].date))
              .map((l) => (
                <li key={l.slug} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                  <Link href={`/lessons/${l.slug}`} className="inline-flex items-center gap-2 font-medium hover:text-accent">
                    <SkillDot skill={l.skill} /> {l.title} <span className="text-xs text-zinc-400">{l.level}</span>
                  </Link>
                  <span className="text-zinc-500 tabular-nums">
                    {progress.completed[l.slug].score !== undefined && `${progress.completed[l.slug].score}% · `}
                    {progress.completed[l.slug].date}
                  </span>
                </li>
              ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-line p-8 text-center">
            <p className="text-zinc-500">No lessons completed yet.</p>
            <ButtonLink href="/lessons" className="mt-4" variant="secondary">
              Browse lessons
            </ButtonLink>
          </div>
        )}
      </section>

      <section className="rounded-lg border border-line p-5">
        <h2 className="font-semibold">Back up or move your progress</h2>
        <p className="mt-1 text-sm text-zinc-500">
          {cloud.user
            ? `Synced to your account (${cloud.user.email}). You can also export a file as an extra backup.`
            : "Progress is saved in this browser. Sign in to sync it across devices, or export it as a file."}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {cloudConfigured && !cloud.user && <ButtonLink href="/account">Sign in to sync</ButtonLink>}
          <Button variant="secondary" onClick={download}>
            Export progress
          </Button>
          <Button variant="secondary" onClick={() => fileRef.current?.click()}>
            Import progress
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) upload(f);
              e.target.value = "";
            }}
          />
          <Button variant="ghost" className="text-error hover:text-error" onClick={() => setConfirmReset(true)}>
            Reset progress
          </Button>
        </div>
        {message && (
          <p className="mt-3 text-sm text-zinc-600" role="status">
            {message}
          </p>
        )}
      </section>

      <Modal open={confirmReset} onClose={() => setConfirmReset(false)} title="Reset all progress?">
        <p className="text-sm text-zinc-600">
          This deletes your completed lessons, scores, streak and saved words from this browser. Export a backup first if you
          might want them later.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setConfirmReset(false)}>
            Cancel
          </Button>
          <Button
            className="bg-error hover:bg-rose-700"
            onClick={() => {
              resetProgress();
              setConfirmReset(false);
              setMessage("Progress reset.");
            }}
          >
            Reset
          </Button>
        </div>
      </Modal>
    </div>
  );
}
