/** @type {import('next').NextConfig} */
const nextConfig = {

  bundlePagesRouterDependencies: true,  
    distDir: '/build',

    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
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
