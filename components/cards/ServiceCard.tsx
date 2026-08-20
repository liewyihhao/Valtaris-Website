import { Check } from "lucide-react";
import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent transition-colors group-hover:border-accent/40">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
          {service.group}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {service.summary}
      </p>

      <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {service.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-xs text-ink-muted">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}
