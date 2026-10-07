import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";
import { techStack } from "@/data/services";

export function TechnologySection() {
  return (
    <Section className="border-y border-border bg-surface/40">
      <SectionHeading
        eyebrow="Technology"
        title="Modern technology. Practical engineering."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.05}>
            <div className="surface-panel h-full rounded-xl p-6">
              <h3 className="eyebrow text-nova-flow">
                {group.group}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}