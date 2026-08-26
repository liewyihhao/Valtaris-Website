import Link from "next/link";
import { ArrowRight, MapPin, Clock, Globe } from "lucide-react";
import type { Opportunity } from "@/lib/recruit";

export function OpportunityCard({ o }: { o: Opportunity }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
          {o.category}
        </span>
        {o.status === "open" && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{o.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{o.summary}</p>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
        <div className="flex items-center gap-2 text-ink-muted">
          <Globe className="h-4 w-4 shrink-0 text-ink-faint" />
          <span className="truncate">{o.languages.join(", ")}</span>
        </div>
        <div className="flex items-center gap-2 text-ink-muted">
          <MapPin className="h-4 w-4 shrink-0 text-ink-faint" />
          <span className="truncate">{o.locales[0] ?? o.workType}</span>
        </div>
        <div className="flex items-center gap-2 text-ink-muted">
          <Clock className="h-4 w-4 shrink-0 text-ink-faint" />
          <span className="truncate">{o.engagement}</span>
        </div>
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="inline-block h-4 w-4 shrink-0 rounded border border-line-strong" />
          <span className="truncate">{o.workType}</span>
        </div>
      </dl>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs text-ink-faint">{o.experienceLevel}</span>
        <Link
          href={`/opportunities/${o.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
        >
          View Opportunity <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
