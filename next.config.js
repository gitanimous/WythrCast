/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://timezone.abstractapi.com/:path*",
      },
      {
        source: "/",
        destination: "https://api.openweathermap.org/:path*",
      },
    ];
  },
  images: {
    domains: [
      "i.imgur.com",
      "images.unsplash.com",
      "media.giphy.com",
      "camo.githubusercontent.com",
      "dev-to-uploads.s3.amazonaws.com",
      "im2.ezgif.com",
      "user-images.githubusercontent.com",
      "openweathermap.org",
    ],
  },
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    TIMEZONE_API_KEY: process.env.TIMEZONE_API_KEY,
  },
};
