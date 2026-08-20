import { caseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudies() {
  return (
    <section className="py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Use cases"
          title="Case studies"
          description="Real project write-ups will appear here as engagements complete. These are structured placeholders — we do not publish clients or results we can't verify."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.05}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
