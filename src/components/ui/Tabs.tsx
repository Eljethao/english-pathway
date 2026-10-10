"use client";

import { useId, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

/** Accessible segmented tabs (arrow keys move between options). */
export function Tabs<T extends string>({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  className?: string;
}) {
  const id = useId();
  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + options.length) % options.length;
    onChange(options[next].value);
    document.getElementById(`${id}-${next}`)?.focus();
  };
  return (
    <div role="tablist" aria-label={label} className={cn("no-scrollbar flex gap-6 overflow-x-auto border-b border-line", className)}>
      {options.map((o, i) => (
        <button
          key={o.value}
          id={`${id}-${i}`}
          type="button"
          role="tab"
          aria-selected={o.value === value}
          tabIndex={o.value === value ? 0 : -1}
          onKeyDown={(e) => onKey(e, i)}
          onClick={() => onChange(o.value)}
          className={cn(
            "-mb-px shrink-0 border-b-2 pb-3 text-base font-bold transition-colors duration-150",
            o.value === value ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
