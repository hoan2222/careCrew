/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/careCrew/",
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
