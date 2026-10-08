import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/us",
        permanent: false,
      },
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
