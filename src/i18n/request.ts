import { getRequestConfig } from 'next-intl/server';
import { Locale, locales } from './i18n.config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the requested locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    messages: (
      await (locale === 'en'
        ? import('./messages/en.json')
        : locale === 'uz'
          ? import('./messages/uz.json')
          : import('./messages/ru.json'))
    ).default,
  };
});

// Re-export for use in middleware
export function notFound() {
  throw new Error('NOT_FOUND');
}
