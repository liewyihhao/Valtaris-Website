import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Application Received",
  robots: { index: false, follow: false },
};

export default function ReceivedPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-accent" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-xl surface-card p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-gradient">Application Received</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Thank you for your interest in joining Valtaris. Your profile has been submitted to our contributor
            portal. Our team will review your information and contact you if your background matches an upcoming
            AI project — with next steps such as assessments or qualifications handled in the portal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/opportunities" variant="primary">Explore Other Opportunities</ButtonLink>
            <ButtonLink href="/" variant="secondary">Back to home</ButtonLink>
          </div>
          <p className="mt-6 text-xs text-ink-faint">You&apos;ll receive a confirmation email shortly.</p>
        </div>
      </div>
    </section>
  );
}
