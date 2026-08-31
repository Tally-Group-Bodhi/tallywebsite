import type { Metadata } from "next";
import { TallyOverviewPage } from "@/components/us/overview/tally-overview-page";
import { USCtaSection } from "@/components/us/cta-section";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "One modular platform for billing, sales, customer engagement, and energy transition—configured to how U.S. retailers actually operate.",
};

export default function USOverviewPage() {
  return (
    <>
      <TallyOverviewPage />
      <USCtaSection
        title="See how Tally+ fits your retail stack"
        description="Even if you already have a back-office solution, it's worth seeing what a modern global platform looks like for the U.S. market."
        primaryLabel="Book a Demo"
        secondaryLabel="Contact Us"
        className="px-4 sm:px-6 py-[24px] sm:py-[32px]"
      />
    </>
  );
}
