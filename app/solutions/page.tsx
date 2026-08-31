import type { Metadata } from "next";
import { solutions } from "@/lib/seo";
import { SeoHub, HubCta } from "@/components/seo/SeoHub";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: { absolute: "AI Data Solutions by Outcome | Valtaris" },
  description:
    "Build a dataset from zero, close an accuracy gap, evaluate LLMs, go multilingual, test AI agents, or generate RLHF preference data — outcome-led data engagements.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <SeoHub
        eyebrow="Solutions"
        title="Start from the outcome, not the service"
        description="The business problem you're trying to solve — each solution draws on the services it needs to get you there."
        pages={solutions}
        cta={<HubCta />}
      />
      <CTASection />
    </>
  );
}
