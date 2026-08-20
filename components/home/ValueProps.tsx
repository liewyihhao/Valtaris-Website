import { valueProps } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function ValueProps() {
  return (
    <section className="border-y border-line bg-surface/30 py-16">
      <div className="container-page">
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
            We don&apos;t just provide people.{" "}
            <span className="text-ink">
              We design and operate the human-data layer required to build
              reliable AI
            </span>{" "}
            — from collection and annotation to expert evaluation.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <Reveal key={prop.title} delay={i * 0.04}>
                <div>
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    {prop.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {prop.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
