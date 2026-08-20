import { qualityPillars } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Quality() {
  return (
    <section id="quality" className="border-y border-line bg-surface/30 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Quality assurance"
          title="Quality is engineered into the workflow"
          description="We don't promise a magic accuracy number. We build quality controls into every stage — qualification, review, consensus and continuous monitoring."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {qualityPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 3) * 0.05}>
              <div className="h-full bg-surface p-6 transition-colors hover:bg-surface-2">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
