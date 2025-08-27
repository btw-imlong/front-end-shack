import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "hopeful-crown-f1e9853770.media.strapiapp.com", // 👈 add your Strapi uploads domain
    ],
  },
};

export default nextConfig;
