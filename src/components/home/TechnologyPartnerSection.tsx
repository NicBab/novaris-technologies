"use client";

import { motion } from "motion/react";

import { Section, SectionHeading } from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";

const disconnectedTools = [
  "Spreadsheets",
  "Paper forms",
  "Point tools",
  "Manual re-entry",
];

export function TechnologyPartnerSection() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="One partner"
          title="One technology partner. From idea to infrastructure."
          sub="Most businesses run on disconnected software, spreadsheets, manual processes, and a rotating cast of vendors. Novaris brings those systems together."
        />

        <Reveal delay={0.1} className="surface-panel rounded-2xl p-7">
          <p className="text-muted-foreground">
            We design the technology behind better businesses — from
            customer-facing software and internal operational platforms to AI
            integrations, automation, websites, infrastructure, and connected
            systems.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {disconnectedTools.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-lg border border-border/70 px-3 py-2.5 text-muted-foreground line-through decoration-destructive/50"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="rounded-xl border border-primary/30 bg-primary/5 px-5 py-4"
          >
            <p className="font-display font-semibold">
              One connected Novaris architecture
            </p>

            <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Software → Data → APIs → AI → Infrastructure
            </p>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}