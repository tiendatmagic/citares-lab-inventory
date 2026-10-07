/** @type {import('next').NextConfig} */
const isLoginPackageBuild = process.env.BUILD_TARGET === 'login-package';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(isLoginPackageBuild
    ? {
        output: 'export',
        assetPrefix: './',
        distDir: 'out-login',
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
