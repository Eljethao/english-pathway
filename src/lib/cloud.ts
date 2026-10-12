import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";
import { SITE } from "./meta";
import {
  getProgress,
  mergeProgress,
  parseProgress,
  replaceProgress,
  subscribe as subscribeProgress,
} from "./progress";

/*
 * Optional cloud sync with Supabase. Everything runs in the browser:
 * - sign in with an email magic link (no passwords)
 * - one `progress` row per user, protected by row-level security
 * The site works exactly as before when Supabase is not configured or the learner is signed out.
 */

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const SYNC_KEY = "english-pathway:sync";

export const cloudConfigured = Boolean(URL && KEY);

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!cloudConfigured || typeof window === "undefined") return null;
  client ??= createClient(URL!, KEY!, {
    auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  });
  return client;
}

/* ---------- state store (read with useCloud) ---------- */

export type SyncStatus = "off" | "idle" | "syncing" | "synced" | "error";

export interface CloudState {
  ready: boolean;
  user: Pick<User, "id" | "email"> | null;
  status: SyncStatus;
  lastSynced: string | null;
  error: string | null;
}

let state: CloudState = { ready: false, user: null, status: "off", lastSynced: null, error: null };
const listeners = new Set<() => void>();

function setState(patch: Partial<CloudState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export const getCloudState = () => state;
export const SERVER_CLOUD_STATE: CloudState = state;
export function subscribeCloud(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/* ---------- sync engine ---------- */

/** Remembers which cloud version this device last saw, per user. */
function readMarker(): { userId: string; remoteUpdatedAt: string; pushed: string } | null {
  try {
    return JSON.parse(window.localStorage.getItem(SYNC_KEY) ?? "null");
  } catch {
    return null;
  }
}

function writeMarker(m: { userId: string; remoteUpdatedAt: string; pushed: string } | null) {
  try {
    if (m) window.localStorage.setItem(SYNC_KEY, JSON.stringify(m));
    else window.localStorage.removeItem(SYNC_KEY);
  } catch {
    /* storage unavailable */
  }
}

let running: Promise<void> = Promise.resolve();

/**
 * Pull → merge → push. If the cloud copy has not changed since this device last synced,
 * local progress simply replaces it (so resets and removed words stick). If another device
 * wrote in the meantime, both copies are merged.
 */
export function syncNow(): Promise<void> {
  running = running.then(doSync, doSync);
  return running;
}

async function doSync() {
  const supabase = getSupabase();
  const user = state.user;
  if (!supabase || !user) return;
  setState({ status: "syncing", error: null });
  try {
    const { data: row, error } = await supabase
      .from("progress")
      .select("data, updated_at")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;

    const marker = readMarker();
    const known = marker?.userId === user.id ? marker : null;
    let local = getProgress();

    if (row && row.updated_at !== known?.remoteUpdatedAt) {
      local = mergeProgress(local, parseProgress(row.data));
      replaceProgress(local);
    }

    const json = JSON.stringify(local);
    if (row && known && row.updated_at === known.remoteUpdatedAt && json === known.pushed) {
      setState({ status: "synced", lastSynced: new Date().toISOString() });
      return;
    }

    const { data: saved, error: upsertError } = await supabase
      .from("progress")
      .upsert({ user_id: user.id, data: local })
      .select("updated_at")
      .single();
    if (upsertError) throw upsertError;
    writeMarker({ userId: user.id, remoteUpdatedAt: saved.updated_at, pushed: json });
    setState({ status: "synced", lastSynced: new Date().toISOString() });
  } catch (e) {
    const message = e instanceof Error ? e.message : (e as { message?: string })?.message ?? "Sync failed";
    setState({
      status: "error",
      error: /progress/.test(message) && /schema cache|does not exist/.test(message)
        ? "The progress table is missing. Run supabase/migrations in the Supabase SQL editor."
        : message,
    });
  }
}

let started = false;

/** Starts listening for sign-in changes and local edits. Safe to call more than once. */
export function startCloud() {
  const supabase = getSupabase();
  if (started) return;
  started = true;
  if (!supabase) {
    setState({ ready: true, status: "off" });
    return;
  }

  supabase.auth.onAuthStateChange((event, session) => {
    const user = session?.user ? { id: session.user.id, email: session.user.email } : null;
    const changed = user?.id !== state.user?.id;
    setState({ ready: true, user, status: user ? (state.status === "off" ? "idle" : state.status) : "off" });
    // Supabase recommends not awaiting other calls inside this callback.
    if (user && (changed || event === "SIGNED_IN")) setTimeout(syncNow, 0);
    // A reset link can land on any page (Supabase falls back to the Site URL); always finish on /auth/reset.
    if (event === "PASSWORD_RECOVERY" && window.location.pathname !== "/auth/reset") window.location.replace("/auth/reset");
  });

  let timer: ReturnType<typeof setTimeout> | undefined;
  subscribeProgress(() => {
    if (!state.user) return;
    clearTimeout(timer);
    timer = setTimeout(syncNow, 2000);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && state.user) syncNow();
  });
}

/* ---------- auth actions ---------- */

export async function sendMagicLink(email: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Cloud sync is not configured.");
  const { error } = await supabase.auth.signInWithOtp({
    email,
    // Links always open the live site, even when requested from a local copy.
    options: { emailRedirectTo: `${SITE.url}/auth/callback`, shouldCreateUser: true },
  });
  if (error) throw error;
}

/** Minimum password length (Supabase's own minimum is 6). */
export const MIN_PASSWORD = 8;

function authError(error: { message: string; code?: string }) {
  const m = error.message;
  if (error.code === "invalid_credentials" || /invalid login credentials/i.test(m))
    return new Error("Wrong email or password. If you used to sign in with an email link, choose “Forgot password?” to set one.");
  if (error.code === "email_not_confirmed" || /email not confirmed/i.test(m))
    return Object.assign(new Error("Please confirm your email first: open the link we sent when you created your account."), {
      unconfirmed: true,
    });
  if (/rate limit/i.test(m)) return new Error("Too many attempts. Please wait a few minutes and try again.");
  return new Error(m);
}

export async function signInWithPassword(email: string, password: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Cloud sync is not configured.");
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw authError(error);
}

/**
 * Creates an account. Returns "signed-in" when the project does not require email confirmation,
 * otherwise "confirm" (a confirmation email was sent).
 */
export async function signUpWithPassword(email: string, password: string): Promise<"signed-in" | "confirm"> {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Cloud sync is not configured.");
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${SITE.url}/auth/callback` },
  });
  if (error) {
    if (error.code === "user_already_exists" || /already registered/i.test(error.message))
      throw new Error("An account with this email already exists. Sign in instead, or reset your password.");
    throw authError(error);
  }
  // With confirmation on, Supabase hides whether the email is taken: an existing user comes back with no identities.
  if (data.user && data.user.identities?.length === 0)
    throw new Error("An account with this email already exists. Sign in instead, or reset your password.");
  return data.session ? "signed-in" : "confirm";
}

export async function resendConfirmation(email: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Cloud sync is not configured.");
  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
    options: { emailRedirectTo: `${SITE.url}/auth/callback` },
  });
  if (error) throw authError(error);
}

/** Emails a link that opens /auth/reset, where a new password can be chosen. */
export async function sendPasswordReset(email: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Cloud sync is not configured.");
  const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${SITE.url}/auth/reset` });
  if (error) throw authError(error);
}

/** Sets a new password for the signed-in user. */
export async function updatePassword(password: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Cloud sync is not configured.");
  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    if (error.code === "same_password") throw new Error("Choose a password that is different from your current one.");
    throw authError(error);
  }
}

export async function signOut({ sync = true } = {}) {
  const supabase = getSupabase();
  if (!supabase) return;
  if (sync) await syncNow();
  await supabase.auth.signOut();
  writeMarker(null);
  setState({ user: null, status: "off", lastSynced: null, error: null });
}

/** Deletes the cloud copy and signs out (otherwise the next change would upload it again). Local progress is kept. */
export async function deleteCloudProgress() {
  const supabase = getSupabase();
  const user = state.user;
  if (!supabase || !user) return;
  const { error } = await supabase.from("progress").delete().eq("user_id", user.id);
  if (error) throw error;
  await signOut({ sync: false });
}
