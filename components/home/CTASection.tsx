import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden />
            <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-60" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                Send us a project. We&apos;ll design the data workflow.
              </h2>
              <p className="mt-4 text-base text-ink-muted">
                Tell us what you&apos;re building and what data you need. Our team
                will scope the right collection, annotation and evaluation
                approach.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/contact" variant="primary" withArrow>
                  Start a Data Project
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Talk to Our Team
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
