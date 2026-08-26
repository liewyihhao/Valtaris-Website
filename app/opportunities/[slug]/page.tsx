import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, Check, Globe, MapPin, Clock, Briefcase, GraduationCap,
  CalendarClock, Wallet, ClipboardCheck,
} from "lucide-react";
import { OPPORTUNITIES, getOpportunity, compensationLabel } from "@/lib/recruit";
import { ButtonLink } from "@/components/ui/Button";

export function generateStaticParams() {
  return OPPORTUNITIES.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const o = getOpportunity(slug);
  if (!o) return { title: "Opportunity not found" };
  return { title: o.title, description: o.summary, openGraph: { title: `${o.title} — Valtaris`, description: o.summary } };
}

function Meta({ icon: Icon, label, value }: { icon: typeof Globe; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-ink">{value}</div>
      </div>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const o = getOpportunity(slug);
  if (!o) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-32 pb-12 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden />
        <div className="container-page relative">
          <Link href="/opportunities" className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> All opportunities
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              {o.category}
            </span>
            {o.status === "open" && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open
              </span>
            )}
            <span className="font-mono text-xs text-ink-faint">Ref: {o.projectCode}</span>
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">{o.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">{o.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`/apply?opportunity=${o.slug}`} variant="primary" withArrow>
              Apply for This Opportunity
            </ButtonLink>
            <ButtonLink href="/opportunities" variant="secondary">Browse more</ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-ink">About the Project</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">{o.description}</p>
            </div>
            <List title="What You'll Do" items={o.responsibilities} />
            <List title="Requirements" items={o.requirements} />
            <List title="Preferred Experience" items={o.preferredExperience} />
            <div className="surface-card p-6">
              <p className="text-sm text-ink-muted">
                Previous annotation experience is <span className="font-semibold text-ink">not required</span> unless
                stated in the requirements. We provide guidelines and training for each project.
              </p>
            </div>
            <ButtonLink href={`/apply?opportunity=${o.slug}`} variant="primary" withArrow>
              Apply for This Opportunity
            </ButtonLink>
          </div>

          <aside>
            <div className="surface-card sticky top-24 space-y-4 p-6">
              <Meta icon={Globe} label="Languages" value={o.languages.join(", ")} />
              {o.locales.length > 0 && <Meta icon={MapPin} label="Locales" value={o.locales.join(", ")} />}
              <Meta icon={Briefcase} label="Work arrangement" value={o.workType} />
              <Meta icon={Clock} label="Engagement" value={o.engagement} />
              <Meta icon={ClipboardCheck} label="Experience level" value={o.experienceLevel} />
              {o.requiredProficiency && <Meta icon={GraduationCap} label="Required proficiency" value={o.requiredProficiency} />}
              {o.duration && <Meta icon={CalendarClock} label="Project duration" value={o.duration} />}
              {o.minWeeklyHours != null && <Meta icon={Clock} label="Expected availability" value={`Min ${o.minWeeklyHours} hrs/week`} />}
              <Meta icon={Wallet} label="Compensation" value={compensationLabel(o)} />
              {o.assessmentNote && (
                <div className="rounded-xl border border-line bg-base/40 p-3 text-xs text-ink-muted">{o.assessmentNote}</div>
              )}
              <ButtonLink href={`/apply?opportunity=${o.slug}`} variant="primary" className="w-full justify-center">
                Apply now
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
