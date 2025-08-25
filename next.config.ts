import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // allow Strapi Cloudinary images
  },
};

export default nextConfig;
