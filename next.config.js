/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "simitteknesi.vercel.app",
      },
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Handle image fallbacks for missing LFS files
  async rewrites() {
    return {
      fallback: [
        {
          source: "/images/:path*",
          destination: "/api/fallback-image?path=:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
