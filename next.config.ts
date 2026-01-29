import createNextIntlPlugin from 'next-intl/plugin';

// Arahkan ke file request.ts kamu
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // config lain di sini...
    compiler:{
        removeConsole: process.env.NODE_ENV === "production",
        reactRemoveProperties: true,
    },
    poweredByHeader: false,
    experimental: {
        globalNotFound: true,
    },
};

export default withNextIntl(nextConfig);