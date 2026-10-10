import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/Container";
import { VocabularyBrowser } from "@/components/vocabulary/VocabularyBrowser";
import { getVocabLists } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vocabulary and flashcards",
  description: "Topic word lists for IELTS, TOEFL and TOEIC, academic and business vocabulary, and spaced-repetition flashcards.",
  alternates: { canonical: "/vocabulary" },
};

export default function VocabularyPage() {
  const { lessonLists, topicLists } = getVocabLists();
  const total = new Set([...lessonLists, ...topicLists].flatMap((l) => l.words.map((w) => w.word))).size;
  return (
    <>
      <PageHeader
        photo="vocabulary"
        eyebrow={`${total} words`}
        title="Words that" accent="come up again and again."
        description="Learn the words that come up again and again in exams. Save words, then review them with flashcards that space out your practice."
      />
      <Container className="py-10">
        <VocabularyBrowser lessonLists={lessonLists} topicLists={topicLists} />
      </Container>
    </>
  );
}
