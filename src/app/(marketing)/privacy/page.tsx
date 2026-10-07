import type { Metadata } from "next";

import { Section } from "@/components/marketing/Section";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Novaris Technologies and the novaristechus.com website.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
              Privacy Policy
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
            <LegalSection title="Information we collect">
              <p>
                Novaris Technologies may collect information you voluntarily
                provide through this website, including your name, company,
                email address, phone number, project information, and other
                details submitted through our contact or project discovery
                forms.
              </p>
            </LegalSection>

            <LegalSection title="How we use information">
              <p>
                Information submitted through this website may be used to
                respond to inquiries, evaluate potential projects, communicate
                about Novaris services, provide requested information, and
                maintain the security and operation of the website.
              </p>
            </LegalSection>

            <LegalSection title="Service providers">
              <p>
                Novaris may use third-party service providers to operate this
                website and deliver related services, including website
                hosting, email delivery, security, analytics, and other
                infrastructure. These providers may process information as
                necessary to provide their services to Novaris.
              </p>
            </LegalSection>

            <LegalSection title="Cookies and analytics">
              <p>
                This website may use essential browser storage or cookies
                necessary for site functionality. If analytics or other
                non-essential tracking technologies are introduced, this
                policy will be updated to describe their use.
              </p>
            </LegalSection>

            <LegalSection title="Data retention">
              <p>
                Information is retained only for as long as reasonably
                necessary for the purposes for which it was collected,
                including responding to inquiries, maintaining business
                records, resolving disputes, and meeting applicable legal
                obligations.
              </p>
            </LegalSection>

            <LegalSection title="Data security">
              <p>
                Novaris uses reasonable administrative and technical measures
                intended to protect information submitted through this website.
                No method of transmission or electronic storage can be
                guaranteed to be completely secure.
              </p>
            </LegalSection>

            <LegalSection title="Your choices">
              <p>
                You may contact Novaris to ask questions about information you
                have submitted through this website or to request that
                information be corrected or deleted, subject to applicable
                legal and business-record requirements.
              </p>
            </LegalSection>

            <LegalSection title="Changes to this policy">
              <p>
                This Privacy Policy may be updated as the website, Novaris
                services, or applicable requirements change. The date above
                identifies the most recent revision.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                Questions about this Privacy Policy can be submitted through
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