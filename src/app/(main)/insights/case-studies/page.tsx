import type { Metadata } from "next";
import { USCtaSection } from "@/components/us/cta-section";
import {
  CaseStudiesGrid,
  type CaseStudy,
} from "@/components/us/insights/case-studies-grid";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "See how organizations around the world deliver measurable outcomes with Tally solutions. Filter by region, topic, and focus area.",
};

const heroMetrics: { value: string; suffix?: string; label: string }[] = [
  { value: "55", suffix: "+", label: "Global Customers" },
  { value: "4M", suffix: "+", label: "Meters" },
  { value: "XX", suffix: "%", label: "Customer Satisfaction" },
];

const caseStudies: CaseStudy[] = [
  {
    slug: "voltedge-retail",
    company: "VoltEdge Retail",
    title: "Scaling complex products without adding back-office headcount",
    region: "north-america",
    topic: "retail-energy",
    focus: "electricity",
    pills: ["North America", "Retail energy", "Electricity"],
    metrics: [
      "Launched time-of-use and green add-ons without growing billing headcount",
      "Single agent view of the customer across rates and programs",
      "Kept billing accuracy high while call volume stayed flat",
    ],
    quote:
      "Tally+ automated rate assembly so we could ship new products in weeks, not quarters—and our teams finally had one place to see what the customer was on the hook for.",
    attribution: {
      name: "Sarah Mitchell",
      role: "VP of Retail Operations",
      company: "VoltEdge Retail",
    },
    media: { kind: "video", tone: 1, icon: "bolt" },
    href: "/insights/case-studies/voltedge-retail",
  },
  {
    slug: "aquaworks",
    company: "AquaWorks",
    title: "Leading water utility transforms customer experience",
    region: "asia-pacific",
    topic: "billing-cx",
    focus: "water",
    pills: ["Australia", "CX", "Water"],
    metrics: [
      "1.3M households served",
      "45% reduction in call volume",
      "92% customer satisfaction",
    ],
    quote:
      "The new self-service portal has completely transformed how our customers interact with us. Support tickets dropped significantly.",
    attribution: {
      name: "James Chen",
      role: "VP of Customer Operations",
      company: "AquaWorks",
    },
    media: { kind: "image", tone: 2, icon: "water_drop" },
  },
  {
    slug: "metrogrid-japan",
    company: "MetroGrid Japan",
    title: "Faster market processes behind the meter",
    region: "asia-pacific",
    topic: "utility",
    focus: "electricity",
    pills: ["Japan", "Utility", "Electricity"],
    metrics: [
      "Aligned acquisition, metering, and settlement on one workflow",
      "C&I onboarding in days instead of weeks",
      "Audit-ready history across every handoff",
    ],
    quote:
      "We needed speed without sacrificing control. Tally+ gave us traceability from enrollment through settlement so regulators and our own teams could trust the numbers.",
    attribution: {
      name: "Yuki Tanaka",
      role: "Director of Market Operations",
      company: "MetroGrid Japan",
    },
    media: { kind: "video", tone: 3, icon: "hub" },
  },
  {
    slug: "desert-sun-power",
    company: "Desert Sun Power Co.",
    title: "Unified billing for bundled retail and DER programs",
    region: "middle-east",
    topic: "energy-transition",
    focus: "renewables",
    pills: ["Middle East", "Energy transition", "Renewables"],
    metrics: [
      "Rooftop solar, storage, and retail supply on one statement",
      "Customers self-served plan changes with fewer exceptions",
      "Operations tracked program performance in real time",
    ],
    quote:
      "Bundling DER with retail was the strategy; unified billing was the unlock. Our customers finally saw one bill that matched how they actually use energy.",
    attribution: {
      name: "Omar Al-Farsi",
      role: "Chief Customer Officer",
      company: "Desert Sun Power Co.",
    },
    media: { kind: "image", tone: 4, icon: "solar_power" },
  },
];

export default function USCaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[160px] lg:pb-[80px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[36px] lg:text-[56px] font-light leading-[1.1] tracking-[-0.025em] text-navy max-w-[26ch] m-0">
            Customer Success Stories
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            See how organizations across the globe achieve measurable results using our solutions.
          </p>

          <ul
            className="mt-[40px] grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[12px] list-none p-0 max-w-[860px]"
            aria-label="Key metrics"
          >
            {heroMetrics.map((m) => (
              <li
                key={m.label}
                className="bg-white border border-stroke1 rounded-2xl px-[24px] py-[20px] shadow-[0_2px_12px_rgba(44,54,93,0.04)]"
              >
                <div className="flex items-baseline gap-[2px]">
                  <span className="text-[36px] lg:text-[44px] font-light leading-none tracking-[-0.03em] text-navy tabular-nums">
                    {m.value}
                  </span>
                  {m.suffix && (
                    <span className="text-[22px] lg:text-[26px] font-light leading-none text-turquoise">
                      {m.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-[10px] text-[13px] font-medium text-fg2 m-0 leading-[1.5]">
                  {m.label}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Filterable grid */}
      <CaseStudiesGrid studies={caseStudies} />

      {/* Final CTA */}
      <USCtaSection
        eyebrow="Next steps"
        title="Let's talk about how Tally+ can support your business."
        description="Reach out about operational challenges, market strategy, or platform-adoption plans."
      />
    </>
  );
}
