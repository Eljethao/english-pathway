"use client";

import Link from "next/link";
import { useCloud } from "@/hooks/useCloud";
import { useHydrated, useProgress } from "@/hooks/useProgress";
import { SKILLS, levelMeta } from "@/lib/meta";
import type { LessonSummary, Level } from "@/lib/types";
import { addDays, today } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { IconBookmark, IconCheck, IconFlame, IconTarget } from "@/components/ui/icons";
import { LessonCard } from "@/components/lesson/LessonCard";
import { LevelCourses } from "./LevelCourses";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" });
}

/** Learner profile: level from the placement test, stats and next lessons. Reads this browser's progress. */
export function ProfileSummary({ lessons }: { lessons: LessonSummary[] }) {
  const hydrated = useHydrated();
  const progress = useProgress();
  const cloud = useCloud();

  if (!hydrated) return <div className="h-72 animate-pulse rounded-lg bg-surface" aria-busy="true" />;

  const level: Level | undefined = progress.placementLevel;
  const meta = level ? levelMeta(level) : undefined;
  const done = lessons.filter((l) => progress.completed[l.slug]);
  const scores = done.map((l) => progress.completed[l.slug].score).filter((s): s is number => s !== undefined);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
  const streak = progress.streak.lastActive >= addDays(today(), -1) ? progress.streak.current : 0;
  const levelLessons = level ? lessons.filter((l) => l.level === level) : [];
  const levelDone = levelLessons.filter((l) => progress.completed[l.slug]).length;
  // One next lesson per skill: at the learner's level, or from the start of the path.
  const pool = level ? levelLessons : lessons;
  const next = SKILLS.map((sk) => pool.find((l) => l.skill === sk.id && !progress.completed[l.slug])).filter(
    (l): l is LessonSummary => Boolean(l),
  );
  const name = cloud.user?.email ?? "Guest learner";

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-lg border border-line" aria-labelledby="profile-h">
        <div className="flex flex-wrap items-center gap-5 bg-surface p-6">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-ink text-2xl font-bold text-white">
            {cloud.user?.email ? cloud.user.email.charAt(0).toUpperCase() : "?"}
          </span>
          <div className="min-w-0">
            <h2 id="profile-h" className="font-display-heading text-2xl break-all">
              {name}
            </h2>
            <p className="text-sm text-muted">
              {cloud.user ? "Signed in · progress synced to your account" : "Not signed in · progress saved in this browser"}
            </p>
          </div>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-[1fr_1.4fr]">
          <div className="rounded-lg border border-line p-5">
            <div className="text-sm font-bold text-muted">Your level</div>
            {level && meta ? (
              <>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-display-heading text-5xl text-accent">{level}</span>
                  <span className="text-lg font-bold">{meta.name}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-700">{meta.description}</p>
                <dl className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    ["IELTS", meta.ielts],
                    ["TOEFL", meta.toefl],
                    ["TOEIC", meta.toeic],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-md bg-surface py-2">
                      <dt className="text-muted">{k}</dt>
                      <dd className="font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-muted">
                  {progress.placementDate ? `Placement test taken on ${formatDate(progress.placementDate)}. ` : "From your placement test. "}
                  <Link href="/placement" className="font-bold text-link hover:underline">
                    Retake the test
                  </Link>
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 font-display-heading text-xl">You haven&apos;t found your level yet</p>
                <p className="mt-1 text-sm text-zinc-700">Take the 10-minute placement test to get a level and a starting point.</p>
                <ButtonLink href="/placement" className="mt-4">
                  Take the placement test
                </ButtonLink>
              </>
            )}
          </div>

          <dl className="grid grid-cols-2 gap-3">
            {[
              { icon: IconCheck, label: "Lessons completed", value: `${done.length} / ${lessons.length}` },
              {
                icon: IconTarget,
                label: level ? `${level} lessons done` : "Average score",
                value: level ? `${levelDone} / ${levelLessons.length}` : avg === null ? "–" : `${avg}%`,
              },
              { icon: IconFlame, label: "Day streak", value: String(streak) },
              { icon: IconBookmark, label: "Saved words", value: String(progress.savedWords.length) },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-line p-4">
                <dt className="flex items-center gap-2 text-xs font-bold text-muted">
                  <s.icon /> {s.label}
                </dt>
                <dd className="font-display-heading mt-2 text-3xl tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {level && (
          <div className="border-t border-line p-6" aria-labelledby="courses-h">
            <h3 id="courses-h" className="font-display-heading mb-4 text-xl">
              Your {level} courses
            </h3>
            <LevelCourses level={level} lessons={lessons} />
          </div>
        )}
      </section>

      {next.length > 0 && (
        <section aria-labelledby="next-h">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 id="next-h" className="font-display-heading text-2xl">
              {level ? `Recommended for ${level} ${levelMeta(level).name}` : "Good places to start"}
            </h2>
            <Link href={level ? `/lessons?level=${level}` : "/lessons"} className="text-sm font-bold text-link hover:underline">
              See all {level ?? ""} lessons
            </Link>
          </div>
          <ul className="mt-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {next.map((l) => (
              <li key={l.slug}>
                <LessonCard lesson={l} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
