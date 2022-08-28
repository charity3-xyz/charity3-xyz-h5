/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:url*',
        destination: 'http://localhost:5050/:url*',
      },
    ];
  },
};

module.exports = nextConfig;
