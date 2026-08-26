import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { getOpenOpportunities } from "@/lib/recruit";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/services", "/industries", "/solutions", "/about", "/contact", "/opportunities"];
  const base = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const opportunities = getOpenOpportunities().map((o) => ({
    url: `${site.url}/opportunities/${o.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  return [...base, ...opportunities];
}
