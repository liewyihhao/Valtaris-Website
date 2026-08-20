import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solve real problems: build training datasets, improve model accuracy, evaluate LLMs, build multilingual AI, test AI agents, generate human preference data, collect real-world data and scale human evaluation.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Start from the problem, not the service"
        description="Most teams don't need a service — they need an outcome. Here's how we get you there."
      >
        <ButtonLink href="/contact" variant="primary" withArrow>
          Start a Data Project
        </ButtonLink>
      </PageHeader>

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-2">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Reveal key={solution.slug} delay={(i % 2) * 0.05}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-7 transition-colors hover:border-accent/40">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xl font-semibold text-ink">
                        {solution.title}
                      </h2>
                    </div>

                    <div className="mt-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                        The problem
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">{solution.problem}</p>
                    </div>

                    <div className="mt-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        Our approach
                      </p>
                      <p className="mt-1 text-sm text-ink">{solution.approach}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                      {solution.services.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
                      >
                        Scope this
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
