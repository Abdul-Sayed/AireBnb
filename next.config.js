/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "a0.muscache.com",
      "upload.wikimedia.org",
      "news.airbnb.com",
      "images.pexels.com",
      "images.contentstack.io",
      "media.timeout.com",
      "jonesaroundtheworld.com",
      "tii.imgix.net",
      "www.roadaffair.com",
      "cdn.animalhi.com",
    ],
  },
  env: {
    mapboxStyleURL: process.env.MAPBOX_STYLE_URL,
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
    airbnbApiKey: process.env.AIRBNB_API_KEY,
    airbnbApiHost: process.env.AIRBNB_API_HOST,
  },
};

module.exports = nextConfig;
