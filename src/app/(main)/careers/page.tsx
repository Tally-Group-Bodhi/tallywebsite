import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BambooHrJobs } from "@/components/sections/bamboohr-jobs";
import { USCtaSection } from "@/components/us/cta-section";

const lifeAtTallyPhotos = Array.from({ length: 12 }, (_, index) => {
  const filename = String(index + 1).padStart(2, "0");
  return `/us/life-at-tally/${filename}.png`;
});

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Tally Group and be part of a dynamic team transforming energy retail technology. Explore open positions across Australia, New Zealand, India, Japan, Dubai and the US.",
};

const cultureCards = [
  {
    icon: "diversity_3",
    title: "Globally dispersed, deliberately diverse",
    description:
      "With 300+ people across Australia, New Zealand, India, Japan, Dubai and the U.S., you\u2019ll work with teams that offer different perspectives and experiences. Collaboration across borders is part of how we work, giving you exposure to global challenges and new ideas every day.",
  },
  {
    icon: "trending_up",
    title: "Fast growth, ambitious future",
    description:
      "We\u2019re expanding across regions, products and sectors, creating real opportunities for our people. You\u2019ll be trusted to take on new challenges, develop quickly, and deliver real-world, meaningful impact, playing a role in shaping what comes next in the global utilities transition.",
  },
  {
    icon: "bolt",
    title: "Powering real change in the world",
    description:
      "We believe in building better technology that benefits people and the planet, and our projects support essential services and real-world transformation. Apply your skills to work that matters, with the flexibility and support to deliver outcomes you can be proud of.",
  },
];

const perks = [
  { icon: "bolt", text: "Work at the forefront of utility tech" },
  { icon: "public", text: "Global focus on real-world problems" },
  { icon: "auto_awesome", text: "Access to cutting-edge AI tools and training" },
  { icon: "menu_book", text: "Tailored learning and proven career pathways" },
  { icon: "work", text: "Flexible, hybrid working environments" },
  { icon: "payments", text: "Competitive compensation and benefits" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stroke1 pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]" style={{
        background: "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy">
            Join Our Team.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            Be part of a dynamic and innovative environment where your skills and talents can flourish. We&apos;re committed to fostering growth and development for everyone.
          </p>

          <div className="flex gap-3 mt-[32px]">
            <Link href="#positions" className="inline-flex items-center px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all">
              View open positions
            </Link>
            <Link href="#culture" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-navy border border-stroke1 hover:bg-bg3 transition-all">
              Life at Tally
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Cards */}
      <section id="culture" className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Life at Tally
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Make a real impact in the utility sector.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {cultureCards.map((card) => (
              <div key={card.title} className="bg-bg2 rounded-xl p-[28px] flex flex-col gap-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-fg1">{card.title}</h3>
                <p className="text-sm leading-[1.55] text-fg2 m-0">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-[40px] lg:mt-[56px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[12px] sm:gap-[14px] lg:gap-[16px]">
            {lifeAtTallyPhotos.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl bg-bg2 border border-stroke1"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 24vw, (min-width: 640px) 32vw, 48vw"
                  quality={95}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-[96px] border-b border-stroke1 bg-bg2">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[48px] lg:gap-[72px] items-start">
          <div>
            <div className="text-xs font-medium text-turquoise uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Why Tally
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              A workplace where you&apos;ll thrive.
            </h2>
            <p className="mt-[20px] text-[17px] leading-[1.55] text-fg2 max-w-[50ch]">
              We offer a comprehensive suite of benefits designed to support your career growth, well-being and work-life balance.
            </p>
          </div>

          <div className="bg-white rounded-xl p-[28px] border border-stroke1">
            <h3 className="text-lg font-semibold text-navy mb-[24px]">Our commitment to our people</h3>
            <ul className="flex flex-col gap-[16px]">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-[12px]">
                  <div className="w-9 h-9 shrink-0 rounded-[8px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                    <span className="material-symbols-outlined text-[18px]">{perk.icon}</span>
                  </div>
                  <span className="text-sm text-fg2 leading-[1.4]">{perk.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Open positions
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Join us and our growing team.
            </h2>
            <p className="mt-[16px] text-sm leading-[1.55] text-fg2 m-0 max-w-[52ch]">
              Roles are listed and managed through our applicant tracking system. Click any role for the full description and to apply.
            </p>
          </div>

          <BambooHrJobs />
        </div>
      </section>

      {/* Wide image */}
      <section className="px-4 sm:px-6 pt-[24px] sm:pt-[32px] pb-0">
        <div
          className="relative mx-auto w-full max-w-[1680px] rounded-3xl overflow-hidden bg-bg2 border border-stroke1"
          style={{ aspectRatio: "3889 / 1392" }}
        >
          <Image
            src="/us/life-at-tally/wide.png"
            alt=""
            fill
            sizes="(min-width: 1680px) 1680px, 100vw"
            quality={95}
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* CTA */}
      <USCtaSection
        eyebrow="Join the team"
        title="Don't see the right role? Get in touch."
        description="We're always looking for talented people. Send us your CV and we'll be in touch if future opportunities arise."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/careers#positions"
        secondaryLabel="View open positions"
      />
    </>
  );
}
