"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Briefcase,
  ClipboardCheck,
  CreditCard,
  LayoutDashboard,
  Network,
  Receipt,
  Settings2,
  Sparkles,
  Sun,
  Tag,
  UserCircle,
  UserPlus,
  Workflow,
  Zap,
} from "lucide-react";
import { PixelWave } from "@/components/home/jp/pixel-wave";
import {
  US_HOME_HEADLINE,
  US_HOME_QUADRANTS,
  US_HOME_SUBHEAD,
} from "@/components/home/us/home-beta-quad-grid-copy";

type Corner = "tl" | "tr" | "bl" | "br";

type SubItem = {
  label: string;
  icon: LucideIcon;
};

type Quadrant = {
  id: string;
  title: string;
  tint: string;
  glow: string;
  corner: Corner;
  subItems?: SubItem[];
  singleLine?: boolean;
};

const quadrantMeta: Record<
  (typeof US_HOME_QUADRANTS)[number]["id"],
  Pick<Quadrant, "tint" | "glow" | "corner"> & {
    icons: LucideIcon[];
  }
> = {
  "order-to-cash": {
    tint: "rgba(185, 188, 203, 0.8)",
    glow: "rgba(185, 188, 203, 0.6)",
    corner: "tl",
    icons: [Receipt, Settings2, CreditCard, Workflow],
  },
  "sales-management": {
    tint: "rgba(188, 218, 251, 0.8)",
    glow: "rgba(188, 218, 251, 0.6)",
    corner: "tr",
    icons: [Tag, Briefcase, ClipboardCheck, UserPlus],
  },
  "customer-engagement": {
    tint: "rgba(215, 200, 244, 0.8)",
    glow: "rgba(215, 200, 244, 0.6)",
    corner: "bl",
    icons: [Bot, LayoutDashboard, UserCircle, Sparkles],
  },
  "transition-products": {
    tint: "rgba(174, 215, 204, 0.8)",
    glow: "rgba(174, 215, 204, 0.6)",
    corner: "br",
    icons: [Zap, Sun, Network],
  },
};

const quadrants: Quadrant[] = US_HOME_QUADRANTS.map((q) => {
  const meta = quadrantMeta[q.id];
  return {
    id: q.id,
    title: q.title,
    tint: meta.tint,
    glow: meta.glow,
    corner: meta.corner,
    subItems: q.subItems.map((label, i) => ({
      label,
      icon: meta.icons[i]!,
    })),
  };
});

const cornerAnchor: Record<Corner, string> = {
  tl: "items-start justify-start text-left",
  tr: "items-end justify-start text-right",
  bl: "items-start justify-end text-left",
  br: "items-end justify-end text-right",
};

const radialOrigin: Record<Corner, string> = {
  tl: "circle at top left",
  tr: "circle at top right",
  bl: "circle at bottom left",
  br: "circle at bottom right",
};

const isRightCorner = (corner: Corner) => corner === "tr" || corner === "br";

/**
 * Only true mouse/trackpad desktops — excludes iPadOS, which often reports
 * hover:hover (sticky :hover) even when primary input is touch.
 */
const DESKTOP_HOVER_QUERY =
  "(hover: hover) and (pointer: fine) and (any-pointer: fine) and (any-hover: hover)";

