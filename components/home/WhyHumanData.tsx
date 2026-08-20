import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Models learn from human judgment",
    body: "Preference, ranking and evaluation data teach models what good looks like. That signal comes from qualified people, not automation alone.",
  },
  {
    title: "The hard cases need people",
    body: "Ambiguity, edge cases and domain nuance are exactly where automated labeling breaks down and human expertise earns its keep.",
  },
  {
    title: "Quality compounds downstream",
    body: "Every error in training data propagates into model behavior. Rigorous human review is the cheapest place to catch it.",
  },
];

export function WhyHumanData() {
  return (
    <section className="border-y border-line bg-surface/30 py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Why human data matters"
          title="Automation handles the obvious. Human intelligence handles the difficult."
          description="Frontier AI is increasingly limited by the quality of its data and evaluation — not its compute. That is a human problem."
        />

        <div className="grid gap-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="flex gap-4 rounded-2xl border border-line bg-surface/60 p-5">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {r.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
