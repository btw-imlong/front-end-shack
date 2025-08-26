import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "localhost"], // allow Strapi localhost images
  },
};

export default nextConfig;
