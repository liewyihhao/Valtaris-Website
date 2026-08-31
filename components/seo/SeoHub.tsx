import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SeoPage } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function SeoHub({
  eyebrow,
  title,
  description,
  pages,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  pages: SeoPage[];
  cta?: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description}>
        {cta}
      </PageHeader>

      <section className="pb-20">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                  <Link
                    href={`/${p.section}/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent transition-colors group-hover:border-accent/40">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-ink">{p.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.cardSummary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function HubCta() {
  return <ButtonLink href="/get-started" variant="primary" withArrow>Start a pilot batch</ButtonLink>;
}
