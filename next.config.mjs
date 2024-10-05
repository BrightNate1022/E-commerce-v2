/** @type {import('next').NextConfig} */
const nextConfig = {

  bundlePagesRouterDependencies: true,  
    distDir: '/build',

    typescript: {
  
    },

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          port: '',
          pathname: '/**',
        },
      ],
    },};


export default nextConfig;
