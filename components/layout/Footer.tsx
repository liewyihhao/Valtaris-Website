import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { services, industries, solutions, site } from "@/lib/content";

const columns = [
  {
    heading: "Services",
    links: services.slice(0, 6).map((s) => ({ label: s.title, href: "/services" })),
  },
  {
    heading: "Solutions",
    links: solutions.slice(0, 6).map((s) => ({ label: s.title, href: "/solutions" })),
  },
  {
    heading: "Industries",
    links: industries.slice(0, 6).map((i) => ({ label: i.name, href: "/industries" })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/#workflow" },
      { label: "Quality", href: "/#quality" },
      { label: "Get Started", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo tagline />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              The human-data layer for reliable AI. We design and operate the
              collection, annotation and evaluation your models need.
            </p>
            <p className="mt-4 font-mono text-xs text-ink-faint">
              {site.location}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-faint">
            Built in Southeast Asia · Designed for global AI
          </p>
        </div>
      </div>
    </footer>
  );
}
