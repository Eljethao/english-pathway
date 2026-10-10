"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCloud } from "@/hooks/useCloud";
import { ButtonLink } from "@/components/ui/Button";

/** Landing page for the magic link. Supabase reads the code from the URL; we wait for the session. */
export function AuthCallback() {
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

  useEffect(() => {
    if (cloud.user) router.replace("/");
  }, [cloud.user, router]);

  if (urlError || (slow && !cloud.user))
    return (
      <div className="mx-auto max-w-md text-center" role="alert">
        <h1 className="text-2xl font-display-heading">This sign-in link didn&apos;t work</h1>
        <p className="mt-3 text-zinc-600">
          {urlError ?? "The link may have expired or been opened in a different browser."} Request a new link and open it
          in the same browser.
        </p>
        <ButtonLink href="/account" className="mt-6">
          Try again
        </ButtonLink>
      </div>
    );

  return (
    <div className="mx-auto max-w-md text-center" aria-busy="true">
      <div className="mx-auto size-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      <p className="mt-4 text-zinc-600">Signing you in…</p>
    </div>
  );
}
