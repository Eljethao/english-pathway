import { seededShuffle } from "./utils";

/**
 * Decides whether a question's options can be shown in a shuffled order.
 * Authors tend to put the right answer in the same position, so options are shuffled
 * (deterministically per question) unless the order carries meaning or the text refers to an option by letter.
 * Returns true, or the reason for keeping the written order.
 */
export function canShuffle(prompt: string, options: string[], explanation = ""): true | string {
  const norm = options.map((o) => o.trim().toLowerCase());
  const fixedSets = [
    ["true", "false", "not given"],
    ["yes", "no", "not given"],
    ["true", "false"],
    ["yes", "no"],
  ];
  if (fixedSets.some((set) => set.length === norm.length && set.every((x, i) => norm[i] === x))) return "fixed set";
  // Ordered scales: numbers, times, single letters, roman numerals, paragraph labels.
  if (norm.every((o) => /^[£$€]?\d[\d.,:]*\s*(%|am|pm|a\.m\.|p\.m\.|minutes?|hours?|years?|words?)?$/.test(o))) return "numbers";
  if (norm.every((o) => /^([a-h]|i{1,3}|iv|v|vi{0,3}|ix|x)$/.test(o))) return "labels";
  if (norm.every((o) => /^(paragraph|section|part|speaker|step)\b/.test(o))) return "labels";
  // Options that refer to other options.
  if (norm.some((o) => /\b(both|all|none|neither) of (the|these|them)\b|\b[a-d] and [a-d]\b|\babove\b/.test(o))) return "cross-reference";
  // Text that names an option by its letter.
  const letterRef = /\b(option|options|answer|choice|choices|letter)\s+\(?[A-D]\)?\b|\([A-D]\)|\b[A-D]\)|(^|[\s"“])[A-D] (is|was|would|says|means|repeats|uses|answers|describes)\b|\b[A-D] and [A-D]\b/;
  if (letterRef.test(prompt) || letterRef.test(explanation)) return "letter reference";
  return true;
}

/** Display order of a question's options (indexes into `options`), stable for the same question. */
export function displayOrder(exerciseId: string, index: number, prompt: string, options: string[], explanation?: string) {
  const ids = options.map((_, i) => i);
  if (canShuffle(prompt, options, explanation) !== true) return ids;
  return seededShuffle(ids, `${exerciseId}:${index}:${prompt}:${options.join("|")}`);
}
