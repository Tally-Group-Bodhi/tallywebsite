import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "News",
};

const newsItems = [
  {
    date: "October 5, 2026",
    datetime: "2026-10-05",
    title:
      "Tally Group Appoints Michael Harrison as Director of Business Development, North America",
    excerpt:
      "Tally Group announces the appointment of Michael Harrison as Director of Business Development, North America. Harrison will lead business development initiatives across the region to expand adoption of the Tally Group software platform.",
    href: "/corporate/news/michael-harrison-director-bd-north-america",
    image: "/corporate/Michael Harrison PR Image.png",
    imageAlt:
      "Announcement of Michael Harrison joining Tally Group as Director of Business Development, North America",
  },
  {
    date: "March 4, 2026",
    datetime: "2026-03-04",
    title: "Tally Group Expands Global Footprint with Acquisition Of Skipping Stone",
    excerpt:
      "Tally Group announced today the acquisition of Skipping Stone, a global energy strategy and implementation consulting firm. Skipping Stone will continue operations under its own brand as a wholly owned subsidiary.",
    href: "/corporate/news/skipping-stone-acquisition",
    image: "/corporate/SS Acquisition PR Image.png",
    imageAlt: "Tally Group acquisition of Skipping Stone announcement",
  },
];

export default function NewsPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate" },
          { label: "News" },
        ]}

        title="News"
        lede="Press releases and announcements from Tally Group."
      />

      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Latest
          </div>

          <ul className="list-none m-0 p-0 space-y-[24px] max-w-[860px]">
            {newsItems.map((item) => (
              <li key={item.href}>
                <article className="grid grid-cols-1 sm:grid-cols-[min(220px,36%)_1fr] gap-[28px] items-start bg-white border border-stroke1 rounded-xl p-[28px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  <Link
                    href={item.href}
                    className="block rounded-xl overflow-hidden leading-[0] border border-stroke1 hover:opacity-95 transition-opacity"
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={440}
                      height={330}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </Link>
                  <div>
                    <time
                      dateTime={item.datetime}
                      className="block font-mono text-xs font-semibold text-turquoise mb-[8px]"
                    >
                      {item.date}
                    </time>
                    <h2 className="m-0 mb-[12px] text-lg font-semibold text-navy tracking-tight leading-snug">
                      <Link href={item.href} className="text-inherit no-underline hover:text-turquoise transition-colors">
                        {item.title}
                      </Link>
                    </h2>
                    <p className="m-0 mb-[16px] text-sm leading-[1.55] text-fg2">
                      {item.excerpt}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-navy no-underline hover:text-turquoise transition-colors"
                    >
                      Read more <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
