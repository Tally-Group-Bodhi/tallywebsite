import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";

export const metadata: Metadata = {
  title:
    "Tally Group Appoints Michael Harrison as Director of Business Development, North America",
  description:
    "Tally Group announces the appointment of Michael Harrison as Director of Business Development, North America.",
};

export default function USMichaelHarrisonAppointmentPage() {
  return (
    <>
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
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

        <section className="relative pt-[24px] pb-[48px] lg:pt-[32px] lg:pb-[64px]">
          <div className="max-w-[1240px] mx-auto px-8">
            <h1 className="text-[28px] lg:text-[48px] font-light leading-[1.1] tracking-[-0.02em] text-navy max-w-[28ch] m-0">
              Tally Group Appoints Michael Harrison as Director of Business
              Development, North America
            </h1>
            <p className="mt-[16px] text-sm font-semibold text-fg2 m-0">
              <time dateTime="2026-10-05">October 5, 2026</time>
            </p>
          </div>
        </section>
      </div>

      <article className="bg-bg2 py-[80px] lg:py-[96px]">
        <div className="max-w-[760px] mx-auto px-8">
          <figure className="m-0 mb-[40px] lg:mb-[48px] rounded-2xl overflow-hidden border border-stroke1 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <Image
              src="/corporate/Michael Harrison PR Image.png"
              alt="Announcement of Michael Harrison joining Tally Group as Director of Business Development, North America"
              width={1024}
              height={576}
              className="w-full h-auto"
              priority
            />
          </figure>

          <div className="space-y-[18px]">
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              <strong>Houston, TX, October 5, 2026</strong> — Tally Group, a
              provider of energy retail software solutions, announces the
              appointment of Michael Harrison as Director of Business
              Development, North America.
            </p>
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              Harrison will lead business development initiatives across North
              America, working closely with energy retailers, partners, and
              industry stakeholders to expand adoption of the Tally Group
              software platform.
            </p>
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              Harrison brings more than 15 years of experience in sales
              leadership and business development within the retail energy and
              energy software sectors.
            </p>

            <blockquote className="m-0 mt-[12px] p-[28px] lg:p-[32px] rounded-2xl bg-white flex flex-col gap-[14px]">
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;Michael brings a nice diversification of skills to this
                critical leadership position. We were looking for more than a
                salesperson and Michael has proven to be able to achieve success
                on several fronts in the retail energy markets,&rdquo; said
                Peter Weigand, Tally Group Chief Growth Officer.
              </p>
            </blockquote>

            <blockquote className="m-0 mt-[12px] p-[28px] lg:p-[32px] rounded-2xl bg-white flex flex-col gap-[14px]">
              <p className="text-[17px] leading-[1.75] text-fg1 m-0">
                &ldquo;I&apos;m excited to join Tally Group at such an important
                time in the company&apos;s growth journey,&rdquo; said Harrison.
                &ldquo;I look forward to working with customers and partners
                across North America to support their success and contribute to
                the company&apos;s continued growth.&rdquo;
              </p>
            </blockquote>

            <h2 className="text-[22px] lg:text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-navy m-0 mt-[40px] mb-[4px]">
              About Tally Group
            </h2>
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              Tally Group is a cloud-native SaaS provider serving over 55
              clients worldwide. The company offers an AI-enabled operating
              platform for energy retailers that automates transaction
              processing across acquisition, enrollment, billing, and customer
              service. Tally+ supports electricity, natural gas, solar, demand
              response, batteries, EV charging, and more.
            </p>

            <h2 className="text-[22px] lg:text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-navy m-0 mt-[40px] mb-[4px]">
              Tally Group Media Contact
            </h2>
            <p className="text-[17px] leading-[1.75] text-fg1 m-0">
              <a
                href="mailto:contact_us@tally-group.com"
                className="text-navy underline hover:text-turquoise transition-colors"
              >
                contact_us@tally-group.com
              </a>
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
