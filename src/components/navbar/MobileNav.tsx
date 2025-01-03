'use client';

import { Menu } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import LocaleSwitcher from '../LocaleSwitcher';
import ThemeToggle from '../ThemeToggle';
import { UserMenu } from './UserMenu';

export function MobileNav() {
  const { data: session } = useSession();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="rounded-md p-2">
            <Menu className="size-6" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-4 pt-4">
            <LocaleSwitcher />
            <ThemeToggle />
            <UserMenu session={session} variant="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// src/components/nav/DesktopNav.tsx
