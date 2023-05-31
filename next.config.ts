import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:'koniarz.eu'
      }
    ]
  }
};

export default nextConfig;
