const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: isProd ? "/travelmate-web/" : "",
};

module.exports = nextConfig;
