"use client";

import Link from "next/link";
import { useCloud } from "@/hooks/useCloud";
import { cloudConfigured } from "@/lib/cloud";
import { cn } from "@/lib/utils";
import { buttonClass } from "@/components/ui/Button";

/** Header control: "Sign in", or the learner's initial with a sync dot. */
export function AccountButton({ className }: { className?: string }) {
  const cloud = useCloud();
  if (!cloudConfigured || !cloud.ready) return null;
  if (!cloud.user)
    return (
      <Link href="/account" className={buttonClass("secondary", "md", className)}>
        Sign in
      </Link>
    );
  const initial = (cloud.user.email ?? "?").charAt(0).toUpperCase();
  return (
    <Link
      href="/account"
      aria-label={`Account: ${cloud.user.email}`}
      title={cloud.status === "error" ? "Sync problem" : "Account and sync"}
      className={cn("relative inline-flex size-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-white hover:bg-ink-soft", className)}
    >
      {initial}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -right-0.5 -bottom-0.5 size-3 rounded-full ring-2 ring-white",
          cloud.status === "error" ? "bg-error" : cloud.status === "syncing" ? "bg-amber-400" : "bg-emerald-500",
        )}
      />
    </Link>
  );
}
