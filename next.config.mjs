/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
