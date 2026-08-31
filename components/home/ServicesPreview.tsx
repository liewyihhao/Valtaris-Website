import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesPreview() {
  return (
    <section id="services" className="py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="One partner across the full data lifecycle"
            description="Collection, annotation and evaluation — the specific labeling work behind reliable AI, human-verified at every stage."
          />
          <Reveal>
            <ButtonLink href="/services" variant="secondary" withArrow>
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent transition-colors group-hover:border-accent/40">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.cardSummary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
