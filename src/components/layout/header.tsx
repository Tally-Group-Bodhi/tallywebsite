"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  AE_MARKETING_BASE,
  JP_MARKETING_BASE,
  US_MARKETING_BASE,
  useMarketingHref,
  useMarketingBasePath,
} from "@/contexts/marketing-region";

const regions = [
  { id: "au", label: "Australia", abbr: "AU", flag: "🇦🇺" },
  { id: "nz", label: "New Zealand", abbr: "NZ", flag: "🇳🇿" },
  { id: "jp", label: "Japan", abbr: "JP", flag: "🇯🇵" },
  { id: "us", label: "United States", abbr: "US", flag: "🇺🇸" },
  { id: "ae", label: "UAE", abbr: "UAE", flag: "🇦🇪" },
];

type NavChild = { href: string; label: string };
type NavChildSection = { title: string; items: NavChild[] };
type NavLink = {
  href?: string;
  label: string;
  hasMenu?: boolean;
  children?: NavChild[];
  childSections?: NavChildSection[];
};

function buildNavLinks(href: (path: string) => string): NavLink[] {
  return [
    { href: href("/"), label: "Home" },
    { href: href("/#platform"), label: "Products", hasMenu: true },
    {
      href: href("/about"),
      label: "About",
      hasMenu: true,
      children: [
        { href: href("/about#who-we-are"), label: "Who we are" },
        { href: href("/about#history"), label: "Our history" },
        { href: href("/about#leadership"), label: "Leadership" },
        { href: href("/about#mission-values"), label: "Mission and values" },
      ],
    },
    { href: href("/careers"), label: "Careers" },
    { href: href("/blog"), label: "Insights" },
    { href: href("/contact"), label: "Contact" },
  ];
}

function buildUSNavLinks(href: (path: string) => string): NavLink[] {
  return [
    {
      label: "Solutions",
      hasMenu: true,
      childSections: [
        {
          title: "Platform",
          items: [
            { href: "#", label: "Tally+ Customer Mgmt" },
            { href: "#", label: "Tally Glass (AI)" },
          ],
        },
        {
          title: "By Focus Area",
          items: [
            { href: "#", label: "Electricity" },
            { href: "#", label: "Gas" },
            { href: "#", label: "Renewables" },
            { href: "#", label: "EV" },
            { href: "#", label: "BESS" },
            { href: "#", label: "DER" },
          ],
        },
      ],
    },
    { href: href("/services"), label: "Services" },
    {
      label: "Technology",
      hasMenu: true,
      children: [
        { href: href("/technology/architecture"), label: "Architecture" },
        { href: href("/technology/security"), label: "Security" },
        { href: href("/technology/api-library"), label: "API Library" },
      ],
    },
    {
      label: "Insights",
      hasMenu: true,
      children: [
        { href: href("/insights/case-studies"), label: "Case Studies" },
        { href: href("/insights/resources"), label: "Resources" },
      ],
    },
    {
      label: "News",
      hasMenu: true,
      children: [
        { href: href("/news/press-releases"), label: "Press Releases" },
        { href: href("/news/events"), label: "Events" },
      ],
    },
    {
      href: href("/about"),
      label: "About",
      hasMenu: true,
      children: [
        { href: href("/about#who-we-are"), label: "Who we are" },
        { href: href("/about#history"), label: "Our history" },
        { href: href("/about#leadership"), label: "Leadership" },
        { href: href("/about#mission-values"), label: "Mission and values" },
      ],
    },
    { href: href("/contact"), label: "Contact" },
  ];
}

function buildAENavLinks(): NavLink[] {
  return [
    { href: "/ae", label: "الرئيسية" },
    { href: "/ae/about", label: "عن الشركة" },
    { href: "/ae/contact", label: "تواصل معنا" },
  ];
}

function buildAEEnNavLinks(): NavLink[] {
  return [
    { href: "/ae/en", label: "Home" },
    { href: "/ae/en/about", label: "About" },
    { href: "/ae/en/contact", label: "Contact" },
  ];
}

