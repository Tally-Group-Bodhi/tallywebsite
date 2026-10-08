"use client";

import { createContext, useContext, useMemo } from "react";

/** Empty string — US is the default site at the root. */
export const US_MARKETING_BASE = "";
export const JP_MARKETING_BASE = "/jp";
export const AE_MARKETING_BASE = "/ae";
export const AE_EN_MARKETING_BASE = "/ae/en";

function resolveMarketingHref(basePath: string, path: string): string {
  if (path.startsWith("/corporate")) {
    return path;
  }

  if (path.startsWith("#")) {
    return path;
  }

  const hashIndex = path.indexOf("#");
  if (hashIndex !== -1) {
    const pathname = path.slice(0, hashIndex) || "/";
    const hash = path.slice(hashIndex);
    const resolved = pathname === "/" ? basePath || "/" : `${basePath}${pathname}`;
    return `${resolved}${hash}`;
  }

  if (path === "/" && basePath) {
    return basePath;
  }

  return `${basePath}${path}`;
}

type MarketingRegionContextValue = {
  basePath: string;
  href: (path: string) => string;
};

const MarketingRegionContext = createContext<MarketingRegionContextValue>({
  basePath: "",
  href: (path) => path,
});

export function MarketingRegionProvider({
  basePath = "",
  children,
}: {
  basePath?: string;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      basePath,
      href: (path: string) => resolveMarketingHref(basePath, path),
    }),
    [basePath],
  );

  return (
    <MarketingRegionContext.Provider value={value}>{children}</MarketingRegionContext.Provider>
  );
}

export function useMarketingHref() {
  return useContext(MarketingRegionContext).href;
}

export function useMarketingBasePath() {
  return useContext(MarketingRegionContext).basePath;
}

export function regionalPathForSwitch(
  targetBase: string,
  pathname: string,
  currentBase: string,
): string {
  let path = pathname;
  if (currentBase && path.startsWith(currentBase)) {
    path = path.slice(currentBase.length) || "/";
  }
  if (targetBase === "") {
    return path;
  }
  return path === "/" ? targetBase : `${targetBase}${path}`;
}
