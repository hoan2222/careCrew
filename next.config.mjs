/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/public",
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
