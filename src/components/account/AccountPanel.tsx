"use client";

import { useState, type FormEvent } from "react";
import { useCloud } from "@/hooks/useCloud";
import { cloudConfigured, deleteCloudProgress, sendMagicLink, signOut, syncNow } from "@/lib/cloud";
import { cn } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { IconCheck, IconRefresh } from "@/components/ui/icons";
import type { LessonSummary } from "@/lib/types";
import { ProfileSummary } from "./ProfileSummary";

const STATUS_TEXT = {
  off: "Not syncing",
  idle: "Waiting to sync",
  syncing: "Syncing…",
  synced: "Up to date",
  error: "Sync problem",
} as const;

export function AccountPanel({ lessons }: { lessons: LessonSummary[] }) {
  return (
    <div className="space-y-12">
      <ProfileSummary lessons={lessons} />
      <section aria-labelledby="sync-h">
        <h2 id="sync-h" className="font-display-heading mb-4 text-2xl">
          Sign-in and sync
        </h2>
        <SyncPanel />
      </section>
    </div>
  );
}

function SyncPanel() {
  const cloud = useCloud();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  if (!cloudConfigured)
    return (
      <p className="max-w-xl rounded-lg border border-line p-5 text-zinc-600">
        Cloud sync is not set up on this site. Your progress is saved in this browser, and you can move it with Export on
        the Progress page.
      </p>
    );

  if (!cloud.ready) return <div className="h-48 max-w-xl animate-pulse rounded-xl bg-surface" aria-busy="true" />;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await sendMagicLink(email.trim());
      setSent(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not send the email.";
      setError(/rate limit/i.test(msg) ? "Too many emails were sent recently. Please wait a few minutes and try again." : msg);
    } finally {
      setBusy(false);
    }
  };

  if (!cloud.user)
    return (
      <div className="max-w-xl">
        {sent ? (
          <div className="rounded-lg border border-line p-6" role="status">
            <h2 className="text-lg font-semibold">Check your email</h2>
            <p className="mt-2 text-zinc-600">
              We sent a sign-in link to <strong className="text-ink">{email}</strong>. Open it in this browser to finish
              signing in. It can take a minute to arrive, so check your spam folder too.
            </p>
            <Button variant="ghost" className="mt-4 -ml-3" onClick={() => setSent(false)}>
              Use a different email
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-lg border border-line p-6">
            <h2 className="text-lg font-semibold">Sign in to sync your progress</h2>
            <p className="mt-1 text-sm text-zinc-500">
              No password needed. We email you a one-time link. New here? The same link creates your account.
            </p>
            <label htmlFor="email" className="mt-5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-lg border border-zinc-300 px-3 outline-none focus:border-accent"
              placeholder="you@example.com"
            />
            {error && (
              <p className="mt-2 text-sm text-error" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" size="lg" className="mt-4 w-full" disabled={busy}>
              {busy ? "Sending…" : "Email me a sign-in link"}
            </Button>
          </form>
        )}
        <ul className="mt-6 space-y-2 text-sm text-zinc-600">
          {[
            "Keep your lessons, scores, saved words and streak on every device",
            "Progress you made before signing in is kept and merged",
            "Without an account everything still works in this browser",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <IconCheck className="mt-0.5 shrink-0 text-success" /> {t}
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <div className="max-w-xl space-y-6">
      <div className="rounded-lg border border-line p-6">
        <div className="text-sm text-zinc-500">Signed in as</div>
        <div className="mt-1 text-lg font-semibold break-all">{cloud.user.email}</div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <div aria-live="polite">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span
                className={cn(
                  "size-2 rounded-full",
                  cloud.status === "error" ? "bg-error" : cloud.status === "syncing" ? "bg-amber-400" : "bg-success",
                )}
              />
              {STATUS_TEXT[cloud.status]}
            </div>
            {cloud.lastSynced && (
              <div className="mt-0.5 text-xs text-zinc-500">
                Last synced {new Date(cloud.lastSynced).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            )}
          </div>
          <Button variant="secondary" size="sm" onClick={() => syncNow()} disabled={cloud.status === "syncing"}>
            <IconRefresh /> Sync now
          </Button>
        </div>
        {cloud.error && (
          <p className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700" role="alert">
            {cloud.error}
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <ButtonLink href="/progress" variant="secondary">
          View progress
        </ButtonLink>
        <Button variant="secondary" onClick={() => signOut()}>
          Sign out
        </Button>
        <Button variant="ghost" className="text-error hover:text-error" onClick={() => setConfirmDelete(true)}>
          Delete cloud copy
        </Button>
      </div>
      <p className="text-xs text-zinc-500">
        Signing out keeps your progress on this device. Your progress is stored in your own private row; only you can read
        it.
      </p>
      <Modal open={confirmDelete} onClose={() => setConfirmDelete(false)} title="Delete your cloud progress?">
        <p className="text-sm text-zinc-600">
          This removes the copy stored online and signs you out. Progress in this browser is not deleted, and other devices
          keep their own copy until they sync again.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setConfirmDelete(false)}>
            Cancel
          </Button>
          <Button
            className="bg-error hover:bg-rose-700"
            onClick={async () => {
              try {
                await deleteCloudProgress();
              } catch (e) {
                setError(e instanceof Error ? e.message : "Could not delete.");
              }
              setConfirmDelete(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}
