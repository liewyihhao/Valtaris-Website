/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // /contact consolidated into /get-started (the SEO conversion page).
      { source: "/contact", destination: "/get-started", permanent: true },
    ];
  },
};

export default nextConfig;
