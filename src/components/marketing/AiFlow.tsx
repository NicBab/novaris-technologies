"use client";

import { motion } from "motion/react";

const inputs = [
  "Email",
  "Documents",
  "CRM",
  "Database",
  "Business Software",
];

const outputs = [
  "Automation",
  "Insights",
  "Reports",
  "Decisions",
  "Customer Response",
  "Workflow Actions",
];

export function AiFlow() {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
      <div className="space-y-2.5">
        {inputs.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
            }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm"
          >
            <span>{label}</span>

            <span
              className="h-px w-8 bg-gradient-to-r from-transparent to-primary"
              aria-hidden
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-primary/40"
        style={{
          background: "var(--gradient-surface)",
          boxShadow: "var(--glow-soft)",
        }}
      >
        <span
          className="absolute inset-0 animate-pulse rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.15 240 / 0.22), transparent 70%)",
          }}
          aria-hidden
        />

        <span className="relative font-display text-lg font-semibold tracking-[0.2em]">
          AI
        </span>
      </motion.div>

      <div className="space-y-2.5">
        {outputs.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.35 + i * 0.08,
            }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm"
          >
            <span
              className="h-px w-8 bg-gradient-to-r from-violet to-transparent"
              aria-hidden
            />

            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}