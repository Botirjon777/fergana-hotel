import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.1.105']
};

export default withNextIntl(nextConfig);
