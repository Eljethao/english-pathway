import type { MetadataRoute } from "next";
import { SITE } from "@/lib/meta";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/progress", "/account", "/auth"] },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
