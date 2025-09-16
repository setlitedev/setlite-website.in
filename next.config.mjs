/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'setlite.com', // when someone visits setlite.com
          },
        ],
        destination: 'https://setlite.in/:path*', // send them to setlite.in
        permanent: true, // 308 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;
