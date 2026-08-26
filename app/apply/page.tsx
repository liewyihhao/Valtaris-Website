import type { Metadata } from "next";
import { getOpportunity } from "@/lib/recruit";
import { ApplicationWizard } from "@/components/recruit/ApplicationWizard";

export const metadata: Metadata = {
  title: "Join the Contributor Network",
  description:
    "Apply to join the Valtaris global AI contributor network. Tell us your languages, skills and availability — about 8–12 minutes.",
  robots: { index: false, follow: true },
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ opportunity?: string }>;
}) {
  const { opportunity: slug } = await searchParams;
  const opp = slug ? getOpportunity(slug) : undefined;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-32 pb-10 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden />
        <div className="container-page relative">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden /> Application
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
            {opp ? "Apply to this opportunity" : "Join the Contributor Network"}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">
            Your language, knowledge and expertise help build better AI. Takes about 8–12 minutes — your
            progress saves automatically.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <ApplicationWizard opportunity={opp ? { slug: opp.slug, title: opp.title } : null} />
        </div>
      </section>
    </>
  );
}
