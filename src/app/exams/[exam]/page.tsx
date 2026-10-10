import type { Metadata } from "next";
import { PhotoBackdrop } from "@/components/ui/Photo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { PageSkeleton } from "@/components/layout/PageSkeleton";
import { LessonCard } from "@/components/lesson/LessonCard";
import { SkillProgress } from "@/components/progress/SkillProgress";
import { SkillDot } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { IconArrowRight, IconCheck } from "@/components/ui/icons";
import { getExam, getExams, getLesson, getLessonsBy, toSummary } from "@/lib/content";
import { EXAM_NAMES, isExam, levelMeta } from "@/lib/meta";

export function generateStaticParams() {
  return getExams().map((e) => ({ exam: e.id }));
}

export async function generateMetadata({ params }: PageProps<"/exams/[exam]">): Promise<Metadata> {
  const { exam } = await params;
  const info = isExam(exam) ? getExam(exam) : undefined;
  if (!info) return {};
  return {
    title: `${info.name} preparation: format, scoring and lessons`,
    description: info.summary,
    alternates: { canonical: `/exams/${exam}` },
  };
}

export default function ExamPage({ params }: PageProps<"/exams/[exam]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ExamHub params={params} />
    </Suspense>
  );
}

async function ExamHub({ params }: { params: Promise<{ exam: string }> }) {
  const { exam } = await params;
  const info = isExam(exam) ? getExam(exam) : undefined;
  if (!info) notFound();
  const recommended = info.recommendedLessons.map(getLesson).filter((l) => l !== undefined);
  const all = getLessonsBy({ exam: info.id });

  return (
    <>
      <div className="relative overflow-hidden bg-ink text-white">
        <PhotoBackdrop name={info.id} preload />
        <Container className="relative py-12 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-bold text-sky-300">
            <Link href="/exams" className="hover:underline">
              Exam prep
            </Link>
            <span className="text-zinc-500">›</span>
            <span>{info.name}</span>
          </nav>
          <h1 className="font-display-heading mt-3 text-4xl sm:text-5xl">{info.name} preparation</h1>
          <p className="mt-1 text-zinc-400">
            {info.fullName} · {info.provider}
          </p>
          <p className="mt-4 max-w-3xl text-lg text-zinc-200">{info.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`/practice/${info.id}`} size="lg">
              Timed practice <IconArrowRight />
            </ButtonLink>
            <ButtonLink href={`/lessons?exam=${info.id}`} variant="light" size="lg">
              All {all.length} {info.name} lessons
            </ButtonLink>
          </div>
        </Container>
      </div>

      <Container className="space-y-14 py-12">
        <section className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-display-heading">Who takes it</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {info.bestFor.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-zinc-700">
                  <IconCheck className="mt-0.5 shrink-0 text-success" /> {b}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-semibold">Versions</h3>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {info.versions.map((v) => (
                <div key={v.name} className="rounded-lg border border-line p-4">
                  <dt className="font-medium text-ink">{v.name}</dt>
                  <dd className="mt-1 text-sm text-zinc-600">{v.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="h-fit rounded-lg border border-line bg-surface p-5">
            <h2 className="font-semibold">Scoring</h2>
            <p className="mt-1 text-sm text-zinc-500">{info.scoring.scale}</p>
            <p className="mt-3 text-sm text-zinc-600">{info.scoring.description}</p>
            <table className="mt-4 w-full text-sm">
              <tbody>
                {info.scoring.levels.map((l) => (
                  <tr key={l.level} className="border-t border-line">
                    <th scope="row" className="py-2 text-left font-medium">
                      {l.level} <span className="font-normal text-zinc-500">{levelMeta(l.level).name}</span>
                    </th>
                    <td className="py-2 text-right text-zinc-700">{l.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-zinc-500">Total time: {info.totalTime}</p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-display-heading">Test format</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {info.parts.map((p) => (
              <article key={p.name} className="rounded-lg border border-line p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <SkillDot skill={p.skill} /> {p.name}
                  </h3>
                  <span className="text-xs text-zinc-500">
                    {p.duration} · {p.questions}
                  </span>
                </div>
                <dl className="mt-3 space-y-2.5">
                  {p.tasks.map((t) => (
                    <div key={t.name}>
                      <dt className="text-sm font-medium text-ink">{t.name}</dt>
                      <dd className="text-sm text-zinc-600">{t.description}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-display-heading">Strategies that work</h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {info.strategies.map((s, i) => (
              <li key={s} className="flex gap-3 rounded-lg border border-line p-4 text-sm text-zinc-700">
                <span className="font-semibold text-accent tabular-nums">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-display-heading">Your {info.name} study plan</h2>
              <p className="mt-1 text-sm text-zinc-500">Work through these lessons in order, then try the timed practice.</p>
            </div>
            <div className="w-full max-w-xs">
              <SkillProgress slugs={recommended.map((l) => l.slug)} />
            </div>
          </div>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((l) => (
              <li key={l.slug}>
                <LessonCard lesson={toSummary(l)} />
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-display-heading">Lesson map by task</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-4 py-2 font-medium">{EXAM_NAMES[info.id]} task</th>
                  <th className="px-4 py-2 font-medium">Lessons</th>
                </tr>
              </thead>
              <tbody>
                {[...new Set(all.flatMap((l) => l.exams.filter((e) => e.exam === info.id).map((e) => e.task)))].sort().map((task) => (
                  <tr key={task} className="border-t border-line">
                    <td className="px-4 py-2 align-top font-medium text-ink">{task}</td>
                    <td className="px-4 py-2 text-zinc-600">
                      {all
                        .filter((l) => l.exams.some((e) => e.exam === info.id && e.task === task))
                        .map((l) => (
                          <Link key={l.slug} href={`/lessons/${l.slug}`} className="mr-3 inline-flex items-center gap-1.5 hover:text-accent">
                            <SkillDot skill={l.skill} />
                            {l.title} <span className="text-xs text-zinc-400">{l.level}</span>
                          </Link>
                        ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-xs text-zinc-500">
          Exam information last checked {info.lastChecked}. Formats change, so confirm details on the{" "}
          <a href={info.officialUrl} className="text-accent hover:underline" rel="noopener noreferrer" target="_blank">
            official {info.name} website
          </a>{" "}
          before you book.
        </p>
      </Container>
    </>
  );
}
