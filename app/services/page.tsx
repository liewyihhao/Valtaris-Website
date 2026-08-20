import type { Metadata } from "next";
import { services } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data collection, image and video annotation, NLP, audio and speech, LLM and AI model evaluation, human preference data, expert data, robotics data and quality validation.",
};

const groups = ["Vision", "Language", "Evaluation", "Data"] as const;
const groupLabels: Record<(typeof groups)[number], string> = {
  Vision: "Vision & perception",
  Language: "Language & speech",
  Evaluation: "Evaluation & alignment",
  Data: "Collection & quality",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Detailed data services across the AI lifecycle"
        description="From high-volume annotation to sophisticated model evaluation — one partner, one quality standard, twelve service categories."
      >
        <ButtonLink href="/contact" variant="primary" withArrow>
          Discuss Your Project
        </ButtonLink>
      </PageHeader>

      {groups.map((group) => {
        const items = services.filter((s) => s.group === group);
        return (
          <section key={group} className="border-t border-line py-16">
            <div className="container-page">
              <Reveal>
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
                  {groupLabels[group]}
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, i) => (
                  <Reveal key={service.slug} delay={i * 0.04}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
