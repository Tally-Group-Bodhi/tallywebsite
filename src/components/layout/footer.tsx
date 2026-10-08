"use client";

import Link from "next/link";
import Image from "next/image";
import {
  JP_MARKETING_BASE,
  US_MARKETING_BASE,
  useMarketingBasePath,
  useMarketingHref,
} from "@/contexts/marketing-region";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const defaultProductLinks = [
  "Tally+",
  "Tally Glass",
  "Tally CRM",
  "Sales & Acquisition",
  "Tally Digital",
  "Orion & Acquire",
];
const defaultCompanyLinks = ["About", "Careers", "Insights", "Press kit", "Contact"];
const defaultResourceLinks = [
  "Platform",
  "Security & trust",
  "Status",
  "Developer docs",
  "Changelog",
];
const defaultLegalLinks = [
  "Privacy policy",
  "Terms of service",
  "Acceptable use",
  "Responsible disclosure",
  "Modern slavery",
];

const jpLegalLinks = ["プライバシーポリシー"];

const defaultLinkPaths: Record<string, string> = {
  Insights: "/blog",
  Contact: "/contact",
  About: "/about",
  Careers: "/careers",
};

function buildDefaultColumns(href: (path: string) => string): FooterColumn[] {
  const toColumn = (title: string, labels: string[]): FooterColumn => ({
    title,
    links: labels.map((label) => ({
      label,
      href: defaultLinkPaths[label] ? href(defaultLinkPaths[label]) : "#",
    })),
  });

  return [
    toColumn("Products", defaultProductLinks),
    toColumn("Company", defaultCompanyLinks),
    toColumn("Resources", defaultResourceLinks),
    toColumn("Legal", defaultLegalLinks),
  ];
}

function buildUSColumns(href: (path: string) => string): FooterColumn[] {
  return [
    {
      title: "Solutions",
      links: [
        { label: "Tally+", href: href("/overview") },
        { label: "Services", href: href("/services") },
      ],
    },
    {
      title: "Technology",
      links: [
        { label: "Architecture", href: href("/technology/architecture") },
        { label: "Security", href: href("/technology/security") },
        { label: "API Library", href: href("/technology/api-library") },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: href("/about") },
        { label: "Contact", href: href("/contact") },
      ],
    },
    {
      title: "News",
      links: [
        { label: "Press Releases", href: href("/news/press-releases") },
        { label: "Events", href: href("/news/events") },
      ],
    },
  ];
}

function buildJPColumns(href: (path: string) => string): FooterColumn[] {
  return [
    {
      title: "テクノロジー",
      links: [
        { label: "サービス", href: href("/services-beta") },
        { label: "アーキテクチャ", href: href("/technology/architecture") },
        { label: "セキュリティ", href: href("/technology/security") },
      ],
    },
    {
      title: "インサイト",
      links: [{ label: "資料", href: href("/insights/resources") }],
    },
    {
      title: "ニュース",
      links: [
        { label: "プレスリリース", href: href("/news/press-releases") },
        { label: "イベント", href: href("/news/events") },
      ],
    },
    {
      title: "会社情報",
      links: [
        { label: "会社情報", href: href("/about") },
        { label: "会社概要", href: href("/about#company-overview") },
        { label: "日本チーム", href: href("/about#japan-leadership") },
        { label: "企業理念", href: href("/about#mission-values") },
        { label: "お問い合わせ", href: href("/contact") },
      ],
    },
  ];
}

export function Footer() {
  const href = useMarketingHref();
  const basePath = useMarketingBasePath();
  const isAustralia = basePath === "";
  const isJP = basePath === JP_MARKETING_BASE;
  const isUS = basePath === US_MARKETING_BASE;

  const columns = isJP
    ? buildJPColumns(href)
    : isUS
      ? buildUSColumns(href)
      : buildDefaultColumns(href);

  const tagline = isJP
    ? "The platform for energy retailers in Japan. Proudly built in Australia."
    : isUS
      ? (
          <>
            The platform for energy retailers worldwide.
            <br />
            Trusted by leading energy providers.
          </>
        )
      : "The platform for global energy retailers. Proudly built in Australia.";

  const mainGridClass = isJP
    ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-x-[32px] gap-y-[40px] lg:gap-[48px]"
    : isUS
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-[48px]"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-[48px]";

  return (
    <footer className="bg-navy-dark text-white pt-[72px] pb-6">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className={`${mainGridClass} pb-[48px] border-b border-white/10`}>
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/logos/TallyOfficialLogo.svg"
              alt="Tally Group"
              width={140}
              height={27}
              className="h-[27px] w-auto brightness-0 invert"
            />
            <p className="mt-[16px] text-sm text-white/60 leading-relaxed max-w-[30ch]">
              {tagline}
            </p>
          </div>
          {columns.map((column) => (
            <FooterCol key={column.title} column={column} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[28px] text-[13px] text-white/50 gap-4">
          <div>
            {isJP
              ? "\u00a9 2026 Tally Group Pty Ltd"
              : "\u00a9 2026 Tally Group Pty Ltd \u00b7 ABN 41 629 117 804"}
          </div>
          {isJP && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {jpLegalLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isAustralia && (
          <p className="mt-[18px] text-xs text-white/55 leading-relaxed max-w-[60ch]">
            Tally Group acknowledges the Traditional Custodians of the lands on which we work. We pay our respect to their Elders past, present and emerging.
          </p>
        )}
      </div>
    </footer>
  );
}

function FooterCol({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h5 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-[16px]">
        {column.title}
      </h5>
      <ul className="flex flex-col gap-[10px]">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
