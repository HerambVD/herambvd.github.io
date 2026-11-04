/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build a fully static site into ./out for GitHub Pages.
  // (Response headers can't be configured on GitHub Pages, so none are set here.)
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
