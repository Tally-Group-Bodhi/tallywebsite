import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/us",
        destination: "/",
        permanent: false,
      },
      {
        source: "/us/:path*",
        destination: "/:path*",
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
