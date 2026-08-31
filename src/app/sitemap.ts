import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const auPages = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/blog",
    "/products/billing",
    "/products/digital",
    "/products/dss",
    "/products/customer",
    "/products/acquire",
    "/products/acquire/uconx",
    "/products/template",
    "/products/product-page/1",
    "/products/product-page/2",
    "/products/product-page/3",
    "/products/product-page/4",
    "/products/product-page/5",
  ];

  const aePages = ["", "/about", "/contact"];

  const staticPages = [
    ...auPages,
    ...auPages.map((path) => (path === "" ? "/us" : `/us${path}`)),
    "/us/overview",
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
