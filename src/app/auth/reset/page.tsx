import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ResetPassword } from "@/components/account/ResetPassword";

export const metadata: Metadata = { title: "Reset password", robots: { index: false } };

export default function ResetPasswordPage() {
  return (
    <Container className="py-24">
      <ResetPassword />
    </Container>
  );
}
