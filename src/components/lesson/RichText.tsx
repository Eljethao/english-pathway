import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Renders **bold** and *italic* inside a line of text. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**") && p.length > 4)
          return (
            <strong key={i} className="font-semibold text-ink">
              {p.slice(2, -2)}
            </strong>
          );
        if (p.startsWith("*") && p.endsWith("*") && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

type Run = { kind: "ul" | "ol" | "p"; lines: string[] };

/** Groups the lines of a block into bullet runs, numbered runs and plain text runs. */
function runs(block: string): Run[] {
  const out: Run[] = [];
  for (const raw of block.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const kind: Run["kind"] = line.startsWith("- ") ? "ul" : /^\d+\.\s/.test(line) ? "ol" : "p";
    const last = out[out.length - 1];
    if (last && last.kind === kind) last.lines.push(line);
    else out.push({ kind, lines: [line] });
  }
  return out;
}

/**
 * Tiny markup renderer: blank lines separate blocks; "- " lines are bullet lists,
 * "1. " lines are numbered lists; other single newlines become line breaks.
 */
export function RichText({ text, className }: { text: string; className?: string }) {
  const all = text
    .split(/\n\s*\n/)
    .flatMap((b) => runs(b))
    .filter((r) => r.lines.length);
  return (
    <div className={cn("space-y-3 leading-7 text-zinc-700", className)}>
      {all.map((r, i) => {
        if (r.kind === "ul")
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5 marker:text-zinc-300">
              {r.lines.map((l, j) => (
                <li key={j}>
                  <Inline text={l.slice(2)} />
                </li>
              ))}
            </ul>
          );
        if (r.kind === "ol")
          return (
            <ol key={i} className="list-decimal space-y-1.5 pl-5 marker:text-zinc-400" start={parseInt(r.lines[0], 10)}>
              {r.lines.map((l, j) => (
                <li key={j}>
                  <Inline text={l.replace(/^\d+\.\s/, "")} />
                </li>
              ))}
            </ol>
          );
        return (
          <p key={i}>
            {r.lines.map((l, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                <Inline text={l} />
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export function SectionTitle({ children, as: Tag = "h3" }: { children: ReactNode; as?: "h2" | "h3" }) {
  return <Tag className="mb-3 text-lg font-bold text-ink">{children}</Tag>;
}
