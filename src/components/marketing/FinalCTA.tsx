import Link from "next/link";

import { NovaNetwork } from "@/components/motion/NovaNetwork";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 lg:py-36">
      <NovaNetwork
        className="absolute inset-0 h-full w-full opacity-50"
        density={34}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        aria-hidden
      >
        <span className="aurora block h-full w-full opacity-60" />
      </div>

      <div
        className="spectrum-rule absolute inset-x-0 top-0 h-px"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow justify-center">Start here</p>

          <h2 className="mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
            What should technology{" "}
            <span className="text-nova-flow">solve for you?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Tell us whats slowing your business down, what youre trying to
            build, or what you wish your current systems could do.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="neon-border rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
            >
              Start a Conversation
            </Link>

            <Link
              href="/software"
              className="neon-border rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-surface"
            >
              Explore Our Software
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}