import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { num: "700", unit: "k+", label: "Customers billed on a single platform" },
  { num: "$15", unit: "B+", label: "Billed annually across our platforms" },
  { num: "99.9", unit: "%", label: "Platform uptime, cloud-native and scalable" },
  { num: "30", unit: "%", label: "Lower cost to serve through automation" },
];

const faqs = [
  {
    question: "What types of utilities and customers can Tally Billing support?",
    answer:
      "Tally Billing supports electricity, gas and emerging energy services across residential, commercial and industrial customers. Its configurable product and tariff model also supports multi-site accounts, embedded networks and distributed energy resources.",
  },
  {
    question: "Can Tally Billing integrate with our existing systems?",
    answer:
      "Yes. Tally Billing is API-first and designed to integrate with CRM, finance, metering, market, payment and digital-channel systems. Tally works with your team to define the integration approach that best fits your existing architecture.",
  },
  {
    question: "How does the platform handle complex tariffs?",
    answer:
      "The platform supports time-of-use, indexed, pass-through and other complex tariff structures. Product and pricing rules are configurable, helping teams launch and manage offers without relying on lengthy custom development.",
  },
  {
    question: "Is Tally Billing suitable for large-scale operations?",
    answer:
      "Yes. The cloud-native platform is built to scale across large customer and meter portfolios while maintaining performance, resilience and operational visibility.",
  },
  {
    question: "How does Tally Billing support compliance and revenue assurance?",
    answer:
      "Built-in controls, exception workflows, reporting and reconciliation provide clear lineage from usage through invoice and settlement. This helps teams identify anomalies early, reduce leakage and meet market obligations.",
  },
  {
    question: "What does implementation involve?",
    answer:
      "Implementation is tailored to your operating model and typically covers discovery, configuration, integration, data migration, testing, training and go-live support. Tally's utility specialists work alongside your team throughout delivery.",
  },
];

const keyFeatures = [
  "Advanced Data Management",
  "Compliance & Reporting",
  "Credit Management",
  "Data Migration",
  "Tariff Optimisation",
  "Fast, cost-effective innovation",
  "Payments",
  "New Energy Innovation",
  "Billing",
  "Customer Management",
  "Service Management",
  "Market Compliance",
];

const businessFeatures = [
  {
    title: "Bill anything, accurately",
    description:
      "A single multi-utility platform that handles even the most complex tariffs and market rules.",
    bullets: [
      "Bill C&I, residential, ENOs and distributed energy resources from one place.",
      "Support indexed, time-of-use and pass-through structures out of the box.",
      "Prepare offers and generate contracts for complex, multi-site deals.",
    ],
    image: "/dashboard-mockup.png",
  },
  {
    title: "Lower cost to serve",
    description:
      "Automation across the billing lifecycle keeps your operations lean as you scale.",
    bullets: [
      "Simplify and automate exception management for a zero-touch future.",
      "Reduce manual effort with an intuitive customer management layer.",
      "Deploy a cloud-native data lake for analytics, ML and BI.",
    ],
    image: "/hero-product.png",
  },
  {
    title: "Stay compliant and audit-ready",
    description:
      "Confidence that every invoice is correct, compliant and reconciled.",
    bullets: [
      "Fully compliant with energy market rules and reporting obligations.",
      "Revenue assurance with real-time views that prevent leakage.",
      "Consistent lineage from usage through invoice and settlement.",
    ],
    image: "/dashboard-mockup.png",
  },
];

const detailFeatures = [
  {
    icon: "description",
    title: "Quote to Contract",
    description:
      "Prepare energy offers and generate contracts for complex C&I and multi-site deals, automatically triggering transfers and onboarding.",
  },
  {
    icon: "receipt_long",
    title: "Utility Billing",
    description:
      "This multi-utility platform can be used for C&I, residential, ENOs and distributed energy resources.",
  },
  {
    icon: "groups",
    title: "Customer Management",
    description:
      "Simplify the operations experience with Tally Billing\u2019s intuitive customer management layer.",
  },
  {
    icon: "rule",
    title: "Exception Management",
    description:
      "Automation and simplifying exception management makes a zero-touch future possible.",
  },
  {
    icon: "database",
    title: "Data Lake",
    description:
      "Quickly deploy our fully cloud based data lake to provide a platform for advanced analytics, machine learning and business intelligence.",
  },
  {
    icon: "monitoring",
    title: "Analytics",
    description:
      "As experts in leveraging and analysing utility data, we\u2019ve developed complex models for tariffs, churn, exceptions and new energy solutions.",
  },
  {
    icon: "tune",
    title: "Tariff Optimisation",
    description:
      "Run ongoing bulk or one-off simulations to calculate your customers\u2019 best combination of network and retail tariffs.",
  },
  {
    icon: "bolt",
    title: "New Energy Innovation",
    description:
      "Our ability to bill any complex tariff structures means we\u2019re supporting grid transformation and the move to a cleaner future.",
  },
  {
    icon: "payments",
    title: "Revenue Assurance",
    description:
      "Bill reconciliation capability with real-time views of potential issues prevents revenue leakage.",
  },
  {
    icon: "verified_user",
    title: "Market Compliance",
    description:
      "Our platform is designed to be fully compliant with the energy market.",
  },
];

