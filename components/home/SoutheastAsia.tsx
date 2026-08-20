import { Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const advantages = [
  "English & Bahasa Melayu fluency",
  "Southeast Asian language coverage",
  "Regional cultural understanding",
  "Access to diverse contributors",
  "Growing technology ecosystem",
  "Time-zone bridge across regions",
];

export function SoutheastAsia() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/30 py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-accent opacity-60" aria-hidden />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Southeast Asia"
            title="Built in Southeast Asia. Designed for global AI."
            description="Valtaris is based in Malaysia — a multilingual gateway to diverse Southeast Asian human data, with the language coverage and regional context global AI teams increasingly need."
          />
        </div>

        <Reveal>
          <div className="rounded-2xl border border-line bg-surface/60 p-8">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-accent" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                Regional advantages
              </span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
