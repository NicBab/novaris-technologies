import Link from "next/link";

import { Section, SectionHeading } from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Services"
        title="Technology built around the problem — not the other way around."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05}>
            <Link
              href={`/services#${service.slug}`}
              className="group surface-panel flex h-full flex-col rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="eyebrow text-nova-flow">{service.stage}</span>

              <h3 className="mt-4 font-display text-lg font-semibold text-nova-flow">
                {service.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <span className="mt-5 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {service.cta} →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
