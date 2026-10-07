import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        align === "center" && "mx-auto text-center",
        "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3">
          {align === "left" && (
            <span className="spectrum-rule h-px w-8 rounded-full" />
          )}

          {eyebrow}
        </p>
      )}

      <h2 className="mt-5 text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {sub && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {sub}
        </p>
      )}
    </Reveal>
  );
}