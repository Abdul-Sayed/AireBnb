/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "a0.muscache.com", "upload.wikimedia.org"],
  },
  env: {
    mapboxStyleURL: process.env.MAPBOX_STYLE_URL,
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
