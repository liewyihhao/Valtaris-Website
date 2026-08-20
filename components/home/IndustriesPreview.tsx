import { industries } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesPreview() {
  const featured = industries.slice(0, 6);
  return (
    <section id="industries" className="py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Industries"
            title="Built around the problems each field faces"
            description="Every industry maps to a distinct AI challenge — and a specific data solution."
          />
          <Reveal>
            <ButtonLink href="/industries" variant="secondary" withArrow>
              All industries
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 0.04}>
              <IndustryCard industry={industry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
