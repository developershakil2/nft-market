/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["tinytesla.infura-ipfs.io","localhost:3000/", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;
