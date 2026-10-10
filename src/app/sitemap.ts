import type { MetadataRoute } from "next";
import { getAllLessons, getExams } from "@/lib/content";
import { SITE, SKILLS } from "@/lib/meta";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/lessons", "/placement", "/exams", "/practice", "/vocabulary", "/grammar", "/about"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...SKILLS.map((s) => ({ url: `${SITE.url}/skills/${s.id}`, priority: 0.7 })),
    ...getExams().flatMap((e) => [
      { url: `${SITE.url}/exams/${e.id}`, priority: 0.7 },
      { url: `${SITE.url}/practice/${e.id}`, priority: 0.6 },
    ]),
    ...getAllLessons().map((l) => ({ url: `${SITE.url}/lessons/${l.slug}`, priority: 0.6 })),
  ];
}
