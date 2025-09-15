/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'setlite.in', // when someone visits setlite.in
          },
        ],
        destination: 'https://www.setlite.in/:path*', // redirect to www.setlite.in
        permanent: true, // 308 Permanent Redirect
      },
    ];
  },
};

module.exports = nextConfig;
