import type { HTMLAttributes, ReactNode } from "react";
import type { PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";
import { PhotoBackdrop } from "@/components/ui/Photo";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1340px] px-4 sm:px-6", className)} {...props} />;
}

/** Small label shown above headings. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("text-sm font-bold tracking-wide text-accent uppercase", className)}>{children}</div>;
}

/** Dark title band used at the top of inner pages. */
export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  photo,
  children,
}: {
  eyebrow?: ReactNode;
  title: string;
  /** Optional words appended to the title. */
  accent?: string;
  description?: ReactNode;
  /** Optional background photo. */
  photo?: PhotoKey;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-ink text-white">
      {photo && <PhotoBackdrop name={photo} preload />}
      <Container className={cn("relative py-10 sm:py-14", photo && "sm:py-20")}>
        {eyebrow && <div className="mb-3 text-sm font-bold text-sky-300">{eyebrow}</div>}
        <h1 className="font-display-heading max-w-4xl text-4xl text-balance sm:text-5xl">
          {title}
          {accent && ` ${accent}`}
        </h1>
        {description && <p className="mt-4 max-w-3xl text-lg text-pretty text-zinc-300">{description}</p>}
        {children}
      </Container>
    </div>
  );
}

/** Serif section heading with optional subtitle, used across pages. */
export function SectionTitle({ title, subtitle, className }: { title: string; subtitle?: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 className="font-display-heading text-3xl text-ink sm:text-[2rem]">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
