import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "About Valtaris | The Human Data Layer for AI" },
  description:
    "Valtaris designs and operates the collection, annotation, and evaluation pipelines behind reliable AI — a Southeast Asian network working with teams globally.",
  alternates: { canonical: "/about" },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Valtaris",
  description:
    "Valtaris designs and operates the collection, annotation, and evaluation pipelines behind reliable AI.",
  url: `${site.url}/about`,
  about: {
    "@type": "Organization",
    name: site.name,
    slogan: "Making AI Smarter",
    areaServed: ["Southeast Asia", "Worldwide"],
  },
};

const sections = [
  {
    heading: "How we operate",
    body: "Every annotator on our platform is tiered by tested performance, not by what they claim on an application. Every project runs guideline calibration before it scales, consensus and human validation throughout, and a full audit trail from label back to labeler. It's slower to set up than an open crowdsourcing queue and it's why clients trust the data that comes out the other end.",
  },
  {
    heading: "Where we're based",
    body: "Valtaris runs a Southeast Asian annotation and evaluation network — headquartered in Kuala Lumpur, with a workforce that spans multiple countries and languages across the region and beyond. That footprint is a deliberate advantage: deep multilingual coverage, strong regional context, and time-zone reach for teams working worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <PageHeader
        eyebrow="About"
        title="Making AI smarter, one verified label at a time"
        description="Valtaris exists because most AI failures trace back to the same root cause: data that was labeled fast, not labeled right. We built our operation around the opposite premise — that verified human judgment, not self-reported experience or unchecked crowdsourcing, is what actually makes a model reliable."
      >
        <ButtonLink href="/get-started" variant="primary" withArrow>Talk to our team</ButtonLink>
      </PageHeader>

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Mission" title="The human-data layer for reliable AI" />
          <div className="space-y-8">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.05}>
                <div>
                  <h2 className="text-xl font-semibold text-ink">{s.heading}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <p className="text-sm text-ink-muted">
                See <a href="/how-it-works" className="text-accent hover:underline">How It Works</a> for how a
                project actually runs, and <a href="/quality" className="text-accent hover:underline">Quality</a>{" "}
                for the mechanics behind our accuracy.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
