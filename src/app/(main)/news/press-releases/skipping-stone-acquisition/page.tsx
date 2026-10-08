import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";

export const metadata: Metadata = {
  title:
    "Tally Group Expands Global Footprint with Acquisition Of Skipping Stone",
  description:
    "Tally Group announced today the acquisition of Skipping Stone, a global energy strategy and implementation consulting firm.",
};

export default function USSkippingStoneAcquisitionPage() {
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
              href="/news/press-releases"
              className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              Back to all press releases
            </MarketingLink>
          </div>
        </div>

        {/* Hero */}
        <section className="relative pt-[24px] pb-[48px] lg:pt-[32px] lg:pb-[64px]">
          <div className="max-w-[1240px] mx-auto px-8">
            <h1 className="text-[28px] lg:text-[48px] font-light leading-[1.1] tracking-[-0.02em] text-navy max-w-[24ch] m-0">
              Tally Group Expands Global Footprint with Acquisition Of Skipping Stone
            </h1>
            <p className="mt-[16px] text-sm font-semibold text-fg2 m-0">
              <time dateTime="2026-03-04">March 4, 2026</time>
            </p>
          </div>
        </section>
      </div>

      {/* Article */}
      <article className="bg-bg2 py-[80px] lg:py-[96px]">
        <div className="max-w-[760px] mx-auto px-8">
          <figure className="m-0 mb-[40px] lg:mb-[48px] rounded-2xl overflow-hidden border border-stroke1 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <Image
              src="/corporate/SS Acquisition PR Image.png"
              alt="Announcement of Tally Group's acquisition of Skipping Stone"
              width={840}
              height={630}
              className="w-full h-auto"
            />
          </figure>

          <div className="space-y-[18px]">
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              Tally Group announced today the acquisition of Skipping Stone, a global energy strategy and implementation consulting firm.
            </p>
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              Skipping Stone will continue operations under its own brand as a wholly owned subsidiary. The companies will combine their strengths to expand the Group&rsquo;s global go to market reach and strategic energy market solutions.
            </p>

            <blockquote className="m-0 mt-[12px] p-[28px] lg:p-[32px] rounded-2xl bg-white flex flex-col gap-[14px]">
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;The acquisition of Skipping Stone is a decisive step in Tally&rsquo;s next phase of global growth,&rdquo; said Tally Group CEO, Andrew Duncan.
              </p>
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;It strengthens our end-to-end capability immediately — combining Skipping Stone&rsquo;s frontline market insight and advisory expertise with Tally&rsquo;s market-leading platform so we can help clients move faster from strategy to execution.&rdquo;
              </p>
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;Importantly, it dramatically uplifts our presence in key global markets including the US and Japan. Japan in particular is a key growth market for us due to its scale — 10 times the Australian market — and accelerating pace of de-regulation.&rdquo;
              </p>
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;Tally went live in Japan last year with a Tier 1 retailer, delivering the market&rsquo;s first cloud-native, AI-enabled billing platform, and Peter and the team will help us capitalise on this early-mover position.&rdquo;
              </p>
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;This acquisition sharpens our competitive edge and accelerates our ability to scale globally as a leading provider of technology solutions to the utility sector. We are confident and bullish about the future growth opportunities this creates.&rdquo;
              </p>
            </blockquote>

            <blockquote className="m-0 mt-[12px] p-[28px] lg:p-[32px] rounded-2xl bg-white flex flex-col gap-[14px]">
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                Peter Weigand, Skipping Stone Founder and CEO, commented, &ldquo;Global energy markets are shifting rapidly, with providers needing to offer far more than traditional commodity services.&rdquo;
              </p>
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;Through our work with clients, it became clear that legacy back office systems could not support this complexity at scale. After reviewing energy platforms globally, Tally Group stood out for the strength and flexibility of its technology, which made it an easy decision on whom to team up with.&rdquo;
              </p>
            </blockquote>

            <h2 className="text-[22px] lg:text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-navy m-0 mt-[40px] mb-[4px]">
              About Skipping Stone
            </h2>
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              Skipping Stone is an award-winning global energy markets strategy consulting and implementation services firm.
            </p>
          </div>

          <div className="mt-[64px] pt-[40px] border-t border-stroke1 flex flex-wrap items-center justify-between gap-[16px]">
            <MarketingLink
              href="/news/press-releases"
              className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              Back to all press releases
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
    </>
  );
}
