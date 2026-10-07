import { EcosystemDiagram } from "@/components/marketing/EcosystemDiagram";
import {
  Section,
  SectionHeading,
} from "@/components/marketing/Section";
import { ProductCard } from "@/components/marketing/ProductCard";
import { products } from "@/data/products";

export function SoftwareSection() {
  return (
    <Section
      id="software"
      className="border-y border-border bg-surface/40"
    >
      <SectionHeading
        eyebrow="Novaris Software"
        title="Built by Novaris."
        sub="Purpose-built software for industries still relying on fragmented tools, paperwork, and outdated workflows."
      />

      <div className="mt-14 space-y-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            index={index}
          />
        ))}
      </div>

      <div className="mt-24">
        <EcosystemDiagram />
      </div>
    </Section>
  );
}