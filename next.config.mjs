/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['coin-images.coingecko.com'],
    },
    env: {
        COINGECKO_URL: process.env.COINGECKO_URL
    }
};

export default nextConfig;
