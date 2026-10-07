import type { Metadata } from "next";

import { Section } from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Novaris Technologies website at novaristechus.com.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8 lg:pt-40 lg:pb-20">
        <div
          className="grid-lines pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Legal</p>

            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Terms of Use
            </h1>

            <p className="mt-5 text-sm text-muted-foreground">
              Last updated: October 7, 2026
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="border-t border-border">
        <Reveal className="max-w-3xl">
          <div className="space-y-10 leading-relaxed text-muted-foreground">
            <LegalSection title="Acceptance of these terms">
              <p>
                By accessing or using the Novaris Technologies website, you
                agree to these Terms of Use. If you do not agree with these
                terms, you should not use this website.
              </p>
            </LegalSection>

            <LegalSection title="Website purpose">
              <p>
                This website provides information about Novaris Technologies,
                its software, services, capabilities, and related technology
                offerings. Website content is provided for general
                informational purposes and does not by itself create a client,
                consulting, partnership, or other professional relationship.
              </p>
            </LegalSection>

            <LegalSection title="Project inquiries">
              <p>
                Submitting a project inquiry or contacting Novaris does not
                create a contractual relationship or obligate either party to
                proceed with a project. Any services, deliverables, pricing,
                schedules, responsibilities, warranties, or other project terms
                will be governed by a separate written agreement when
                applicable.
              </p>
            </LegalSection>

            <LegalSection title="Software products">
              <p>
                References to Novaris software products on this website are
                informational. Access to or use of a Novaris software product
                may be governed by separate subscription terms, license terms,
                privacy policies, service agreements, or other product-specific
                agreements.
              </p>
            </LegalSection>

            <LegalSection title="Intellectual property">
              <p>
                Unless otherwise stated, the website and its original content,
                branding, graphics, software, designs, and other materials are
                owned by or licensed to Novaris Technologies and are protected
                by applicable intellectual property laws.
              </p>
            </LegalSection>

            <LegalSection title="Acceptable use">
              <p>
                You may not use this website in a manner intended to disrupt,
                damage, interfere with, gain unauthorized access to, or
                compromise the website, its infrastructure, or related systems.
                You may not use automated or deceptive methods to submit
                abusive, fraudulent, or unlawful requests through the website.
              </p>
            </LegalSection>

            <LegalSection title="Third-party services and links">
              <p>
                The website may reference or link to third-party websites,
                platforms, products, or services. Novaris does not control
                third-party services and is not responsible for their content,
                availability, security, or practices.
              </p>
            </LegalSection>

            <LegalSection title="No warranties">
              <p>
                The website is provided on an &quot;as available&quot; basis.
                To the extent permitted by applicable law, Novaris makes no
                warranties regarding uninterrupted availability, completeness,
                accuracy, or suitability of website content for a particular
                purpose.
              </p>
            </LegalSection>

            <LegalSection title="Limitation of liability">
              <p>
                To the extent permitted by applicable law, Novaris Technologies
                will not be liable for indirect, incidental, special,
                consequential, or similar damages arising solely from access
                to or use of this informational website.
              </p>
            </LegalSection>

            <LegalSection title="Changes">
              <p>
                Novaris may update this website and these Terms of Use from
                time to time. The date above identifies the most recent
                revision.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                Questions regarding these Terms of Use may be submitted through
                the Novaris Technologies contact page.
              </p>
            </LegalSection>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foreground">
        {title}
      </h2>

      <div className="mt-3">{children}</div>
    </section>
  );
}