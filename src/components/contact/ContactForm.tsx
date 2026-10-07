"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Reveal } from "@/components/motion/Reveal";

const projectTypes = [
  "Custom Software",
  "Software Consulting",
  "AI Integration",
  "Business Website",
  "Personal Website",
  "IT & Infrastructure",
  "Home Automation",
  "Systems Integration",
  "SaaS Development",
  "Other",
];

const budgets = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Not sure yet",
];

const timelines = [
  "Immediately",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Exploring options",
];

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);

      toast.success("Project inquiry received", {
        description:
          "We'll review the details and reply within one business day.",
      });

      e.currentTarget?.reset?.();
    }, 700);
  };

  return (
    <Reveal className="surface-panel rounded-2xl p-6 sm:p-9">
      <form onSubmit={onSubmit} className="space-y-6">
        <fieldset className="space-y-5">
          <legend className="eyebrow">01 — Who you are</legend>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>
        </fieldset>

        <fieldset className="space-y-5 border-t border-border pt-6">
          <legend className="eyebrow">02 — Scope</legend>

          <div className="grid gap-4 sm:grid-cols-3">
            <Select
              label="Project Type"
              name="projectType"
              options={projectTypes}
            />

            <Select
              label="Estimated Budget"
              name="budget"
              options={budgets}
            />

            <Select
              label="Timeline"
              name="timeline"
              options={timelines}
            />
          </div>
        </fieldset>

        <fieldset className="space-y-5 border-t border-border pt-6">
          <legend className="eyebrow">03 — The work</legend>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium"
            >
              Project Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={4}
              className={fieldClass}
              placeholder="What are you trying to build, replace, or connect?"
            />
          </div>

          <div>
            <label
              htmlFor="problem"
              className="mb-2 block text-sm font-medium"
            >
              What problem are you trying to solve?
            </label>

            <textarea
              id="problem"
              name="problem"
              rows={6}
              required
              className={fieldClass}
              placeholder="Where does the process break down today? Which systems don't talk to each other? What takes too long, costs too much, or gets missed?"
            />
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--glow-primary)] disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Start a Conversation"}
        </button>
      </form>
    </Reveal>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={fieldClass}
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        defaultValue=""
        className={fieldClass}
      >
        <option value="" disabled>
          Select…
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}