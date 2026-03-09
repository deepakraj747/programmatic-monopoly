import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
  },
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
    ];
  },
};

export default nextConfig;