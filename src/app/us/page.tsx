import { HomeBetaQuadGridUS } from "@/components/home/us/home-beta-quad-grid";
import { HighlightsSectionUS } from "@/components/home/us/highlights-section-us";
import { MetricsSectionUS } from "@/components/home/us/metrics-section-us";
import { LogoMarqueeUS } from "@/components/home/us/logo-marquee-us";
import { USCtaSection } from "@/components/us/cta-section";

export default function USHome() {
  return (
    <>
      <HomeBetaQuadGridUS />
      <HighlightsSectionUS />
      <MetricsSectionUS />
      <LogoMarqueeUS />
      <USCtaSection
        title="Ready for a solution that fits today and tomorrow's marketplace?"
        description="Even if you already have a back office solution, it's worth your time to see what a modern global solution looks like."
        primaryLabel="Book a demo"
        secondaryLabel="Contact us"
      />
    </>
  );
}
