"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MarketingLink } from "@/components/marketing/marketing-link";

export type EventItem = {
  slug: string;
  date: string;
  dateISO: string;
  title: string;
  titleLines?: string[];
  location: string;
  description: string;
  href: string;
  external?: boolean;
  tone: 1 | 2 | 3 | 4;
  icon: string;
  image?: string;
};

const MEDIA_TONES: Record<
  1 | 2 | 3 | 4,
  { gradient: string; pattern: string; iconColor: string }
> = {
  1: {
    gradient:
      "linear-gradient(135deg, #1E2840 0%, #2C365D 55%, #0B7A66 100%)",
    pattern:
      "radial-gradient(circle at 85% 20%, rgba(0,210,162,0.35), transparent 55%)",
    iconColor: "rgba(0, 210, 162, 0.9)",
  },
  2: {
    gradient:
      "linear-gradient(135deg, #0B5468 0%, #1A88A0 55%, #00D2A2 100%)",
    pattern:
      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
  3: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #3F4F8F 55%, #5A7BBF 100%)",
    pattern:
      "radial-gradient(circle at 75% 75%, rgba(0,210,162,0.28), transparent 55%)",
    iconColor: "rgba(0, 210, 162, 0.95)",
  },
  4: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #5B3F7A 50%, #C77B4A 100%)",
    pattern:
      "radial-gradient(circle at 30% 80%, rgba(255,210,140,0.28), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export function EventsList({ events }: { events: EventItem[] }) {
  return (
    <section
      className="pt-[40px] pb-[56px] lg:pt-[48px] lg:pb-[72px]"
      aria-labelledby="events-upcoming-heading"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex items-baseline gap-3 mb-[24px]">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.12em] inline-flex items-center gap-2">
            <span
              className="w-[18px] h-[1px] bg-turquoise inline-block"
              aria-hidden
            />
            Upcoming
          </div>
        </div>
        <h2
          id="events-upcoming-heading"
          className="text-[24px] lg:text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-navy m-0 mb-[28px] lg:mb-[36px]"
        >
          Upcoming events
        </h2>

        {events.length === 0 ? (
          <div
            role="status"
            className="border border-dashed border-stroke1 rounded-2xl bg-bg2 px-[24px] py-[48px] text-center"
          >
            <p className="text-base text-navy font-semibold m-0">
              No upcoming events to share right now
            </p>
            <p className="text-sm text-fg2 mt-[8px] m-0">
              We&apos;ll post new events here as soon as they&apos;re scheduled.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {events.map((event, i) => (
              <motion.div
                key={event.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const tone = MEDIA_TONES[event.tone];
  const titleLines = event.titleLines ?? [event.title];

  const linkProps = event.external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <a
        href={event.href}
        aria-label={`${event.title}: ${event.date}, ${event.location}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
        {...linkProps}
      >
        <span className="sr-only">View event details</span>
      </a>

      <div
        className="relative aspect-[16/10] overflow-hidden"
        role="img"
        aria-label={`${event.title} image`}
        style={event.image ? { background: "#f8f9f4" } : { background: tone.gradient }}
      >
        {event.image ? (
          <Image
            src={event.image}
            alt=""
            fill
            className="object-contain scale-[1.2]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: tone.pattern }}
              aria-hidden
            />
            <div className="absolute inset-0 grid place-items-center">
              <span
                className="material-symbols-outlined text-[96px]"
                style={{ color: tone.iconColor }}
                aria-hidden
              >
                {event.icon}
              </span>
            </div>
          </>
        )}
        <span className="absolute top-[12px] right-[12px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/55 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
          <span
            className="material-symbols-outlined text-[14px]"
            aria-hidden
          >
            event
          </span>
          Event
        </span>
        <span className="absolute bottom-[12px] left-[14px] inline-flex items-center px-[10px] py-[4px] rounded-full bg-white/90 text-navy text-[11px] font-semibold tracking-[0.04em]">
          {event.location}
        </span>
      </div>

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fg2 m-0">
          <time dateTime={event.dateISO}>{event.date}</time>
        </p>
        <h3 className="mt-[8px] text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <p className="mt-[14px] text-[14px] leading-[1.7] text-fg2 m-0 flex-1">
          {event.description}
        </p>

        <div className="mt-auto pt-[20px]">
          <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-navy group-hover:text-turquoise transition-colors">
            View details
            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden
            >
              {event.external ? "open_in_new" : "arrow_forward"}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}

export function MeetInPersonSection({
  href = "/contact",
}: {
  href?: string;
}) {
  return (
    <section
      className="pb-[80px] lg:pb-[96px]"
      aria-labelledby="meet-in-person-heading"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative overflow-hidden bg-white border border-stroke1 rounded-2xl p-[28px] sm:p-[40px] lg:p-[48px] flex flex-col gap-[20px] lg:flex-row lg:items-center lg:gap-[40px]">
          <div
            className="absolute -right-[80px] -top-[80px] w-[300px] h-[300px] rounded-full pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle, rgba(0,210,162,0.10), transparent 60%)",
            }}
          />
          <div className="relative flex-1">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.12em] mb-[14px] inline-flex items-center gap-2">
              <span
                className="w-[18px] h-[1px] bg-turquoise inline-block"
                aria-hidden
              />
              Meet in person
            </div>
            <h2
              id="meet-in-person-heading"
              className="text-[22px] lg:text-[28px] font-light leading-[1.25] tracking-[-0.02em] text-navy max-w-[28ch] m-0"
            >
              Meet our team in person
            </h2>
            <p className="mt-[14px] text-[15.5px] leading-[1.7] text-fg2 max-w-[44ch] m-0">
              We&apos;d love to connect at an upcoming event. Reach out to schedule a meeting on-site.
            </p>
          </div>
          <div className="relative shrink-0">
            <MarketingLink
              href={href}
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
            >
              Contact us
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden
              >
                arrow_forward
              </span>
            </MarketingLink>
          </div>
        </div>
      </div>
    </section>
  );
}
