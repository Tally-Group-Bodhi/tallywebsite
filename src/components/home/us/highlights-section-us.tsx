"use client";

import { motion } from "framer-motion";

const highlights: Array<{ title: string; body: string }> = [
  {
    title: "Cost-to-Serve Reduction",
    body: "Tally+ reduces operational workload through automation, workflow management and exception handling at scale.",
  },
  {
    title: "DER-Ready",
    body: "Tally+ supports new product development for offerings such as PPAs, VPPAs, EVs, Demand Response, Batteries, Onsite Generation as well as the combination of two or more solutions.",
  },
  {
    title: "Embedded AI",
    body: "Superior straight-through processing and streamlining capabilities enables clients to scale faster without adding more staff.",
  },
];

export function HighlightsSectionUS() {
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
          Flexible, fast, and ready for a changing energy market
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-bg2 rounded-2xl px-[28px] py-[40px] lg:py-[48px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut" as const,
              }}
            >
              <h3 className="text-[22px] lg:text-[24px] font-medium tracking-[-0.01em] leading-[1.4] text-navy mb-[16px]">
                {item.title}
              </h3>
              <p className="text-[15px] lg:text-[16px] leading-[1.85] text-fg2">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-[48px] lg:mt-[64px] max-w-[760px] mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-navy mb-[16px] lg:mb-[20px]">
            Global Best Practices
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.85] text-fg2 mx-auto max-w-[68ch]">
            Tally+ is utilized by energy retailers across the globe, including
            in the US, Australia, New Zealand, and Japan. We adapted best
            practices from all of our experiences for the US market.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
