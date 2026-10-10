import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border border-line bg-white", className)} {...props} />;
}

/** Card styles for a clickable card (use on <Link>). */
export const cardLinkClass =
  "block rounded-lg border border-line bg-white transition-shadow duration-200 hover:shadow-lift";
