import type { Metadata } from "next";
import { industries } from "@/lib/seo";
import { SeoHub, HubCta } from "@/components/seo/SeoHub";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: { absolute: "AI Training Data by Industry | Valtaris" },
  description:
    "Data and evaluation built around your sector's realities — generative AI, robotics, autonomous vehicles, healthcare, fintech and retail.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <SeoHub
        eyebrow="Industries"
        title="We understand your sector's data reality"
        description="Every industry has its own data, quality bar and compliance demands — here's how we meet them."
        pages={industries}
        cta={<HubCta />}
      />
      <CTASection />
    </>
  );
}
