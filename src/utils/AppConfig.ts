import { LocalePrefixMode } from 'next-intl/routing';

// Literal type for supported locales
export type Locale = 'ar' | 'en' | 'fr';

// Literal type for text directions
export type TextDirection = 'rtl' | 'ltr';

// Type for locale configuration
export interface LocaleConfig {
  name: string;
  locales: Locale[];
  defaultLocale: Locale;
  localePrefix: LocalePrefixMode;
  directions: Record<Locale, TextDirection>;
}

// Type guard to check if a string is a valid locale
export function isValidLocale(locale: string): locale is Locale {
  return ['ar', 'en', 'fr'].includes(locale);
}

// Type-safe locale configuration
export const AppConfig: LocaleConfig = {
  name: 'Hamza Next boilerplate',
  locales: ['ar', 'en', 'fr'],
  defaultLocale: 'ar',
  localePrefix: 'never',
  directions: {
    ar: 'rtl',
    en: 'ltr',
    fr: 'ltr',
  },
};
