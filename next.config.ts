import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Enable compression
  compress: true,

  // Optimize production builds
  reactStrictMode: true,

  // Remove X-Powered-By header (security + tiny size)
  poweredByHeader: false,
};

export default nextConfig;
