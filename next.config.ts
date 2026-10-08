import type { NextConfig } from "next";

/** Former /us page routes — do not catch-all, or public/us assets 404. */
const usPageRedirects = [
  "/about",
  "/blog",
  "/blog/:slug",
  "/careers",
  "/contact",
  "/overview",
  "/services",
  "/insights/case-studies",
  "/insights/case-studies/voltedge-retail",
  "/insights/resources",
  "/news/events",
  "/news/press-releases",
  "/news/press-releases/skipping-stone-acquisition",
  "/products/acquire",
  "/products/acquire/uconx",
  "/products/billing",
  "/products/customer",
  "/products/digital",
  "/products/dss",
  "/technology/api-library",
  "/technology/architecture",
  "/technology/audit",
  "/technology/security",
].map((path) => ({
  source: `/us${path}`,
  destination: path,
  permanent: false,
}));

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/us",
        destination: "/",
        permanent: false,
      },
      ...usPageRedirects,
      {
        source: "/jp/services",
        destination: "/jp/services-beta",
        permanent: false,
      },
    ];
  },
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
