'use client';

import { ArrowRight, Code, Globe, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

import ThemeToggle from '@/components/ThemeToggle';
import { publicLinks } from '@/config/links';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80 dark:from-background/80 dark:to-background" />
        <div className="container mx-auto px-4">
          <div className="relative z-10 flex flex-col items-center gap-8 pb-24 pt-12 text-center md:pb-32">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                {t('title')}
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                {t('subtitle')}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={publicLinks.signIn}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
              >
                {t('sign-in')}
                <ArrowRight className="size-4" />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-border/40 transition-colors duration-300">
        <div className="container mx-auto px-4 py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/5 p-4 shadow-sm transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-md dark:bg-primary/10 dark:group-hover:bg-primary/20">
                <Zap className="size-6 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground transition-colors">
                {t('feature1.title')}
              </h3>
              <p className="text-muted-foreground transition-colors">
                {t('feature1.description')}
              </p>
            </div>

            <div className="group flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/5 p-4 shadow-sm transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-md dark:bg-primary/10 dark:group-hover:bg-primary/20">
                <Globe className="size-6 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground transition-colors">
                {t('feature2.title')}
              </h3>
              <p className="text-muted-foreground transition-colors">
                {t('feature2.description')}
              </p>
            </div>

            <div className="group flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/5 p-4 shadow-sm transition-all duration-300 group-hover:bg-primary/10 group-hover:shadow-md dark:bg-primary/10 dark:group-hover:bg-primary/20">
                <Code className="size-6 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground transition-colors">
                {t('feature3.title')}
              </h3>
              <p className="text-muted-foreground transition-colors">
                {t('feature3.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-border/40 bg-muted/30 transition-colors duration-300 dark:bg-muted/5">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground transition-colors">
              {t('cta.title')}
            </h2>
            <p className="max-w-[600px] text-muted-foreground transition-colors">
              {t('cta.description')}
            </p>
            <Link
              href={publicLinks.signIn}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
            >
              {t('sign-in')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
