import type { ChartData } from "@/lib/types";
import { Inline } from "@/components/lesson/RichText";

const COLORS = ["#2563eb", "#f59e0b", "#10b981", "#8b5cf6", "#f43f5e"];
const DASH = ["", "6 4", "2 3", "8 3 2 3", ""];

function niceMax(v: number) {
  if (v <= 0) return 1;
  const mag = 10 ** Math.floor(Math.log10(v));
  const n = v / mag;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return step * mag;
}

/** Simple, accessible SVG line/bar chart for IELTS Task 1 style tasks. */
export function Chart({ chart }: { chart: ChartData }) {
  const W = 640;
  const H = 340;
  const pad = { l: 52, r: 16, t: 16, b: 48 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const all = chart.series.flatMap((s) => s.values);
  const max = niceMax(Math.max(...all));
  const ticks = Array.from({ length: 5 }, (_, i) => (max / 4) * i);
  const y = (v: number) => pad.t + ih - (v / max) * ih;
  const n = chart.categories.length;
  const band = iw / n;
  const x = (i: number) => pad.l + band * i + band / 2;
  const fmt = (v: number) => (Number.isInteger(v) ? String(v) : v.toFixed(1));

  return (
    <figure className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <figcaption className="mb-2 text-sm font-semibold text-ink">{chart.title}</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`${chart.kind} chart: ${chart.title}`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke="#e4e4e7" strokeWidth={1} />
            <text x={pad.l - 8} y={y(t) + 4} textAnchor="end" fontSize="12" fill="#71717a">
              {fmt(t)}
            </text>
          </g>
        ))}
        {chart.unit && (
          <text x={12} y={pad.t + ih / 2} fontSize="12" fill="#71717a" transform={`rotate(-90 12 ${pad.t + ih / 2})`} textAnchor="middle">
            {chart.unit}
          </text>
        )}
        {chart.categories.map((c, i) => (
          <text key={c} x={x(i)} y={H - pad.b + 20} textAnchor="middle" fontSize="12" fill="#52525b">
            {c}
          </text>
        ))}
        {chart.kind === "bar"
          ? chart.series.map((s, si) => {
              const bw = Math.min(36, (band * 0.75) / chart.series.length);
              return s.values.map((v, i) => (
                <rect
                  key={`${si}-${i}`}
                  x={x(i) - (bw * chart.series.length) / 2 + bw * si}
                  y={y(v)}
                  width={bw - 2}
                  height={pad.t + ih - y(v)}
                  rx={2}
                  fill={COLORS[si % COLORS.length]}
                >
                  <title>{`${s.name}, ${chart.categories[i]}: ${v}${chart.unit ? " " + chart.unit : ""}`}</title>
                </rect>
              ));
            })
          : chart.series.map((s, si) => (
              <g key={s.name}>
                <polyline
                  points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
                  fill="none"
                  stroke={COLORS[si % COLORS.length]}
                  strokeWidth={2.5}
                  strokeDasharray={DASH[si % DASH.length]}
                />
                {s.values.map((v, i) => (
                  <circle key={i} cx={x(i)} cy={y(v)} r={3.5} fill="white" stroke={COLORS[si % COLORS.length]} strokeWidth={2}>
                    <title>{`${s.name}, ${chart.categories[i]}: ${v}${chart.unit ? " " + chart.unit : ""}`}</title>
                  </circle>
                ))}
              </g>
            ))}
      </svg>
      {chart.series.length > 1 && (
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600">
          {chart.series.map((s, si) => (
            <li key={s.name} className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-4 rounded-sm" style={{ background: COLORS[si % COLORS.length] }} />
              {s.name}
            </li>
          ))}
        </ul>
      )}
      <details className="mt-3 text-sm">
        <summary className="cursor-pointer text-zinc-500 hover:text-ink">Show data as a table</summary>
        <DataTable headers={["", ...chart.categories]} rows={chart.series.map((s) => [s.name, ...s.values.map(String)])} />
      </details>
    </figure>
  );
}

export function DataTable({ headers, rows, title }: { headers: string[]; rows: string[][]; title?: string }) {
  return (
    <div className="mt-2 overflow-x-auto rounded-lg border border-line">
      <table className="w-full border-collapse text-left text-sm">
        {title && <caption className="px-3 py-2 text-left font-semibold">{title}</caption>}
        <thead className="bg-surface">
          <tr>
            {headers.map((h, i) => (
              <th key={i} scope="col" className="border-b border-line px-3 py-2 font-medium text-ink">
                <Inline text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 align-top text-zinc-700">
                  <Inline text={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
