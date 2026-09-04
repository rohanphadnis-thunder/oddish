import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local.oddish.app"],
  output: "standalone",
  // Local self-hosted development runs from oddish/frontend. Pin Turbopack to
  // that directory so unrelated lockfiles higher in the user's home directory
  // do not become the inferred workspace root and break instrumentation ESM
  // URL handling.
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  env: {
    NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID:
      process.env.VERCEL_GIT_PULL_REQUEST_ID || "",
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || "",
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF || "",
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV || "",
  },
};

export default nextConfig;
