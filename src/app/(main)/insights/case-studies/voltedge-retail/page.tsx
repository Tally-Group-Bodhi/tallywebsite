import type { Metadata } from "next";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { USCtaSection } from "@/components/us/cta-section";

export const metadata: Metadata = {
  title: "VoltEdge Retail (North America) | Case study",
  description:
    "In a highly competitive North American power retail market, VoltEdge launched time-of-use plans and green riders while maintaining billing accuracy and avoiding a surge in support volume.",
};

const pills = ["North America", "Retail energy", "Electricity"];

const solutionBullets = [
  "Rule-driven pricing and riders eliminated pre-bill spreadsheet checks.",
  "Agents work in the same ledger as customers, cutting handle time on complex inquiries.",
  "An audit trail across changes simplifies regulator and internal reviews.",
];

const metrics: { value: string; label: string }[] = [
  {
    value: "XX%",
    label: "Example: faster time to market (figure to be confirmed)",
  },
  {
    value: "X.XM+",
    label: "Example: customer accounts served (figure to be confirmed)",
  },
  {
    value: "XX%",
    label: "Example: reduction in billing exceptions (figure to be confirmed)",
  },
];

const VIDEO_GRADIENT =
  "linear-gradient(135deg, #1E2840 0%, #2C365D 55%, #0B7A66 100%)";
const VIDEO_PATTERN =
  "radial-gradient(circle at 85% 20%, rgba(0,210,162,0.35), transparent 55%)";

function ArticleHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-[56px] mb-[20px] text-[24px] lg:text-[28px] font-semibold leading-[1.3] tracking-[-0.01em] text-navy first:mt-0"
    >
      {children}
    </h2>
  );
}

