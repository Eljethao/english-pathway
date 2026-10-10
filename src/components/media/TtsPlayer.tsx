"use client";

import { useMemo, useState } from "react";
import { useSpeech } from "@/hooks/useSpeech";
import { parseTranscript } from "@/lib/speech";
import type { Cast, Voice } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconHeadphones, IconPause, IconPlay, IconStop } from "@/components/ui/icons";

const SPEEDS = [0.75, 1, 1.25];

export function SpeedAccent({
  rate,
  setRate,
  accent,
  setAccent,
}: {
  rate: number;
  setRate: (r: number) => void;
  accent: Voice;
  setAccent: (v: Voice) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <div className="inline-flex rounded-md border border-line p-0.5" role="group" aria-label="Speed">
        {SPEEDS.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={rate === s}
            onClick={() => setRate(s)}
            className={cn("rounded px-2 py-1 font-medium", rate === s ? "bg-surface text-ink" : "text-zinc-500 hover:text-ink")}
          >
            {s}×
          </button>
        ))}
      </div>
      <div className="inline-flex rounded-md border border-line p-0.5" role="group" aria-label="Accent">
        {(["us", "uk"] as Voice[]).map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={accent === v}
            onClick={() => setAccent(v)}
            className={cn("rounded px-2 py-1 font-medium uppercase", accent === v ? "bg-surface text-ink" : "text-zinc-500 hover:text-ink")}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Plays a transcript with browser text-to-speech (or a real recording when `src` is set). */
export function TtsPlayer({
  title,
  transcript,
  voice = "us",
  cast,
  src,
}: {
  title: string;
  transcript: string;
  voice?: Voice;
  cast?: Cast;
  src?: string;
}) {
  const speech = useSpeech();
  const [rate, setRate] = useState(1);
  const [accent, setAccent] = useState<Voice>(voice);
  const [plays, setPlays] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const lines = useMemo(() => parseTranscript(transcript), [transcript]);
  const fallback = speech.hydrated && !speech.supported && !src;

  const play = () => {
    setPlays((n) => n + 1);
    speech.play(lines, { accent, rate, cast });
  };

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
      <div className="flex flex-wrap items-center gap-3 px-4 py-3 sm:px-5">
        <span className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-xl text-sky-600 ring-1 ring-sky-100">
          <IconHeadphones />
        </span>
        <figcaption className="min-w-0 flex-1">
          <div className="text-xs font-medium uppercase tracking-wide text-zinc-400">Audio</div>
          <div className="font-semibold text-ink">{title}</div>
        </figcaption>
        {src ? (
          <audio controls src={src} className="h-10 w-full sm:w-72" />
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            {!speech.speaking ? (
              <Button onClick={play} disabled={fallback} aria-label={`Play audio: ${title}`}>
                <IconPlay /> {plays ? "Play again" : "Play"}
              </Button>
            ) : (
              <>
                {speech.paused ? (
                  <Button onClick={speech.resume}>
                    <IconPlay /> Resume
                  </Button>
                ) : (
                  <Button onClick={speech.pause} variant="secondary">
                    <IconPause /> Pause
                  </Button>
                )}
                <Button onClick={speech.stop} variant="secondary" aria-label="Stop">
                  <IconStop />
                </Button>
              </>
            )}
          </div>
        )}
      </div>
      {!src && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-surface/60 px-4 py-2 sm:px-5">
          <SpeedAccent rate={rate} setRate={setRate} accent={accent} setAccent={setAccent} />
          <span className="text-xs text-zinc-500">{plays > 0 ? `Played ${plays}×` : "In the exam you usually hear it once."}</span>
        </div>
      )}
      {fallback && (
        <p className="border-t border-line px-4 py-2 text-sm text-zinc-600 sm:px-5">
          Your browser cannot play text-to-speech audio. Read the transcript instead, or try Chrome, Edge or Safari.
        </p>
      )}
      <div className="border-t border-line bg-white px-4 py-3 sm:px-5">
        <button
          type="button"
          onClick={() => setShowTranscript((s) => !s)}
          aria-expanded={showTranscript || fallback}
          className="text-sm font-medium text-accent hover:underline"
        >
          {showTranscript || fallback ? "Hide transcript" : "Show transcript"}
        </button>
        {!showTranscript && !fallback && (
          <span className="ml-2 text-xs text-zinc-400">Try the questions first.</span>
        )}
        {(showTranscript || fallback) && (
          <div className="mt-3 space-y-2 text-[0.95rem] leading-7 text-zinc-700">
            {lines.map((l, i) => (
              <p key={i} className={cn("rounded px-1 transition-colors duration-150", speech.line === i && "bg-accent-soft")}>
                {l.speaker && <span className="font-semibold text-ink">{l.speaker}: </span>}
                {l.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </figure>
  );
}

/** Small play button used inside exercises. */
export function PlayButton({
  text,
  label = "Play",
  accent = "us",
  rate = 1,
  cast,
  className,
}: {
  text: string;
  label?: string;
  accent?: Voice;
  rate?: number;
  cast?: Cast;
  className?: string;
}) {
  const speech = useSpeech();
  return (
    <Button
      variant="secondary"
      size="sm"
      className={className}
      disabled={speech.hydrated && !speech.supported}
      onClick={() => (speech.speaking ? speech.stop() : speech.play(text, { accent, rate, cast }))}
      aria-label={speech.speaking ? "Stop" : label}
    >
      {speech.speaking ? <IconStop /> : <IconPlay />}
      <span className="hidden sm:inline">{speech.speaking ? "Stop" : label}</span>
    </Button>
  );
}
