import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/index.html",
      },
      {
        source: "/scrollytelling",
        destination: "/scrollytelling/index.html",
      },
    ];
  },
};

export default nextConfig;
