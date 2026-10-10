import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/ui/icons";
import { getExams, getLessonsBy } from "@/lib/content";
import { LEVELS, SKILLS } from "@/lib/meta";

export const metadata: Metadata = {
  title: "IELTS vs TOEFL vs TOEIC",
  description: "Compare IELTS, TOEFL iBT and TOEIC: who each exam is for, format, timing, scoring and CEFR levels.",
  alternates: { canonical: "/exams" },
};

export default function ExamsPage() {
  const exams = getExams();
  const rows: { label: string; values: React.ReactNode[] }[] = [
    { label: "Run by", values: exams.map((e) => e.provider) },
    { label: "Best for", values: exams.map((e) => e.bestFor.slice(0, 2).join("; ")) },
    { label: "Versions", values: exams.map((e) => e.versions.map((v) => v.name).join(", ")) },
    { label: "Total time", values: exams.map((e) => e.totalTime) },
    { label: "Score scale", values: exams.map((e) => e.scoring.scale) },
    ...SKILLS.map((s) => ({
      label: s.name,
      values: exams.map((e) => {
        const parts = e.parts.filter((p) => p.skill === s.id);
        return parts.length ? parts.map((p) => `${p.duration}, ${p.questions}`).join(" / ") : "Not tested in the main test";
      }),
    })),
    ...LEVELS.map((l) => ({
      label: `${l.id} level`,
      values: exams.map((e) => e.scoring.levels.find((x) => x.level === l.id)?.score ?? "–"),
    })),
  ];

  return (
    <>
      <PageHeader
        photo="ielts"
        eyebrow="Exams"
        title="IELTS, TOEFL iBT" accent="or TOEIC?"
        description="All three test the four skills, but they are used for different purposes. Compare them side by side, then open an exam hub for the format, scoring and a study plan."
      />
      <Container className="py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {exams.map((e) => (
            <div key={e.id} className="flex flex-col rounded-lg border border-line p-6">
              <h2 className="text-xl font-semibold">{e.name}</h2>
              <p className="text-sm text-zinc-500">{e.fullName}</p>
              <p className="mt-3 text-sm text-zinc-600">{e.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                <ButtonLink href={`/exams/${e.id}`} size="sm">
                  Exam hub <IconArrowRight />
                </ButtonLink>
                <ButtonLink href={`/practice/${e.id}`} size="sm" variant="secondary">
                  Practice
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-14 mb-4 text-xl font-display-heading">Side-by-side comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="w-36 border-b border-line px-4 py-3 font-medium text-zinc-500" />
                {exams.map((e) => (
                  <th key={e.id} scope="col" className="border-b border-line px-4 py-3 font-semibold">
                    <Link href={`/exams/${e.id}`} className="hover:text-accent">
                      {e.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-line last:border-0">
                  <th scope="row" className="px-4 py-3 align-top font-medium text-zinc-500">
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td key={i} className="px-4 py-3 align-top text-zinc-700">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row" className="px-4 py-3 align-top font-medium text-zinc-500">
                  Lessons here
                </th>
                {exams.map((e) => (
                  <td key={e.id} className="px-4 py-3 text-zinc-700">
                    <Link href={`/lessons?exam=${e.id}`} className="text-accent hover:underline">
                      {getLessonsBy({ exam: e.id }).length} lessons
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          Level mappings are approximate and based on the official CEFR concordance published by each test provider. Formats
          change, so always check the official website before you book. Last checked {exams[0]?.lastChecked}.
        </p>
      </Container>
    </>
  );
}
