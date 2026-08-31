"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- */
/*  Options                                                          */
/* ---------------------------------------------------------------- */

const buildingOptions = [
  "LLM",
  "Computer Vision",
  "Robotics",
  "Autonomous Vehicle",
  "Speech AI",
  "AI Agent",
  "Other",
];

const dataOptions = [
  "Image",
  "Video",
  "Text",
  "Audio",
  "Human preference",
  "Expert evaluation",
  "Real-world / physical data",
  "Other",
];

const scaleOptions = [
  "< 10,000 units",
  "10,000 – 100,000",
  "100,000 – 1M",
  "1M+",
  "Not sure",
];

const timelineOptions = ["ASAP", "< 1 month", "1–3 months", "3–6 months", "Ongoing"];

const steps = ["Building", "Data", "Scale", "Timeline", "Contact"] as const;

type FormState = {
  building: string;
  dataTypes: string[];
  scale: string;
  timeline: string;
  name: string;
  company: string;
  email: string;
  jobTitle: string;
  country: string;
  languages: string;
  details: string;
};

const initialState: FormState = {
  building: "",
  dataTypes: [],
  scale: "",
  timeline: "",
  name: "",
  company: "",
  email: "",
  jobTitle: "",
  country: "",
  languages: "",
  details: "",
};

/* ---------------------------------------------------------------- */
/*  Component                                                        */
/* ---------------------------------------------------------------- */

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const update = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  const toggleData = (value: string) =>
    setForm((f) => ({
      ...f,
      dataTypes: f.dataTypes.includes(value)
        ? f.dataTypes.filter((d) => d !== value)
        : [...f.dataTypes, value],
    }));

  const canAdvance = () => {
    switch (step) {
      case 0:
        return !!form.building;
      case 1:
        return form.dataTypes.length > 0;
      case 2:
        return !!form.scale;
      case 3:
        return !!form.timeline;
      default:
        return true;
    }
  };

  const validateContact = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.company.trim()) return "Please enter your company.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid work email.";
    return null;
  };

  const next = () => {
    if (step < steps.length - 1 && canAdvance()) setStep((s) => s + 1);
  };
  const back = () => step > 0 && setStep((s) => s - 1);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateContact();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setStatus("done");
    } catch (e) {
      setStatus("idle");
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-surface/60 p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-ink">Thank you — we&apos;ve got it.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
          Our data team will review your project and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div
              className={cn(
                "h-1 rounded-full transition-colors",
                i <= step ? "bg-accent" : "bg-line",
              )}
            />
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-wider",
                i === step ? "text-accent" : "text-ink-faint",
              )}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {/* Step 1 */}
        {step === 0 && (
          <fieldset>
            <legend className="text-lg font-semibold text-ink">What are you building?</legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {buildingOptions.map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={form.building === opt}
                  onClick={() => update({ building: opt })}
                />
              ))}
            </div>
          </fieldset>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <fieldset>
            <legend className="text-lg font-semibold text-ink">
              What type of data do you need?
            </legend>
            <p className="mt-1 text-sm text-ink-muted">Select all that apply.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dataOptions.map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={form.dataTypes.includes(opt)}
                  onClick={() => toggleData(opt)}
                  multi
                />
              ))}
            </div>
          </fieldset>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <fieldset>
            <legend className="text-lg font-semibold text-ink">Project scale</legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {scaleOptions.map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={form.scale === opt}
                  onClick={() => update({ scale: opt })}
                />
              ))}
            </div>
          </fieldset>
        )}

        {/* Step 4 */}
        {step === 3 && (
          <fieldset>
            <legend className="text-lg font-semibold text-ink">Timeline</legend>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {timelineOptions.map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={form.timeline === opt}
                  onClick={() => update({ timeline: opt })}
                />
              ))}
            </div>
          </fieldset>
        )}

        {/* Step 5 */}
        {step === 4 && (
          <div>
            <h2 className="text-lg font-semibold text-ink">Contact details</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update({ name: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Company" required>
                <input
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update({ company: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Work email" required>
                <input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update({ email: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Job title">
                <input
                  type="text"
                  autoComplete="organization-title"
                  value={form.jobTitle}
                  onChange={(e) => update({ jobTitle: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Country">
                <input
                  type="text"
                  autoComplete="country-name"
                  value={form.country}
                  onChange={(e) => update({ country: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Required languages">
                <input
                  type="text"
                  placeholder="e.g. English, Bahasa Melayu"
                  value={form.languages}
                  onChange={(e) => update({ languages: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Additional project details">
                  <textarea
                    rows={4}
                    value={form.details}
                    onChange={(e) => update({ details: e.target.value })}
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>
              </div>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      {/* Nav */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="btn-ghost disabled:invisible"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="btn-primary"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={status === "submitting"}
            className="btn-primary"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
              </>
            ) : (
              <>Submit Project</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Sub-components                                                   */
/* ---------------------------------------------------------------- */

const inputClass =
  "w-full rounded-xl border border-line bg-base/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent/60 focus:outline-none";

function OptionButton({
  label,
  selected,
  onClick,
  multi = false,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all",
        selected
          ? "border-accent/60 bg-accent/10 text-ink"
          : "border-line bg-base/40 text-ink-muted hover:border-line-strong hover:text-ink",
      )}
    >
      {label}
      <span
        className={cn(
          "ml-3 flex h-4 w-4 shrink-0 items-center justify-center border transition-colors",
          multi ? "rounded" : "rounded-full",
          selected ? "border-accent bg-accent text-[#04140F]" : "border-line-strong",
        )}
        aria-hidden
      >
        {selected && <Check className="h-3 w-3" />}
      </span>
    </button>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
