import {getRequestConfig} from 'next-intl/server';
import {locales} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en';
  }

  // Use static imports with @/ alias for Turbopack compatibility
  const messages = await (async () => {
    switch (locale) {
      case 'ja':
        return (await import('@/messages/ja.json')).default;
      case 'en':
        return (await import('@/messages/en.json')).default;
      case 'zh-hant':
        return (await import('@/messages/zh-hant.json')).default;
      default:
        return (await import('@/messages/en.json')).default;
    }
  })();

  return {
    locale,
    messages
  };
});
