import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { publicLinks } from '@/config/links';

export default function LoginFooter() {
  const pathname = usePathname();
  const t = useTranslations('Auth');

  const isSignIn = pathname === publicLinks.signIn;

  return (
    <div className="text-center text-sm">
      {isSignIn ? t('noAccount') : t('alreadyHaveAccount')}
      <Link
        href={isSignIn ? publicLinks.signUp : publicLinks.signIn}
        className="underline underline-offset-4"
      >
        {isSignIn ? t('signUp') : t('signIn')}
      </Link>
    </div>
  );
}
