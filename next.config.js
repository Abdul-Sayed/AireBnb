/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "a0.muscache.com", "upload.wikimedia.org"],
  },
  env: {
    mapboxStyleURL: "mapbox://styles/highway-man/clabjtu2p000g14mp3dbqxxzu",
    mapboxAccessToken:
      "pk.eyJ1IjoiaGlnaHdheS1tYW4iLCJhIjoiY2xhYmptZHcwMDExajNucnF6MjRleml1aSJ9.cAii63SvpA1X_J8d6SCQZQ",
  },
};

module.exports = nextConfig;