function buildJPNavLinks(href: (path: string) => string): NavLink[] {
  return [
    // TODO: Restore the "ソリューション" (Solutions) menu once Japan-specific
    // content is ready. Hidden for now.
    // {
    //   label: "ソリューション",
    //   hasMenu: true,
    //   childSections: [
    //     {
    //       title: "プラットフォーム",
    //       items: [
    //         { href: "#", label: "Tally+ 顧客管理" },
    //         { href: "#", label: "Tally Glass(AI)" },
    //       ],
    //     },
    //     {
    //       title: "分野別",
    //       items: [
    //         { href: "#", label: "電力" },
    //         { href: "#", label: "ガス" },
    //         { href: "#", label: "再生可能エネルギー" },
    //         { href: "#", label: "EV" },
    //         { href: "#", label: "BESS" },
    //         { href: "#", label: "DER" },
    //       ],
    //     },
    //   ],
    // },
    { href: href("/services-beta"), label: "サービス" },
    {
      label: "テクノロジー",
      hasMenu: true,
      children: [
        { href: href("/technology/architecture"), label: "アーキテクチャ" },
        { href: href("/technology/security"), label: "セキュリティ" },
      ],
    },
    {
      label: "インサイト",
      hasMenu: true,
      children: [{ href: href("/insights/resources"), label: "資料" }],
    },
    {
      label: "ニュース",
      hasMenu: true,
      children: [
        { href: href("/news/press-releases"), label: "プレスリリース" },
        { href: href("/news/events"), label: "イベント" },
      ],
    },
    {
      href: href("/about"),
      label: "会社情報",
      hasMenu: true,
      children: [
        { href: href("/about"), label: "会社情報" },
        { href: href("/about#company-overview"), label: "会社概要" },
        { href: href("/about#japan-leadership"), label: "日本チーム" },
        { href: href("/about#mission-values"), label: "企業理念" },
      ],
    },
    { href: href("/contact"), label: "お問い合わせ" },
  ];
}

