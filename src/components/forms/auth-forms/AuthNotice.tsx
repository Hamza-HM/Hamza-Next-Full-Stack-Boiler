'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function LegalNotice() {
  const pathname = usePathname();
  const t = useTranslations('Auth');

  return (
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
      {t(pathname === '/sign-in' ? 'termsNoticeSignIn' : 'termsNoticeSignUp')}{' '}
      <Link href="#">{t('termsOfService')}</Link> {t('and')}{' '}
      <Link href="#">{t('privacyPolicy')}</Link>.
    </div>
  );
}
