import type { NextConfig } from "next";

const allowAnyImageHost = process.env.ALLOW_ANY_IMAGE_HOSTS === "true";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: allowAnyImageHost
      ? [{ protocol: "https", hostname: "**" }]
      : [
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "plus.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "drive.google.com",
          },
        ],
  },
};

export default nextConfig;