function navLinkClassName(isActive: boolean) {
  return `text-[15px] font-normal leading-none inline-flex items-center gap-[3px] transition-colors ${
    isActive ? "text-turquoise" : "text-[#2A2E3A] hover:text-navy"
  }`;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const href = useMarketingHref();
  const basePath = useMarketingBasePath();
  const isUS = basePath === US_MARKETING_BASE;
  const isJP = basePath === JP_MARKETING_BASE;
  // The Header is rendered by the outer /ae layout, so basePath is always
  // "/ae" on UAE routes — we read pathname to tell AR vs EN.
  const isAE = basePath === AE_MARKETING_BASE || pathname.startsWith("/ae");
  const isAEEn = isAE && (pathname === "/ae/en" || pathname.startsWith("/ae/en/"));
  const navLinks = useMemo(
    () =>
      isUS
        ? buildUSNavLinks(href)
        : isJP
        ? buildJPNavLinks(href)
        : isAEEn
        ? buildAEEnNavLinks()
        : isAE
        ? buildAENavLinks()
        : buildNavLinks(href),
    [href, isUS, isJP, isAE, isAEEn],
  );

  const activeRegionId = isUS ? "us" : isJP ? "jp" : isAE ? "ae" : "au";
  const aeHomeHref = isAEEn ? "/ae/en" : "/ae";
  const aeContactHref = isAEEn ? "/ae/en/contact" : "/ae/contact";
  const region = regions.find((r) => r.id === activeRegionId) ?? regions[0];
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
        setOpenMenu(null);
        setMobileDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  function selectRegion(regionId: string) {
    setOpen(false);
    closeMobile();

    if (regionId === "us") {
      router.push(US_MARKETING_BASE);
      return;
    }

    if (regionId === "jp") {
      router.push(JP_MARKETING_BASE);
      return;
    }

    if (regionId === "ae") {
      router.push(AE_MARKETING_BASE);
      return;
    }

    if (regionId === "au") {
      router.push("/");
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <header className="max-w-[1280px] mx-auto bg-white/60 backdrop-blur-xl backdrop-saturate-[180%] border border-white/40 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06),_0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="px-6 sm:px-8 flex items-center h-14">
          <Link
            href={isAE ? aeHomeHref : href("/")}
            className="shrink-0"
            onClick={closeMobile}
            aria-label="Tally+"
          >
            <Image src="/logos/TallyPlus.svg" alt="Tally+" width={130} height={25} className="h-[25px] w-auto" />
          </Link>

          <nav ref={navRef} className="hidden lg:flex items-center gap-6 ml-8">
            {navLinks.map((link) => {
              const isOpen = openMenu === link.label;
              const isActive = Boolean(link.href && pathname === link.href);


              if (link.children || link.childSections) {
                const triggerClass = `${navLinkClassName(isActive)} py-[18px]`;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {link.href ? (
                      <Link
                        href={link.href}
                        className={triggerClass}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <span
                          className={`material-symbols-outlined text-[15px] opacity-60 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className={`${triggerClass} bg-transparent border-0 cursor-pointer`}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <span
                          className={`material-symbols-outlined text-[15px] opacity-60 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                    )}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div
                          className={`bg-white border border-stroke1 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] ${
                            link.childSections ? "w-[420px] p-4" : "w-[240px] py-1.5"
                          }`}
                          role="menu"
                        >
                          <NavDropdownItems
                            children={link.children}
                            childSections={link.childSections}
                            onNavigate={() => setOpenMenu(null)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href ?? "#"}
                  className={navLinkClassName(isActive)}
                >
                  {link.label}
                  {link.hasMenu && (
                    <span className="material-symbols-outlined text-[15px] opacity-60">expand_more</span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden lg:flex items-center gap-3">
            {isAE && (
              <div
                className="inline-flex items-center text-[12px] font-semibold leading-none"
                role="group"
                aria-label="Language"
                dir="ltr"
              >
                <Link
                  href="/ae"
                  aria-current={!isAEEn ? "true" : undefined}
                  className={`px-2 py-1 transition-colors ${
                    !isAEEn
                      ? "text-navy"
                      : "text-fg2 hover:text-navy"
                  }`}
                >
                  AR
                </Link>
                <span aria-hidden className="text-fg2/40">|</span>
                <Link
                  href="/ae/en"
                  aria-current={isAEEn ? "true" : undefined}
                  className={`px-2 py-1 transition-colors ${
                    isAEEn
                      ? "text-navy"
                      : "text-fg2 hover:text-navy"
                  }`}
                >
                  EN
                </Link>
              </div>
            )}
            <div className="relative" ref={ref}>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-1.5 px-5 py-[9px] rounded-full text-[13px] font-medium text-fg1 bg-white hover:bg-bg3 transition-all leading-none"
                aria-label={`Change region: ${region.label}`}
                aria-expanded={open}
              >
                <span>{region.abbr}</span>
                <span className="material-symbols-outlined text-[13px] opacity-50">expand_more</span>
              </button>

              {open && (
                <div className="absolute top-full right-0 mt-2 w-[180px] bg-white border border-stroke1 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] py-1 z-50">
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => selectRegion(r.id)}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-left transition-colors ${
                        r.id === activeRegionId
                          ? "font-semibold text-navy bg-bg2"
                          : "text-fg1 hover:bg-bg2"
                      }`}
                    >
                      <span className="text-[15px]">{r.flag}</span>
                      {r.label}
                      {r.id === activeRegionId && (
                        <span className="material-symbols-outlined text-[14px] ml-auto text-turquoise">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={isAE ? aeContactHref : href("/contact")}
              className="inline-flex items-center gap-2 px-5 py-[9px] rounded-full text-[13px] font-medium leading-none bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
            >
              {isJP
                ? "デモのご相談"
                : isAE && !isAEEn
                ? "احجز عرضًا تجريبيًا"
                : "Book a demo"}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden ml-auto inline-flex flex-col justify-center items-center w-9 h-9 gap-[5px] bg-transparent border-0 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            className="lg:hidden border-t border-white/50 px-6 py-4 max-h-[calc(100vh-6rem)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = Boolean(link.href && pathname === link.href);
                const hasSubnav = Boolean(link.children?.length || link.childSections?.length);

                if (hasSubnav) {
                  return (
                    <MobileNavAccordion
                      key={link.label}
                      label={link.label}
                      open={mobileDropdown === link.label}
                      onToggle={() =>
                        setMobileDropdown((prev) => (prev === link.label ? null : link.label))
                      }
                    >
                      <NavDropdownItems
                        children={link.children}
                        childSections={link.childSections}
                        onNavigate={closeMobile}
                        variant="mobile"
                      />
                    </MobileNavAccordion>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href ?? "#"}
                    onClick={closeMobile}
                    className={`block py-2.5 text-[15px] font-normal transition-colors ${
                      isActive ? "text-turquoise" : "text-[#2A2E3A] hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/50 flex flex-col gap-3">
              {isAE && (
                <div dir="ltr">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-fg2 font-semibold mb-2">
                    Language
                  </p>
                  <div className="inline-flex items-center text-[13px] font-semibold leading-none border border-stroke1 rounded-full overflow-hidden bg-white/70">
                    <Link
                      href="/ae"
                      onClick={closeMobile}
                      aria-current={!isAEEn ? "true" : undefined}
                      className={`px-4 py-1.5 transition-colors ${
                        !isAEEn ? "bg-navy text-white" : "text-fg1 hover:bg-bg3"
                      }`}
                    >
                      AR
                    </Link>
                    <Link
                      href="/ae/en"
                      onClick={closeMobile}
                      aria-current={isAEEn ? "true" : undefined}
                      className={`px-4 py-1.5 transition-colors ${
                        isAEEn ? "bg-navy text-white" : "text-fg1 hover:bg-bg3"
                      }`}
                    >
                      EN
                    </Link>
                  </div>
                </div>
              )}
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-fg2 font-semibold mb-2">Region</p>
                <div className="flex flex-wrap gap-1.5">
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => selectRegion(r.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-medium leading-none transition-all ${
                        r.id === activeRegionId
                          ? "border-navy bg-navy text-white"
                          : "border-stroke1 bg-white/70 text-fg1 hover:bg-bg3"
                      }`}
                    >
                      <span className="text-[14px]">{r.flag}</span>
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href={isAE ? aeContactHref : href("/contact")}
                onClick={closeMobile}
                className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
              >
                {isJP
                  ? "デモのご相談"
                  : isAE && !isAEEn
                  ? "احجز عرضًا تجريبيًا"
                  : "Book a demo"}
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

function NavDropdownItems({
  children,
  childSections,
  onNavigate,
  variant = "desktop",
}: {
  children?: NavChild[];
  childSections?: NavChildSection[];
  onNavigate: () => void;
  variant?: "desktop" | "mobile";
}) {
  const linkClassName =
    variant === "mobile"
      ? "block py-2 text-[13px] font-normal text-fg2 hover:text-navy transition-colors"
      : "block px-4 py-2.5 text-[14px] text-fg1 hover:bg-bg2 hover:text-navy transition-colors";

  const sectionTitleClassName =
    variant === "mobile"
      ? "text-[11px] uppercase tracking-[0.1em] text-turquoise font-semibold mb-2 mt-2 first:mt-0"
      : "px-4 pt-2.5 pb-1 text-[11px] font-normal uppercase tracking-[0.1em] text-fg2/55";

  if (childSections) {
    if (variant === "desktop") {
      return (
        <div className="grid grid-cols-2 gap-6">
          {childSections.map((section) => (
            <div key={section.title}>
              <p className={sectionTitleClassName}>{section.title}</p>
              {section.items.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  role="menuitem"
                  onClick={onNavigate}
                  className={linkClassName}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return (
      <>
        {childSections.map((section, index) => (
          <div key={section.title}>
            {index > 0 && (
              <div className="mx-3 my-1 border-t border-stroke1" role="separator" />
            )}
            <p className={sectionTitleClassName}>{section.title}</p>
            {section.items.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                role="menuitem"
                onClick={onNavigate}
                className={linkClassName}
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
      </>
    );
  }

  return (children ?? []).map((child) => (
    <Link
      key={child.label}
      href={child.href}
      role="menuitem"
      onClick={onNavigate}
      className={linkClassName}
    >
      {child.label}
    </Link>
  ));
}

function MobileNavAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2.5 text-[15px] font-normal text-[#2A2E3A] bg-transparent border-0 cursor-pointer hover:text-navy transition-colors"
      >
        {label}
        <span
          className={`material-symbols-outlined text-[16px] opacity-70 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {open && <div className="pl-4 pb-2 flex flex-col border-l border-stroke1 ml-1">{children}</div>}
    </div>
  );
}
