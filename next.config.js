/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

module.exports = nextConfig;

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
