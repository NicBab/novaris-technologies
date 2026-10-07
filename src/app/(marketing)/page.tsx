import type { Metadata } from "next";
import { WebsiteJsonLd } from "@/components/seo/WebsiteJsonLd";
import { AiSection } from "@/components/home/AiSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SoftwareSection } from "@/components/home/SoftwareSection";
import { TechnologyPartnerSection } from "@/components/home/TechnologyPartnerSection";
import { Hero } from "@/components/marketing/Hero";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { WhyNovarisSection } from "@/components/home/WhyNovarisSection";
import { ConceptWorkSection } from "@/components/home/ConceptWorkSection";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata: Metadata = {
  title: "Novaris Technologies — Software, Automation & AI Engineering",
  description:
    "Novaris Technologies builds custom software, SaaS platforms, AI integrations, automation, and connected technology engineered around real business operations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Novaris Technologies — Technology Engineered Around Your Business",
    description:
      "Custom software, SaaS platforms, AI integrations, automation, infrastructure, and connected technology built around real operations.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novaris Technologies — Technology Engineered Around Your Business",
    description:
      "Custom software, SaaS platforms, AI integrations, automation, infrastructure, and connected technology built around real operations.",
  },
};

export default function HomePage() {
  return (
<>
<WebsiteJsonLd />
  <Hero />
  <TechnologyPartnerSection />
  <SoftwareSection />
  <ServicesSection />
  <AiSection />
  <ProcessSection />
  <TechnologySection />
  <SolutionsSection />
  <WhyNovarisSection />
  <ConceptWorkSection />
  <FinalCTA />
</>
  );
}