import type { Metadata } from "next";

import { FinalCTA } from "@/components/marketing/FinalCTA";
import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { NovaNetwork } from "@/components/motion/NovaNetwork";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About Novaris Technologies — Software and the Real World",
  description:
    "Novaris Technologies combines software engineering with hands-on operations, automation, and infrastructure experience to solve problems at the system level.",
  openGraph: {
    title: "About Novaris Technologies",
    description:
      "Built for the intersection of software and the real world.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const architecture = [
  {
    group: "Novaris Software",
    items: [
      "MotoDeskOS",
      "WorkTraceOS",
      "PropCoreOS",
      "Future platforms",
    ],
  },
  {
    group: "Novaris Services",
    items: [
      "Custom Software",
      "Software Consulting",
      "AI & Integrations",
      "Web Development",
      "Systems Integration",
    ],
  },
  {
    group: "Novaris Connected Technology",
    items: [
      "IT & Infrastructure",
      "IoT",
      "Home Automation",
      "Automation Systems",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-28 sm:px-8 lg:py-36">
        <NovaNetwork
          className="absolute inset-0 h-full w-full opacity-70"
          density={40}
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">About</p>

            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Built for the intersection of{" "}
              <span className="text-nova-flow">
                software and the real world.
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      <Section className="border-t border-border">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed">
              Novaris Technologies was created around a simple idea: businesses
              should not have to reshape themselves around outdated technology.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Software, automation, infrastructure, and AI should instead be
              engineered around the way an organization actually operates —
              the sequence work moves through, the data that already exists,
              the constraints of the people doing the job.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="leading-relaxed text-muted-foreground">
              Novaris combines software engineering with hands-on understanding
              of operations, automation, connected systems, and technology
              infrastructure. That range means a problem can be evaluated as a
              complete system: the application, the data model, the integrations
              underneath it, the network it runs on, and the physical equipment
              at the edge of it.
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              The same engineering discipline drives both sides of the company
              — the client work and the Novaris software portfolio. Each
              platform we operate is a product of the same process we use for
              custom builds.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/40">
        <SectionHeading
          eyebrow="Brand architecture"
          title="One engineering company. Three layers."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {architecture.map((item, index) => (
            <Reveal
              key={item.group}
              delay={index * 0.08}
            >
              <div className="surface-panel h-full rounded-xl p-7">
                <h3 className="font-display text-lg font-semibold">
                  {item.group}
                </h3>

                <div className="mt-5 space-y-2.5">
                  {item.items.map((entry) => (
                    <div
                      key={entry}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        className="h-px w-4 bg-primary/60"
                        aria-hidden
                      />

                      {entry}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}