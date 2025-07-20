import { getRequestConfig } from 'next-intl/server';
import { locales, Locale, defaultLocale } from './settings';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as string;

  return {
    locale: validLocale,
    messages: (await import(`./locales/${validLocale}.json`)).default,
    timeZone: 'Asia/Kolkata',
    now: new Date(),
  };
}); 