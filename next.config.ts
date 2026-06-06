import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    // Використовуємо сучасний @use замість @import
    additionalData: `@use "@/styles/variables.scss" as *;`,
  },
};

export default nextConfig;
