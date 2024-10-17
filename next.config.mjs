/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig =  {
    // output: "export",  // <=== enables static exports
    reactStrictMode: true,
    // async headers() {
    //     return [
    //         {
    //             // matching all API routes
    //             source: "/api/:path*",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
    //                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
    //                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version," },
    //             ]
    //         }
    //     ]
    // },
    // async rewrites() {
    //     return [
    //       {
    //         source: '/lab-week-quiz/:path*',
    //         destination: 'https://dev.digitalcontent.sky/lab-week-quiz/:path*', // Proxy to external API
    //       },
    //     ];
    //   },
    //   async server() {
    //     // Use http-proxy-middleware to forward requests in development
    //     return {
    //       on: {
    //         'request': createProxyMiddleware({
    //           target: 'https://dev.digitalcontent.sky',
    //           changeOrigin: true,
    //           pathRewrite: {
    //             '^/lab-week-quiz': '/lab-week-quiz', // Rewrite URL
    //           },
    //         }),
    //       },
    //     };
    //   },
};

export default nextConfig;
