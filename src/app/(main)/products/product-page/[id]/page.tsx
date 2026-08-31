import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductFeatures } from "@/components/sections/product-features";
import { ProductCTA } from "@/components/sections/product-cta";
import { ProductPageOne } from "@/components/products/product-page-one";
import { LayoutTemplate, Layers, Sparkles, Settings2 } from "lucide-react";

const PRODUCT_PAGE_IDS = ["1", "2", "3", "4", "5"] as const;

type ProductPageId = (typeof PRODUCT_PAGE_IDS)[number];

function isProductPageId(value: string): value is ProductPageId {
  return (PRODUCT_PAGE_IDS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return PRODUCT_PAGE_IDS.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  if (!isProductPageId(id)) {
    return { title: "Product page" };
  }

  if (id === "1") {
    return {
      title: "Tally Billing",
      description:
        "Our multi-utility SaaS-based billing platform is flexible, quick to deploy and infinitely scalable.",
    };
  }

  return {
    title: `Product page ${id}`,
    description: `Placeholder Australia product page ${id}. Replace this copy with product-specific content.`,
  };
}

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

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!isProductPageId(id)) notFound();

  if (id === "1") {
    return <ProductPageOne />;
  }

  const title = `Product page ${id}`;

  return (
    <>
      <ProductHero
        title={title}
        subtitle={`A starter product page for Australia (page ${id}). Replace this copy, features, and CTA with the product you want to publish.`}
        features={heroFeatures}
      />

      <ProductFeatures
        badge="Product template"
        title="Build from this layout"
        features={features}
      />

      <ProductCTA productName={title} />
    </>
  );
}
