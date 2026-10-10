import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/Container";
import { RichText, Inline } from "@/components/lesson/RichText";
import { DataTable } from "@/components/media/Chart";
import { LevelBadge } from "@/components/ui/Badge";
import { IconCheck, IconX } from "@/components/ui/icons";
import { getGrammarTopics } from "@/lib/content";
import { LEVELS } from "@/lib/meta";

export const metadata: Metadata = {
  title: "Grammar reference",
  description: "Clear B1–C1 grammar explanations with examples, common mistakes and how each point helps in IELTS, TOEFL and TOEIC.",
  alternates: { canonical: "/grammar" },
};

export default function GrammarPage() {
  const topics = getGrammarTopics();
  return (
    <>
      <PageHeader
        photo="grammar"
        eyebrow={`${topics.length} topics`}
        title="Grammar that" accent="examiners notice."
        description="The grammar that matters most for exam writing and speaking, from B1 to C1, with the mistakes examiners see most often."
      />
      <Container className="grid gap-10 py-10 lg:grid-cols-[15rem_1fr]">
        <nav aria-label="Grammar topics" className="lg:sticky lg:top-24 lg:h-fit">
          {LEVELS.map((lv) => (
            <div key={lv.id} className="mb-5">
              <div className="mb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase">
                {lv.id} · {lv.name}
              </div>
              <ul className="space-y-1">
                {topics
                  .filter((t) => t.level === lv.id)
                  .map((t) => (
                    <li key={t.slug}>
                      <a href={`#${t.slug}`} className="block rounded-md px-2 py-1 text-sm text-zinc-600 hover:bg-surface hover:text-ink">
                        {t.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="min-w-0 space-y-16">
          {topics.map((t) => (
            <article key={t.slug} id={t.slug} className="max-w-3xl scroll-mt-24" aria-labelledby={`${t.slug}-h`}>
              <div className="flex items-center gap-2">
                <LevelBadge level={t.level} />
              </div>
              <h2 id={`${t.slug}-h`} className="mt-2 text-2xl font-display-heading">
                {t.title}
              </h2>
              <p className="mt-2 text-lg text-zinc-600">{t.summary}</p>
              <RichText text={t.explanation} className="mt-5" />
              {t.forms && (
                <div className="mt-5">
                  <DataTable headers={t.forms.headers} rows={t.forms.rows} />
                </div>
              )}
              <h3 className="mt-6 mb-2 font-semibold">Examples</h3>
              <ul className="space-y-2 rounded-xl bg-surface p-4 text-[0.95rem] text-zinc-700">
                {t.examples.map((e) => (
                  <li key={e} className="border-l-2 border-zinc-200 pl-3">
                    <Inline text={e} />
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 mb-2 font-semibold">Common mistakes</h3>
              <ul className="space-y-3">
                {t.mistakes.map((m) => (
                  <li key={m.wrong} className="rounded-lg border border-line p-4 text-sm">
                    <p className="flex gap-2 text-rose-700">
                      <IconX className="mt-0.5 shrink-0" /> <span className="line-through decoration-rose-300">{m.wrong}</span>
                    </p>
                    <p className="mt-1 flex gap-2 text-emerald-700">
                      <IconCheck className="mt-0.5 shrink-0" /> {m.right}
                    </p>
                    <p className="mt-2 text-zinc-600">
                      <Inline text={m.note} />
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-blue-100 bg-accent-soft/60 p-4 text-sm">
                <span className="font-semibold text-ink">In the exam: </span>
                <Inline text={t.examUse} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
