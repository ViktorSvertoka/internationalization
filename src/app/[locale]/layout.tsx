import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import '../globals.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'i18n App',
  description: 'Next.js + next-intl + Tailwind + ThemeSwitcher',
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = (await import(`../../../translations/${locale}.json`))
    .default;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth transition-colors duration-300`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100
                   transition-colors duration-300 antialiased flex flex-col"
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
