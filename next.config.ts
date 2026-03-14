import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages deployment usually happens at https://<username>.github.io/<repo-name>/
  // If deploying to a custom domain, comment out or remove the basePath line below.
  basePath: '/Suy-Ngam-Ve-Thanh-Giuse',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
