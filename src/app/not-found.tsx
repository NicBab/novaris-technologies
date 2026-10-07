import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden px-5 py-28 sm:px-8">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 42%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <p className="eyebrow flex items-center gap-3">
          <span
            className="spectrum-rule h-px w-10 rounded-full"
            aria-hidden
          />
          404
        </p>

        <h1 className="mt-7 max-w-3xl text-5xl leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl">
          This route went{" "}
          <span className="text-nova-flow">off the network.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-primary/40"
          >
            Contact Novaris
          </Link>
        </div>
      </div>
    </main>
  );
}