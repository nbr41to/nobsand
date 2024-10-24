/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    ppr: 'incremental',
  },
  images: {
    domains: ['picsum.photos', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
