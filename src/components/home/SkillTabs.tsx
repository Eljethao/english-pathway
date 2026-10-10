"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { SKILLS } from "@/lib/meta";
import type { LessonSummary, Skill } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { LessonCard } from "@/components/lesson/LessonCard";
import { Photo } from "@/components/ui/Photo";

const BLURB: Record<Skill, { title: string; body: string }> = {
  listening: {
    title: "Train your ear for real exam audio",
    body: "Conversations, announcements and lectures read aloud at your speed, with form completion, maps, note-taking and choose-a-response tasks.",
  },
  reading: {
    title: "Read faster and answer with confidence",
    body: "Master skimming, scanning, True/False/Not Given, matching headings and long academic passages, with a highlighter and an exam timer.",
  },
  writing: {
    title: "Write emails, reports and essays that score",
    body: "Timed tasks with a live word count, automatic checks for linking words and repetition, band-style rubrics and model answers.",
  },
  speaking: {
    title: "Speak fluently under exam conditions",
    body: "Record yourself with real preparation and speaking timers, see your pace and filler words, and compare with model answers.",
  },
};

/** Skill tabs with a carousel of that skill's lessons (home page). */
export function SkillTabs({ lessons }: { lessons: LessonSummary[] }) {
  const [skill, setSkill] = useState<Skill>("listening");
  const id = useId();
  const list = lessons.filter((l) => l.skill === skill);
  const meta = SKILLS.find((s) => s.id === skill)!;

  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + SKILLS.length) % SKILLS.length;
    setSkill(SKILLS[next].id);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Skills" className="no-scrollbar flex gap-6 overflow-x-auto border-b border-line">
        {SKILLS.map((s, i) => (
          <button
            key={s.id}
            id={`${id}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={s.id === skill}
            aria-controls={`${id}-panel`}
            tabIndex={s.id === skill ? 0 : -1}
            onKeyDown={(e) => onKey(e, i)}
            onClick={() => setSkill(s.id)}
            className={cn(
              "-mb-px shrink-0 border-b-2 pb-3 text-base font-bold transition-colors duration-150",
              s.id === skill ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink",
            )}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${SKILLS.findIndex((s) => s.id === skill)}`} className="mt-6 rounded-lg border border-line p-5 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_18rem] md:items-center">
          <div>
            <h3 className="font-display-heading text-2xl">{BLURB[skill].title}</h3>
            <p className="mt-2 max-w-3xl text-zinc-700">{BLURB[skill].body}</p>
            <ButtonLink href={`/skills/${skill}`} variant="secondary" className="mt-4">
              Explore {meta.name}
            </ButtonLink>
          </div>
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-lg md:block">
            <Photo key={skill} name={skill} sizes="300px" />
          </div>
        </div>
        <Carousel key={skill} label={`${meta.name} lessons`} className="mt-8">
          {list.map((l) => (
            <CarouselItem key={l.slug}>
              <LessonCard lesson={l} showSkill={false} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
