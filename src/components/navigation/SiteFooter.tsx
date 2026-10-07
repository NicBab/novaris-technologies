import Link from "next/link";

import { NovarisMark } from "@/components/marketing/NovarisMark";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <NovarisMark className="h-9 w-9" />

              <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase">
                Novaris Technologies
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Software. Systems. Intelligence.
            </p>
          </div>

          <FooterCol title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/software">Software</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/solutions">Solutions</FooterLink>
          </FooterCol>

          <FooterCol title="Software">
            <FooterLink href="/software">MotoDesk</FooterLink>
            <FooterLink href="/software">WorkTrace</FooterLink>
            <FooterLink href="/software">PropCore</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            <FooterLink href="/services#custom-software">
              Custom Software
            </FooterLink>

            <FooterLink href="/services#ai-integration">
              AI Integration
            </FooterLink>

            <FooterLink href="/services#software-consulting">
              Software Consulting
            </FooterLink>

            <FooterLink href="/services#business-websites">
              Web Development
            </FooterLink>

            <FooterLink href="/services#home-automation">
              Automation
            </FooterLink>

            <FooterLink href="/services#it-infrastructure">
              IT &amp; Infrastructure
            </FooterLink>
          </FooterCol>

          <FooterCol title="Connect">
            <FooterLink href="/contact">Contact</FooterLink>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Novaris Technologies. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="eyebrow">{title}</h3>

      <div className="mt-4 flex flex-col gap-2.5">
        {children}
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}