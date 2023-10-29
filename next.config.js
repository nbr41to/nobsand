/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['picsum.photos', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
