import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ size = 36 }: { size?: number }) {
  return <Image src="/logo-96.png" alt="" width={size} height={size} className="shrink-0" unoptimized />;
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-tight", inverted ? "text-white" : "text-ink")}
      aria-label="English Pathway home"
    >
      <LogoMark />
      <span className="font-display-heading text-[1.15rem]">English Pathway</span>
    </Link>
  );
}
