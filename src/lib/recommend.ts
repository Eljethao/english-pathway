import type { Skill } from "./types";
/**
 * Which course to start with after the placement test: the skill area with the lowest score.
 * Listening and reading are measured directly; grammar points to writing and vocabulary to speaking.
 */
export function recommendedSkill(areas?: Partial<Record<"grammar" | "vocabulary" | "reading" | "listening", number>>): Skill {
  if (!areas) return "listening";
  const map = { listening: "listening", reading: "reading", grammar: "writing", vocabulary: "speaking" } as const;
  const entries = (Object.keys(map) as (keyof typeof map)[]).filter((k) => areas[k] !== undefined);
  if (!entries.length) return "listening";
  const weakest = entries.reduce((a, b) => ((areas[b] ?? 100) < (areas[a] ?? 100) ? b : a));
  return map[weakest];
}
