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

export default function HomePage() {
  return (
<>
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