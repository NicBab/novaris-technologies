"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { NovaNetwork } from "@/components/motion/NovaNetwork";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-28 sm:px-8">
      <div
        className="aurora pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      />

      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <NovaNetwork
        className="pointer-events-none absolute inset-0 h-full w-full opacity-75"
        density={52}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl py-20 lg:py-28">
        <div className="max-w-5xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />

            <span className="font-mono tracking-[0.12em] uppercase">
              Software · Systems · Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-5xl font-display text-5xl leading-[0.96] font-semibold tracking-[-0.045em] text-balance sm:text-6xl md:text-7xl lg:text-[5.6rem]"
          >
            Technology Engineered{" "}
            <span className="text-nova-flow">around your business.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
          >
            Novaris Technologies designs and builds software, automation, AI
            integrations, and technology infrastructure engineered around the
            way your business actually works.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/software"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Explore Our Software

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/60 hover:bg-primary/10"
            >
              Start a Project

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-16 grid max-w-3xl grid-cols-1 gap-5 border-t border-border/70 pt-7 sm:grid-cols-3"
          >
            <HeroCapability
              number="01"
              title="Software"
              text="Purpose-built platforms and applications."
            />

            <HeroCapability
              number="02"
              title="Automation"
              text="Connected systems that remove repetitive work."
            />

            <HeroCapability
              number="03"
              title="Intelligence"
              text="AI integrated where it creates real leverage."
            />
          </motion.div>
        </div>
      </div>

      <div
        className="spectrum-rule absolute inset-x-0 bottom-0 h-px"
        aria-hidden="true"
      />
    </section>
  );
}

function HeroCapability({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-[10px] text-muted-foreground">
        {number}
      </span>

      <div>
        <p className="font-display text-sm font-medium">{title}</p>

        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  );
}