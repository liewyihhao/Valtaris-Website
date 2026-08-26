"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Plus, Trash2, Upload, Loader2, Star } from "lucide-react";
import {
  PROFICIENCY_LEVELS, SKILL_LEVELS, EDUCATION_LEVELS, START_AVAILABILITY, AVAILABILITY_BANDS,
  AVAILABILITY_DAYS, AVAILABILITY_TIMES, EXPERIENCE_CATEGORIES, SKILL_CATALOG, ESSAY_QUESTIONS, LANGUAGES,
} from "@/lib/recruit";
import { cn } from "@/lib/utils";

type LangEntry = {
  languageName: string; proficiency: string;
  speaking: string; reading: string; writing: string; listening: string;
  yearsExposure: string; learnedIn: string; dialectLocale: string; isStrongest: boolean;
};

const STEPS = ["Personal", "Languages", "Education", "Experience", "Skills", "Availability", "Resume", "About You", "Review"];
const emptyLang = (): LangEntry => ({
  languageName: "", proficiency: "Native", speaking: "Native", reading: "Native", writing: "Native",
  listening: "Native", yearsExposure: "", learnedIn: "", dialectLocale: "", isStrongest: false,
});

type FormState = {
  fullName: string; preferredName: string; email: string; phone: string;
  country: string; state: string; city: string; timezone: string;
  preferredContact: string; linkedin: string; portfolio: string; website: string;
  highestEducation: string; fieldOfStudy: string; institution: string; graduationYear: string;
  hasPriorExperience: boolean; yearsExperience: string; experienceCategories: string[]; experienceNotes: string;
  skills: string[]; customSkill: string; customSkills: string[];
  hoursPerWeek: string; availabilitySlots: string[]; startAvailability: string; openToFuture: boolean;
  resumeFileName: string;
  essay: string; essayQ1: string; essayQ2: string; essayQ3: string; essayQ4: string;
  consentDataProcessing: boolean; consentContact: boolean;
};

const initial: FormState = {
  fullName: "", preferredName: "", email: "", phone: "", country: "", state: "", city: "", timezone: "",
  preferredContact: "Email", linkedin: "", portfolio: "", website: "",
  highestEducation: "", fieldOfStudy: "", institution: "", graduationYear: "",
  hasPriorExperience: false, yearsExperience: "", experienceCategories: [], experienceNotes: "",
  skills: [], customSkill: "", customSkills: [],
  hoursPerWeek: "", availabilitySlots: [], startAvailability: "", openToFuture: true,
  resumeFileName: "", essay: "", essayQ1: "", essayQ2: "", essayQ3: "", essayQ4: "",
  consentDataProcessing: false, consentContact: false,
};

const STORAGE_KEY = "valtaris-application-draft";
const inputClass =
  "w-full rounded-xl border border-line bg-base/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent/60 focus:outline-none";

