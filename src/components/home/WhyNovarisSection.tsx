import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";

const pillars = [
  {
    title: "Software + Operations",
    body: "Software must fit real-world workflows, not the other way around.",
  },
  {
    title: "Hardware + Software",
    body: "We bridge applications, networks, automation, IoT, and physical systems.",
  },
  {
    title: "Business + Engineering",
    body: "Technology decisions should improve operations and produce measurable value.",
  },
  {
    title: "Build + Integrate",
    body: "When an existing platform works, integrate it. When it doesn't, build something better.",
  },
];

export function WhyNovarisSection() {
  return (
    <Section className="border-y border-border bg-surface/40">
      <SectionHeading
        eyebrow="Why Novaris"
        title="More than software development."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {pillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            delay={index * 0.07}
          >
            <div className="surface-panel h-full rounded-xl p-8">
              <h3 className="font-display text-xl font-semibold">
                {pillar.title}
              </h3>

              <p className="mt-3 leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}