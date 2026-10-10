import Image from "next/image";
import type { Section } from "@/lib/types";
import { EXAM_NAMES } from "@/lib/meta";
import { Chart, DataTable } from "@/components/media/Chart";
import { PassageViewer } from "@/components/media/PassageViewer";
import { TtsPlayer } from "@/components/media/TtsPlayer";
import { Exercise } from "@/components/exercises/Exercise";
import { IconLightbulb } from "@/components/ui/icons";
import { Inline, RichText, SectionTitle } from "./RichText";

export function ExamTipBox({ exam, body }: { exam: keyof typeof EXAM_NAMES; body: string }) {
  return (
    <aside className="flex gap-3 rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-lg text-accent ring-1 ring-blue-100">
        <IconLightbulb />
      </span>
      <div>
        <div className="text-sm font-semibold text-ink">{EXAM_NAMES[exam]} tip</div>
        <RichText text={body} className="mt-1 text-sm leading-6" />
      </div>
    </aside>
  );
}

export function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case "text":
      return (
        <div>
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
          <RichText text={section.body} />
        </div>
      );
    case "example":
      return (
        <div className="rounded-lg border border-line bg-surface p-5 sm:p-6">
          {section.title && <div className="mb-2 text-sm font-semibold text-ink">{section.title}</div>}
          <ul className="space-y-2 text-[0.95rem] leading-7 text-zinc-700">
            {section.items.map((it, i) => (
              <li key={i} className="border-l-2 border-blue-200 pl-3">
                <Inline text={it} />
              </li>
            ))}
          </ul>
        </div>
      );
    case "passage":
      return (
        <PassageViewer
          title={section.title}
          paragraphs={section.paragraphs}
          labelled={section.labelled}
          timerMinutes={section.timerMinutes}
        />
      );
    case "audio":
      return <TtsPlayer title={section.title} transcript={section.transcript} voice={section.voice} cast={section.cast} src={section.src} />;
    case "tip":
      return <ExamTipBox exam={section.exam} body={section.body} />;
    case "table":
      return <DataTable headers={section.headers} rows={section.rows} title={section.title} />;
    case "chart":
      return <Chart chart={section.chart} />;
    case "image":
      return (
        <figure className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
          <Image src={section.src} alt={section.alt} width={800} height={500} className="h-auto w-full" unoptimized />
          {section.caption && <figcaption className="border-t border-line px-4 py-2 text-sm text-zinc-500">{section.caption}</figcaption>}
        </figure>
      );
    case "exercise":
      return <Exercise exercise={section.exercise} />;
  }
}

type Block = { kind: "single"; section: Section } | { kind: "split"; passage: Section; rest: Section[] };

/** A passage followed by exercises is shown side by side on large screens. */
function group(sections: Section[]): Block[] {
  const out: Block[] = [];
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    if (s.type === "passage" && sections[i + 1]?.type === "exercise") {
      const rest: Section[] = [];
      while (sections[i + 1]?.type === "exercise") rest.push(sections[++i]);
      out.push({ kind: "split", passage: s, rest });
    } else out.push({ kind: "single", section: s });
  }
  return out;
}

export function SectionList({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-8">
      {group(sections).map((b, i) =>
        b.kind === "single" ? (
          <div key={i} className="max-w-3xl">
            <SectionBlock section={b.section} />
          </div>
        ) : (
          <div key={i} className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-32 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto lg:rounded-xl">
              <SectionBlock section={b.passage} />
            </div>
            <div className="space-y-6">
              {b.rest.map((s, j) => (
                <SectionBlock key={j} section={s} />
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
