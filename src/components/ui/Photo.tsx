import Image from "next/image";
import { PHOTOS, photoSrc, type PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

/** A Pexels photo that fills its (relatively positioned) parent. */
export function Photo({
  name,
  sizes,
  preload,
  decorative,
  className,
}: {
  name: PhotoKey;
  sizes: string;
  preload?: boolean;
  /** Hide from screen readers when the photo only decorates. */
  decorative?: boolean;
  className?: string;
}) {
  const photo = PHOTOS[name];
  return (
    <Image
      src={photoSrc(photo)}
      alt={decorative ? "" : photo.alt}
      fill
      sizes={sizes}
      preload={preload}
      className={cn("object-cover", className)}
      style={photo.position ? { objectPosition: photo.position } : undefined}
    />
  );
}

/** Darkened photo behind a dark title band (put inside a `relative overflow-hidden` element). */
export function PhotoBackdrop({ name, preload }: { name: PhotoKey; preload?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Photo name={name} sizes="100vw" preload={preload} decorative className="opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
    </div>
  );
}
