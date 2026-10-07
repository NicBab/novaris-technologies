import type { Metadata } from "next";
import Link from "next/link";

import { AiFlow } from "@/components/marketing/AiFlow";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { NovaNetwork } from "@/components/motion/NovaNetwork";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps, services } from "@/data/services";

export const metadata: Metadata = {
  title:
    "Services — Custom Software, AI, Integration & Infrastructure | Novaris",
  description:
    "Strategy, custom software, systems integration, AI, infrastructure, and automation — the full Novaris Technologies capability stack.",
  openGraph: {
    title: "Novaris Services — Strategy to Infrastructure",
    description:
      "Technology built around the problem — custom software, AI integration, automation, and IT infrastructure.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

const stages = [
  "Strategy",
  "Software",
  "Integration",
  "AI",
  "Infrastructure",
  "Automation",
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-28 sm:px-8 lg:py-36">
        <NovaNetwork
          className="absolute inset-0 h-full w-full opacity-70"
          density={40}
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Capabilities</p>

            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Technology built around the problem —{" "}
              <span className="text-nova-flow">
                not the other way around.
              </span>
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              {stages.map((stage, index) => (
                <span
                  key={stage}
                  className="flex items-center gap-2"
                >
                  <span className="rounded-full border border-border bg-surface px-3 py-1.5">
                    {stage}
                  </span>

                  {index < stages.length - 1 && (
                    <span className="text-primary">→</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border">
  {services.map((service, index) => {
  const reversed = index % 2 === 1;

  return (
    <Section
      key={service.slug}
      id={service.slug}
      className={
        reversed
          ? "border-b border-border bg-surface/40"
          : "border-b border-border"
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className={reversed ? "lg:order-2" : undefined}>
          <SectionHeading
            eyebrow={service.stage}
            title={service.name}
            sub={service.headline}
          />

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium transition-all hover:shadow-[var(--glow-primary)]"
            >
              {service.cta}
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className={reversed ? "lg:order-1" : undefined}
        >
          <div className="surface-panel grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
            {service.capabilities.map((capability) => (
              <div
                key={capability}
                className="bg-background px-5 py-4 text-sm text-muted-foreground transition-colors hover:bg-surface-raised hover:text-foreground"
              >
                {capability}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
})}
      </div>

      <Section>
        <SectionHeading
          eyebrow="AI in practice"
          title="Put AI inside the workflow."
          sub="Connected to the systems, data, and processes your business already runs on."
        />

        <div className="mt-16">
          <AiFlow />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/40">
        <SectionHeading
          eyebrow="Process"
          title="From discovery to long-term evolution."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.n}
              delay={index * 0.06}
              className="h-full"
            >
              <div className="h-full bg-background p-7">
                <span className="font-mono text-xs text-primary">
                  {step.n}
                </span>

                <h3 className="mt-4 font-display text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}