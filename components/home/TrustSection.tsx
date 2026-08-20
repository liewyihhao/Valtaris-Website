import { ShieldCheck } from "lucide-react";
import { trustPlaceholders } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TrustSection() {
  return (
    <section className="border-y border-line bg-surface/30 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Trust & security"
          title="Trust built on discipline, not claims"
          description="We treat customer data and confidential projects seriously. Certifications and standards will be listed here only once they are genuinely in place."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPlaceholders.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl border border-dashed border-line-strong bg-surface/40 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-ink-faint" aria-hidden />
                <div>
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs text-ink-muted">{item.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
