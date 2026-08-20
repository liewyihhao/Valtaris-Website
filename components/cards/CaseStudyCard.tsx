type CaseStudy = {
  id: string;
  client: string;
  project: string;
  challenge: string;
  solution: string;
  result: string;
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const rows = [
    { label: "Client / Industry", value: study.client },
    { label: "Project", value: study.project },
    { label: "Challenge", value: study.challenge },
    { label: "Solution", value: study.solution },
    { label: "Result", value: study.result },
  ];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-dashed border-line-strong bg-surface/40 p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-accent">Case Study {study.id}</span>
        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
          Placeholder
        </span>
      </div>
      <dl className="mt-5 space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
              {row.label}
            </dt>
            <dd className="mt-0.5 text-sm text-ink-muted">{row.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
