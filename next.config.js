/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["compartox2.s3.us-east-2.amazonaws.com", "http2.mlstatic.com"],
  },
  experimental: { images: { layoutRaw: true } },
};

module.exports = nextConfig;
