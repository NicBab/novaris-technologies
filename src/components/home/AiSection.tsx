import Link from "next/link";

import { AiFlow } from "@/components/marketing/AiFlow";
import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";

export function AiSection() {
  return (
    <Section className="border-y border-border bg-surface/40">
      <SectionHeading
        eyebrow="Artificial Intelligence"
        title="Put AI inside the workflow."
        sub="The real value of artificial intelligence comes from connecting it to the systems, data, and processes your business already uses."
      />

      <div className="mt-16">
        <AiFlow />
      </div>

      <Reveal delay={0.2} className="mt-12">
        <Link
          href="/services#ai-integration"
          className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium transition-all hover:shadow-[var(--glow-primary)]"
        >
          Explore AI Integration
        </Link>
      </Reveal>
    </Section>
  );
}