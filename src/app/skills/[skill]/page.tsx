import type { Metadata } from "next";
import { PhotoBackdrop } from "@/components/ui/Photo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { PageSkeleton } from "@/components/layout/PageSkeleton";
import { LessonCard } from "@/components/lesson/LessonCard";
import { SkillProgress } from "@/components/progress/SkillProgress";
import { ExamBadge, SkillIcon } from "@/components/ui/Badge";
import { IconArrowRight, IconClock } from "@/components/ui/icons";
import { getLessonsBy, getPracticeSets, toSummary } from "@/lib/content";
import { EXAM_NAMES, LEVELS, SKILLS, isSkill, skillMeta } from "@/lib/meta";
import { formatDuration } from "@/lib/utils";

export function generateStaticParams() {
  return SKILLS.map((s) => ({ skill: s.id }));
}

export async function generateMetadata({ params }: PageProps<"/skills/[skill]">): Promise<Metadata> {
  const { skill } = await params;
  if (!isSkill(skill)) return {};
  const s = skillMeta(skill);
  return { title: `${s.name} lessons`, description: s.description, alternates: { canonical: `/skills/${skill}` } };
}

export default function SkillPage({ params }: PageProps<"/skills/[skill]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Skill params={params} />
    </Suspense>
  );
}

async function Skill({ params }: { params: Promise<{ skill: string }> }) {
  const { skill } = await params;
  if (!isSkill(skill)) notFound();
  const s = skillMeta(skill);
  const lessons = getLessonsBy({ skill });
  const tasks = [...new Map(lessons.flatMap((l) => l.exams).map((e) => [`${e.exam}|${e.task}`, e])).values()].filter(
    (e) => e.task !== "Mock test",
  );
  const sets = getPracticeSets().filter((p) => p.skill === skill);

  return (
    <>
      <div className="relative overflow-hidden bg-ink text-white">
        <PhotoBackdrop name={skill} preload />
        <Container className="relative grid gap-8 py-12 sm:py-20 lg:grid-cols-[1fr_22rem] lg:items-center">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-bold text-sky-300">
              <Link href="/lessons" className="hover:underline">
                Lessons
              </Link>
              <span className="text-zinc-500">›</span>
              <span>{s.name}</span>
            </nav>
            <h1 className="font-display-heading mt-3 text-4xl sm:text-5xl">{s.name} lessons</h1>
            <p className="mt-3 max-w-2xl text-lg text-zinc-300">{s.description}</p>
          </div>
          <div className="rounded-lg bg-white p-5 text-ink">
            <div className="flex items-center gap-3">
              <SkillIcon skill={skill} />
              <div className="text-sm">
                <div className="font-bold">3 courses · {lessons.length} lessons · {formatDuration(lessons.reduce((a, l) => a + l.minutes, 0))}</div>
                <div className="text-muted">{sets.length} timed practice tests</div>
              </div>
            </div>
            <div className="mt-4">
              <SkillProgress slugs={lessons.map((l) => l.slug)} />
            </div>
          </div>
        </Container>
      </div>
      <Container className="space-y-14 py-12">
        {LEVELS.map((lv) => {
          const list = lessons.filter((l) => l.level === lv.id);
          return (
            <section key={lv.id} id={`course-${lv.id.toLowerCase()}`} aria-labelledby={`lv-${lv.id}`} className="scroll-mt-28">
              <div className="mb-6 grid gap-4 rounded-lg border border-line bg-surface p-5 sm:p-6 lg:grid-cols-[1fr_18rem] lg:items-center">
                <div>
                  <div className="text-sm font-bold text-accent">
                    {s.name} {lv.id} course
                  </div>
                  <h2 id={`lv-${lv.id}`} className="font-display-heading mt-1 text-3xl">
                    {lv.name}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-700">{lv.description}</p>
                  <p className="mt-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold text-ink">
                    <span>{list.length} lessons</span>
                    <span className="inline-flex items-center gap-1">
                      <IconClock /> {formatDuration(list.reduce((a, l) => a + l.minutes, 0))}
                    </span>
                    <span className="font-normal text-muted">
                      IELTS {lv.ielts} · TOEFL {lv.toefl} · TOEIC {lv.toeic}
                    </span>
                  </p>
                </div>
                <SkillProgress slugs={list.map((l) => l.slug)} />
              </div>
              <ol className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((l) => (
                  <li key={l.slug}>
                    <LessonCard lesson={toSummary(l)} showSkill={false} />
                  </li>
                ))}
              </ol>
            </section>
          );
        })}

        <section className="grid gap-6 rounded-lg border border-line p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display-heading text-2xl">Exam tasks covered</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tasks.map((t) => (
                <ExamBadge key={`${t.exam}-${t.task}`} exam={t.exam} task={t.task} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display-heading text-2xl">Timed practice</h2>
            <ul className="mt-4 space-y-2">
              {sets.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/practice/${p.exam}#${p.id}`}
                    className="flex items-center justify-between gap-3 rounded-lg border border-line px-4 py-3 text-sm hover:border-zinc-300"
                  >
                    <span>
                      <span className="font-medium text-ink">{EXAM_NAMES[p.exam]}</span>
                      <span className="text-zinc-500"> · {p.title}</span>
                    </span>
                    <IconArrowRight className="shrink-0 text-zinc-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
}
