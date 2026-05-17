import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'api.example.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig
