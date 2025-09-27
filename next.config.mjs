/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'qcjsnfklkapuequkkdvh.supabase.co',
        },
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
          port: '',
          pathname: '/vi/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  