"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { EXAM_IDS, EXAM_NAMES, LEVELS, SKILLS } from "@/lib/meta";
import type { LessonSummary } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconChevronDown, IconSearch, IconX } from "@/components/ui/icons";
import { LessonCard, LessonRow } from "./LessonCard";

const DURATIONS = [
  { value: "short", label: "Up to 15 minutes", test: (m: number) => m <= 15 },
  { value: "medium", label: "16–25 minutes", test: (m: number) => m > 15 && m <= 25 },
  { value: "long", label: "Over 25 minutes", test: (m: number) => m > 25 },
];

const SORTS = [
  { value: "path", label: "Learning path" },
  { value: "short", label: "Shortest first" },
  { value: "level-asc", label: "Level: B1 to C1" },
  { value: "level-desc", label: "Level: C1 to B1" },
] as const;

const LEVEL_RANK = { B1: 0, B2: 1, C1: 2 } as const;

type GroupKey = "skill" | "level" | "exam" | "duration";

function FilterGroup({
  title,
  options,
  selected,
  counts,
  onToggle,
}: {
  title: string;
  options: { value: string; label: string }[];
  selected: string[];
  counts: Record<string, number>;
  onToggle: (value: string) => void;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-t border-line py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left font-display-heading text-lg"
      >
        {title}
        <IconChevronDown className={cn("text-base transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="mt-3 space-y-2.5">
          {options.map((o) => (
            <li key={o.value}>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink">
                <input
                  type="checkbox"
                  className="size-4 accent-ink"
                  checked={selected.includes(o.value)}
                  onChange={() => onToggle(o.value)}
                />
                <span className="flex-1">{o.label}</span>
                <span className="text-xs text-muted">({counts[o.value] ?? 0})</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LessonCatalog({ lessons }: { lessons: LessonSummary[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const progress = useProgress();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [hideDone, setHideDone] = useState(false);

  // The header search box navigates here with ?q=…; keep the local box in sync with the URL.
  const urlQuery = params.get("q") ?? "";
  const [query, setQuery] = useState(urlQuery);
  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
  if (urlQuery !== lastUrlQuery) {
    setLastUrlQuery(urlQuery);
    setQuery(urlQuery);
  }

  const read = (key: GroupKey) => params.getAll(key).flatMap((v) => v.split(","));
  const selected: Record<GroupKey, string[]> = {
    skill: read("skill"),
    level: read("level"),
    exam: read("exam"),
    duration: read("duration"),
  };
  const sort = (params.get("sort") ?? "path") as (typeof SORTS)[number]["value"];

  const push = (next: URLSearchParams) => {
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };
  const toggle = (key: GroupKey, value: string) => {
    const next = new URLSearchParams(params.toString());
    const cur = selected[key];
    next.delete(key);
    (cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]).forEach((v) => next.append(key, v));
    push(next);
  };
  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    push(next);
  };
  const clearAll = () => {
    setQuery("");
    push(new URLSearchParams());
  };

  const matches = (l: LessonSummary, skip?: GroupKey) => {
    const q = query.trim().toLowerCase();
    return (
      (skip === "skill" || !selected.skill.length || selected.skill.includes(l.skill)) &&
      (skip === "level" || !selected.level.length || selected.level.includes(l.level)) &&
      (skip === "exam" || !selected.exam.length || l.exams.some((e) => selected.exam.includes(e.exam))) &&
      (skip === "duration" ||
        !selected.duration.length ||
        DURATIONS.some((d) => selected.duration.includes(d.value) && d.test(l.minutes))) &&
      (!hideDone || !progress.completed[l.slug]) &&
      (!q ||
        `${l.title} ${l.summary} ${l.skill} ${l.exams.map((e) => `${EXAM_NAMES[e.exam]} ${e.task}`).join(" ")}`
          .toLowerCase()
          .includes(q))
    );
  };

  const results = useMemo(() => {
    const list = lessons.filter((l) => matches(l));
    if (sort === "short") return [...list].sort((a, b) => a.minutes - b.minutes);
    if (sort === "level-asc") return [...list].sort((a, b) => LEVEL_RANK[a.level] - LEVEL_RANK[b.level]);
    if (sort === "level-desc") return [...list].sort((a, b) => LEVEL_RANK[b.level] - LEVEL_RANK[a.level]);
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- matches reads the values listed here
  }, [lessons, query, params, sort, hideDone, progress.completed]);

  // Counts per option, as if that group's own filter were not applied (like a store's facets).
  const counts = (key: GroupKey, value: (l: LessonSummary) => string[]) => {
    const c: Record<string, number> = {};
    for (const l of lessons) if (matches(l, key)) for (const v of value(l)) c[v] = (c[v] ?? 0) + 1;
    return c;
  };

  const active = Object.values(selected).flat().length + (query.trim() ? 1 : 0) + (hideDone ? 1 : 0);
  const q = query.trim();

  const sidebar = (
    <div>
      <FilterGroup
        title="Skill"
        options={SKILLS.map((s) => ({ value: s.id, label: s.name }))}
        selected={selected.skill}
        counts={counts("skill", (l) => [l.skill])}
        onToggle={(v) => toggle("skill", v)}
      />
      <FilterGroup
        title="Level"
        options={LEVELS.map((l) => ({ value: l.id, label: `${l.id} ${l.name}` }))}
        selected={selected.level}
        counts={counts("level", (l) => [l.level])}
        onToggle={(v) => toggle("level", v)}
      />
      <FilterGroup
        title="Exam"
        options={EXAM_IDS.map((e) => ({ value: e, label: EXAM_NAMES[e] }))}
        selected={selected.exam}
        counts={counts("exam", (l) => [...new Set(l.exams.map((e) => e.exam))])}
        onToggle={(v) => toggle("exam", v)}
      />
      <FilterGroup
        title="Duration"
        options={DURATIONS.map((d) => ({ value: d.value, label: d.label }))}
        selected={selected.duration}
        counts={counts("duration", (l) => DURATIONS.filter((d) => d.test(l.minutes)).map((d) => d.value))}
        onToggle={(v) => toggle("duration", v)}
      />
      <div className="border-t border-line py-4">
        <label className="flex cursor-pointer items-center gap-2.5 text-sm">
          <input type="checkbox" className="size-4 accent-ink" checked={hideDone} onChange={(e) => setHideDone(e.target.checked)} />
          Hide completed lessons
        </label>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="font-display-heading text-3xl sm:text-4xl" aria-live="polite">
        {q ? (
          <>
            {results.length} result{results.length === 1 ? "" : "s"} for “{q}”
          </>
        ) : (
          "All lessons"
        )}
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button variant="secondary" size="lg" onClick={() => setFiltersOpen((o) => !o)} aria-expanded={filtersOpen} className="lg:hidden">
          Filter {active > 0 && <span className="rounded-full bg-ink px-1.5 text-xs text-white">{active}</span>}
        </Button>
        <label className="relative">
          <span className="sr-only">Sort by</span>
          <select
            value={sort}
            onChange={(e) => setParam("sort", e.target.value === "path" ? "" : e.target.value)}
            className="h-12 appearance-none rounded-lg border border-ink bg-white pr-10 pl-4 text-sm font-bold text-ink"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                Sort by: {s.label}
              </option>
            ))}
          </select>
          <IconChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2" />
        </label>
        <label className="relative order-first min-w-0 basis-full sm:order-none sm:basis-auto sm:flex-1 lg:max-w-sm">
          <span className="sr-only">Search within lessons</span>
          <IconSearch className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search within lessons"
            className="h-12 w-full rounded-lg border border-line pr-4 pl-10 text-sm outline-none focus:border-ink"
          />
        </label>
        {active > 0 && (
          <button type="button" onClick={clearAll} className="inline-flex items-center gap-1 text-sm font-bold text-link hover:underline">
            <IconX /> Clear filters
          </button>
        )}
        <span className="ml-auto text-sm font-bold text-muted">
          {results.length} lesson{results.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[16rem_1fr]">
        <aside aria-label="Filters" className={cn("lg:block", filtersOpen ? "block" : "hidden")}>
          {sidebar}
        </aside>
        <div className="min-w-0">
          {results.length ? (
            <ul className="divide-y divide-line border-t border-line">
              {results.map((l) => (
                <li key={l.slug}>
                  <LessonRow lesson={l} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-lg border border-line p-10 text-center">
              <p className="font-display-heading text-xl">Sorry, we couldn&apos;t find any lessons</p>
              <p className="mt-2 text-muted">Try different keywords or remove some filters.</p>
              <Button variant="secondary" className="mt-4" onClick={clearAll}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Static grid shown before the interactive catalog loads (and for crawlers). */
export function StaticLessonGrid({ lessons }: { lessons: LessonSummary[] }) {
  return (
    <div>
      <h1 className="font-display-heading text-3xl sm:text-4xl">All lessons</h1>
      <ul className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {lessons.map((l) => (
          <li key={l.slug}>
            <LessonCard lesson={l} />
          </li>
        ))}
      </ul>
    </div>
  );
}
