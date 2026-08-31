import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import type { SeoPage } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

const sectionLabel: Record<SeoPage["section"], string> = {
  services: "Services",
  solutions: "Solutions",
  industries: "Industries",
};

export function SeoDetail({ page }: { page: SeoPage }) {
  const Icon = page.icon;
  const hub = `/${page.section}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.name,
    serviceType: page.primaryKeyword,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: ["Southeast Asia", "Worldwide"],
    url: `${site.url}${hub}/${page.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-line pt-32 pb-14 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-tech-grid" aria-hidden />
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-ink-faint">
            <Link href="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={hub} className="hover:text-ink">{sectionLabel[page.section]}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-ink-muted">{page.name}</span>
          </nav>

          <Reveal>
            <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-accent">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-gradient sm:text-5xl">
              {page.h1}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{page.intro}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/get-started" variant="primary" withArrow>Start a pilot batch</ButtonLink>
              <ButtonLink href={hub} variant="secondary">All {sectionLabel[page.section]}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body sections */}
      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="max-w-2xl space-y-10">
            {page.sections.map((s) => (
              <Reveal key={s.heading}>
                <div>
                  <h2 className="text-xl font-semibold text-ink sm:text-2xl">{s.heading}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Related — internal linking */}
          <aside>
            <div className="surface-card sticky top-24 p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">Related</h2>
              <ul className="mt-4 space-y-1">
                {page.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm text-ink-muted transition-colors hover:bg-white/[0.03] hover:text-ink"
                    >
                      {r.label}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm text-ink-muted">See our quality before you commit to volume.</p>
                <ButtonLink href="/get-started" variant="primary" className="mt-3 w-full justify-center">
                  Scope your first batch
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-20">
        <div className="container-page">
          <Link href={hub} className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> Back to {sectionLabel[page.section]}
          </Link>
        </div>
      </section>
    </>
  );
}
