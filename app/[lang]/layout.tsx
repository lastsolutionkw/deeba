import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '../i18n/settings';
import '../globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Diba Coin',
  description: 'The First Real Estate Packed Cryptocurrency',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Validate language parameter
  if (!locales.includes(lang as any)) {
    notFound();
  }

  // Load messages
  let messages;
  try {
    messages = (await import(`../i18n/locales/${lang}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Set direction based on language
  const direction = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 