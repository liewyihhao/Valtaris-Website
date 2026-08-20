import { workforceCategories, stats } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/ui/Reveal";

export function Workforce() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Workforce"
          title="A qualified, distributed human intelligence network"
          description="Not cheap labour — a managed network of trained contributors, specialists and experts matched to the demands of each project."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workforceCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-5">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {cat.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 rounded-2xl border border-line bg-surface/40 p-8 lg:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} placeholder={s.placeholder} />
            ))}
          </div>
        </Reveal>
        <p className="mt-3 text-xs text-ink-faint">
          Figures marked TBD are placeholders — replace with verified numbers before launch.
        </p>
      </div>
    </section>
  );
}
