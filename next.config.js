/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "simitteknesi.vercel.app",
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: "asset/resource",
    });
    return config;
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
