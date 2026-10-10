import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/Container";
import { AccountPanel } from "@/components/account/AccountPanel";
import { getAllSummaries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Your profile",
  description: "Sign in to sync your English Pathway progress across devices.",
  robots: { index: false },
};

export default function AccountPage() {
  return (
    <>
      <PageHeader
        photo="hero" title="Your profile" description="Your level, your progress and your account settings in one place." />
      <Container className="py-10">
        <AccountPanel lessons={getAllSummaries()} />
      </Container>
    </>
  );
}
