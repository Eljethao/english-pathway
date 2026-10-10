import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/Container";
import { ProgressDashboard } from "@/components/progress/ProgressDashboard";
import { getAllSummaries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Your progress",
  description: "Track completed lessons, scores by skill, your streak and saved words.",
  robots: { index: false },
};

export default function ProgressPage() {
  const lessons = getAllSummaries().map(({ slug, title, skill, level }) => ({ slug, title, skill, level }));
  return (
    <>
      <PageHeader
        photo="lessons" title="My learning" description="Your lessons, scores, streak and saved words. Sign in to keep them on every device." />
      <Container className="py-10">
        <ProgressDashboard lessons={lessons} />
      </Container>
    </>
  );
}
