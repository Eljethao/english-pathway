import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-2 text-3xl font-display-heading">Page not found</h1>
      <p className="mt-3 text-zinc-600">This page doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Go home</ButtonLink>
        <ButtonLink href="/lessons" variant="secondary">
          Browse lessons
        </ButtonLink>
      </div>
    </Container>
  );
}
