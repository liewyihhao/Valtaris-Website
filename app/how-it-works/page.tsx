import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: { absolute: "How Valtaris Works | Our Data Annotation Process" },
  description:
    "Scope, calibrate, annotate, validate, deliver — see exactly how a Valtaris data or evaluation project runs from first conversation to final dataset.",
  alternates: { canonical: "/how-it-works" },
};

const stages = [
  {
    n: "01",
    heading: "Scope and calibrate",
    body: "We start by defining your taxonomy, edge cases, and guidelines together, then run a small pilot batch and check inter-annotator agreement before committing to full volume — so problems with an ambiguous instruction surface on day two, not after ten thousand labels are already wrong.",
  },
  {
    n: "02",
    heading: "Annotate and validate",
    body: "Production annotation runs with tiered annotators matched to task difficulty, gold tasks seeded throughout for ongoing quality checks, and a human validation layer reviewing sampled or flagged work before anything is marked complete.",
  },
  {
    n: "03",
    heading: "Deliver and iterate",
    body: "Datasets ship in your target format with quality metrics attached, not just a file. Most engagements continue past first delivery — new batches, re-labeling flagged edge cases, or an evaluation pass once your model is trained.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From your first message to a validated dataset"
        description="Most annotation vendors can tell you their price per label. Fewer can tell you exactly what happens between a label being drawn and it landing in your training set. Here's ours."
      >
        <ButtonLink href="/get-started" variant="primary" withArrow>Scope your first project</ButtonLink>
      </PageHeader>

      <section className="pb-8 pt-4">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-3">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="surface-card h-full p-7">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <h2 className="mt-3 text-xl font-semibold text-ink">{s.heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 max-w-2xl text-sm text-ink-muted">
              See <a href="/quality" className="text-accent hover:underline">Quality</a> for the mechanics
              behind our accuracy, or <a href="/get-started" className="text-accent hover:underline">Get
              Started</a> to scope a pilot on your own data.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
