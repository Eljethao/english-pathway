import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/Container";
import { PlacementTest } from "@/components/placement/PlacementTest";
import { PLACEMENT_QUESTIONS } from "@/content/placement";
import { getLessonsBy, toSummary } from "@/lib/content";
import type { Level } from "@/lib/types";

export const metadata: Metadata = {
  title: "English placement test",
  description: "A free 20-question English placement test that recommends your starting level: B1, B2 or C1.",
  alternates: { canonical: "/placement" },
};

export default function PlacementPage() {
  const starters = Object.fromEntries(
    (["B1", "B2", "C1"] as Level[]).map((level) => [
      level,
      getLessonsBy({ level })
        .filter((l) => l.order === 1)
        .map(toSummary),
    ]),
  ) as Record<Level, ReturnType<typeof toSummary>[]>;
  return (
    <>
      <PageHeader
        photo="placement"
        eyebrow="Placement test"
        title="Find your" accent="level."
        description="Answer 20 questions and we will recommend where to start on the pathway."
      />
      <Container className="py-10">
        <PlacementTest questions={PLACEMENT_QUESTIONS} starters={starters} />
      </Container>
    </>
  );
}
