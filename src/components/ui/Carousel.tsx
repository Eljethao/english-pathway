"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconArrowLeft, IconArrowRight } from "./icons";

/** Horizontal scroller with round previous/next buttons (buttons hide at the ends). */
export function Carousel({ children, label, className }: { children: ReactNode; label: string; className?: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const btn =
    "absolute top-[28%] z-10 hidden size-12 items-center justify-center rounded-full bg-ink text-xl text-white shadow-lift transition hover:bg-ink-soft sm:flex";

  return (
    <div className={cn("relative", className)}>
      <ul
        ref={ref}
        aria-label={label}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-0 sm:px-0"
      >
        {children}
      </ul>
      {!edges.start && (
        <button type="button" aria-label="Scroll left" onClick={() => scroll(-1)} className={cn(btn, "-left-5")}>
          <IconArrowLeft />
        </button>
      )}
      {!edges.end && (
        <button type="button" aria-label="Scroll right" onClick={() => scroll(1)} className={cn(btn, "-right-5")}>
          <IconArrowRight />
        </button>
      )}
    </div>
  );
}

export function CarouselItem({ children }: { children: ReactNode }) {
  return <li className="w-[15rem] shrink-0 snap-start sm:w-[16.5rem]">{children}</li>;
}
