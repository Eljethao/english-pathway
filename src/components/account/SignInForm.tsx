"use client";

import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import {
  MIN_PASSWORD,
  resendConfirmation,
  sendMagicLink,
  sendPasswordReset,
  signInWithPassword,
  signUpWithPassword,
} from "@/lib/cloud";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Mode = "signin" | "signup" | "forgot" | "link";

const inputClass = "mt-1.5 h-11 w-full rounded-lg border border-zinc-300 px-3 outline-none focus:border-accent";

/** Password field with a Show / Hide toggle. */
export function PasswordInput({
  id,
  value,
  onChange,
  autoComplete,
  label = "Password",
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete: "current-password" | "new-password";
  label?: string;
}) {
  const [show, setShow] = useState(false);
  const hintId = `${id}-hint`;
  return (
    <div className="mt-4">
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          required
          minLength={autoComplete === "new-password" ? MIN_PASSWORD : undefined}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={autoComplete === "new-password" ? hintId : undefined}
          className={cn(inputClass, "pr-16")}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-pressed={show}
          aria-controls={id}
          className="absolute top-1/2 right-2 mt-0.75 -translate-y-1/2 rounded px-2 py-1 text-xs font-bold text-link hover:bg-surface"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {autoComplete === "new-password" && (
        <p id={hintId} className="mt-1 text-xs text-muted">
          At least {MIN_PASSWORD} characters.
        </p>
      )}
    </div>
  );
}

const TITLES: Record<Mode, { title: string; intro: string; button: string; busy: string }> = {
  signin: {
    title: "Sign in to sync your progress",
    intro: "Use your email and password.",
    button: "Sign in",
    busy: "Signing in…",
  },
  signup: {
    title: "Create your account",
    intro: "Your progress in this browser is kept and added to your new account.",
    button: "Create account",
    busy: "Creating account…",
  },
  forgot: {
    title: "Reset your password",
    intro: "We will email you a link to choose a new password. Use this too if you used to sign in with an email link.",
    button: "Email me a reset link",
    busy: "Sending…",
  },
  link: {
    title: "Sign in with an email link",
    intro: "We email you a one-time link. Open it in this browser to sign in.",
    button: "Email me a sign-in link",
    busy: "Sending…",
  },
};

export function SignInForm() {
  const router = useRouter();
  const uid = useId();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unconfirmed, setUnconfirmed] = useState(false);
  const [sent, setSent] = useState<null | { title: string; body: string }>(null);

  const switchTo = (m: Mode) => {
    setMode(m);
    setError(null);
    setUnconfirmed(false);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const addr = email.trim();
    setBusy(true);
    setError(null);
    setUnconfirmed(false);
    try {
      if (mode === "signin") {
        await signInWithPassword(addr, password);
        router.push("/");
      } else if (mode === "signup") {
        const result = await signUpWithPassword(addr, password);
        if (result === "signed-in") router.push("/");
        else
          setSent({
            title: "Confirm your email",
            body: `We sent a confirmation link to ${addr}. Open it once to activate your account. After that you sign in with your password.`,
          });
      } else if (mode === "forgot") {
        await sendPasswordReset(addr);
        setSent({
          title: "Check your email",
          body: `If ${addr} has an account, we sent it a link to choose a new password. Open it in this browser.`,
        });
      } else {
        await sendMagicLink(addr);
        setSent({ title: "Check your email", body: `We sent a sign-in link to ${addr}. Open it in this browser to finish signing in.` });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setUnconfirmed(Boolean(err && typeof err === "object" && "unconfirmed" in err));
    } finally {
      setBusy(false);
    }
  };

  const resend = async () => {
    setBusy(true);
    try {
      await resendConfirmation(email.trim());
      setSent({ title: "Confirmation email sent", body: `Open the link we sent to ${email.trim()}, then sign in with your password.` });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send the email.");
    } finally {
      setBusy(false);
    }
  };

  if (sent)
    return (
      <div className="rounded-lg border border-line p-6" role="status">
        <h2 className="text-lg font-semibold">{sent.title}</h2>
        <p className="mt-2 text-zinc-600">{sent.body} It can take a minute to arrive, so check your spam folder too.</p>
        <Button
          variant="ghost"
          className="mt-4 -ml-3"
          onClick={() => {
            setSent(null);
            switchTo("signin");
          }}
        >
          Back to sign in
        </Button>
      </div>
    );

  const t = TITLES[mode];
  return (
    <form onSubmit={submit} className="rounded-lg border border-line p-6">
      {(mode === "signin" || mode === "signup") && (
        <div className="mb-5 grid grid-cols-2 rounded-lg bg-surface p-1" role="tablist" aria-label="Account">
          {(["signin", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => switchTo(m)}
              className={cn(
                "rounded-md py-2 text-sm font-bold transition-colors",
                mode === m ? "bg-white text-ink shadow-soft" : "text-muted hover:text-ink",
              )}
            >
              {m === "signin" ? "Sign in" : "Create account"}
            </button>
          ))}
        </div>
      )}
      <h2 className="text-lg font-semibold">{t.title}</h2>
      <p className="mt-1 text-sm text-zinc-500">{t.intro}</p>

      <label htmlFor={`${uid}-email`} className="mt-5 block text-sm font-medium text-ink">
        Email
      </label>
      <input
        id={`${uid}-email`}
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
        placeholder="you@example.com"
      />
      {(mode === "signin" || mode === "signup") && (
        <PasswordInput
          id={`${uid}-password`}
          value={password}
          onChange={setPassword}
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
        />
      )}
      {mode === "signin" && (
        <button type="button" onClick={() => switchTo("forgot")} className="mt-2 text-sm font-bold text-link hover:underline">
          Forgot password?
        </button>
      )}

      {error && (
        <p className="mt-3 text-sm text-error" role="alert">
          {error}
        </p>
      )}
      {unconfirmed && (
        <Button variant="secondary" size="sm" className="mt-2" onClick={resend} disabled={busy}>
          Resend confirmation email
        </Button>
      )}
      <Button type="submit" size="lg" className="mt-5 w-full" disabled={busy}>
        {busy ? t.busy : t.button}
      </Button>

      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
        {mode !== "signin" && (
          <button type="button" onClick={() => switchTo("signin")} className="font-bold text-link hover:underline">
            Back to sign in
          </button>
        )}
        {mode !== "link" && (
          <button type="button" onClick={() => switchTo("link")} className="text-muted hover:text-ink hover:underline">
            Email me a sign-in link instead
          </button>
        )}
      </div>
    </form>
  );
}
