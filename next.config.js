/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};