export function ApplicationWizard({ opportunity }: { opportunity: { slug: string; title: string } | null }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [langs, setLangs] = useState<LangEntry[]>([emptyLang()]);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [error, setError] = useState<string | null>(null);
  const loaded = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.form) setForm((f) => ({ ...f, ...saved.form }));
        if (Array.isArray(saved.langs) && saved.langs.length) setLangs(saved.langs);
        if (typeof saved.step === "number") setStep(saved.step);
      }
    } catch {}
    setForm((f) => (f.timezone ? f : { ...f, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "" }));
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ form, langs, step }));
    } catch {}
  }, [form, langs, step]);

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));
  const toggleArr = (key: "skills" | "experienceCategories" | "availabilitySlots", v: string) =>
    setForm((f) => ({ ...f, [key]: f[key].includes(v) ? f[key].filter((x) => x !== v) : [...f[key], v] }));
  const updateLang = (i: number, patch: Partial<LangEntry>) =>
    setLangs((arr) => arr.map((l, idx) => (idx === i ? { ...l, ...patch } : l)));
  const setStrongest = (i: number) => setLangs((arr) => arr.map((l, idx) => ({ ...l, isStrongest: idx === i })));

  const essayWords = useMemo(() => form.essay.trim().split(/\s+/).filter(Boolean).length, [form.essay]);

  const canNext = (): boolean => {
    switch (step) {
      case 0: return !!form.fullName.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
      case 1: return langs.some((l) => l.languageName.trim());
      case 7: return essayWords >= 30;
      default: return true;
    }
  };
  const next = () => canNext() && setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const fileToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result).split(",")[1] ?? "");
      r.onerror = reject;
      r.readAsDataURL(file);
    });

  const submit = async () => {
    if (!form.consentDataProcessing) {
      setError("Please confirm consent to data processing to submit.");
      return;
    }
    setError(null);
    setStatus("submitting");
    try {
      let resumeBase64: string | null = null;
      if (resumeFile) {
        if (resumeFile.size > 6 * 1024 * 1024) throw new Error("Resume must be 6MB or smaller.");
        resumeBase64 = await fileToBase64(resumeFile);
      }
      const payload = {
        opportunitySlug: opportunity?.slug ?? null,
        ...form,
        experienceEntries: [
          ...form.experienceCategories.map((c) => ({ category: c })),
          ...(form.experienceNotes ? [{ notes: form.experienceNotes }] : []),
        ],
        languages: langs.filter((l) => l.languageName.trim()),
        resumeFileName: resumeFile?.name ?? form.resumeFileName ?? null,
        resumeType: resumeFile?.type ?? null,
        resumeBase64,
      };
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      localStorage.removeItem(STORAGE_KEY);
      router.push("/apply/received");
    } catch (e) {
      setStatus("idle");
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      {/* Progress */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <ol className="hidden gap-1 lg:grid">
          {STEPS.map((s, i) => {
            const done = i < step, active = i === step;
            return (
              <li key={s}>
                <button type="button" onClick={() => i <= step && setStep(i)} disabled={i > step}
                  className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    active ? "bg-accent/10 font-medium text-accent" : "text-ink-muted hover:bg-white/[0.03]",
                    i > step && "cursor-not-allowed opacity-50")}>
                  <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-xs",
                    done ? "border-accent bg-accent text-[#04140F]" : active ? "border-accent text-accent" : "border-line-strong text-ink-faint")}>
                    {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </span>
                  {s}
                </button>
              </li>
            );
          })}
        </ol>
        <div className="lg:hidden">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-ink">{STEPS[step]}</span>
            <span className="text-ink-faint">Step {step + 1} of {STEPS.length}</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-line">
            <div className="h-1.5 rounded-full bg-accent transition-all" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
        </div>
      </aside>

      {/* Body */}
      <div className="surface-card p-6 sm:p-8">
        {opportunity && step === 0 && (
          <div className="mb-6 rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm">
            Applying for <span className="font-semibold text-accent">{opportunity.title}</span>
          </div>
        )}

        {step === 0 && (
          <Section title="Personal Information" hint="Approximately 8–12 minutes total. Your progress saves automatically.">
            <Grid>
              <Field label="Full name" required><input className={inputClass} value={form.fullName} onChange={(e) => set({ fullName: e.target.value })} autoComplete="name" /></Field>
              <Field label="Preferred name"><input className={inputClass} value={form.preferredName} onChange={(e) => set({ preferredName: e.target.value })} /></Field>
              <Field label="Email address" required><input className={inputClass} type="email" value={form.email} onChange={(e) => set({ email: e.target.value })} autoComplete="email" /></Field>
              <Field label="Phone number"><input className={inputClass} value={form.phone} onChange={(e) => set({ phone: e.target.value })} autoComplete="tel" /></Field>
              <Field label="Country of residence"><input className={inputClass} value={form.country} onChange={(e) => set({ country: e.target.value })} autoComplete="country-name" /></Field>
              <Field label="State / Province"><input className={inputClass} value={form.state} onChange={(e) => set({ state: e.target.value })} /></Field>
              <Field label="City"><input className={inputClass} value={form.city} onChange={(e) => set({ city: e.target.value })} /></Field>
              <Field label="Timezone"><input className={inputClass} value={form.timezone} onChange={(e) => set({ timezone: e.target.value })} placeholder="Auto-detected" /></Field>
              <Field label="Preferred contact method">
                <select className={inputClass} value={form.preferredContact} onChange={(e) => set({ preferredContact: e.target.value })}>
                  {["Email", "Phone", "WhatsApp", "LinkedIn"].map((x) => <option key={x} className="bg-surface">{x}</option>)}
                </select>
              </Field>
              <Field label="LinkedIn URL (optional)"><input className={inputClass} value={form.linkedin} onChange={(e) => set({ linkedin: e.target.value })} placeholder="https://" /></Field>
              <Field label="Portfolio URL (optional)"><input className={inputClass} value={form.portfolio} onChange={(e) => set({ portfolio: e.target.value })} placeholder="https://" /></Field>
              <Field label="Personal website (optional)"><input className={inputClass} value={form.website} onChange={(e) => set({ website: e.target.value })} placeholder="https://" /></Field>
            </Grid>
          </Section>
        )}

        {step === 1 && (
          <Section title="Language Profile" hint="Add every language you speak — this is one of the most important parts of your profile.">
            <div className="space-y-5">
              {langs.map((l, i) => (
                <div key={i} className="rounded-xl border border-line bg-base/40 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink">Language {i + 1}</span>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => setStrongest(i)}
                        className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
                          l.isStrongest ? "border-accent bg-accent text-[#04140F]" : "border-line-strong text-ink-muted hover:text-ink")}>
                        <Star className="h-3.5 w-3.5" /> {l.isStrongest ? "Strongest" : "Mark strongest"}
                      </button>
                      {langs.length > 1 && (
                        <button type="button" onClick={() => setLangs((a) => a.filter((_, idx) => idx !== i))} className="text-ink-faint hover:text-accent" aria-label="Remove language"><Trash2 className="h-4 w-4" /></button>
                      )}
                    </div>
                  </div>
                  <Grid className="mt-3">
                    <Field label="Language">
                      <select className={inputClass} value={l.languageName} onChange={(e) => updateLang(i, { languageName: e.target.value })}>
                        <option value="" className="bg-surface">Select a language…</option>
                        {LANGUAGES.map((x) => <option key={x.name} value={x.name} className="bg-surface">{x.name} — {x.native}</option>)}
                      </select>
                    </Field>
                    <Field label="Overall proficiency">
                      <select className={inputClass} value={l.proficiency} onChange={(e) => updateLang(i, { proficiency: e.target.value })}>
                        {PROFICIENCY_LEVELS.map((p) => <option key={p} className="bg-surface">{p}</option>)}
                      </select>
                    </Field>
                    {(["speaking", "reading", "writing", "listening"] as const).map((skill) => (
                      <Field key={skill} label={skill[0].toUpperCase() + skill.slice(1)}>
                        <select className={inputClass} value={l[skill]} onChange={(e) => updateLang(i, { [skill]: e.target.value })}>
                          {SKILL_LEVELS.map((s) => <option key={s} className="bg-surface">{s}</option>)}
                        </select>
                      </Field>
                    ))}
                    <Field label="Where did you learn/use it?"><input className={inputClass} value={l.learnedIn} onChange={(e) => updateLang(i, { learnedIn: e.target.value })} placeholder="e.g. Malaysia" /></Field>
                    <Field label="Dialect / locale"><input className={inputClass} value={l.dialectLocale} onChange={(e) => updateLang(i, { dialectLocale: e.target.value })} placeholder="e.g. Malaysian Malay" /></Field>
                    <Field label="Years of exposure"><input className={inputClass} value={l.yearsExposure} onChange={(e) => updateLang(i, { yearsExposure: e.target.value })} placeholder="e.g. 20" /></Field>
                  </Grid>
                </div>
              ))}
              <button type="button" onClick={() => setLangs((a) => [...a, emptyLang()])} className="btn-secondary"><Plus className="h-4 w-4" /> Add another language</button>
            </div>
          </Section>
        )}

        {step === 2 && (
          <Section title="Education" hint="Optional, but it helps us match you to specialist projects.">
            <Grid>
              <Field label="Highest education level">
                <select className={inputClass} value={form.highestEducation} onChange={(e) => set({ highestEducation: e.target.value })}>
                  <option value="" className="bg-surface">Select…</option>
                  {EDUCATION_LEVELS.map((x) => <option key={x} className="bg-surface">{x}</option>)}
                </select>
              </Field>
              <Field label="Field of study"><input className={inputClass} value={form.fieldOfStudy} onChange={(e) => set({ fieldOfStudy: e.target.value })} /></Field>
              <Field label="Institution"><input className={inputClass} value={form.institution} onChange={(e) => set({ institution: e.target.value })} /></Field>
              <Field label="Graduation year"><input className={inputClass} value={form.graduationYear} onChange={(e) => set({ graduationYear: e.target.value })} placeholder="e.g. 2020" /></Field>
            </Grid>
          </Section>
        )}

        {step === 3 && (
          <Section title="Experience" hint="Previous annotation experience is not required for most projects.">
            <Field label="Have you previously worked on AI, data, language or annotation projects?">
              <div className="flex gap-3">
                {[["Yes", true], ["No", false]].map(([label, val]) => (
                  <button key={label as string} type="button" onClick={() => set({ hasPriorExperience: val as boolean })}
                    className={cn("rounded-xl border px-5 py-2.5 text-sm font-medium",
                      form.hasPriorExperience === val ? "border-accent bg-accent/10 text-accent" : "border-line-strong text-ink-muted hover:text-ink")}>
                    {label as string}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Years of relevant experience">
              <select className={cn(inputClass, "max-w-xs")} value={form.yearsExperience} onChange={(e) => set({ yearsExperience: e.target.value })}>
                <option value="" className="bg-surface">Select…</option>
                {["Less than 1", "1–2", "3–5", "6–10", "10+"].map((x) => <option key={x} className="bg-surface">{x}</option>)}
              </select>
            </Field>
            <Field label="Which areas have you worked in? (select any)">
              <div className="flex flex-wrap gap-2">
                {EXPERIENCE_CATEGORIES.map((c) => <Toggle key={c} active={form.experienceCategories.includes(c)} onClick={() => toggleArr("experienceCategories", c)}>{c}</Toggle>)}
              </div>
            </Field>
            <Field label="Anything else about your experience? (optional)">
              <textarea className={cn(inputClass, "resize-none")} rows={3} value={form.experienceNotes} onChange={(e) => set({ experienceNotes: e.target.value })} />
            </Field>
          </Section>
        )}

        {step === 4 && (
          <Section title="Skills" hint="Select everything that applies. Add your own if something's missing.">
            <div className="space-y-5">
              {Object.entries(SKILL_CATALOG).map(([group, items]) => (
                <div key={group}>
                  <h3 className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">{group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => <Toggle key={s} active={form.skills.includes(s)} onClick={() => toggleArr("skills", s)}>{s}</Toggle>)}
                  </div>
                </div>
              ))}
              <Field label="Add a custom skill">
                <div className="flex gap-2">
                  <input className={inputClass} value={form.customSkill} onChange={(e) => set({ customSkill: e.target.value })}
                    onKeyDown={(e) => { if (e.key === "Enter" && form.customSkill.trim()) { e.preventDefault(); set({ customSkills: [...form.customSkills, form.customSkill.trim()], customSkill: "" }); } }}
                    placeholder="Type a skill and press Enter" />
                  <button type="button" className="btn-secondary shrink-0" onClick={() => form.customSkill.trim() && set({ customSkills: [...form.customSkills, form.customSkill.trim()], customSkill: "" })}>Add</button>
                </div>
              </Field>
              {form.customSkills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {form.customSkills.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                      {s}<button type="button" onClick={() => set({ customSkills: form.customSkills.filter((x) => x !== s) })} className="ml-1">×</button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Section>
        )}

        {step === 5 && (
          <Section title="Availability" hint="Tell us how and when you can contribute.">
            <Field label="How many hours can you contribute per week?">
              <select className={cn(inputClass, "max-w-xs")} value={form.hoursPerWeek} onChange={(e) => set({ hoursPerWeek: e.target.value })}>
                <option value="" className="bg-surface">Select…</option>
                {AVAILABILITY_BANDS.map((b) => <option key={b} className="bg-surface">{b}</option>)}
              </select>
            </Field>
            <Field label={`When are you generally available? (${form.timezone || "your timezone"})`}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[440px] text-center text-xs">
                  <thead><tr><th />{AVAILABILITY_TIMES.map((t) => <th key={t} className="pb-2 font-medium text-ink-faint">{t}</th>)}</tr></thead>
                  <tbody>
                    {AVAILABILITY_DAYS.map((d) => (
                      <tr key={d}>
                        <td className="pr-2 text-left font-medium text-ink-muted">{d}</td>
                        {AVAILABILITY_TIMES.map((t) => {
                          const slot = `${d}-${t}`, on = form.availabilitySlots.includes(slot);
                          return (
                            <td key={t} className="p-1">
                              <button type="button" onClick={() => toggleArr("availabilitySlots", slot)}
                                className={cn("h-8 w-full rounded-md border text-xs", on ? "border-accent bg-accent text-[#04140F]" : "border-line-strong bg-base/40 hover:border-accent/40")}>{on ? "✓" : ""}</button>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Field>
            <Field label="How soon can you start?">
              <select className={cn(inputClass, "max-w-xs")} value={form.startAvailability} onChange={(e) => set({ startAvailability: e.target.value })}>
                <option value="" className="bg-surface">Select…</option>
                {START_AVAILABILITY.map((x) => <option key={x} className="bg-surface">{x}</option>)}
              </select>
            </Field>
            <label className="flex items-start gap-3 rounded-xl border border-line bg-base/40 p-4">
              <input type="checkbox" checked={form.openToFuture} onChange={(e) => set({ openToFuture: e.target.checked })} className="mt-0.5 h-4 w-4 accent-accent" />
              <span className="text-sm text-ink-muted"><span className="font-semibold text-ink">Keep me in the Contributor Network.</span> I&apos;m interested in future projects even if no suitable opportunity is available right now.</span>
            </label>
          </Section>
        )}

        {step === 6 && (
          <Section title="Resume / CV" hint="Optional. Accepted formats: PDF, DOC, DOCX (max 6MB).">
            <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line-strong bg-base/40 px-6 py-12 text-center hover:border-accent/50">
              <Upload className="h-7 w-7 text-ink-faint" />
              {resumeFile || form.resumeFileName ? (
                <span className="text-sm font-medium text-ink">{resumeFile?.name || form.resumeFileName}</span>
              ) : (
                <>
                  <span className="text-sm font-medium text-ink">Drag &amp; drop your CV here, or click to browse</span>
                  <span className="text-xs text-ink-faint">PDF, DOC or DOCX</span>
                </>
              )}
              <input type="file" accept=".pdf,.doc,.docx" className="sr-only"
                onChange={(e) => { const f = e.target.files?.[0] ?? null; setResumeFile(f); set({ resumeFileName: f?.name ?? "" }); }} />
            </label>
            {(resumeFile || form.resumeFileName) && (
              <button type="button" onClick={() => { setResumeFile(null); set({ resumeFileName: "" }); }} className="mt-3 text-sm text-accent hover:text-accent-soft">Remove file</button>
            )}
            <p className="mt-4 text-xs text-ink-faint">Your CV is sent securely to the Valtaris portal and is never shown publicly.</p>
          </Section>
        )}

        {step === 7 && (
          <Section title="Tell Us About Yourself" hint="We want to understand what makes you a valuable contributor to AI projects.">
            <Field label="Your response" required>
              <textarea className={cn(inputClass, "resize-none")} rows={7} value={form.essay} onChange={(e) => set({ essay: e.target.value })}
                placeholder="Tell us about your background, the languages or areas of expertise you are most comfortable with, your previous experience, and why you are interested in helping improve AI systems." />
              <div className="mt-1.5 flex justify-between text-xs">
                <span className={cn(essayWords < 30 ? "text-accent" : "text-ink-faint")}>Recommended 150–500 words</span>
                <span className="text-ink-faint">{essayWords} words</span>
              </div>
            </Field>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-ink">Optional questions</p>
              {ESSAY_QUESTIONS.map((q, i) => (
                <Field key={q.id} label={q.label}>
                  <textarea className={cn(inputClass, "resize-none")} rows={2}
                    value={form[`essayQ${i + 1}` as "essayQ1"]}
                    onChange={(e) => set({ [`essayQ${i + 1}`]: e.target.value } as Partial<FormState>)} />
                </Field>
              ))}
            </div>
          </Section>
        )}

        {step === 8 && (
          <Section title="Review & Submit" hint="Please review, give consent, and submit your application.">
            <div className="rounded-xl border border-line bg-base/40 p-5 text-sm">
              <SummaryRow label="Name" value={form.fullName || "—"} />
              <SummaryRow label="Email" value={form.email || "—"} />
              <SummaryRow label="Location" value={[form.city, form.country].filter(Boolean).join(", ") || "—"} />
              <SummaryRow label="Languages" value={langs.filter((l) => l.languageName).map((l) => `${l.languageName} (${l.proficiency})`).join(", ") || "—"} />
              <SummaryRow label="Skills" value={[...form.skills, ...form.customSkills].join(", ") || "—"} />
              <SummaryRow label="Availability" value={form.hoursPerWeek || "—"} />
              <SummaryRow label="CV" value={resumeFile?.name || form.resumeFileName || "Not attached"} />
              {opportunity && <SummaryRow label="Applying for" value={opportunity.title} />}
            </div>
            <div className="mt-5 space-y-3">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={form.consentDataProcessing} onChange={(e) => set({ consentDataProcessing: e.target.checked })} className="mt-0.5 h-4 w-4 accent-accent" />
                <span className="text-sm text-ink-muted">I consent to Valtaris processing my personal data to review my application and match me to opportunities, in line with the <a href="/legal/privacy" className="text-accent hover:underline">Privacy Policy</a>. <span className="text-accent">*</span></span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={form.consentContact} onChange={(e) => set({ consentContact: e.target.checked })} className="mt-0.5 h-4 w-4 accent-accent" />
                <span className="text-sm text-ink-muted">I&apos;d like to be contacted about relevant future opportunities.</span>
              </label>
            </div>
          </Section>
        )}

        {error && <p className="mt-5 text-sm font-medium text-red-400" role="alert">{error}</p>}

        <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
          <button type="button" onClick={back} disabled={step === 0} className="btn-ghost disabled:invisible"><ArrowLeft className="h-4 w-4" /> Back</button>
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={next} disabled={!canNext()} className="btn-primary">Continue <ArrowRight className="h-4 w-4" /></button>
          ) : (
            <button type="button" onClick={submit} disabled={status === "submitting" || !form.consentDataProcessing} className="btn-primary">
              {status === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>) : "Submit Application"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      {hint && <p className="mt-1.5 text-sm text-ink-muted">{hint}</p>}
      <div className="mt-6 space-y-5">{children}</div>
    </div>
  );
}
function Grid({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("grid gap-4 sm:grid-cols-2", className)}>{children}</div>;
}
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}{required && <span className="ml-1 text-accent">*</span>}</span>
      {children}
    </label>
  );
}
function Toggle({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick}
      className={cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active ? "border-accent bg-accent text-[#04140F]" : "border-line-strong text-ink-muted hover:border-accent/40 hover:text-ink")}>
      {children}
    </button>
  );
}
function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 border-b border-line py-2 last:border-0">
      <span className="w-32 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">{label}</span>
      <span className="text-ink-muted">{value}</span>
    </div>
  );
}
