// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   images: {
// //     remotePatterns: [ 
// //       {
// //       protocol: 'https',
// //       hostname: 'storage.googleapis.com',
// //     },
// //       {
// //       protocol: 'https',
// //       hostname: 't4.ftcdn.net',
// //     },
// //       {
// //       protocol: 'https',
// //       hostname: 'www.influencer.in',
// //     },
// //       {
// //       protocol: 'https',
// //       hostname: 'utfs.io',
// //     },
// //       {
// //       protocol: 'https',
// //       hostname: 'instagram.fdel45-1.fna.fbcdn.net',
// //     },
// //       {
// //       protocol: 'https',
// //       hostname: 'yt3.googleusercontent.com',
// //     },
// //       // "storage.googleapis.com",
// //       // "t4.ftcdn.net",
// //       // "www.influencer.in",
// //       // "utfs.io",
// //       // "instagram.fdel45-1.fna.fbcdn.net",
// //       // "yt3.googleusercontent.com",
// //     ],
// //   },
// //   env: {
// //     PASSWORD: '',
// //   },
// // };

// // module.exports = nextConfig;


// const path = require('path');

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['storage.googleapis.com', 't4.ftcdn.net', 'www.influencer.in', 'utfs.io', 'instagram.fdel45-1.fna.fbcdn.net', 'yt3.googleusercontent.com'],
//   },
//   webpack: (config) => {
//     config.resolve.alias['@components'] = path.join(__dirname, 'components');
//     // Add more aliases if needed
//     return config;
//   },
// };

// module.exports = nextConfig;


// next.config.js
const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.influencer.in',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fdel45-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@models'] = path.join(__dirname, 'models');
    config.resolve.alias['@mongodb'] = path.join(__dirname, 'mongodb');
    // Add more aliases as needed
    return config;
  },
};
