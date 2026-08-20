import { ButtonLink } from "@/components/ui/Button";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-tech-grid" aria-hidden />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Human intelligence powering better AI
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Human Intelligence</span>
              <br />
              for the AI Era
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              High-quality human data, expert evaluation, and scalable
              annotation infrastructure for companies building the world&apos;s
              next generation of AI.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="primary" withArrow>
                Discuss Your Project
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Our Capabilities
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              For AI teams, robotics, autonomous systems &amp; research
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
