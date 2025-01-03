import '@/styles/globals.css';

import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { geistMono, geistSans } from '@/config/fonts';
import { siteMetadata } from '@/config/metadata';
import { routing } from '@/i18n/routing';
import { ProviderWrapper } from '@/providers/ProviderWrapper';
import { AppConfig, Locale } from '@/utils/AppConfig';

export const metadata = siteMetadata;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale} dir={AppConfig.directions[locale as Locale]}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProviderWrapper locale={locale}>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
