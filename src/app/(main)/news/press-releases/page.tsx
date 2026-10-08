import type { Metadata } from "next";
import { USCtaSection } from "@/components/us/cta-section";
import {
  PressReleasesList,
  type PressRelease,
} from "@/components/us/news/press-releases-list";

export const metadata: Metadata = {
  title: "Press releases",
  description: "Press releases and announcements from Tally Group.",
};

const pressReleases: PressRelease[] = [
  {
    slug: "skipping-stone-acquisition",
    date: "March 4, 2026",
    dateISO: "2026-03-04",
    title:
      "Tally Group Expands Global Footprint with Acquisition Of Skipping Stone",
    excerpt:
      "Tally Group announced today the acquisition of Skipping Stone, a global energy strategy and implementation consulting firm. Skipping Stone will continue operations under its own brand as a wholly owned subsidiary.",
    href: "/news/press-releases/skipping-stone-acquisition",
    image: "/corporate/SS Acquisition PR Image.png",
    imageAlt: "Announcement of Tally Group's acquisition of Skipping Stone",
  },
];

export default function USPressReleasesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[160px] lg:pb-[80px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[36px] lg:text-[56px] font-light leading-[1.1] tracking-[-0.025em] text-navy max-w-[26ch] m-0">
            Press releases
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            Press releases and announcements from Tally Group.
          </p>
        </div>
      </section>

      {/* List */}
      <PressReleasesList releases={pressReleases} />

      {/* Final CTA */}
      <USCtaSection
        eyebrow="Next steps"
        title="Let's talk about how Tally+ can support your business."
        description="Reach out about operational challenges, market strategy, or platform-adoption plans."
      />
    </>
  );
}
