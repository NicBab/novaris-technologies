"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { Product } from "@/data/products";

const MotionImage = motion.create(Image);

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.article
      id={product.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group surface-panel relative scroll-mt-28 overflow-hidden rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1.5 sm:p-9"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, ${product.accent}, transparent)`,
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
        style={{ background: product.accent }}
        aria-hidden
      />

      <div className="relative flex flex-wrap items-center gap-3">
        <span className="eyebrow">{product.industry}</span>

        <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
          {product.status}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-3xl font-semibold sm:text-4xl">
        {product.name}
      </h3>

      <p className="relative mt-2 text-base" style={{ color: product.accent }}>
        {product.tagline}
      </p>

      <p className="relative mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        {product.summary}
      </p>

      <div className="relative mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {product.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full"
                style={{ background: product.accent }}
                aria-hidden
              />

              {capability}
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-border bg-background/60 p-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              {product.preview.label}
            </span>

            <span className="flex gap-1.5" aria-hidden>
              <i className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              <i className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              <i
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: product.accent }}
              />
            </span>
          </div>

          <div className="mt-3">
            {"image" in product.preview ? (
              <MotionImage
                src={product.preview.image}
                alt={product.preview.alt}
                width={1600}
                height={1000}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="w-full rounded-lg border border-border/60 bg-surface-raised/60 object-cover"
              />
            ) : (
              <div className="space-y-2">
                {product.preview.rows.map((row, i) => (
                  <motion.div
                    key={row.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.12,
                    }}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-surface-raised/60 px-3 py-2.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium">
                        {row.title}
                      </p>

                      <p className="truncate font-mono text-[10px] text-muted-foreground">
                        {row.meta}
                      </p>
                    </div>

                    <span
                      className="shrink-0 font-mono text-[10px] tracking-wide"
                      style={{ color: product.accent }}
                    >
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative mt-8">
        <span className="inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-medium transition-colors group-hover:border-primary">
          Explore {product.name}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.article>
  );
}