const platforms = [
  { name: "Tally Billing", src: "/products/platforms/tallybilling.png", width: 329, height: 69 },
  { name: "ORION", src: "/products/platforms/orion.png", width: 388, height: 68 },
  { name: "Engage", src: "/products/platforms/engage.png", width: 240, height: 92 },
  { name: "EOS", src: "/products/platforms/eos.png", width: 332, height: 98 },
];

function SectionEyebrow({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "invert";
}) {
  return (
    <div
      className={`text-xs font-medium uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2 ${
        tone === "invert" ? "text-turquoise" : "text-fg2"
      }`}
    >
      <span className="w-[18px] h-[1px] bg-turquoise inline-block" aria-hidden />
      {children}
    </div>
  );
}

export function ProductPageOne() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[160px] lg:pb-[72px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(0,210,162,0.07), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8 text-center">
          <Image
            src="/logos/TallyBilling.svg"
            alt="Tally Billing"
            width={180}
            height={38}
            className="mx-auto h-9 w-auto"
            priority
          />
          <h1 className="mt-8 text-[40px] lg:text-[60px] font-semibold leading-[1.1] tracking-[-0.03em] text-navy m-0">
            New innovation
          </h1>
          <p className="mx-auto mt-5 max-w-[56ch] text-[17px] lg:text-[19px] leading-[1.7] text-fg2 m-0">
            Our multi-utility SaaS-based billing platform is flexible, quick to
            deploy and infinitely scalable.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
            >
              Request a demo
              <span className="material-symbols-outlined text-[16px]" aria-hidden>
                arrow_forward
              </span>
            </MarketingLink>
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold text-navy border border-stroke1 bg-white hover:bg-bg3 transition-all"
            >
              Talk to sales
            </MarketingLink>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1080px] px-8">
          <div className="overflow-hidden rounded-t-2xl bg-white shadow-[0_24px_60px_rgba(24,27,37,0.12)]">
            <Image
              src="/products/energyco-billing-demo.jpg"
              alt="Tally Billing product interface"
              width={1024}
              height={456}
              className="h-auto w-full block"
              priority
            />
          </div>
        </div>
      </section>

      {/* Performance results */}
      <section className="bg-white py-[80px] lg:py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[760px]">
            <SectionEyebrow>Performance results</SectionEyebrow>
            <h2 className="text-[30px] lg:text-[40px] font-semibold leading-[1.25] tracking-[-0.02em] text-navy m-0">
              Proven at scale.
            </h2>
          </div>
          <div className="mt-[40px] grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg2 rounded-2xl px-[28px] py-[36px] lg:py-[44px]"
              >
                <div className="text-[44px] lg:text-[52px] font-normal tracking-[-0.03em] leading-none tabular-nums text-navy">
                  {stat.num}
                  <span className="text-turquoise">{stat.unit}</span>
                </div>
                <p className="mt-[16px] text-[14px] leading-[1.5] text-fg2 m-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business value - alternating feature rows */}
      <section className="bg-bg2 py-[80px] lg:py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-[30px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.02em] text-navy m-0">
              How will Tally Billing be good for your business?
            </h2>
            <p className="mt-[16px] text-[17px] leading-[1.7] text-fg2 m-0">
              A billing platform built to scale with your operation.
            </p>
          </div>

          <div className="mt-[64px] flex flex-col gap-[56px] lg:gap-[88px]">
            {businessFeatures.map((feature, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <div
                  key={feature.title}
                  className="grid grid-cols-1 items-center gap-[32px] lg:grid-cols-2 lg:gap-[64px]"
                >
                  <div className={imageFirst ? "lg:order-2" : ""}>
                    <h3 className="text-[24px] lg:text-[28px] font-semibold leading-[1.25] tracking-[-0.01em] text-navy m-0">
                      {feature.title}
                    </h3>
                    <p className="mt-[12px] text-[15px] leading-[1.75] text-fg2 m-0">
                      {feature.description}
                    </p>
                    <ul className="mt-[24px] flex flex-col gap-[14px]">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turquoise/15 text-turquoise">
                            <span
                              className="material-symbols-outlined text-[14px]"
                              aria-hidden
                            >
                              check
                            </span>
                          </span>
                          <span className="text-[15px] leading-[1.6] text-fg1">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={imageFirst ? "lg:order-1" : ""}>
                    <div className="overflow-hidden rounded-2xl border border-stroke1 bg-white shadow-[0_20px_50px_rgba(24,27,37,0.10)]">
                      <div className="flex items-center gap-1.5 border-b border-stroke1 bg-bg2 px-4 py-2.5">
                        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
                      </div>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={1024}
                        height={670}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key features checklist */}
      <section className="bg-white py-[80px] lg:py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-20 lg:items-start">
          <div className="max-w-[360px]">
            <SectionEyebrow>Key features</SectionEyebrow>
            <h2 className="text-[30px] lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-navy m-0">
              Everything you need to bill with confidence.
            </h2>
            <p className="mt-[16px] text-[15px] leading-[1.75] text-fg2 m-0">
              One platform to manage the full billing lifecycle &mdash; from
              onboarding and tariffs through to compliance and revenue assurance.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {keyFeatures.map((label) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/15 text-turquoise">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden>
                    check
                  </span>
                </span>
                <span className="text-[15px] leading-snug text-fg1">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Detailed feature descriptions */}
      <section className="bg-bg2 py-[80px] lg:py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[760px]">
            <SectionEyebrow>Platform capabilities</SectionEyebrow>
            <h2 className="text-[30px] lg:text-[40px] font-semibold leading-[1.25] tracking-[-0.02em] text-navy m-0">
              A complete billing platform.
            </h2>
            <p className="mt-[16px] text-[15px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
              Fast, cost-effective innovation across every part of your billing
              and customer operations.
            </p>
          </div>
          <div className="mt-[40px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {detailFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-stroke1 rounded-xl p-[28px] flex flex-col gap-[14px] h-full"
              >
                <div className="w-10 h-10 rounded-[10px] bg-bg2 grid place-items-center text-navy">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-[19px] font-semibold leading-[1.4] tracking-[-0.01em] text-fg1 m-0">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-fg2 m-0">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="px-4 sm:px-6 py-[40px] lg:py-[56px] bg-white border-b border-stroke1">
        <div
          className="relative overflow-hidden mx-auto max-w-[1240px] rounded-3xl"
          style={{
            background:
              "linear-gradient(110deg, #0A1020 0%, #141B30 45%, #1E2840 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -right-[120px] -top-[120px] w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,210,162,0.20), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
            <div className="px-8 pt-12 pb-4 sm:px-12 lg:py-14">
              <Image
                src="/logos/TallyPlus_Reversed.svg"
                alt="Tally+"
                width={130}
                height={25}
                className="h-[26px] w-auto"
              />
              <h2 className="mt-6 text-[30px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-white m-0">
                Your billing shouldn&apos;t slow you down
              </h2>
              <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.7] text-white/70 m-0">
                Launch new tariffs and products in weeks, not quarters. See how
                Tally Billing scales with your operation.
              </p>
              <div className="mt-8">
                <MarketingLink
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-white text-navy border border-white hover:bg-white/90 transition-all shadow-sm"
                >
                  Get started
                  <span
                    className="material-symbols-outlined text-[16px]"
                    aria-hidden
                  >
                    arrow_forward
                  </span>
                </MarketingLink>
              </div>
            </div>
            <div className="relative px-8 pb-10 sm:px-12 lg:py-14 lg:pl-0">
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <Image
                  src="/dashboard-mockup.png"
                  alt="Tally Billing dashboard"
                  width={1024}
                  height={670}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing platforms */}
      <section className="bg-white py-[64px] lg:py-[80px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-fg2">
            Our billing platforms
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
            {platforms.map((platform) => (
              <Image
                key={platform.name}
                src={platform.src}
                alt={platform.name}
                width={platform.width}
                height={platform.height}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Powered by Adora */}
      <section className="px-4 sm:px-6 py-[40px] lg:py-[56px] bg-white border-b border-stroke1">
        <div
          className="relative overflow-hidden mx-auto max-w-[1240px] rounded-3xl border border-white/10 px-8 py-[56px] sm:px-12 lg:px-16 lg:py-[80px]"
          style={{
            background:
              "linear-gradient(180deg, #1E2840 0%, #141B30 55%, #0A1020 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -right-[160px] -top-[160px] w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(254,94,1,0.18), transparent 60%)",
            }}
          />
          <div className="relative max-w-[760px] mx-auto text-center">
            <Image
              src="/brand/Adora.svg"
              alt="Adora"
              width={227}
              height={101}
              className="mx-auto h-[36px] w-auto"
            />
            <div className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-[#FE5E01] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-[#FE5E01] inline-block" aria-hidden />
              Powered by Adora AI
            </div>
            <h2 className="mt-3 text-[30px] lg:text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white m-0">
              Intelligent billing, grounded in your data.
            </h2>
            <p className="mt-4 max-w-[56ch] mx-auto text-[16px] lg:text-[18px] leading-[1.7] text-white/70 m-0">
              Tally Adora AI surfaces account summaries, next-best-actions and
              anomaly detection &mdash; drawn from real data across your billing
              operation, never hallucinated.
            </p>
            <div className="mt-8 flex justify-center">
              <MarketingLink
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-[#FE5E01] text-white border border-[#FE5E01] hover:bg-[#e05401] hover:border-[#e05401] transition-all shadow-sm"
              >
                Discover Adora
                <span className="material-symbols-outlined text-[16px]" aria-hidden>
                  arrow_forward
                </span>
              </MarketingLink>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-[80px] lg:py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-stroke1 lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[440px]">
              <Image
                src="/hero-bg1.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/50" />
              <p className="absolute bottom-7 left-7 text-[26px] font-semibold tracking-wide text-white">
                VOCUS
              </p>
            </div>
            <div className="flex flex-col justify-center bg-bg2 px-8 py-12 sm:px-12 lg:px-14 lg:py-16">
              <span
                aria-hidden
                className="material-symbols-outlined text-[40px] text-turquoise"
              >
                format_quote
              </span>
              <blockquote className="mt-3 text-[22px] lg:text-[26px] font-light leading-[1.4] tracking-[-0.01em] text-navy m-0">
                The team immediately mobilised additional resources and oversight
                to remediate a complex operational billing challenge with minimal
                business and customer impact.
              </blockquote>
              <div className="mt-8">
                <p className="text-[15px] font-semibold text-fg1 m-0">
                  Stuart Rainsford
                </p>
                <p className="mt-1 text-[14px] text-fg2 m-0">
                  GM Energy, VOCUS GROUP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg2 py-[80px] lg:py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-[96px]">
            <div>
              <SectionEyebrow>Frequently asked questions</SectionEyebrow>
              <h2 className="text-[30px] lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-navy m-0">
                Questions about Tally Billing?
              </h2>
              <p className="mt-[16px] text-[15px] leading-[1.75] text-fg2 m-0">
                Learn how the platform fits into your utility operation, or speak
                with our team about your specific requirements.
              </p>
              <MarketingLink
                href="/contact"
                className="mt-[24px] inline-flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-turquoise transition-colors"
              >
                Ask us a question
                <span className="material-symbols-outlined text-[16px]" aria-hidden>
                  arrow_forward
                </span>
              </MarketingLink>
            </div>

            <Accordion defaultValue={["faq-0"]} className="gap-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="rounded-xl border border-stroke1 bg-white px-5 sm:px-6 not-last:border-b"
                >
                  <AccordionTrigger className="py-5 text-[16px] font-semibold leading-[1.45] text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-8">
                    <p className="m-0 text-[14px] leading-[1.75] text-fg2">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 py-[24px] sm:py-[32px]">
        <div className="relative overflow-hidden mx-auto max-w-[1680px] rounded-3xl bg-navy-dark text-white px-[24px] py-[64px] sm:px-[48px] sm:py-[80px] lg:px-[96px] lg:py-[112px]">
          <div
            aria-hidden
            className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
            }}
          />
          <div className="relative max-w-[1240px] mx-auto text-center">
            <h2 className="text-[30px] lg:text-[48px] font-semibold leading-[1.25] tracking-[-0.02em] text-white max-w-[24ch] mx-auto m-0">
              Discover what Tally Billing can do for your business.
            </h2>
            <p className="mt-[16px] text-lg text-white/75 max-w-[52ch] mx-auto leading-[1.7]">
              See how a flexible, scalable billing platform can lower your cost to
              serve and accelerate innovation.
            </p>
            <div className="mt-[32px] flex flex-wrap items-center justify-center gap-3">
              <MarketingLink
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
              >
                Request a demo
                <span className="material-symbols-outlined text-[16px]" aria-hidden>
                  arrow_forward
                </span>
              </MarketingLink>
              <MarketingLink
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-all"
              >
                Get in touch
              </MarketingLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
