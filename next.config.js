/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'api.example.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
