import type { Level, Skill } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Generated cover art for a lesson: skill colours, a pattern chosen from the slug, and a small skill glyph. */

const PALETTE: Record<Skill, { from: string; to: string; ink: string }> = {
  listening: { from: "#0369a1", to: "#38bdf8", ink: "#e0f2fe" },
  reading: { from: "#065f46", to: "#34d399", ink: "#d1fae5" },
  writing: { from: "#92400e", to: "#fbbf24", ink: "#fef3c7" },
  speaking: { from: "#86198f", to: "#e879f9", ink: "#fae8ff" },
};

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function Pattern({ variant, ink }: { variant: number; ink: string }) {
  switch (variant) {
    case 0:
      return (
        <g fill="none" stroke={ink} strokeOpacity="0.35">
          {[30, 55, 80, 105, 130].map((r) => (
            <circle key={r} cx="40" cy="170" r={r} strokeWidth="1.5" />
          ))}
        </g>
      );
    case 1:
      return (
        <g stroke={ink} strokeOpacity="0.22" strokeWidth="10">
          {Array.from({ length: 12 }, (_, i) => (
            <line key={i} x1={i * 34 - 120} y1="190" x2={i * 34 + 40} y2="-10" />
          ))}
        </g>
      );
    case 2:
      return (
        <g fill="none" stroke={ink} strokeOpacity="0.35" strokeWidth="2">
          {[40, 70, 100, 130].map((y) => (
            <path key={y} d={`M-10 ${y} C 50 ${y - 28}, 110 ${y + 28}, 170 ${y} S 290 ${y - 28}, 340 ${y}`} />
          ))}
        </g>
      );
    case 3:
      return (
        <g fill={ink} fillOpacity="0.3">
          {Array.from({ length: 8 }, (_, r) =>
            Array.from({ length: 9 }, (_, c) => <circle key={`${r}-${c}`} cx={14 + c * 22} cy={14 + r * 22} r="2.2" />),
          )}
        </g>
      );
    default:
      return (
        <g>
          <circle cx="250" cy="-10" r="110" fill={ink} fillOpacity="0.16" />
          <circle cx="30" cy="190" r="70" fill={ink} fillOpacity="0.14" />
        </g>
      );
  }
}

function Glyph({ skill, color }: { skill: Skill; color: string }) {
  // Drawn inside a white card at (182, 46) sized 112x88.
  switch (skill) {
    case "listening":
      return (
        <g fill={color}>
          {[10, 18, 30, 22, 40, 28, 48, 34, 24, 38, 44, 26, 16, 30, 20, 12].map((h, i) => (
            <rect key={i} x={194 + i * 5.6} y={90 - h / 2} width="3" height={h} rx="1.5" opacity={i < 9 ? 1 : 0.3} />
          ))}
        </g>
      );
    case "reading":
      return (
        <g fill={color}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x="196" y={60 + i * 11} width={i === 2 ? 60 : i === 5 ? 48 : 84} height="5" rx="2.5" opacity={i === 2 ? 1 : 0.35} />
          ))}
        </g>
      );
    case "writing":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="196" y={62 + i * 14} width={i === 3 ? 40 : 82} height="5" rx="2.5" fill={color} opacity="0.35" />
          ))}
          <rect x="238" y="102" width="2.5" height="13" fill={color} />
          <path d="M262 112 l18 -30 l7 4 l-18 30 l-9 4 z" fill={color} />
        </g>
      );
    case "speaking":
      return (
        <g fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round">
          <rect x="227" y="58" width="22" height="38" rx="11" fill={color} stroke="none" />
          <path d="M218 84 a20 20 0 0 0 40 0 M238 104 v10" />
          <path d="M204 72 q-6 14 0 28 M272 72 q6 14 0 28" opacity="0.45" />
        </g>
      );
  }
}

export function LessonThumb({
  slug,
  skill,
  level,
  title,
  className,
  fill = false,
}: {
  slug: string;
  skill: Skill;
  level: Level;
  title?: string;
  className?: string;
  /** Fill the parent box (cropping the art) instead of keeping 16:9. */
  fill?: boolean;
}) {
  const p = PALETTE[skill];
  const h = hash(slug);
  const variant = h % 5;
  const mock = /practice test/i.test(title ?? "") || slug.endsWith("practice-test");
  const id = `thumb-${slug}`;
  const angle = (h >> 3) % 2 === 0;

  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio={fill ? "xMidYMid slice" : undefined}
      className={cn("block w-full", fill ? "h-full" : "h-auto", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2={angle ? "1" : "0.6"} y2="1">
          <stop offset="0" stopColor={mock ? "#0b1a3a" : p.from} />
          <stop offset="1" stopColor={mock ? p.from : p.to} />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#${id})`} />
      {level === "C1" && !mock && <rect width="320" height="180" fill="#000" fillOpacity="0.18" />}
      {level === "B1" && !mock && <rect width="320" height="180" fill="#fff" fillOpacity="0.08" />}
      <Pattern variant={variant} ink={p.ink} />
      <rect x="182" y="46" width="112" height="88" rx="10" fill="white" />
      <Glyph skill={skill} color={mock ? "#0b1a3a" : p.from} />
      <rect x="16" y="16" width={mock ? 74 : 34} height="22" rx="6" fill="white" fillOpacity="0.92" />
      <text x={mock ? 53 : 33} y="31.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0b1a3a" fontFamily="ui-sans-serif, system-ui">
        {mock ? `${level} · MOCK` : level}
      </text>
      {!fill && (
        <text x="16" y="162" fontSize="13" fontWeight="700" fill="white" fontFamily="ui-sans-serif, system-ui" letterSpacing="1.5">
          {skill.toUpperCase()}
        </text>
      )}
    </svg>
  );
}
