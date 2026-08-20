import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { MultiStepForm } from "@/components/contact/MultiStepForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Talk to our data team. Tell us what you're building and what data you need — we'll scope the right collection, annotation and evaluation workflow.",
};

const points = [
  {
    icon: Mail,
    title: "Email",
    body: site.email,
    note: "[Replace with a monitored inbox]",
  },
  {
    icon: MapPin,
    title: "Based in",
    body: site.location,
    note: "Serving customers worldwide",
  },
  {
    icon: Clock,
    title: "Response",
    body: "We reply to qualified enquiries quickly",
    note: "No obligation — start with a conversation",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get started"
        title="Talk to our data team"
        description="Send us a project and our team will design the appropriate data workflow. Answer a few questions and we'll take it from there."
      />

      <section className="pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-ink">{p.body}</p>
                    <p className="mt-0.5 text-xs text-ink-faint">{p.note}</p>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl border border-line bg-surface/40 p-5">
              <p className="text-sm text-ink-muted">
                <span className="text-ink">What happens next:</span> we review
                your project, confirm scope and languages, then propose a workflow
                and timeline. NDA available on request.
              </p>
            </div>
          </div>

          <MultiStepForm />
        </div>
      </section>
    </>
  );
}
