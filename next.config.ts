import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3001",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/desafios", destination: "/retos", permanent: true },
      { source: "/desafios/:slug", destination: "/retos/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
