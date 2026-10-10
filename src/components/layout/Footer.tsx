import Link from "next/link";
import { SKILLS } from "@/lib/meta";
import { Container } from "./Container";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Learn",
    links: [
      { href: "/lessons", label: "All lessons" },
      { href: "/placement", label: "Placement test" },
      { href: "/vocabulary", label: "Vocabulary" },
      { href: "/grammar", label: "Grammar" },
    ],
  },
  { title: "Skills", links: SKILLS.map((s) => ({ href: `/skills/${s.id}`, label: s.name })) },
  {
    title: "Exam prep",
    links: [
      { href: "/exams/ielts", label: "IELTS" },
      { href: "/exams/toefl", label: "TOEFL iBT" },
      { href: "/exams/toeic", label: "TOEIC" },
      { href: "/practice", label: "Practice tests" },
    ],
  },
  {
    title: "Your account",
    links: [
      { href: "/progress", label: "My learning" },
      { href: "/account", label: "Your profile" },
      { href: "/about", label: "About" },
      { href: "/about#standards", label: "Our standards" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <p className="text-lg font-bold">
            Short lessons, real exam tasks, <span className="text-sky-300">free for everyone.</span>
          </p>
          <Link
            href="/placement"
            className="inline-flex h-10 items-center rounded-lg border border-white px-4 text-sm font-bold hover:bg-white/10"
          >
            Take the placement test
          </Link>
        </Container>
      </div>
      <Container className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4">
        {COLUMNS.map((c) => (
          <div key={c.title}>
            <h2 className="text-sm font-bold">{c.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-zinc-300 hover:text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-4 py-8 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <Logo inverted />
        <p className="max-w-xl sm:text-right">
          IELTS, TOEFL and TOEIC are trademarks of their respective owners. English Pathway is an independent learning site
          and is not affiliated with or endorsed by them.{" "}
          <Link href="/about#photo-credits" className="underline hover:text-white">
            Photos from Pexels
          </Link>
          .
        </p>
      </Container>
    </footer>
  );
}
