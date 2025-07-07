import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/swift-android-site',
  assetPrefix: '/swift-android-site/',
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);