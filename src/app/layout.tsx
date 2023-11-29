import type { Metadata } from 'next';
import './globals.css';
import { notoSansKr } from '@/configs/fonts';
import { siteConfigs } from '@/configs/sites';

export const metadata: Metadata = {
  title: {
    default: siteConfigs.siteName,
    template: `%s | ${siteConfigs.siteName}`,
  },
  description: siteConfigs.description,
  applicationName: siteConfigs.siteName,
  authors: [{ name: siteConfigs.author.name, url: siteConfigs.author.link }],
  icons: [{ href: '/logo.svg', url: '/logo.svg' }],
};

export default function RootLayout({
  children, //
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
