import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/marketing/Section";
import { NovaNetwork } from "@/components/motion/NovaNetwork";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Start a Project — Novaris Technologies",
  description:
    "Tell Novaris Technologies what's slowing your business down or what you're trying to build. Project discovery for software, AI, integration, and infrastructure work.",
  openGraph: {
    title: "Start a Project with Novaris Technologies",
    description:
      "Begin a project discovery conversation about software, AI, automation, or infrastructure.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <NovaNetwork
          className="absolute inset-0 h-full w-full opacity-70"
          density={40}
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Project discovery</p>

            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Let&apos;s define the{" "}
              <span className="text-nova-flow">
                problem first.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              This isn&apos;t a contact form — it&apos;s the first step of
              discovery. The more context you give, the more useful our first
              conversation will be.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="border-t border-border pt-0">
        <ContactForm />
      </Section>
    </>
  );
}