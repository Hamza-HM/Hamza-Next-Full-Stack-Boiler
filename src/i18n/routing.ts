import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { AppConfig } from '@/utils/AppConfig';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  // Used when no locale matches

  defaultLocale: AppConfig.defaultLocale,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
