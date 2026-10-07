"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { NovaNetwork } from "@/components/motion/NovaNetwork";

const labels = [
  {
    text: "Custom Software",
    top: "18%",
    left: "6%",
    color: "text-cyan",
  },
  {
    text: "Automation",
    top: "72%",
    left: "10%",
    color: "text-lime",
  },
  {
    text: "AI",
    top: "32%",
    left: "84%",
    color: "text-magenta",
  },
  {
    text: "Data",
    top: "64%",
    left: "78%",
    color: "text-violet",
  },
  {
    text: "Integrations",
    top: "86%",
    left: "46%",
    color: "text-amber",
  },
  {
    text: "Infrastructure",
    top: "12%",
    left: "68%",
    color: "text-cyan",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 sm:px-8">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      />

      <NovaNetwork
        className="absolute inset-0 h-full w-full"
        density={58}
      />

      <div
        className="aurora pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
      />

      {labels.map((label, index) => (
        <motion.span
          key={label.text}
          className={`pointer-events-none absolute hidden font-mono text-[10px] tracking-[0.22em] uppercase lg:block ${label.color}`}
          style={{
            top: label.top,
            left: label.left,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.25, 0.85, 0.25],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            delay: index * 0.6,
            ease: "easeInOut",
          }}
        >
          {label.text}
        </motion.span>
      ))}

      <div className="relative mx-auto w-full max-w-7xl py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow inline-flex items-center gap-3"
        >
          <span
            className="spectrum-rule h-px w-10 rounded-full"
            aria-hidden
          />

          Software · Systems · Automation · Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 max-w-4xl text-5xl leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl"
        >
          Technology engineered{" "}
          <span className="text-nova-flow">
            around your business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Novaris Technologies builds software, intelligent automation, AI
          integrations, digital infrastructure, and purpose-built technology
          solutions that help businesses operate smarter and scale further.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.38,
          }}
          className="mt-11 flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="neon-border rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
          >
            Start a Project
          </Link>

          <Link
            href="/software"
            className="neon-border rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-surface"
          >
            Explore Novaris Software
          </Link>
        </motion.div>
      </div>
    </section>
  );
}