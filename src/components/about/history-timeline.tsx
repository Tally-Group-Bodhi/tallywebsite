"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type TimelineEntry = {
  year: string;
  title?: string;
  description?: string;
};

const defaultTimeline: TimelineEntry[] = [
  {
    year: "2018",
    title: "Tally IT founded",
    description:
      "Tally IT is founded by Australian market experts to close the gap for client-centric billing and digital solutions, addressing pain points from legacy providers.",
  },
  {
    year: "2020",
    title: "Global expansion",
    description:
      "Agility acquires Znalytics and Webtools, and under Tally\u2019s leadership, M&A and integration become a core strength driving growth in Japan and the U.S.",
  },
  {
    year: "2021",
    title: "Tally Group is formed",
    description:
      "The merger of Agility and Tally forms Tally Group, with proven expertise transitioning major enterprise mass-market platforms.",
  },
  {
    year: "2023",
    title: "Strategic investment",
    description:
      "Tally Group is significantly backed by IFM Investors and the Clean Energy Finance Corporation (CEFC) in Australia.",
  },
  {
    year: "2024",
    title: "Alinta CORE platform",
    description:
      "Tally purchases Alinta Energy\u2019s billing platform CORE, which supports Mass Market and C&I customers.",
  },
  {
    year: "2026",
    title: "Skipping Stone acquisition",
    description:
      "Tally Group acquires Skipping Stone, expanding advisory and consulting capabilities across the U.S. and Japan.",
  },
];

const defaultContent = {
  eyebrow: "Our history",
  heading: "A journey of innovation and growth.",
  lead: "Tally Group formed in 2021 following the merger of cloud-based billing provider Agility CIS and energy retail SaaS provider Tally. In 2026, we acquired Skipping Stone, an energy consulting firm, marking a key step in our global growth across the U.S. and Japan.",
};

type HistoryTimelineProps = {
  eyebrow?: string;
  heading?: string;
  lead?: ReactNode;
  entries?: TimelineEntry[];
  scrollLeftLabel?: string;
  scrollRightLabel?: string;
  showDivider?: boolean;
  /** Tighter horizontal spacing between year markers (e.g. title-only entries). */
  compact?: boolean;
};

export function HistoryTimeline({
  eyebrow = defaultContent.eyebrow,
  heading = defaultContent.heading,
  lead = defaultContent.lead,
  entries = defaultTimeline,
  scrollLeftLabel = "Scroll timeline left",
  scrollRightLabel = "Scroll timeline right",
  showDivider = true,
  compact = false,
}: HistoryTimelineProps = {}) {
  const timeline = entries;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const itemWidth = compact ? 176 : 320;
  const itemGap = compact ? 12 : 24;
  const scrollStep = itemWidth + itemGap;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -scrollStep : scrollStep,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="history"
      className={`scroll-mt-[88px] py-[96px]${showDivider ? " border-b border-stroke1" : ""}`}
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #F9F9FB 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[32px] mb-[56px]">
          <div className="max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              {eyebrow}
            </div>
            <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.15] tracking-[-0.02em] text-navy">
              {heading}
            </h2>
            <p className="mt-[20px] text-[17px] leading-[1.7] text-fg2">
              {lead}
            </p>
          </div>

          <div className="hidden lg:flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              aria-label={scrollLeftLabel}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-stroke1 bg-white text-navy grid place-items-center transition-all hover:bg-bg2 hover:border-navy/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-stroke1"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              aria-label={scrollRightLabel}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-stroke1 bg-white text-navy grid place-items-center transition-all hover:bg-bg2 hover:border-navy/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-stroke1"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#F9F9FB] to-transparent z-10 hidden md:block"
        />

        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            scrollPaddingLeft:
              "max(2rem, calc((100vw - 1240px) / 2 + 2rem))",
          }}
        >
          <div
            className="relative inline-flex pr-8"
            style={{
              gap: `${itemGap}px`,
              paddingLeft:
                "max(2rem, calc((100vw - 1240px) / 2 + 2rem))",
            }}
          >
            {timeline.map((item, index) => (
              <article
                key={item.year}
                className="relative snap-start"
                style={{
                  minWidth: `${itemWidth}px`,
                  maxWidth: `${itemWidth}px`,
                }}
              >
                {index < timeline.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute h-[2px] bg-stroke1 pointer-events-none"
                    style={{
                      top: "11px",
                      left: "6px",
                      width: `${scrollStep}px`,
                    }}
                  />
                )}
                <div className="relative h-6 flex items-center mb-[20px]">
                  <span className="w-3 h-3 rounded-full bg-white border-2 border-turquoise relative z-10 shadow-[0_0_0_4px_white]" />
                </div>
                <div
                  className={`font-light leading-none tracking-[-0.02em] text-turquoise mb-[14px] ${
                    compact
                      ? "text-[32px] lg:text-[36px]"
                      : "text-[40px] lg:text-[44px]"
                  }`}
                >
                  {item.year}
                </div>
                {item.title && (
                  <h3
                    className={`font-semibold text-navy tracking-tight leading-snug ${
                      compact
                        ? "text-[15px] mb-[0px]"
                        : "text-[17px] mb-[10px]"
                    }`}
                  >
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="text-sm leading-[1.55] text-fg2 m-0">
                    {item.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
