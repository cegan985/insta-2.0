/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: { webpack5: true }
}
module.exports = {
    images: {
      domains: ['links.papareact.com'],
    },
};
