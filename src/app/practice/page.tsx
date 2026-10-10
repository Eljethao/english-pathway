import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/layout/Container";
import { LessonThumb } from "@/components/lesson/LessonThumb";
import { IconArrowRight, IconClock } from "@/components/ui/icons";
import { getExams, getPracticeSets } from "@/lib/content";
import { EXAM_NAMES } from "@/lib/meta";

export const metadata: Metadata = {
  title: "Timed practice tests",
  description: "Timed IELTS, TOEFL iBT and TOEIC practice sets for listening, reading, writing and speaking.",
  alternates: { canonical: "/practice" },
};

export default function PracticeIndex() {
  return (
    <>
      <PageHeader
        photo="practice"
        eyebrow="Practice tests"
        title="Timed practice, exam-style"
        description="Exam-style sections with a countdown and instant scoring. Use them after the lessons to build speed and confidence."
      />
      <Container className="space-y-14 py-12">
        {getExams().map((e) => (
          <section key={e.id} aria-labelledby={`${e.id}-h`}>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
              <h2 id={`${e.id}-h`} className="font-display-heading text-3xl">
                {e.name}
              </h2>
              <Link href={`/practice/${e.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-link hover:underline">
                Open all {e.name} sets <IconArrowRight />
              </Link>
            </div>
            <ul className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {getPracticeSets(e.id).map((p) => (
                <li key={p.id}>
                  <Link href={`/practice/${e.id}#${p.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-lg border border-line">
                      <LessonThumb slug={p.id} skill={p.skill} level="B2" title="practice test" />
                      <span className="absolute top-3 right-3 rounded bg-white px-1.5 py-0.5 text-[0.7rem] font-bold text-ink">
                        {EXAM_NAMES[p.exam]}
                      </span>
                      <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
                    </div>
                    <h3 className="mt-2.5 line-clamp-2 leading-snug font-bold text-ink group-hover:underline">{p.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted">{p.description}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                      <IconClock /> {p.minutes} min · <span className="capitalize">{p.skill}</span>
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-bold">Free</span>
                      <span className="rounded bg-badge px-1.5 py-0.5 text-[0.7rem] font-bold text-badge-ink">Timed</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </>
  );
}
