/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  rewrites: async () => {
    return [
      {
        source: "/test/:id",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
