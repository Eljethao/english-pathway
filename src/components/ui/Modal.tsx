"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "./Button";
import { IconX } from "./icons";

/** Native <dialog> modal: focus trap, Esc to close and backdrop come for free. */
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[min(32rem,calc(100vw-2rem))] rounded-lg border border-line bg-white p-0 text-ink backdrop:bg-zinc-900/30"
      aria-labelledby="modal-title"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <h2 id="modal-title" className="font-semibold">
          {title}
        </h2>
        <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close">
          <IconX />
        </Button>
      </div>
      <div className="p-5">{children}</div>
    </dialog>
  );
}
