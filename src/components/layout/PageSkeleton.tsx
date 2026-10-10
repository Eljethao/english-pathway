import { Container } from "./Container";

/** Neutral placeholder shown while a page's URL-specific content streams in. */
export function PageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <div className="border-b border-line">
        <Container className="space-y-4 py-12">
          <div className="h-4 w-40 animate-pulse rounded bg-zinc-100" />
          <div className="h-9 w-2/3 max-w-xl animate-pulse rounded bg-zinc-100" />
          <div className="h-5 w-full max-w-2xl animate-pulse rounded bg-zinc-100" />
        </Container>
      </div>
      <Container className="space-y-4 py-10">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-28 max-w-3xl animate-pulse rounded-xl bg-zinc-50" />
        ))}
      </Container>
    </div>
  );
}
