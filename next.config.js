/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "greenbee-3.myshopify.com"
            },
            {
                protocol: "https",
                hostname: "greenbee-2.myshopify.com"
            }
        ]
    }
}

module.exports = nextConfig
