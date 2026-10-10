"use client";

/**
 * next/image loader: Pexels photos are resized by the Pexels CDN; local files are served as they are.
 * Configured in next.config.ts (images.loaderFile).
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.pexels.com/")) {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality ?? 75}`;
  }
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}
