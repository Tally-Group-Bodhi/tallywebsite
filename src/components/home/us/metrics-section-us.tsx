"use client";

import { motion } from "framer-motion";

const metrics: Array<{ value: string; label: string }> = [
  {
    value: "50+",
    label: "Clients Worldwide",
  },
  {
    value: "5M+",
    label: "Meter Points Served Globally",
  },
  {
    value: "$15B+",
    label: "Annual Billing Processed",
  },
];

export function MetricsSectionUS() {
  return (
    <section className="py-[48px] lg:py-[64px]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.h2
          className="text-center text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-navy mb-[48px] lg:mb-[64px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          One Platform, Endless Configurations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="bg-bg2 rounded-2xl px-[28px] py-[48px] lg:py-[72px] text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut" as const,
              }}
            >
              <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none text-navy tabular-nums mb-[20px]">
                {metric.value}
              </div>
              <p className="text-[15px] lg:text-[16px] leading-[1.6] text-fg2">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
