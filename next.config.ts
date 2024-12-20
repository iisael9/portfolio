import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Ensures static export
  assetPrefix: isProd ? "/portfolio/" : "", // Set the base path
  basePath: isProd ? "/portfolio" : "", // Base path for GitHub Pages
};

export default nextConfig;
