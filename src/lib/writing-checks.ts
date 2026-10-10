import { words } from "./utils";

export const LINKING_WORDS = [
  "however", "therefore", "moreover", "furthermore", "in addition", "additionally", "although", "even though",
  "whereas", "while", "nevertheless", "nonetheless", "consequently", "as a result", "for example", "for instance",
  "such as", "in contrast", "on the other hand", "similarly", "likewise", "firstly", "secondly", "finally",
  "in conclusion", "to sum up", "overall", "because", "since", "despite", "in spite of", "thus", "hence",
  "meanwhile", "otherwise", "instead", "in particular", "notably", "in fact", "as well as", "not only",
  "this means", "that is why", "to begin with", "by contrast", "admittedly", "accordingly", "subsequently",
];

const STOPWORDS = new Set(
  (
    "a an the and or but if of to in on at by for with from as is are was were be been being it its this that these those " +
    "i you he she we they me him her us them my your his our their not no so do does did have has had can could will would " +
    "should may might must there here than then also very more most such which who whom whose what when where why how " +
    "all any each some many much one two about into over after before up down out just only"
  ).split(" "),
);

export interface WritingReport {
  words: number;
  sentences: number;
  paragraphs: number;
  avgSentenceLength: number;
  linkingWords: string[];
  repeated: { word: string; count: number }[];
  longSentences: number;
}

export function analyseWriting(text: string): WritingReport {
  const ws = words(text);
  const sentenceList = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => /[a-z]/i.test(s));
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim()).length;
  const lower = ` ${text.toLowerCase().replace(/[^a-z' ]/g, " ").replace(/\s+/g, " ")} `;
  const linkingWords = LINKING_WORDS.filter((l) => lower.includes(` ${l} `));

  const counts = new Map<string, number>();
  for (const w of ws) {
    if (w.length < 4 || STOPWORDS.has(w)) continue;
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  const limit = Math.max(4, Math.ceil(ws.length / 60));
  const repeated = [...counts.entries()]
    .filter(([, c]) => c >= limit)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([word, count]) => ({ word, count }));

  const lengths = sentenceList.map((s) => words(s).length);
  return {
    words: ws.length,
    sentences: sentenceList.length,
    paragraphs,
    avgSentenceLength: lengths.length ? Math.round((ws.length / lengths.length) * 10) / 10 : 0,
    linkingWords,
    repeated,
    longSentences: lengths.filter((n) => n > 35).length,
  };
}

export function countWords(text: string) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}
