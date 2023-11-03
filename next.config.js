const withVideos = require("next-videos");

module.exports = withVideos({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
  },
});
