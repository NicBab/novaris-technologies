import type { Metadata } from "next";
import Link from "next/link";

import { FinalCTA } from "@/components/marketing/FinalCTA";
import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { NovaNetwork } from "@/components/motion/NovaNetwork";
import { Reveal } from "@/components/motion/Reveal";
import { industries, solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions — Software, AI & Automation | Novaris Technologies",
  description:
    "Technology solutions for operational businesses — custom software, system integration, AI automation, customer portals, field operations, property management, and connected systems.",
  openGraph: {
    title: "Novaris Solutions — Technology for Real Operations",
    description:
      "Software, AI, automation, integration, and connected systems designed around real business operations.",
    url: "/solutions",
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-28 sm:px-8 lg:py-36">
        <NovaNetwork
          className="absolute inset-0 h-full w-full opacity-70"
          density={40}
        />

        <div
          className="grid-lines pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Solutions</p>

            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Start with the problem.{" "}
              <span className="text-nova-flow">
                Engineer the right solution.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Novaris combines software, integration, AI, automation, and
              infrastructure to solve operational problems that rarely fit
              inside a single product category.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Problems → Systems"
          title="What are you trying to solve?"
          sub="The technology comes second. We start with the operational problem and build or integrate the system that addresses it."
        />

        <div className="mt-14 space-y-4">
          {solutions.map((solution, index) => (
            <Reveal
              key={solution.problem}
              delay={index * 0.04}
            >
              <div className="group surface-panel grid gap-6 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 md:grid-cols-[0.9fr_1fr_1.4fr] md:items-center md:p-7">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    Problem
                  </span>

                  <h2 className="mt-2 font-display text-lg font-semibold">
                    {solution.problem}
                  </h2>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="hidden h-px flex-1 bg-gradient-to-r from-border to-primary/60 md:block"
                    aria-hidden
                  />

                  <span className="font-mono text-[10px] text-primary">
                    →
                  </span>

                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                      Novaris
                    </span>

                    <p className="mt-2 text-sm font-medium">
                      {solution.answer}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {solution.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/40">
        <SectionHeading
          eyebrow="Industries"
          title="Built around operations."
          sub="The same engineering approach applies across industries where disconnected systems and manual workflows create friction."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((industry, index) => (
            <Reveal
              key={industry}
              delay={index * 0.04}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-5 py-3 text-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden
                />

                {industry}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="surface-panel relative overflow-hidden rounded-2xl p-8 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Have a different problem?"
              title="The solution doesn't need a product name."
              sub="If the problem sits between software, infrastructure, automation, AI, or existing systems, that's exactly where Novaris is designed to work."
            />

            <Reveal delay={0.1}>
              <Link
                href="/contact"
                className="inline-flex shrink-0 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
              >
                Start a Conversation
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}