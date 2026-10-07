import type { Metadata } from "next";
import Link from "next/link";

import { EcosystemDiagram } from "@/components/marketing/EcosystemDiagram";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { NovaNetwork } from "@/components/motion/NovaNetwork";
import { Reveal } from "@/components/motion/Reveal";
import { ProductCard } from "@/components/marketing/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Novaris Software — MotoDeskOS, WorkTraceOS, PropCoreOS",
  description:
    "The Novaris software ecosystem: operating platforms for powersports dealerships, field service teams, and property management companies.",
  openGraph: {
    title: "Novaris Software — Built for real operations",
    description:
      "MotoDeskOS, WorkTraceOS, and PropCoreOS — platforms developed and operated by Novaris Technologies.",
    url: "/software",
  },
  alternates: {
    canonical: "/software",
  },
};

export default function SoftwarePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-28 sm:px-8 lg:py-36">
        <NovaNetwork
          className="absolute inset-0 h-full w-full opacity-70"
          density={40}
        />

        <div
          className="grid-lines pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Novaris Software</p>

            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Software built for{" "}
              <span className="text-nova-flow">real operations.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Novaris develops and operates its own platforms. Each product
              targets an industry still running on paperwork, spreadsheets,
              and disconnected point tools — and each is built to stand on its
              own.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="border-t border-border">
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/40">
        <SectionHeading
          align="center"
          eyebrow="Architecture"
          title="One ecosystem. Room to grow."
          sub="The portfolio is designed to expand — new Novaris platforms plug into the same core."
        />

        <div className="mt-16">
          <EcosystemDiagram />
        </div>

        <Reveal
          delay={0.15}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--glow-primary)]"
          >
            Talk to Novaris
          </Link>
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}