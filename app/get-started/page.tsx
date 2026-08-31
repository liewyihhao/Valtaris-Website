import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MultiStepForm } from "@/components/contact/MultiStepForm";

export const metadata: Metadata = {
  title: { absolute: "Get Started with Valtaris | Request a Data Annotation Quote" },
  description:
    "Tell us about your dataset or evaluation need and we'll scope a pilot batch — see our quality on your data before you commit to volume.",
  alternates: { canonical: "/get-started" },
};

const steps = [
  {
    heading: "What we'll ask you",
    body: "What kind of data (image, video, text, audio, or model output), roughly what volume and timeline you're working with, and what “correct” looks like for your use case — even a rough guideline is enough to start a conversation.",
  },
  {
    heading: "What happens next",
    body: "We'll come back with a scoped pilot proposal, run it, and walk through the results with you together — inter-annotator agreement, sample labels, and turnaround time — before you decide whether to scale up. No long-term commitment required to see the pilot through.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get started"
        title="Let's scope your first batch"
        description="The fastest way to evaluate a data partner is to see their work on your own data, not a case study about someone else's. Tell us what you're building, and we'll propose a small pilot batch so you can judge accuracy and turnaround before committing further."
      />

      <section className="pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.heading} className="surface-card p-6">
                <h2 className="text-base font-semibold text-ink">{s.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </div>
            ))}
            <div className="surface-card p-6">
              <p className="text-sm text-ink-muted">
                <span className="text-ink">Prefer to talk first?</span> Send us a note and our team will
                reply — NDA available on request. Valtaris operates a Southeast Asian annotation and
                evaluation network serving teams worldwide.
              </p>
            </div>
          </div>

          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
