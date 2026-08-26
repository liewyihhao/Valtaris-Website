"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Opportunity } from "@/lib/recruit";
import { OpportunityCard } from "./OpportunityCard";
import { cn } from "@/lib/utils";

type FilterKey = "language" | "category" | "workType" | "engagement" | "experience";

export function OpportunityBoard({ opportunities }: { opportunities: Opportunity[] }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Record<FilterKey, string[]>>({
    language: [], category: [], workType: [], engagement: [], experience: [],
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const uniq = (a: string[]) => Array.from(new Set(a)).sort();
  const facets = {
    language: uniq(opportunities.flatMap((o) => o.languages)),
    category: uniq(opportunities.map((o) => o.category)),
    workType: uniq(opportunities.map((o) => o.workType)),
    engagement: uniq(opportunities.map((o) => o.engagement)),
    experience: uniq(opportunities.map((o) => o.experienceLevel)),
  };

  const toggle = (key: FilterKey, value: string) =>
    setFilters((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }));
  const clearAll = () => setFilters({ language: [], category: [], workType: [], engagement: [], experience: [] });
  const activeCount = Object.values(filters).reduce((n, arr) => n + arr.length, 0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return opportunities.filter((o) => {
      if (q) {
        const hay = `${o.title} ${o.summary} ${o.category} ${o.languages.join(" ")} ${o.locales.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.language.length && !o.languages.some((l) => filters.language.includes(l))) return false;
      if (filters.category.length && !filters.category.includes(o.category)) return false;
      if (filters.workType.length && !filters.workType.includes(o.workType)) return false;
      if (filters.engagement.length && !filters.engagement.includes(o.engagement)) return false;
      if (filters.experience.length && !filters.experience.includes(o.experienceLevel)) return false;
      return true;
    });
  }, [opportunities, query, filters]);

  const groups: { key: FilterKey; label: string; options: string[] }[] = [
    { key: "language", label: "Language", options: facets.language },
    { key: "category", label: "Project category", options: facets.category },
    { key: "workType", label: "Work arrangement", options: facets.workType },
    { key: "engagement", label: "Engagement", options: facets.engagement },
    { key: "experience", label: "Experience", options: facets.experience },
  ];

  const Sidebar = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ink">Filters</h2>
        {activeCount > 0 && (
          <button onClick={clearAll} className="text-xs font-medium text-accent hover:text-accent-soft">
            Clear all ({activeCount})
          </button>
        )}
      </div>
      {groups.map((g) => (
        <div key={g.key}>
          <h3 className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">{g.label}</h3>
          <div className="max-h-52 space-y-1 overflow-y-auto pr-1">
            {g.options.map((opt) => {
              const checked = filters[g.key].includes(opt);
              return (
                <label key={opt} className="flex cursor-pointer items-center gap-2.5 rounded-lg px-1.5 py-1 text-sm text-ink-muted hover:bg-white/[0.03]">
                  <span className={cn("flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                    checked ? "border-accent bg-accent" : "border-line-strong")}>
                    {checked && <span className="h-1.5 w-1.5 rounded-sm bg-[#04140F]" />}
                  </span>
                  <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggle(g.key, opt)} />
                  {opt}
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-2xl border border-line bg-surface/60 p-5">{Sidebar}</div>
      </aside>

      <div>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              type="search" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by language, project or keyword…"
              className="w-full rounded-xl border border-line bg-base/60 py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent/60 focus:outline-none"
              aria-label="Search opportunities"
            />
          </div>
          <button onClick={() => setMobileOpen(true)} className="btn-secondary shrink-0 lg:hidden" aria-label="Open filters">
            <SlidersHorizontal className="h-4 w-4" />
            {activeCount > 0 && <span className="text-accent">{activeCount}</span>}
          </button>
        </div>

        <p className="mt-4 text-sm text-ink-muted">
          <span className="font-semibold text-ink">{results.length}</span>{" "}
          {results.length === 1 ? "opportunity" : "opportunities"}
          {activeCount > 0 || query ? " match your filters" : " open now"}
        </p>

        {results.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((o) => <OpportunityCard key={o.slug} o={o} />)}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-line-strong bg-surface/40 p-10 text-center">
            <h3 className="text-lg font-semibold text-ink">No matching opportunities right now</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
              We add new projects regularly. Join the Contributor Network and we&apos;ll notify you when an
              opportunity matching your language and skills opens.
            </p>
            <a href="/apply" className="btn-primary mt-5">Join the Contributor Network</a>
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-base/70" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm overflow-y-auto border-l border-line bg-base p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-semibold text-ink">Filters</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close filters" className="btn-ghost"><X className="h-5 w-5" /></button>
            </div>
            {Sidebar}
            <button onClick={() => setMobileOpen(false)} className="btn-primary mt-6 w-full py-3">Show {results.length} results</button>
          </div>
        </div>
      )}
    </div>
  );
}
