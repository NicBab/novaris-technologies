import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/data/services";

export function ProcessSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Process"
        title="How custom software gets built."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal
            key={step.n}
            delay={index * 0.06}
            className="h-full"
          >
            <div className="group h-full bg-background p-7 transition-colors hover:bg-surface">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary">
                  {step.n}
                </span>

                <span className="h-px flex-1 bg-border transition-colors group-hover:bg-primary/50" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-nova-flow">
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
  );
}