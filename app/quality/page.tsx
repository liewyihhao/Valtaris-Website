import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Data Quality & QA Methodology | Valtaris" },
  description:
    "How we keep annotation accurate at scale — tiered annotator certification, gold-task calibration, consensus scoring, and human validation on every batch.",
  alternates: { canonical: "/quality" },
};

const pillars = [
  {
    heading: "Tiered, tested annotators",
    body: "Annotators are certified per task domain through a scored qualification exam, not self-reported experience — self-reported skill routes someone to the right test track, but only verified performance sets their tier and what work they're trusted with.",
  },
  {
    heading: "Calibration and consensus",
    body: "Every project seeds gold-standard tasks with known-correct answers throughout the batch, not just at the start, so we catch drift as it happens. Ambiguous or high-stakes items get routed to consensus scoring or a second independent pass rather than resting on one annotator's judgment.",
  },
  {
    heading: "Human validation, always",
    body: "A dedicated validator layer reviews sampled and flagged work before it's marked complete — new annotators and safety-critical categories get closer review by default, with the review rate easing as a track's track record earns it. Every decision, from label to validation outcome, is logged and traceable.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality"
        title="Quality isn't a spot-check, it's the whole system"
        description="Annotation quality usually fails quietly — a plausible-looking label that's subtly wrong doesn't get caught by a glance. We built our QA methodology around catching exactly that: systematic drift and edge-case disagreement, not just obvious mistakes."
      >
        <ButtonLink href="/get-started" variant="primary" withArrow>See it on your data</ButtonLink>
      </PageHeader>

      <section className="pb-8">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.heading} delay={i * 0.06}>
              <div className="surface-card h-full p-7">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-lg font-semibold text-ink">{p.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-12">
        <div className="container-page">
          <Reveal>
            <p className="max-w-2xl text-sm text-ink-muted">
              This is the same methodology behind every <a href="/services" className="text-accent hover:underline">service</a>{" "}
              — see <a href="/how-it-works" className="text-accent hover:underline">How It Works</a> for how a
              project runs end to end.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
