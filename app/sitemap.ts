import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const sitemapPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/templates", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/templates/gym", changeFrequency: "weekly", priority: 0.8 },
  { path: "/templates/restaurant", changeFrequency: "weekly", priority: 0.8 },
  { path: "/templates/salon", changeFrequency: "weekly", priority: 0.8 },
  { path: "/templates/realestate", changeFrequency: "weekly", priority: 0.8 },
  { path: "/templates/tuition", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency,
    priority,
  }));
}
