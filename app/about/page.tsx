import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { workforceCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Valtaris is a Malaysia-based AI data company building the human-data layer for reliable AI — collection, annotation and expert evaluation for global AI teams.",
};

const philosophy = [
  {
    heading: "Operating philosophy",
    body: "We design and operate the human-data layer, rather than reselling generic labour. Every engagement starts with the model's need and works backward to the right workflow, workforce and quality controls.",
  },
  {
    heading: "Quality philosophy",
    body: "Quality is a system, not a promise. We build it in through qualification, calibration, multi-pass review, consensus and continuous monitoring — and we measure it rather than assert it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The human-data layer for reliable AI"
        description="Valtaris provides the collection, annotation and evaluation that modern AI systems depend on — engineered for quality and built to scale."
      />

      {/* Mission + story */}
      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Mission" title="Human intelligence powering better AI" />
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                AI progress is increasingly limited by the quality of its data
                and evaluation — not its compute. That is fundamentally a human
                problem. Valtaris exists to solve it.
              </p>
              <p>
                We are a Malaysia-based AI data company built for the demands of
                modern machine learning teams: high-volume annotation when you
                need throughput, and sophisticated human evaluation when you need
                judgment. We treat data as infrastructure, not as a commodity.
              </p>
              <p>
                Our position in Southeast Asia gives us multilingual reach and
                regional context that global AI teams increasingly need — while
                our workflows are designed to serve enterprise customers
                anywhere in the world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-line bg-surface/30 py-16">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {philosophy.map((p, i) => (
            <Reveal key={p.heading} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-surface/60 p-7">
                <h3 className="text-lg font-semibold text-ink">{p.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Global workforce */}
      <section className="py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Global workforce"
            title="A qualified, distributed intelligence network"
            description="We match the right people to each task — from trained general contributors to specialist domain experts."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workforceCategories.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 4) * 0.04}>
                  <div className="h-full rounded-2xl border border-line bg-surface/60 p-5">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                    <h3 className="mt-3 text-sm font-semibold text-ink">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="border-t border-line py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership"
            title="Leadership"
            description="Team profiles will be published here. Add real names, roles and photos when ready."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <Reveal key={n} delay={n * 0.04}>
                <div className="rounded-2xl border border-dashed border-line-strong bg-surface/40 p-6">
                  <div className="h-14 w-14 rounded-full border border-line bg-white/[0.03]" aria-hidden />
                  <p className="mt-4 text-sm font-semibold text-ink">[Name]</p>
                  <p className="text-sm text-ink-muted">[Role / Title]</p>
                  <p className="mt-3 text-xs text-ink-faint">
                    [Short bio placeholder — replace with a real profile.]
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
