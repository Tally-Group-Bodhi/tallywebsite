import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductFeatures } from "@/components/sections/product-features";
import { ProductCTA } from "@/components/sections/product-cta";
import { LayoutTemplate, Layers, Sparkles, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Template",
  description:
    "A reusable product page template for Australia. Replace this copy with product-specific content.",
};

const features = [
  {
    icon: LayoutTemplate,
    title: "Page structure",
    description:
      "Hero, feature grid, and CTA sections that match the rest of the Australia product pages.",
  },
  {
    icon: Layers,
    title: "Content blocks",
    description:
      "Swap these placeholders for real capabilities, benefits, and supporting detail.",
  },
  {
    icon: Sparkles,
    title: "Key highlights",
    description:
      "Use the hero feature chips to surface the most important product outcomes at a glance.",
  },
  {
    icon: Settings2,
    title: "Easy to extend",
    description:
      "Add testimonials, diagrams, or extra sections using the same shared product components.",
  },
];

const heroFeatures = [
  "Hero section",
  "Feature grid",
  "Call to action",
  "Shared components",
];

export default function TemplatePage() {
  return (
    <>
      <ProductHero
        title="Template"
        subtitle="A starter product page for Australia. Replace this copy, features, and CTA with the product you want to publish."
        features={heroFeatures}
      />

      <ProductFeatures
        badge="Product template"
        title="Build from this layout"
        features={features}
      />

      <ProductCTA productName="Template" />
    </>
  );
}
