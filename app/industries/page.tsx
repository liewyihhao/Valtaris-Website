import type { Metadata } from "next";
import { industries } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI data for generative AI, robotics, autonomous vehicles, healthcare AI, fintech, retail, e-commerce, search and recommendation, enterprise AI and computer vision.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="One data challenge per industry — one solution each"
        description="We map every field to the specific AI problem it faces and the data that solves it."
      >
        <ButtonLink href="/contact" variant="primary" withArrow>
          Discuss Your Project
        </ButtonLink>
      </PageHeader>

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 0.05}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
