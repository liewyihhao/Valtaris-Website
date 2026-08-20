import { ArrowRight } from "lucide-react";
import type { Industry } from "@/lib/content";

export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:border-iris/40 hover:bg-surface">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-iris transition-colors group-hover:border-iris/50">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-base font-semibold text-ink">{industry.name}</h3>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
            AI challenge
          </p>
          <p className="mt-1 text-ink-muted">{industry.challenge}</p>
        </div>
        <div className="flex items-center gap-2 text-ink-faint">
          <span className="h-px flex-1 bg-line" />
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          <span className="h-px flex-1 bg-line" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            Data solution
          </p>
          <p className="mt-1 text-ink">{industry.solution}</p>
        </div>
      </div>
    </article>
  );
}
