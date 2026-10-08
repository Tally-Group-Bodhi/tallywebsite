import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const usPages = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/blog",
    "/overview",
    "/services",
    "/products/billing",
    "/products/digital",
    "/products/dss",
    "/products/customer",
    "/products/acquire",
    "/products/acquire/uconx",
    "/technology/architecture",
    "/technology/security",
    "/technology/api-library",
    "/technology/audit",
    "/insights/case-studies",
    "/insights/resources",
    "/news/press-releases",
    "/news/events",
  ];

  const aePages = ["", "/about", "/contact"];

  const staticPages = [
    ...usPages,
    ...aePages.map((path) => (path === "" ? "/ae" : `/ae${path}`)),
    ...aePages.map((path) => (path === "" ? "/ae/en" : `/ae/en${path}`)),
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") ? 0.8 : 0.7,
  }));
}
