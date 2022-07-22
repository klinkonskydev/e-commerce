/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = nextConfig
