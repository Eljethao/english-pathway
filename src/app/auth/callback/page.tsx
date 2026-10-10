import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { AuthCallback } from "@/components/account/AuthCallback";

export const metadata: Metadata = { title: "Signing in", robots: { index: false } };

export default function AuthCallbackPage() {
  return (
    <Container className="py-24">
      <AuthCallback />
    </Container>
  );
}
