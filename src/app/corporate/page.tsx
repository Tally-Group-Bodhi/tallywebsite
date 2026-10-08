import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CorporateLogoMarquee } from "@/components/corporate/logo-marquee";

export const metadata: Metadata = {
  title: "Tally Group | Global customer engagement and management solutions",
};

const stats = [
  { value: "55", suffix: "+", label: "Global clients" },
  { value: "4M", suffix: "+", label: "Meters under management" },
  { value: "350", suffix: "+", label: "Global staff" },
];

const countrySolutions = [
  { label: "Australia/New Zealand", href: "#" },
  { label: "United States", href: "/" },
  { label: "Japan", href: "#" },
  { label: "United Arab Emirates", href: "#" },
];

export default function CorporateHomePage() {
  return (
    <>
      {/* Hero — inset image treatment aligned with main home */}
      <section className="relative min-h-[100dvh] flex flex-col bg-white pt-[84px] px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="absolute inset-0 mt-[84px] mx-4 sm:mx-6 mb-4 sm:mb-6 rounded-[20px] overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 text-center mt-auto pb-[48px] sm:pb-[64px]">
          <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-light leading-[1.15] tracking-[-0.03em] text-white">
            We are a{" "}
            <span className="text-turquoise">
              global customer engagement and management solutions
            </span>{" "}
            company, serving{" "}
            <span className="text-turquoise">energy retailers</span>,{" "}
            <span className="text-turquoise">energy and water utilities</span>, and{" "}
            <span className="text-turquoise">energy transition services</span> providers.
          </h1>

          <p className="mt-[16px] text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.6] text-white/80 max-w-[56ch] mx-auto">
            Tally+ and Tally Glass power retail, operations, and customer experience
            for utilities worldwide &mdash; one platform, configured for each market.
          </p>

          <div className="flex flex-wrap gap-3 mt-[36px] justify-center">
            <Link
              href="/corporate/company"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold bg-white text-navy hover:bg-white/90 transition-all shadow-lg"
            >
              About our company
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              href="/corporate/contact"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold text-white border border-white/40 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — home hero stats bar */}
      <section className="py-[48px] lg:py-[64px]">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg2 rounded-2xl px-[28px] py-[32px] lg:py-[40px]"
              >
                <p className="text-[14px] leading-[1.5] text-fg2 mb-[20px]">{stat.label}</p>
                <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none text-navy tabular-nums">
                  <span className="text-turquoise">{stat.value}</span>
                  <span className="text-navy font-normal">{stat.suffix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="pt-[64px] lg:pt-[96px] pb-[96px] border-b border-stroke1 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-[820px] mx-auto mb-[48px] lg:mb-[56px]">
            <p className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px]">
              Our platform
            </p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              Products built for energy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:gap-[24px]">
            <div className="bg-bg2 rounded-2xl p-[28px] lg:p-[32px]">
              <h3 className="text-lg font-semibold text-navy mb-[16px]">Tally Glass</h3>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/80 mb-[16px]">
                <Image
                  src="/corporate/Tally Glass.PNG"
                  alt="Tally Glass"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[15px] leading-[1.6] text-fg2">
                Tally Glass is AI software that connects with Pods and Modules across the
                Tally+ suite, unlocking automation, smoother operations, a better customer
                experience, lower cost, and a growing set of capabilities as your business
                evolves.
              </p>
            </div>
            <div className="bg-bg2 rounded-2xl p-[28px] lg:p-[32px]">
              <h3 className="text-lg font-semibold text-navy mb-[16px]">Tally+</h3>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/80 mb-[16px]">
                <Image
                  src="/corporate/Pods v3.png"
                  alt="Tally+ Pods"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[15px] leading-[1.6] text-fg2">
                Tally+ brings together Pods and Modules that span the full customer
                engagement and management lifecycle, from acquisition to cash. Mix and
                match them to configure the solution that fits how you operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CorporateLogoMarquee title="Trusted worldwide by energy leaders" />

      {/* Country solutions */}
      <section className="py-[96px] border-b border-stroke1 bg-white" id="country-solutions">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-[820px] mx-auto mb-[40px]">
            <p className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px]">
              Country solutions
            </p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              Learn about our country specific solutions.
            </h2>
          </div>
          <p className="text-[17px] lg:text-[19px] leading-[1.6] text-fg2 max-w-[60ch] mx-auto text-center mb-[36px]">
            Tally+ and Tally Glass are base platforms that are configured differently to meet
            the unique requirements of each country&rsquo;s market rules.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {countrySolutions.map((cs) => (
              <Link
                key={cs.label}
                href={cs.href}
                className="inline-flex items-center gap-2 px-7 py-[12px] rounded-full text-[14px] font-semibold bg-white text-navy border border-stroke1 hover:border-navy/25 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all"
              >
                {cs.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Discover: Skipping Stone */}
      <section className="py-[96px] border-b border-stroke1 bg-bg2" id="discover">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-center max-w-[820px] mx-auto mb-[28px]">
            <p className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px]">
              Discover
            </p>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              Skipping Stone
            </h2>
          </div>
          <div className="flex justify-center mb-[24px]">
            <Image
              src="/corporate/ss logo with tag hr.png"
              alt="Skipping Stone"
              width={220}
              height={52}
              className="max-h-[52px] w-auto"
            />
          </div>
          <p className="text-[17px] lg:text-[19px] leading-[1.6] text-fg2 max-w-[60ch] mx-auto text-center mb-[36px]">
            Our wholly owned subsidiary Skipping Stone significantly enhances our solutions
            offerings by working with clients on go-to-market strategies, new product or
            services planning, risk management services, market research, competitor
            analysis, and growth strategies with implementation services.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="https://skippingstone.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-[12px] rounded-full text-[14px] font-semibold bg-white text-navy border border-stroke1 hover:border-navy/25 transition-all"
            >
              United States
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </Link>
            <Link
              href="https://japan2.skippingstone.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-[12px] rounded-full text-[14px] font-semibold bg-white text-navy border border-stroke1 hover:border-navy/25 transition-all"
            >
              Japan
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — home contact strip */}
      <section className="relative overflow-hidden py-[96px] lg:py-[120px] bg-navy text-white">
        <div
          className="absolute -right-[300px] -top-[300px] w-[1000px] h-[1000px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.2), transparent 60%)",
          }}
        />
        <div
          className="absolute -left-[200px] bottom-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-90"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.08), transparent 60%)",
          }}
        />

        <div className="relative max-w-[1600px] mx-auto px-8 text-center">
          <div className="max-w-[640px] mx-auto">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Ready to see the platform?
            </h2>
            <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.6] text-white/75 max-w-[48ch] mx-auto">
              A 30-minute walkthrough tailored to your retail footprint. No slides, just the
              product.
            </p>
            <div className="flex flex-wrap gap-3 mt-[32px] justify-center">
              <Link
                href="/corporate/contact"
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
              >
                Book a demo
              </Link>
              <Link
                href="/corporate/leadership"
                className="inline-flex items-center gap-2 px-7 py-[13px] rounded-full text-[15px] font-semibold text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        className="h-0 m-0 p-0 overflow-hidden w-full scroll-mt-[88px]"
        id="careers"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div
        className="h-0 m-0 p-0 overflow-hidden w-full scroll-mt-[88px]"
        id="disclaimers"
        tabIndex={-1}
        aria-hidden="true"
      />
    </>
  );
}
