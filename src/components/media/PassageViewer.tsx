"use client";

import { useState, type MouseEvent } from "react";
import { cn, LETTERS } from "@/lib/utils";
import { Timer } from "@/components/ui/Timer";
import { IconHighlighter } from "@/components/ui/icons";
import { Inline } from "@/components/lesson/RichText";

type Range = [number, number];

function merge(ranges: Range[]): Range[] {
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);
  const out: Range[] = [];
  for (const r of sorted) {
    const last = out[out.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else out.push([...r]);
  }
  return out;
}

/** Strip the tiny markup so offsets match the rendered text. */
const plain = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*\s][^*]*)\*/g, "$1");

function Paragraph({ text, ranges }: { text: string; ranges: Range[] }) {
  if (!ranges.length) return <Inline text={text} />;
  const t = plain(text);
  const parts: React.ReactNode[] = [];
  let pos = 0;
  ranges.forEach(([a, b], i) => {
    if (a > pos) parts.push(t.slice(pos, a));
    parts.push(
      <mark key={i} className="hl">
        {t.slice(a, b)}
      </mark>,
    );
    pos = b;
  });
  parts.push(t.slice(pos));
  return <>{parts}</>;
}

/** Reading passage with optional paragraph letters, highlighter and timer. */
export function PassageViewer({
  title,
  paragraphs,
  labelled,
  timerMinutes,
  className,
}: {
  title: string;
  paragraphs: string[];
  labelled?: boolean;
  timerMinutes?: number;
  className?: string;
}) {
  const [highlighting, setHighlighting] = useState(false);
  const [marks, setMarks] = useState<Record<number, Range[]>>({});

  const onMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (!highlighting) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    const para = (range.startContainer.parentElement ?? null)?.closest<HTMLElement>("[data-para]");
    if (!para || !e.currentTarget.contains(para) || !para.contains(range.endContainer)) {
      sel.removeAllRanges();
      return;
    }
    const pre = document.createRange();
    pre.selectNodeContents(para);
    pre.setEnd(range.startContainer, range.startOffset);
    const start = pre.toString().length;
    const end = start + range.toString().length;
    const idx = Number(para.dataset.para);
    if (end > start) setMarks((m) => ({ ...m, [idx]: merge([...(m[idx] ?? []), [start, end]]) }));
    sel.removeAllRanges();
  };

  const hasMarks = Object.values(marks).some((r) => r.length);

  return (
    <article className={cn("rounded-lg border border-line bg-white shadow-soft", className)}>
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3 sm:px-6">
        <h3 className="font-semibold text-ink">{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            aria-pressed={highlighting}
            onClick={() => setHighlighting((h) => !h)}
            title="Select text in the passage to highlight it"
            className={cn(
              "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-sm transition-colors duration-150",
              highlighting ? "border-amber-300 bg-amber-50 text-amber-800" : "border-line text-zinc-600 hover:bg-surface",
            )}
          >
            <IconHighlighter /> Highlight
          </button>
          {hasMarks && (
            <button type="button" onClick={() => setMarks({})} className="text-sm text-zinc-500 hover:text-ink">
              Clear
            </button>
          )}
          {timerMinutes && <Timer minutes={timerMinutes} label="Reading timer" />}
        </div>
      </header>
      {highlighting && (
        <p className="border-b border-line bg-amber-50/50 px-4 py-1.5 text-xs text-amber-800 sm:px-6">
          Select words in the passage to highlight them.
        </p>
      )}
      <div className="prose-passage space-y-4 px-4 py-5 text-zinc-800 sm:px-6" onMouseUp={onMouseUp} onTouchEnd={() => undefined}>
        {paragraphs.map((p, i) => (
          <div key={i} className="flex gap-3">
            {labelled && <span className="w-5 shrink-0 pt-0.5 text-sm font-semibold text-zinc-400">{LETTERS[i]}</span>}
            <p data-para={i} className={cn(highlighting && "selection:bg-amber-200")}>
              <Paragraph text={p} ranges={marks[i] ?? []} />
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
