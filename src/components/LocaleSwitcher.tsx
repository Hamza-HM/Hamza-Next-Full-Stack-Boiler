'use client';

import { Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@/i18n/routing';
import { AppConfig } from '@/utils/AppConfig';

// Language configuration with flags and names
const languageConfig = {
  en: { name: 'English', flag: '🇺🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  ar: { name: 'العربية', flag: '🇸🇦' },
};

export default function LocaleSwitcher() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Globe className="size-4" />
          <span className="hidden sm:inline">Language</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {AppConfig.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={pathname}
              locale={locale}
              className="flex items-center gap-2 px-4 py-2"
            >
              <span>{languageConfig[locale]?.flag}</span>
              <span>{languageConfig[locale]?.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
