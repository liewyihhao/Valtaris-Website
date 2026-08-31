import type { Metadata } from "next";
import { services } from "@/lib/seo";
import { SeoHub, HubCta } from "@/components/seo/SeoHub";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: { absolute: "AI Data Annotation Services | Valtaris" },
  description:
    "Computer vision, image & video, NLP, audio & speech, LLM and AI model evaluation — the specific labeling and evaluation work behind reliable AI, human-verified.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <SeoHub
        eyebrow="Services"
        title="The labeling and evaluation work behind your model"
        description="What we actually do — the specific annotation and evaluation services, with quality control built into every stage."
        pages={services}
        cta={<HubCta />}
      />
      <CTASection />
    </>
  );
}
