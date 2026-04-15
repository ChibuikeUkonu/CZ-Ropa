/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;