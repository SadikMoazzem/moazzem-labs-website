import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about-me',
        destination: '/about/sadik',
        permanent: true,
      },
      {
        source: '/case-studies/mylocalmasjid',
        destination: '/work/mylocalmasjid',
        permanent: true,
      },
      {
        source: '/case-studies/salahtimez',
        destination: '/work/salahtimez',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
