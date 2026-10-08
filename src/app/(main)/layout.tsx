import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarketingRegionProvider, US_MARKETING_BASE } from "@/contexts/marketing-region";

export const metadata: Metadata = {
  title: {
    default: "Tally Group — The platform for energy retailers",
    template: "%s | Tally Group",
  },
  description:
    "One platform, eight products — running the retail, sales and operations software behind energy retailers.",
  openGraph: {
    locale: "en_US",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingRegionProvider basePath={US_MARKETING_BASE}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </MarketingRegionProvider>
  );
}
