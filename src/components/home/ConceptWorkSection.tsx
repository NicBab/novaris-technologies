import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";
import { projectConcepts } from "@/data/solutions";

export function ConceptWorkSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Concept work"
        title="What Novaris can build."
        sub="Conceptual reference architectures — illustrative examples of Novaris system design, not completed client projects."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectConcepts.map((concept, index) => (
          <Reveal key={concept.title} delay={index * 0.06}>
            <div className="group surface-panel relative h-full overflow-hidden rounded-xl p-7">
              <span className="eyebrow">Concept</span>

              <h3 className="mt-4 font-display text-lg font-semibold text-nova-flow">
                {concept.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {concept.body}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/60 to-transparent opacity-40 transition-opacity group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}