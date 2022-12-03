const withPlugins = require('next-compose-plugins');

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  strictMode: true,
  images: {
    domains: [],
  },
};

module.exports = withPlugins([], nextConfig);
