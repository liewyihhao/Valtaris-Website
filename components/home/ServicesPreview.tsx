import { services } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesPreview() {
  const featured = services.slice(0, 6);
  return (
    <section id="services" className="py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="One partner across the full data lifecycle"
            description="Collection, annotation and evaluation — delivered by qualified human teams and AI-assisted workflows."
          />
          <Reveal>
            <ButtonLink href="/services" variant="secondary" withArrow>
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.04}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
