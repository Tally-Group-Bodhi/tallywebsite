"use client";

import { motion } from "framer-motion";
import {
  US_OVERVIEW_MODULES,
  US_OVERVIEW_MARKET_HIGHLIGHTS,
} from "@/components/us/overview/overview-copy";

function CapabilityPills({ items }: { items: string[] }) {
  return (
    <ul className="mt-[28px] flex flex-wrap gap-[10px] list-none m-0 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center justify-center rounded-[10px] border border-stroke1 bg-bg2 px-[18px] py-[10px] text-[14px] font-medium text-navy"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ModuleGrid() {
  return (
    <section className="py-[64px] lg:py-[96px] border-b border-stroke1">
      <div className="max-w-[1240px] mx-auto px-8">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.02em] text-navy whitespace-nowrap">
          One Platform, Endless Configurations.
        </h2>
        <p className="mt-[20px] text-[16px] lg:text-[18px] leading-[1.75] text-fg2 max-w-[62ch]">
          Choose the modules you need. Launch faster, change products in
          hours—not weeks—and scale without stacking headcount.
        </p>

        <div className="mt-[40px] lg:mt-[48px] flex flex-wrap gap-[12px]">
          {US_OVERVIEW_MODULES.map((module) => (
            <a
              key={module.id}
              href={`#${module.id}`}
              className="inline-flex items-center justify-center rounded-full px-[22px] py-[12px] lg:px-[28px] lg:py-[14px] text-[14px] lg:text-[15px] font-medium tracking-[-0.01em] text-navy border border-black/[0.06] shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-[1px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
              style={{ backgroundColor: module.tint }}
            >
              {module.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleSections() {
  return (
    <section className="py-[48px] lg:py-[72px] bg-bg2">
      <div className="max-w-[1240px] mx-auto px-8 flex flex-col gap-[24px] lg:gap-[32px]">
        {US_OVERVIEW_MODULES.map((module) => (
          <article
            key={module.id}
            id={module.id}
            className="scroll-mt-[88px] rounded-2xl bg-white border-[1.5px] px-[28px] py-[40px] lg:px-[48px] lg:py-[56px]"
            style={{ borderColor: module.border }}
            aria-labelledby={`${module.id}-heading`}
          >
            <h2
              id={`${module.id}-heading`}
              className="text-[30px] lg:text-[40px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              {module.title}
            </h2>
            <p className="mt-[20px] text-[16px] lg:text-[18px] leading-[1.75] text-fg2 m-0 max-w-[62ch]">
              {module.description}
            </p>
            <CapabilityPills items={module.items} />

            {module.stats && (
              <ul className="mt-[40px] lg:mt-[48px] grid grid-cols-1 sm:grid-cols-3 gap-[12px] list-none m-0 p-0">
                {module.stats.map((stat) => {
                  const match = stat.value.match(/^([\d.]+)(.*)$/);
                  const num = match?.[1] ?? stat.value;
                  const unit = match?.[2] ?? "";

                  return (
                    <li
                      key={stat.label}
                      className="rounded-[16px] px-[20px] py-[28px] lg:px-[24px] lg:py-[32px] text-center border flex flex-col items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #E8F7F1 0%, #F7FCF9 55%, #FFFFFF 100%)",
                        borderColor: "rgba(125, 196, 168, 0.65)",
                      }}
                    >
                      <div className="flex items-baseline justify-center gap-[2px] tabular-nums text-navy leading-none">
                        <span className="text-[40px] lg:text-[48px] font-semibold tracking-[-0.03em]">
                          {num}
                        </span>
                        {unit ? (
                          <span className="text-[22px] lg:text-[26px] font-semibold tracking-[-0.02em]">
                            {unit}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-[14px] text-[14px] lg:text-[15px] leading-[1.45] text-fg2 m-0">
                        {stat.label}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function MarketHighlights() {
  return (
    <section className="py-[80px] lg:py-[112px] bg-bg2">
      <div className="max-w-[1240px] mx-auto px-8">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.02em] text-navy max-w-[18ch] m-0">
          Built for today&apos;s U.S. energy market
        </h2>

        <div className="mt-[40px] lg:mt-[56px] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {US_OVERVIEW_MARKET_HIGHLIGHTS.map((item, i) => (
            <motion.article
              key={item.title}
              className="bg-white border border-stroke1 rounded-2xl p-[28px] lg:p-[32px] flex flex-col gap-[16px] h-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut" as const,
              }}
            >
              <div className="w-11 h-11 rounded-[12px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                <span className="material-symbols-outlined text-[22px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-medium leading-[1.3] tracking-[-0.01em] text-navy m-0">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-fg2 m-0">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TallyOverviewPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[140px] lg:pb-[72px] border-b border-stroke1"
        style={{
          background:
            "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[20px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" aria-hidden />
            Solutions / Tally+
          </div>
          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-light leading-[1.08] tracking-[-0.025em] text-navy m-0">
            Tally+ Platform
          </h1>
          <p className="mt-[24px] text-[17px] lg:text-[19px] leading-[1.7] text-fg2 max-w-[58ch] m-0">
            One modular platform for billing, sales, customer engagement, and
            energy transition—configured to how U.S. retailers actually operate.
          </p>
        </div>
      </section>

      <ModuleGrid />
      <ModuleSections />
      <MarketHighlights />
    </>
  );
}
