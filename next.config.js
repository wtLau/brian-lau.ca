module.exports = {
  images: {
    domains: [
      'avatars.githubusercontent.com', // Github Image
      'lh3.googleusercontent.com', // Google Image
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap.js')
      // require('./scripts/generate-rss')
    }

    return config
  },
}
