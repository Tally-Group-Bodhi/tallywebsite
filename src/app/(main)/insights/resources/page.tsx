import type { Metadata } from "next";
import { USCtaSection } from "@/components/us/cta-section";
import {
  ResourcesGrid,
  type Resource,
} from "@/components/us/insights/resources-grid";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Research, expert sessions, and other resources to help you understand how Tally solutions support modern energy retail.",
};

const resources: Resource[] = [
  {
    kind: "webinar",
    title: "Retail Energy in 2026: Product Velocity and Risk",
    date: "March 18, 2026",
    dateISO: "2026-03-18",
    duration: "45 min",
    description:
      "A panel on launching offers faster while keeping pricing, credit, and regulatory alignment under control.",
    speaker: "Jordan Ellis",
    role: "VP, Retail Solutions",
    tone: 1,
    href: "#",
  },
  {
    kind: "webinar",
    title: "From AMI to Actionable Insights",
    date: "February 4, 2026",
    dateISO: "2026-02-04",
    duration: "38 min",
    description:
      "How utilities turn interval data into programs customers actually enroll in and stay engaged with.",
    speaker: "Dr. Priya Nandakumar",
    role: "Director of Grid Analytics",
    tone: 2,
    href: "#",
  },
  {
    kind: "webinar",
    title: "BESS and Retail: Bridging Markets",
    date: "January 22, 2026",
    dateISO: "2026-01-22",
    duration: "52 min",
    description:
      "Contract structures, telemetry, and settlement considerations when storage meets retail portfolios.",
    speaker: "Marcus Chen",
    role: "Principal, Energy Markets",
    tone: 3,
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "The Future of Retail Energy Platforms",
    description:
      "How modern billing and customer systems scale with complex tariffs, products, and market rules.",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "AI and the Utility Technology Stack",
    description:
      "Practical patterns for connecting AI assistants to operations without compromising security or auditability.",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "Net-Zero Roadmaps for C&I Retailers",
    description:
      "Translating sustainability goals into product portfolios, reporting, and customer programs.",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "Demand Response: A Technical Primer",
    description:
      "Signals, settlements, and customer touchpoints that make DR programs reliable at scale.",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "Customer Experience in Regulated Markets",
    description:
      "Balancing compliance, communications, and digital self-service across channels.",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "Data Security for Cloud Billing",
    description:
      "Controls, monitoring, and vendor practices teams should expect from a cloud-native CIS partner.",
    href: "#",
  },
];

export default function USResourcesPage() {
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
            Resources
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            Deep dives, research reports, and expert-led sessions to help you understand solutions for energy-related business.
          </p>
        </div>
      </section>

      {/* Filterable grid */}
      <ResourcesGrid resources={resources} />

      {/* Final CTA */}
      <USCtaSection
        eyebrow="Next steps"
        title="Let's talk about how Tally+ can support your business."
        description="Reach out about operational challenges, market strategy, or platform-adoption plans."
      />
    </>
  );
}
