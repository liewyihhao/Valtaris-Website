import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { services, solutions, industries } from "@/lib/seo";
import { getOpenOpportunities } from "@/lib/recruit";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const top = ["", "/services", "/solutions", "/industries", "/about", "/how-it-works", "/quality", "/get-started", "/opportunities"];
  const topEntries = top.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const detail = [
    ...services.map((p) => `/services/${p.slug}`),
    ...solutions.map((p) => `/solutions/${p.slug}`),
    ...industries.map((p) => `/industries/${p.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const opportunities = getOpenOpportunities().map((o) => ({
    url: `${site.url}/opportunities/${o.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...topEntries, ...detail, ...opportunities];
}
