/*
 * Server-only Gemini client (Google AI Studio). Import it only from route handlers: it reads GEMINI_API_KEY.
 *
 * Project decision: free-tier models only. GEMINI_MODELS lists them in order of preference, and a request
 * falls through to the next model when one is rate-limited, overloaded or unavailable. Do not add Pro models.
 */

const API = "https://generativelanguage.googleapis.com/v1beta/models";
const DEFAULT_MODELS = [
  "gemini-flash-lite-latest",
  "gemini-3.5-flash-lite",
  "gemini-3.7-flash",
  "gemini-3.5-flash",
  "gemini-3.1-flash-lite",
  "gemini-3.1-flash-lite-preview",
];

export function geminiConfigured() {
  return Boolean(process.env.GEMINI_API_KEY);
}

function models() {
  const list = (process.env.GEMINI_MODELS ?? "")
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean)
    // Guard the free-tier decision even if someone edits the env var.
    .filter((m) => !/\bpro\b/i.test(m));
  return list.length ? list : DEFAULT_MODELS;
}

export type GeminiPart = { text: string } | { inlineData: { mimeType: string; data: string } };

export class GeminiError extends Error {
  constructor(
    message: string,
    /** "quota" when every model is rate-limited, "unavailable" for other upstream failures. */
    readonly kind: "quota" | "unavailable" | "bad-output",
  ) {
    super(message);
  }
}

/** Statuses where trying the next model can help. */
const RETRYABLE = new Set([404, 408, 429, 500, 502, 503, 504]);

/**
 * Sends one prompt (text and inline audio) and returns the parsed JSON reply, which must match `schema`
 * (an OpenAPI-style schema, as Gemini's `responseSchema` expects).
 */
export async function generateJson<T>(parts: GeminiPart[], schema: object, opts: { system?: string; timeoutMs?: number } = {}) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new GeminiError("GEMINI_API_KEY is not set", "unavailable");

  const body = JSON.stringify({
    ...(opts.system && { systemInstruction: { parts: [{ text: opts.system }] } }),
    contents: [{ role: "user", parts }],
    generationConfig: { responseMimeType: "application/json", responseSchema: schema, temperature: 0.2 },
  });

  let rateLimited = 0;
  const tried = models();
  for (const model of tried) {
    let res: Response;
    try {
      res = await fetch(`${API}/${encodeURIComponent(model)}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body,
        signal: AbortSignal.timeout(opts.timeoutMs ?? 45_000),
      });
    } catch {
      continue; // network error or timeout: try the next model
    }
    if (!res.ok) {
      if (res.status === 429) rateLimited++;
      if (RETRYABLE.has(res.status)) continue;
      // 400/401/403: the request or key is wrong, so other models will fail the same way.
      const detail = await res.text().catch(() => "");
      throw new GeminiError(`Gemini ${model} returned ${res.status}: ${detail.slice(0, 300)}`, "unavailable");
    }
    const data = (await res.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] }; finishReason?: string }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
    try {
      return { model, value: JSON.parse(text) as T };
    } catch {
      continue; // truncated or blocked reply: another model may do better
    }
  }
  throw new GeminiError(
    `No Gemini model could answer (tried ${tried.join(", ")})`,
    rateLimited === tried.length ? "quota" : "unavailable",
  );
}
