import type { Metadata } from "next";
import { getOpenOpportunities } from "@/lib/recruit";
import { PageHeader } from "@/components/ui/PageHeader";
import { OpportunityBoard } from "@/components/recruit/OpportunityBoard";

export const metadata: Metadata = {
  title: "Open Opportunities",
  description:
    "Find AI data projects that match your language, skills and expertise. Browse open Valtaris contributor opportunities across annotation, evaluation, transcription, translation and more.",
};

export default function OpportunitiesPage() {
  const opportunities = getOpenOpportunities();
  return (
    <>
      <PageHeader
        eyebrow="Open Opportunities"
        title="Find your opportunity"
        description="AI projects that match your language, skills and expertise. Remote-first, worldwide."
      />
      <section className="pb-24">
        <div className="container-page">
          <OpportunityBoard opportunities={opportunities} />
        </div>
      </section>
    </>
  );
}