function subscribeDesktopHover(onChange: () => void) {
  const media = window.matchMedia(DESKTOP_HOVER_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getDesktopHoverSnapshot() {
  // Touch-capable devices should never use hover-reveal (avoids sticky iPad hover).
  if (navigator.maxTouchPoints > 0) return false;
  return window.matchMedia(DESKTOP_HOVER_QUERY).matches;
}

function getDesktopHoverServerSnapshot() {
  return true;
}

function useIsDesktopHover() {
  return useSyncExternalStore(
    subscribeDesktopHover,
    getDesktopHoverSnapshot,
    getDesktopHoverServerSnapshot,
  );
}

function SubItemRows({
  items,
  reverse,
  compact,
}: {
  items: SubItem[];
  reverse: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${compact ? "mt-2 gap-0.5" : "mt-4 sm:mt-5 gap-1 sm:gap-1.5"} ${reverse ? "items-end" : "items-start"}`}
      role="list"
    >
      {items.map(({ label, icon: Icon }) => (
        <div
          key={label}
          role="listitem"
          className={`flex items-center ${compact ? "gap-1.5 text-[12px] leading-tight" : "gap-2 sm:gap-2.5 text-[13px] sm:text-[15px]"} font-medium text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] ${reverse ? "flex-row-reverse" : ""}`}
        >
          <Icon
            width={compact ? 13 : 14}
            height={compact ? 13 : 14}
            className={`${compact ? "h-[13px] w-[13px]" : "h-[14px] w-[14px] sm:h-[16px] sm:w-[16px]"} shrink-0 text-white/75`}
            strokeWidth={1.75}
            aria-hidden
          />
          <span className="min-w-0">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function HomeBetaQuadGridUS() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isDesktopHover = useIsDesktopHover();
  // Touch / iPad: always show bullets, never dim or sticky-hover.
  const touchMode = !isDesktopHover;

  return (
    <section className="relative h-[100dvh] flex flex-col bg-white pt-[84px] px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="px-2 py-4 sm:py-5 lg:py-6 text-center">
        <h1 className="flex flex-wrap items-end justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-[24px] sm:text-[36px] lg:text-[52px] font-light leading-none tracking-[-0.015em] text-navy">
          <Image
            src="/logos/TallyPlus.svg"
            alt="Tally+"
            width={205}
            height={75}
            priority
            className="h-[1em] w-auto shrink-0"
          />
          <span>{US_HOME_HEADLINE}</span>
        </h1>
      </div>

      <div className="relative flex-1 min-h-0 rounded-[20px] overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60"
        />

        <div
          aria-hidden
          className="absolute top-[30%] left-[40%] h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 184, 144, 0.35) 0%, transparent 65%)",
          }}
        />

        <div className="relative h-full w-full grid grid-cols-2 grid-rows-2 gap-[6px] p-[6px]">
          {quadrants.map((q) => {
            const isActive = !touchMode && activeId === q.id;
            const isDimmed = !touchMode && activeId !== null && !isActive;
            const reverse = isRightCorner(q.corner);

            return (
              <motion.div
                key={q.id}
                onHoverStart={() => {
                  if (isDesktopHover) setActiveId(q.id);
                }}
                onHoverEnd={() => {
                  if (isDesktopHover) setActiveId(null);
                }}
                animate={{ opacity: isDimmed ? 0.55 : 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[14px] border border-white/25 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                style={{
                  backgroundColor: q.tint,
                  cursor: isDesktopHover ? "pointer" : "default",
                }}
              >
                <motion.div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(${radialOrigin[q.corner]}, ${q.glow} 0%, transparent 65%)`,
                  }}
                  animate={{ opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1/2 rounded-t-[14px] bg-gradient-to-b from-white/15 to-transparent pointer-events-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[14px] ring-1 ring-inset ring-white/20"
                />

                <div
                  className={`relative h-full w-full min-h-0 flex flex-col ${cornerAnchor[q.corner]} ${
                    touchMode
                      ? "p-3 sm:p-4 lg:p-5"
                      : "p-5 sm:p-7 lg:p-9"
                  }`}
                >
                  <motion.div
                    className="min-w-0 max-w-full"
                    animate={{ y: isActive ? -6 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <h2
                      className={`font-light leading-[1.15] tracking-[-0.02em] text-white max-w-[14em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] ${
                        touchMode
                          ? "text-[15px] sm:text-[18px] lg:text-[22px]"
                          : "text-[16px] sm:text-[22px] lg:text-[30px]"
                      } ${q.singleLine ? "lg:max-w-none lg:whitespace-nowrap" : ""}`}
                    >
                      {q.title}
                    </h2>

                    {q.subItems ? (
                      <>
                        {/* Always-visible on touch/iPad and below lg on desktop. */}
                        <div
                          className={
                            touchMode ? "block" : "lg:hidden"
                          }
                        >
                          <SubItemRows
                            items={q.subItems}
                            reverse={reverse}
                            compact={touchMode}
                          />
                        </div>

                        {/* Hover-reveal: mouse desktop at lg+ only. */}
                        {isDesktopHover && (
                          <div className="hidden lg:block">
                            <AnimatePresence initial={false}>
                              {isActive && (
                                <motion.div
                                  key="sub-items-wrap"
                                  className="overflow-hidden"
                                  initial={{ height: 0 }}
                                  animate={{ height: "auto" }}
                                  exit={{ height: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                >
                                  <motion.div
                                    initial="hide"
                                    animate="show"
                                    exit="hide"
                                    variants={{
                                      show: {
                                        transition: {
                                          staggerChildren: 0.05,
                                          delayChildren: 0.08,
                                        },
                                      },
                                      hide: {
                                        transition: {
                                          staggerChildren: 0.025,
                                          staggerDirection: -1,
                                        },
                                      },
                                    }}
                                  >
                                    <div
                                      className={`mt-6 flex flex-col gap-2 ${reverse ? "items-end" : "items-start"}`}
                                      role="list"
                                    >
                                      {q.subItems.map(
                                        ({ label, icon: Icon }) => (
                                          <motion.div
                                            key={label}
                                            role="listitem"
                                            variants={{
                                              show: { opacity: 1, y: 0 },
                                              hide: { opacity: 0, y: 6 },
                                            }}
                                            transition={{
                                              duration: 0.28,
                                              ease: "easeOut",
                                            }}
                                            className={`flex items-center gap-2.5 text-[16px] font-medium text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] ${reverse ? "flex-row-reverse" : ""}`}
                                          >
                                            <Icon
                                              width={17}
                                              height={17}
                                              className="h-[17px] w-[17px] shrink-0 text-white/75"
                                              strokeWidth={1.75}
                                              aria-hidden
                                            />
                                            <span>{label}</span>
                                          </motion.div>
                                        ),
                                      )}
                                    </div>
                                  </motion.div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </>
                    ) : (
                      <motion.div
                        className="mt-4 inline-flex items-center gap-2 text-[13px] sm:text-[15px] lg:text-[16px] font-medium uppercase tracking-[0.14em] text-white/90"
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 6,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <span>Explore</span>
                        <motion.span
                          aria-hidden
                          animate={{ x: isActive ? 4 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <PixelWave />

        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{
              scale: activeId && isDesktopHover ? 1.06 : 1,
              y: activeId && isDesktopHover ? -8 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] rounded-full blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,210,162,0.42) 0%, rgba(0,210,162,0.18) 35%, transparent 70%)",
              }}
              animate={{
                opacity: activeId && isDesktopHover ? 1 : 0.7,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <motion.div
              aria-hidden
              className="absolute left-1/2 bottom-[-14%] -translate-x-1/2 w-[85%] h-[18%] rounded-[50%] blur-2xl pointer-events-none"
              style={{ background: "rgba(0,0,0,0.55)" }}
              animate={{
                opacity: activeId && isDesktopHover ? 0.85 : 0.6,
                scaleX: activeId && isDesktopHover ? 1.05 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <Image
              src="/brand/AdoraAiCompact.svg"
              alt="Adora AI"
              width={176}
              height={87}
              priority
              className="relative w-[150px] sm:w-[190px] lg:w-[230px] h-auto drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)]"
            />
          </motion.div>
        </div>
      </div>

      <div className="px-2 py-4 sm:py-5 lg:py-6 text-center">
        <p className="text-[18px] sm:text-[24px] lg:text-[32px] font-light leading-[1.35] tracking-[-0.01em] text-fg2">
          {US_HOME_SUBHEAD}
        </p>
      </div>
    </section>
  );
}
