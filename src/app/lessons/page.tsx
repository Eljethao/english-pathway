import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { LessonCatalog, StaticLessonGrid } from "@/components/lesson/LessonCatalog";
import { getAllSummaries } from "@/lib/content";

export const metadata: Metadata = {
  title: "All lessons",
  description: "Browse English lessons for listening, reading, writing and speaking from B1 to C1, filtered by IELTS, TOEFL or TOEIC.",
  alternates: { canonical: "/lessons" },
};

export default function LessonsPage() {
  const lessons = getAllSummaries();
  return (
    <Container className="py-10">
      <Suspense fallback={<StaticLessonGrid lessons={lessons} />}>
        <LessonCatalog lessons={lessons} />
      </Suspense>
    </Container>
  );
}
