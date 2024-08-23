/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        remotePatterns: [ 
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/en/6/65/**',
            },
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                port: '',
                pathname: '/v2/resize:fit:1024/**',
            },
        ]
    }
};

export default nextConfig;
