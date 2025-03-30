/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'qcjsnfklkapuequkkdvh.supabase.co',
        },
      ],
    },
  };
  
  export default nextConfig;
  