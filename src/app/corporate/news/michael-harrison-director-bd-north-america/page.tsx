import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tally Group Appoints Michael Harrison as Director of Business Development, North America",
};

export default function MichaelHarrisonAppointmentPage() {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-stroke1 pt-[64px] pb-[48px] lg:pt-[96px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <p className="text-xs text-fg2 mb-[10px]">
            <Link
              href="/corporate"
              className="text-fg2 no-underline hover:text-navy transition-colors"
            >
              Home
            </Link>
            <span className="mx-1 text-fg3">/</span>
            <Link
              href="/corporate/news"
              className="text-fg2 no-underline hover:text-navy transition-colors"
            >
              News
            </Link>
            <span className="mx-1 text-fg3">/</span>
            <span className="text-fg1 font-medium">Press release</span>
          </p>

          <h1 className="mt-[10px] text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy max-w-[22ch]">
            Tally Group Appoints Michael Harrison as Director of Business
            Development, North America
          </h1>
          <p className="mt-[12px] font-mono text-sm font-semibold text-turquoise">
            <time dateTime="2026-10-05">October 5, 2026</time>
          </p>
        </div>
      </section>

      <article className="py-[96px]">
        <div className="max-w-[720px] mx-auto px-8">
          <figure className="m-0 mb-[48px] rounded-xl overflow-hidden border border-stroke1">
            <Image
              src="/corporate/Michael Harrison PR Image.png"
              alt="Announcement of Michael Harrison joining Tally Group as Director of Business Development, North America"
              width={1024}
              height={576}
              className="w-full h-auto"
              priority
            />
          </figure>

          <div className="space-y-[16px]">
            <p className="text-lg leading-[1.55] text-fg2">
              <strong className="text-fg1">Houston, TX, October 5, 2026</strong>{" "}
              — Tally Group, a provider of energy retail software solutions,
              announces the appointment of Michael Harrison as Director of
              Business Development, North America.
            </p>
            <p className="text-lg leading-[1.55] text-fg2">
              Harrison will lead business development initiatives across North
              America, working closely with energy retailers, partners, and
              industry stakeholders to expand adoption of the Tally Group
              software platform.
            </p>
            <p className="text-lg leading-[1.55] text-fg2">
              Harrison brings more than 15 years of experience in sales
              leadership and business development within the retail energy and
              energy software sectors.
            </p>

            <blockquote className="my-[32px] py-[24px] px-[28px] rounded-xl bg-bg2 border-l-[3px] border-turquoise space-y-[12px]">
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;Michael brings a nice diversification of skills to this
                critical leadership position. We were looking for more than a
                salesperson and Michael has proven to be able to achieve success
                on several fronts in the retail energy markets,&rdquo; said
                Peter Weigand, Tally Group Chief Growth Officer.
              </p>
            </blockquote>

            <blockquote className="my-[32px] py-[24px] px-[28px] rounded-xl bg-bg2 border-l-[3px] border-turquoise space-y-[12px]">
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;I&apos;m excited to join Tally Group at such an important
                time in the company&apos;s growth journey,&rdquo; said Harrison.
                &ldquo;I look forward to working with customers and partners
                across North America to support their success and contribute to
                the company&apos;s continued growth.&rdquo;
              </p>
            </blockquote>

            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mt-[48px] mb-[14px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              About
            </div>
            <h2 className="text-[24px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[12px]">
              About Tally Group
            </h2>
            <p className="text-lg leading-[1.55] text-fg2">
              Tally Group is a cloud-native SaaS provider serving over 55
              clients worldwide. The company offers an AI-enabled operating
              platform for energy retailers that automates transaction
              processing across acquisition, enrollment, billing, and customer
              service. Tally+ supports electricity, natural gas, solar, demand
              response, batteries, EV charging, and more.
            </p>

            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mt-[48px] mb-[14px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Media
            </div>
            <h2 className="text-[24px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[12px]">
              Tally Group Media Contact
            </h2>
            <p className="text-lg leading-[1.55] text-fg2">
              <a
                href="mailto:contact_us@tally-group.com"
                className="text-navy underline hover:text-turquoise transition-colors"
              >
                contact_us@tally-group.com
              </a>
            </p>
          </div>

          <div className="mt-[64px] pt-[28px] border-t border-stroke1">
            <Link
              href="/corporate/news"
              className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-turquoise transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">
                arrow_back
              </span>
              Back to News
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
