import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { USCtaSection } from "@/components/us/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tally services from initial planning through implementation and ongoing optimization — implementation, integration, market expansion, product design, and growth strategies.",
};

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
      <span className="w-[18px] h-[1px] bg-turquoise inline-block" aria-hidden />
      {children}
    </div>
  );
}

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-stroke1 bg-bg2">
      <Image
        src={src}
        alt={alt}
        fill
        quality={95}
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover object-center"
      />
    </div>
  );
}

function CapabilityList({
  items,
  singleColumn = false,
}: {
  items: string[];
  singleColumn?: boolean;
}) {
  return (
    <ul
      className={`grid gap-x-6 gap-y-2 list-none m-0 p-0 mt-[24px] ${
        singleColumn ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="text-sm leading-[1.55] text-fg2 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-[6px] before:h-[6px] before:rounded-full before:bg-turquoise"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function StoryCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-bg2 rounded-xl p-[28px] flex flex-col gap-[14px] h-full">
      <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
        <span className="material-symbols-outlined text-[22px]">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-fg1 m-0">{title}</h3>
      <ul className="list-none m-0 p-0 flex flex-col gap-[10px]">
        {items.map((item) => (
          <li key={item} className="text-sm leading-[1.55] text-fg2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

type ServiceBlock = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
  altBg?: boolean;
  capabilities?: string[];
  capabilitiesSingleColumn?: boolean;
  regionCards?: { icon: string; title: string; items: string[] }[];
  growthColumns?: { icon: string; title: string; items: string[] }[];
};

const services: ServiceBlock[] = [
  {
    id: "svc-implementation",
    label: "Service 01",
    title: "Implementation",
    description:
      "We collaborate closely with your IT team and cross-functional stakeholders to develop a clear project plan\u2014and deliver results on time and within budget.",
    image: "/us/Implementation.jpg",
    imageAlt: "Implementation services",
    imageFirst: false,
    capabilities: [
      "Map cross-functional business processes to streamline operations",
      "Compliance & reporting requirements",
      "User roles & workflows",
      "Security models & setup",
      "Business rules & permission settings",
      "Data conversion & mapping",
      "Testing",
      "Training",
      "Ongoing optimization",
    ],
  },
  {
    id: "svc-integration",
    label: "Service 02",
    title: "Integration",
    description:
      "Use your system integrator or ours\u2014we work with you to ensure Tally solutions fit seamlessly into your other core systems.",
    image: "/us/Integration.jpg",
    imageAlt: "Integration services",
    imageFirst: true,
    altBg: true,
    capabilitiesSingleColumn: true,
    capabilities: [
      "Functional mapping with various systems to streamline processes",
      "Data sharing and/or integration between systems",
      "Business process mapping & integration",
      "Cloud integration",
      "API library development",
    ],
  },
  {
    id: "svc-market",
    label: "Service 03",
    title: "Market expansion planning",
    description:
      "Skipping Stone partners with you to research and assess opportunities and develop strong strategies supported by business cases\u2014in Japan or abroad. We have been engaged in the Japan energy markets for over ten years.",
    image: "/us/Market-Expansion.jpg",
    imageAlt: "Market expansion planning",
    imageFirst: false,
    regionCards: [
      {
        icon: "temple_buddhist",
        title: "Japan markets",
        items: [
          "Retail energy risk management",
          "Retail energy M&A",
          "Trading strategies & risk management",
          "Renewable markets",
          "BESS markets",
          "Demand response markets",
        ],
      },
      {
        icon: "public",
        title: "U.S. & international markets",
        items: [
          "Natural gas physical & financial markets",
          "Generation: gas-fired, renewables",
          "Retail & wholesale markets",
          "Energy management",
          "BESS",
          "Risk management",
          "M&A and investment support",
        ],
      },
    ],
  },
  {
    id: "svc-product",
    label: "Service 04",
    title: "Product & service design",
    description:
      "Skipping Stone assists with the full lifecycle of product and service design\u2014from strategy through launch.",
    image: "/us/Products-Services.jpg",
    imageAlt: "Product and service design",
    imageFirst: true,
    altBg: true,
    capabilitiesSingleColumn: true,
    capabilities: [
      "Strategy & segmentation analysis",
      "Detailed design & implementation planning",
      "Revenue stack analysis, including margin & profit assumptions",
      "Customer acquisition strategy",
      "Customer acceptance surveys",
      "Technology requirements",
    ],
  },
  {
    id: "svc-growth",
    label: "Service 05",
    title: "Growth strategies",
    description:
      "Skipping Stone works with you to assess buy, build, or partner options\u2014and supports you through execution regardless of which path you choose.",
    image: "/us/Growth.jpg",
    imageAlt: "Growth strategies",
    imageFirst: false,
    growthColumns: [
      {
        icon: "merge_type",
        title: "Buy",
        items: [
          "Sourcing companies or assets to acquire",
          "Due diligence support",
          "Deal structuring support",
          "Post-acquisition implementation planning",
        ],
      },
      {
        icon: "rocket_launch",
        title: "Build",
        items: [
          "New product or service offering",
          "Expansion into new markets",
          "Strategic & tactical planning",
          "Resource & technology requirements",
          "Launch support",
        ],
      },
      {
        icon: "handshake",
        title: "Partner",
        items: [
          "Develop partner criteria & success metrics",
          "Search & identify potential partners",
          "Facilitate deal discussions",
          "Develop go-to-market partnership plan",
        ],
      },
    ],
  },
];

function ServiceContent({ service }: { service: ServiceBlock }) {
  return (
    <div>
      <h2
        id={service.id}
        className="text-[30px] lg:text-[40px] font-light leading-[1.1] tracking-[-0.02em] text-navy m-0"
      >
        {service.title}
      </h2>
      <p className="mt-[16px] text-sm leading-[1.55] text-fg2 m-0 max-w-[52ch]">
        {service.description}
      </p>
      {service.capabilities && (
        <CapabilityList
          items={service.capabilities}
          singleColumn={service.capabilitiesSingleColumn}
        />
      )}
    </div>
  );
}

function ServiceSection({ service }: { service: ServiceBlock }) {
  return (
    <section
      className={`py-[96px] border-b border-stroke1 ${service.altBg ? "bg-bg2" : ""}`}
      aria-labelledby={service.id}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[72px] items-start">
          {service.imageFirst ? (
            <>
              <div className="order-first lg:order-none lg:sticky lg:top-[120px]">
                <ServiceImage src={service.image} alt={service.imageAlt} />
              </div>
              <ServiceContent service={service} />
            </>
          ) : (
            <>
              <ServiceContent service={service} />
              <div className="order-first lg:order-none lg:sticky lg:top-[120px]">
                <ServiceImage src={service.image} alt={service.imageAlt} />
              </div>
            </>
          )}
        </div>

        {service.regionCards && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[56px]">
            {service.regionCards.map((card) => (
              <StoryCard key={card.title} icon={card.icon} title={card.title} items={card.items} />
            ))}
          </div>
        )}

        {service.growthColumns && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[56px]">
            {service.growthColumns.map((col) => (
              <StoryCard key={col.title} icon={col.icon} title={col.title} items={col.items} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function USServicesPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <SectionEyebrow>Services</SectionEyebrow>
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy max-w-[20ch]">
            We go beyond technical services to support our clients
          </h1>
          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            Tally services assist you from initial planning through implementation and ongoing
            optimization. We partner with you and own outcomes&mdash;from implementation through
            integration, market expansion, design, and growth.
          </p>

          <div className="flex flex-wrap gap-3 mt-[32px]">
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all"
            >
              Book a demo
            </MarketingLink>
            <MarketingLink
              href="/#platform"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-navy border border-stroke1 hover:bg-bg3 transition-all"
            >
              Explore our platform
            </MarketingLink>
          </div>
        </div>
      </section>

      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      <USCtaSection />
    </>
  );
}
