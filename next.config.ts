import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 仮画像としてSVGを使用しているため許可(自サイト生成のSVGのみ)
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
