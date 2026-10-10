import { Photo } from "@/components/ui/Photo";
import { IconCheck, IconFlame, IconHeadphones, IconMic, IconPause } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** Hero collage: a learner photo framed by small, static previews of the lesson tools. */
const WAVE = [6, 10, 16, 9, 20, 26, 14, 22, 30, 18, 12, 24, 28, 16, 10, 20, 14, 8, 18, 24, 12, 16, 8, 6];

export function HeroPreview() {
  return (
    <div className="relative mx-auto h-[26rem] w-full max-w-[34rem] select-none">
      {/* Photo */}
      <div className="absolute top-0 right-6 bottom-0 w-[16.5rem] overflow-hidden rounded-xl shadow-lift ring-8 ring-white sm:right-10 sm:w-[18rem]">
        <Photo name="hero" sizes="(max-width: 640px) 80vw, 300px" preload />
      </div>

      <div aria-hidden="true">
        {/* Audio card */}
        <div className="animate-float absolute top-8 left-0 w-60 rounded-lg border border-line bg-white p-3.5 shadow-lift">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
              <IconHeadphones />
            </span>
            <div className="min-w-0">
              <div className="text-[0.65rem] font-bold tracking-wide text-muted uppercase">Listening · Part 2</div>
              <div className="truncate text-[0.8rem] font-bold text-ink">A park ranger welcomes visitors</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs text-white">
              <IconPause />
            </span>
            <div className="flex h-8 flex-1 items-center gap-[3px]">
              {WAVE.map((h, i) => (
                <span key={i} className={cn("w-[3px] rounded-full", i < 10 ? "bg-sky-500" : "bg-zinc-200")} style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>

        {/* Score card */}
        <div className="absolute bottom-24 left-6 w-56 rounded-lg border border-line bg-white p-3.5 shadow-lift">
          <div className="text-[0.65rem] font-bold tracking-wide text-muted uppercase">Reading · Practice 1</div>
          <div className="mt-2 flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <IconCheck />
            </span>
            <span className="text-sm font-bold text-ink">5 of 6 correct</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-100">
            <span className="block h-full w-5/6 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Speaking stats */}
        <div className="animate-float absolute right-0 bottom-6 w-56 rounded-lg border border-line bg-white p-3.5 shadow-lift [animation-delay:-3s]">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold text-ink">
              <span className="flex size-7 items-center justify-center rounded-lg bg-fuchsia-50 text-fuchsia-600 ring-1 ring-fuchsia-100">
                <IconMic />
              </span>
              Speaking Part 2
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold text-rose-600">
              <span className="size-1.5 rounded-full bg-rose-500" /> 1:24
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
            {[
              ["132", "wpm"],
              ["2", "fillers"],
              ["4/5", "phrases"],
            ].map(([v, k]) => (
              <div key={k} className="rounded-md bg-surface py-1.5">
                <div className="text-[0.85rem] font-bold text-ink tabular-nums">{v}</div>
                <div className="text-[0.6rem] text-muted">{k}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Streak chip */}
        <div className="absolute top-4 right-0 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[0.75rem] font-bold text-ink shadow-lift">
          <IconFlame className="text-orange-500" /> 7-day streak
        </div>
      </div>
    </div>
  );
}
