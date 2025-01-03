'use client';
import { useSession } from 'next-auth/react';

import ThemeToggle from '@/components/ThemeToggle';
import { Link } from '@/i18n/routing';

import LocaleSwitcher from '../LocaleSwitcher';
import { UserMenu } from './UserMenu';

function DesktopNav() {
  const { data: session } = useSession();
  return (
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link href="/" className="text-xl font-bold">
        Logo
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-6 md:flex">
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
          {session?.user && <UserMenu session={session} />}
        </div>
      </div>
    </div>
  );
}
export default DesktopNav;
