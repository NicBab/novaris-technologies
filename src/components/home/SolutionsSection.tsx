import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Solutions"
        title="Where technology meets operations."
      />

      <div className="mt-12 flex flex-wrap gap-3">
        {industries.map((industry, index) => (
          <Reveal
            key={industry}
            delay={index * 0.04}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-5 py-3 text-sm">
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
  );
}