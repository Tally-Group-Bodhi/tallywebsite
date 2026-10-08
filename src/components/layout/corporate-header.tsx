"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const aboutLinks = [
  { label: "Company", href: "/corporate/company" },
  { label: "Leadership", href: "/corporate/leadership" },
  { label: "Mission and Values", href: "/corporate/mission-values" },
];

const regions = [
  { key: "au", label: "Australia", shortLabel: "Australia", abbr: "AU" },
  { key: "us", label: "United States", shortLabel: "United States", abbr: "US" },
  { key: "jp", label: "Japan", shortLabel: "Japan", abbr: "JP" },
];

const AU_SITE_URL = "https://tally.co";
const JP_SITE_URL = "https://tally-plus.jp";

export function CorporateHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [locationOpen, setLocationOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const locationRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setLocationOpen(false);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setLocationOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeAll]);

  const isAboutPage = aboutLinks.some((l) => pathname === l.href);

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md backdrop-saturate-[180%] border-b border-stroke1">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center h-16">
        <Link href="/corporate" className="shrink-0">
          <Image
            src="/logos/TallyOfficialLogo.svg"
            alt="Tally Group"
            width={140}
            height={27}
            className="h-[27px] w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-[28px] ml-8" aria-label="Primary">
          {/* About dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={`bg-transparent border-0 text-sm font-medium cursor-pointer leading-none inline-flex items-center gap-[3px] transition-colors ${isAboutPage ? "text-navy" : "text-fg1 hover:text-navy"}`}
            >
              About
              <span className="material-symbols-outlined text-[16px] opacity-70">expand_more</span>
            </button>
            <ul className="absolute left-0 top-full mt-1 min-w-[220px] py-2 m-0 list-none bg-white border border-stroke1 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm no-underline hover:bg-bg3 transition-colors ${pathname === link.href ? "text-navy font-semibold" : "text-fg1 font-medium"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/corporate/offices"
            className={`text-sm font-medium leading-none no-underline transition-colors ${pathname === "/corporate/offices" ? "text-navy" : "text-fg1 hover:text-navy"}`}
          >
            Global Offices
          </Link>
          <Link
            href="/corporate/news"
            className={`text-sm font-medium leading-none no-underline transition-colors ${pathname?.startsWith("/corporate/news") ? "text-navy" : "text-fg1 hover:text-navy"}`}
          >
            News
          </Link>
          <Link
            href="/corporate/contact"
            className={`text-sm font-medium leading-none no-underline transition-colors ${pathname === "/corporate/contact" ? "text-navy" : "text-fg1 hover:text-navy"}`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-[12px]">
          {/* Location selector */}
          <div className="relative" ref={locationRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLocationOpen(!locationOpen);
              }}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-stroke1 bg-white text-sm font-medium text-fg1 cursor-pointer transition-all hover:border-navy/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              aria-expanded={locationOpen}
              aria-haspopup="listbox"
              aria-label={`Location: ${activeRegion.shortLabel}. Click to change.`}
            >
              <span>{activeRegion.abbr}</span>
              <span className="material-symbols-outlined text-[14px] text-fg3">expand_more</span>
            </button>

            {locationOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-[320px] bg-white border border-stroke1 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.14)] z-[60] overflow-hidden">
                <div className="px-[20px] pt-[20px] pb-[12px] border-b border-stroke1">
                  <h3 className="m-0 text-base font-bold text-navy tracking-tight">Select Your Location</h3>
                  <p className="m-0 mt-[4px] text-xs text-fg2">Choose the region closest to you.</p>
                </div>
                <ul className="m-0 p-[8px] list-none" role="listbox" aria-label="Select region">
                  {regions.map((region) => {
                    const isActive = activeRegion.key === region.key;
                    return (
                      <li key={region.key} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          className={`w-full text-left px-[12px] py-[10px] rounded-lg text-sm font-medium cursor-pointer border-0 transition-all flex items-center justify-between gap-[8px] ${
                            isActive
                              ? "bg-navy text-white"
                              : "bg-transparent text-fg1 hover:bg-bg3"
                          }`}
                          onClick={() => {
                            setLocationOpen(false);
                            if (region.key === "us") {
                              router.push("/us");
                              return;
                            }
                            if (region.key === "au") {
                              window.location.assign(AU_SITE_URL);
                              return;
                            }
                            if (region.key === "jp") {
                              window.location.assign(JP_SITE_URL);
                              return;
                            }
                            setActiveRegion(region);
                          }}
                        >
                          <span className="flex items-center gap-[8px]">
                            <span className={`material-symbols-outlined text-[18px] ${isActive ? "text-turquoise" : "text-fg3"}`}>location_on</span>
                            {region.label}
                          </span>
                          {isActive && (
                            <span className="material-symbols-outlined text-[18px] text-turquoise">check</span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/corporate/contact"
            className="hidden lg:inline-flex items-center gap-2 px-7 py-[12px] rounded-full text-[14px] font-semibold leading-none bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
