import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { PageSkeleton } from "@/components/layout/PageSkeleton";
import { ExerciseScope } from "@/components/exercises/ExerciseShell";
import { SectionList } from "@/components/lesson/SectionRenderer";
import { PracticeRunner } from "@/components/practice/PracticeRunner";
import { SkillDot } from "@/components/ui/Badge";
import { IconClock } from "@/components/ui/icons";
import { getExam, getExams, getPracticeSets, gradedExerciseIds } from "@/lib/content";
import { isExam } from "@/lib/meta";

export function generateStaticParams() {
  return getExams().map((e) => ({ exam: e.id }));
}

export async function generateMetadata({ params }: PageProps<"/practice/[exam]">): Promise<Metadata> {
  const { exam } = await params;
  const info = isExam(exam) ? getExam(exam) : undefined;
  if (!info) return {};
  return {
    title: `${info.name} timed practice`,
    description: `Timed ${info.name} practice sets for listening, reading, writing and speaking, with instant feedback.`,
    alternates: { canonical: `/practice/${exam}` },
  };
}

export default function PracticePage({ params }: PageProps<"/practice/[exam]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Practice params={params} />
    </Suspense>
  );
}

async function Practice({ params }: { params: Promise<{ exam: string }> }) {
  const { exam } = await params;
  const info = isExam(exam) ? getExam(exam) : undefined;
  if (!info) notFound();
  const sets = getPracticeSets(info.id);

  return (
    <>
      <div className="bg-ink text-white">
        <Container className="py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-sm font-bold text-sky-300">
            <Link href="/practice" className="hover:underline">
              Practice tests
            </Link>
            <span className="text-zinc-500">›</span>
            <Link href={`/exams/${info.id}`} className="hover:underline">
              {info.name}
            </Link>
          </nav>
          <h1 className="font-display-heading text-4xl sm:text-5xl">{info.name} timed practice</h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-300">
            {sets.length} exam-style sets. Start one when you have time to finish it without stopping. The timer is a guide:
            you can keep working after it ends.
          </p>
          <nav aria-label="Practice sets" className="mt-6 flex flex-wrap gap-2">
            {sets.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-3 py-1 text-sm font-bold text-white hover:bg-white/10">
                <SkillDot skill={s.skill} /> <span className="capitalize">{s.skill}</span>
              </a>
            ))}
          </nav>
        </Container>
      </div>
      <Container className="space-y-16 py-12">
        {sets.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28">
            <div className="mb-5 max-w-3xl">
              <div className="flex items-center gap-2 text-sm capitalize text-zinc-500">
                <SkillDot skill={s.skill} /> {s.skill}
                <span className="inline-flex items-center gap-1 normal-case">
                  · <IconClock /> {s.minutes} min
                </span>
              </div>
              <h2 id={`${s.id}-h`} className="mt-2 text-2xl font-display-heading">
                {s.title}
              </h2>
              <p className="mt-2 text-zinc-600">{s.description}</p>
            </div>
            <ExerciseScope scope={`practice/${s.id}`}>
              <PracticeRunner id={s.id} minutes={s.minutes} gradedIds={gradedExerciseIds(s.sections)}>
                <SectionList sections={s.sections} />
              </PracticeRunner>
            </ExerciseScope>
          </section>
        ))}
      </Container>
    </>
  );
}
