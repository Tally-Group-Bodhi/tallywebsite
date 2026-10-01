import type { ReactNode } from "react";
import { MarketingLink } from "@/components/marketing/marketing-link";

type USCtaSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function USCtaSection({
  eyebrow,
  title = "Ready to discuss your roadmap?",
  description = "Whether you're entering a new market or optimizing operations, our team can help you define the right path forward.",
  primaryHref = "/contact",
  primaryLabel = "Book a demo",
  secondaryHref = "/contact",
  secondaryLabel = "Get in touch",
  className = "px-4 sm:px-6 py-[24px] sm:py-[32px]",
}: USCtaSectionProps = {}) {
  return (
    <section className={className}>
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
          {eyebrow && (
            <div className="text-xs font-medium text-turquoise uppercase tracking-[0.12em] mb-[16px] inline-flex items-center gap-2">
              <span
                className="w-[18px] h-[1px] bg-turquoise inline-block"
                aria-hidden
              />
              {eyebrow}
            </div>
          )}
          <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.25] tracking-[-0.02em] text-white max-w-[28ch] mx-auto m-0">
            {title}
          </h2>
          {description && (
            <p className="mt-[16px] text-lg text-white/75 max-w-[52ch] mx-auto leading-[1.7]">
              {description}
            </p>
          )}
          <div className="mt-[32px] flex flex-wrap items-center justify-center gap-3">
            <MarketingLink
              href={primaryHref}
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
            >
              {primaryLabel}
            </MarketingLink>
            <MarketingLink
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-all"
            >
              {secondaryLabel}
            </MarketingLink>
          </div>
        </div>
      </div>
    </section>
  );
}
