"use client";

import Form from "next/form";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EXAM_IDS, EXAM_NAMES, SKILLS } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { SkillIcon } from "@/components/ui/Badge";
import { buttonClass } from "@/components/ui/Button";
import { IconChevronDown, IconMenu, IconSearch, IconX } from "@/components/ui/icons";
import { AccountButton } from "@/components/account/AccountButton";
import { Container } from "./Container";
import { Logo } from "./Logo";

const MORE = [
  { href: "/practice", label: "Timed practice tests" },
  { href: "/vocabulary", label: "Vocabulary and flashcards" },
  { href: "/grammar", label: "Grammar reference" },
  { href: "/placement", label: "Placement test" },
];

function SearchBox({ className, autoFocus }: { className?: string; autoFocus?: boolean }) {
  return (
    <Form action="/lessons" className={cn("relative", className)} role="search">
      <IconSearch className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-lg text-muted" />
      <label htmlFor="site-search" className="sr-only">
        Search lessons
      </label>
      <input
        id="site-search"
        name="q"
        type="search"
        autoFocus={autoFocus}
        placeholder="Search for lessons, skills or exam tasks"
        className="h-12 w-full rounded-full border border-ink bg-surface pr-4 pl-11 text-sm text-ink outline-none placeholder:text-muted focus:bg-white"
      />
    </Form>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  // Close menus after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setExploreOpen(false);
    setSearchOpen(false);
  }

  useEffect(() => {
    if (!exploreOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!exploreRef.current?.contains(e.target as Node)) setExploreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setExploreOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [exploreOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const textLink = (active: boolean) =>
    cn("rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors duration-150 hover:text-accent", active ? "font-bold text-accent" : "text-ink");

  return (
    <header className="sticky top-0 z-40 bg-white shadow-bar">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Container className="flex h-[4.5rem] items-center gap-3">
        <button
          type="button"
          className="-ml-2 inline-flex size-10 items-center justify-center rounded-md text-2xl text-ink hover:bg-zinc-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconX /> : <IconMenu />}
        </button>

        <Logo />

        <div className="relative hidden lg:block" ref={exploreRef}>
          <button
            type="button"
            className={cn(textLink(exploreOpen || isActive("/skills") || isActive("/exams")), "inline-flex items-center gap-1")}
            aria-expanded={exploreOpen}
            aria-controls="explore-menu"
            onClick={() => setExploreOpen((v) => !v)}
          >
            Explore <IconChevronDown className="text-xs" />
          </button>
          {exploreOpen && (
            <div
              id="explore-menu"
              className="absolute top-full left-0 mt-3 grid w-[44rem] animate-rise grid-cols-3 gap-6 rounded-lg border border-line bg-white p-6 shadow-lift"
            >
              <div>
                <div className="mb-3 text-xs font-bold tracking-wide text-muted uppercase">Skills</div>
                <ul className="space-y-1">
                  {SKILLS.map((s) => (
                    <li key={s.id}>
                      <Link href={`/skills/${s.id}`} className="flex items-center gap-3 rounded-md p-2 hover:bg-surface">
                        <SkillIcon skill={s.id} size="sm" />
                        <span className="text-sm font-bold text-ink">{s.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-3 text-xs font-bold tracking-wide text-muted uppercase">Exam prep</div>
                <ul className="space-y-1">
                  {EXAM_IDS.map((e) => (
                    <li key={e}>
                      <Link href={`/exams/${e}`} className="block rounded-md p-2 text-sm text-ink hover:bg-surface hover:text-accent">
                        {EXAM_NAMES[e]}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/exams" className="block rounded-md p-2 text-sm text-link hover:bg-surface">
                      Compare exams
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-3 text-xs font-bold tracking-wide text-muted uppercase">More</div>
                <ul className="space-y-1">
                  <li>
                    <Link href="/lessons" className="block rounded-md p-2 text-sm text-ink hover:bg-surface hover:text-accent">
                      All lessons
                    </Link>
                  </li>
                  {MORE.map((m) => (
                    <li key={m.href}>
                      <Link href={m.href} className="block rounded-md p-2 text-sm text-ink hover:bg-surface hover:text-accent">
                        {m.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <SearchBox className="hidden flex-1 md:block" />
        <div className="flex-1 md:hidden" />

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <Link href="/practice" className={textLink(isActive("/practice"))}>
            Practice tests
          </Link>
          <Link href="/progress" className={textLink(isActive("/progress"))}>
            My learning
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-xl text-ink hover:bg-zinc-100 md:hidden"
          aria-label="Search"
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen((v) => !v)}
        >
          <IconSearch />
        </button>
        <div className="hidden items-center gap-2 sm:flex">
          <AccountButton />
          <Link href="/placement" className={buttonClass("dark", "md")}>
            Find your level
          </Link>
        </div>
      </Container>

      {searchOpen && (
        <div className="border-t border-line md:hidden">
          <Container className="py-3">
            <SearchBox autoFocus />
          </Container>
        </div>
      )}

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <Container className="space-y-6 py-5">
            <div className="flex gap-2 sm:hidden">
              <AccountButton />
              <Link href="/placement" className={buttonClass("dark", "md", "flex-1")}>
                Find your level
              </Link>
            </div>
            <div>
              <div className="mb-2 text-xs font-bold tracking-wide text-muted uppercase">Skills</div>
              <div className="grid grid-cols-2 gap-1">
                {SKILLS.map((s) => (
                  <Link key={s.id} href={`/skills/${s.id}`} className="flex items-center gap-2.5 rounded-md p-2 text-sm font-bold hover:bg-surface">
                    <SkillIcon skill={s.id} size="sm" /> {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-bold tracking-wide text-muted uppercase">Exam prep</div>
              <div className="grid grid-cols-3 gap-1">
                {EXAM_IDS.map((e) => (
                  <Link key={e} href={`/exams/${e}`} className="rounded-md p-2 text-sm hover:bg-surface">
                    {EXAM_NAMES[e]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid gap-1 border-t border-line pt-4">
              {[{ href: "/lessons", label: "All lessons" }, { href: "/progress", label: "My learning" }, ...MORE].map((m) => (
                <Link key={m.href} href={m.href} className={cn(textLink(isActive(m.href)), "px-2")}>
                  {m.label}
                </Link>
              ))}
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
