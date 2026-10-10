"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCloud } from "@/hooks/useCloud";
import { ButtonLink } from "@/components/ui/Button";
import { ChangePasswordForm } from "./AccountPanel";

/** Landing page for the password-reset email: Supabase signs the learner in from the link, then they choose a password. */
export function ResetPassword() {
  const cloud = useCloud();
  const router = useRouter();
  const [urlError, setUrlError] = useState<string | null>(null);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search + "&" + window.location.hash.slice(1));
    const err = params.get("error_description");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading the URL after mount
    if (err) setUrlError(err.replace(/\+/g, " "));
    const t = setTimeout(() => setSlow(true), 8000);
    return () => clearTimeout(t);
  }, []);

  if (cloud.user)
    return (
      <div className="mx-auto max-w-md rounded-lg border border-line p-6">
        <h1 className="font-display-heading text-2xl">Choose a new password</h1>
        <p className="mt-1 mb-2 text-sm text-zinc-600">
          For <strong className="text-ink">{cloud.user.email}</strong>. You will use it to sign in from now on.
        </p>
        <ChangePasswordForm onDone={() => router.push("/")} />
      </div>
    );

  if (urlError || slow)
    return (
      <div className="mx-auto max-w-md text-center" role="alert">
        <h1 className="font-display-heading text-2xl">This reset link didn&apos;t work</h1>
        <p className="mt-3 text-zinc-600">
          {urlError ?? "The link may have expired or been opened in a different browser."} Request a new one with
          “Forgot password?” and open it in the same browser.
        </p>
        <ButtonLink href="/account" className="mt-6">
          Back to sign in
        </ButtonLink>
      </div>
    );

  return (
    <div className="mx-auto max-w-md text-center" aria-busy="true">
      <div className="mx-auto size-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      <p className="mt-4 text-zinc-600">Checking your link…</p>
    </div>
  );
}
