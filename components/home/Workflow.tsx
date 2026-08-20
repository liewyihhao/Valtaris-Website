"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Users } from "lucide-react";
import { workflow } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Workflow() {
  const reduce = useReducedMotion();

  return (
    <section id="workflow" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="How it works"
          title="The AI + human workflow"
          description="Automation handles the obvious. Human intelligence handles the difficult. Every dataset moves through a controlled pipeline before it reaches your model."
        />

        {/* actor legend */}
        <div className="mt-8 flex flex-wrap gap-5 text-xs">
          <span className="inline-flex items-center gap-2 text-ink-muted">
            <Cpu className="h-4 w-4 text-iris" aria-hidden /> AI-assisted
          </span>
          <span className="inline-flex items-center gap-2 text-ink-muted">
            <Users className="h-4 w-4 text-accent" aria-hidden /> Human-led
          </span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((node, i) => {
            const human = ![1].includes(i); // AI pre-annotation is the AI step
            return (
              <motion.div
                key={node.step}
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-line bg-surface/60 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-faint">{node.step}</span>
                  {human ? (
                    <Users className="h-4 w-4 text-accent" aria-hidden />
                  ) : (
                    <Cpu className="h-4 w-4 text-iris" aria-hidden />
                  )}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{node.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {node.detail}
                </p>
                <span
                  className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-iris transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-muted">
          <span className="text-ink">Closed loop:</span> evaluation results feed
          back into training and data design, so quality improves with every
          iteration.
        </p>
      </div>
    </section>
  );
}