export default function VoltedgeRetailCaseStudyPage() {
  return (
    <>
      {/* Hero zone (back nav + hero share the same gradient) */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        {/* Back nav */}
        <div className="pt-[112px] lg:pt-[140px] pb-[12px] lg:pb-[16px]">
          <div className="max-w-[1240px] mx-auto px-8">
            <MarketingLink
              href="/insights/case-studies"
              className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              Back to all case studies
            </MarketingLink>
          </div>
        </div>

        {/* Hero */}
        <section className="relative pt-[24px] pb-[56px] lg:pt-[32px] lg:pb-[80px]">
          <div className="max-w-[1240px] mx-auto px-8">
          <ul
            aria-label="Region, topic and focus tags"
            className="flex flex-wrap gap-[8px] list-none p-0 m-0 mb-[24px]"
          >
            {pills.map((pill) => (
              <li
                key={pill}
                className="inline-flex items-center px-[12px] py-[6px] rounded-full text-[12px] font-semibold tracking-[0.04em] text-navy bg-white border border-stroke1"
              >
                {pill}
              </li>
            ))}
          </ul>

          <h1 className="text-[34px] lg:text-[52px] font-light leading-[1.15] tracking-[-0.025em] text-navy max-w-[24ch] m-0">
            Scaling a complex product line without growing the back office
          </h1>

          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            In a highly competitive North American power retail market, VoltEdge launched time-of-use plans and green riders while maintaining billing accuracy and avoiding a surge in support volume.
          </p>

          <ul
            aria-label="Key metrics"
            className="mt-[40px] grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[12px] list-none p-0 max-w-[920px]"
          >
            {metrics.map((m) => {
              const numeric = m.value.replace(/[%+]+$/, "");
              const suffix = m.value.match(/[%+]+$/)?.[0] ?? "";
              return (
                <li
                  key={m.label}
                  className="bg-white border border-stroke1 rounded-2xl px-[24px] py-[20px] shadow-[0_2px_12px_rgba(44,54,93,0.04)]"
                >
                  <div className="flex items-baseline gap-[2px]">
                    <span className="text-[36px] lg:text-[44px] font-light leading-none tracking-[-0.03em] text-navy tabular-nums">
                      {numeric}
                    </span>
                    {suffix && (
                      <span className="text-[22px] lg:text-[26px] font-light leading-none text-turquoise">
                        {suffix}
                      </span>
                    )}
                  </div>
                  <p className="mt-[10px] text-[13px] font-medium text-fg2 m-0 leading-[1.5]">
                    {m.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      </div>

      {/* Article */}
      <article
        className="bg-bg2 pt-[40px] pb-[80px] lg:pt-[48px] lg:pb-[96px]"
        aria-labelledby="cs-detail-title"
      >
        <div className="max-w-[820px] mx-auto px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-fg2 m-0">
            VoltEdge Retail
          </p>

          <h2 id="cs-detail-title" className="sr-only">
            Scaling a complex product line without growing the back office
          </h2>

          {/* Testimonial */}
          <aside
            aria-label="Customer testimonial"
            className="mt-[28px] bg-turquoise/10 rounded-2xl p-[28px] lg:p-[32px]"
          >
            <span
              className="material-symbols-outlined text-[32px] text-turquoise"
              aria-hidden
            >
              format_quote
            </span>
            <blockquote className="mt-[8px] m-0 text-[18px] lg:text-[20px] font-medium italic leading-[1.55] text-navy">
              Tally+ automated our rate assembly, so we could ship new products in weeks instead of quarters — and the team finally has one place to see what each customer is on.
            </blockquote>
            <p className="mt-[20px] text-[13.5px] leading-[1.5] text-fg2 m-0">
              <strong className="font-semibold text-fg1">
                Sarah Mitchell
              </strong>
              , VP of Retail Operations, VoltEdge Retail
            </p>
          </aside>

          {/* Prose sections */}
          <div className="mt-[56px]">
            <ArticleHeading id="challenge">The challenge</ArticleHeading>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[1.75] text-fg1 m-0">
                VoltEdge needed to differentiate in a crowded market with time-of-use (TOU) rate structures and optional green products — but didn&apos;t want billing operations to swell or push exceptions into the contact center.
              </p>
              <p className="text-[16px] leading-[1.75] text-fg1 m-0">
                Legacy spreadsheets and ad-hoc workarounds couldn&apos;t keep pace with marketing, and every new rider added risk of billing exceptions and customer frustration.
              </p>
            </div>

            <ArticleHeading id="solution">The solution</ArticleHeading>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[1.75] text-fg1 m-0">
                Tally+ automated rate assembly and product rules, letting new offers be configured and released to retail&apos;s tight schedules. Customer service and the back office now work from one consistent view of enrollment, riders, and pricing.
              </p>
              <p className="text-[16px] leading-[1.75] text-fg1 m-0">
                Implementation focused on reusable configuration patterns — not bespoke development — so operations could own day-to-day changes under proper governance.
              </p>
            </div>

            <ul className="mt-[24px] flex flex-col gap-[12px] list-none p-0 m-0">
              {solutionBullets.map((item) => (
                <li
                  key={item}
                  className="pl-[28px] relative text-[15.5px] leading-[1.6] text-fg2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-[10px] before:h-[10px] before:rounded-full before:border-[2px] before:border-turquoise before:bg-turquoise/30"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ArticleHeading id="results">Measurable results</ArticleHeading>
            <p className="text-[16px] leading-[1.75] text-fg1 m-0">
              VoltEdge launched multiple riders without adding billing staff, and held call volume flat as the product mix grew. There was no spike in billing complaints during rollout, and accuracy held at a high standard throughout.
            </p>

            <ArticleHeading id="video">Video</ArticleHeading>
            <button
              type="button"
              aria-label="Play video: Sarah Mitchell on the VoltEdge transformation (placeholder)"
              className="group relative w-full aspect-video overflow-hidden rounded-2xl border border-stroke1 focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 transition-shadow hover:shadow-[0_16px_48px_rgba(44,54,93,0.18)]"
              style={{ background: VIDEO_GRADIENT }}
            >
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: VIDEO_PATTERN }}
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid place-items-center w-[72px] h-[72px] rounded-full bg-white/95 text-navy shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-105">
                  <span
                    className="material-symbols-outlined text-[36px] translate-x-[2px]"
                    aria-hidden
                  >
                    play_arrow
                  </span>
                </span>
              </span>
              <span className="absolute top-[14px] left-[14px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/45 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
                <span
                  className="material-symbols-outlined text-[14px]"
                  aria-hidden
                >
                  play_circle
                </span>
                Video
              </span>
            </button>
            <p className="mt-[16px] text-center text-[14px] leading-[1.6] text-fg2 m-0">
              Video: Sarah Mitchell, VP of Retail Operations at VoltEdge Retail, walks through the transformation.
            </p>
          </div>

          <div className="mt-[64px] pt-[40px] border-t border-stroke1 flex flex-wrap items-center justify-between gap-[16px]">
            <MarketingLink
              href="/insights/case-studies"
              className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              Back to all case studies
            </MarketingLink>
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
            >
              Book a demo
            </MarketingLink>
          </div>
        </div>
      </article>

      {/* Final CTA */}
      <USCtaSection
        eyebrow="Next steps"
        title="Let's talk about how Tally+ can support your business."
        description="Reach out about operational challenges, market strategy, or platform-adoption plans."
      />
    </>
  );
}
