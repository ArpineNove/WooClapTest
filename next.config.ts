import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SLACK_WEBHOOK_DEFAULT:
      process.env.NEXT_PUBLIC_SLACK_WEBHOOK_DEFAULT,
    NEXT_PUBLIC_SLACK_WEBHOOK_CUSTOM:
      process.env.NEXT_PUBLIC_SLACK_WEBHOOK_CUSTOM,
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
