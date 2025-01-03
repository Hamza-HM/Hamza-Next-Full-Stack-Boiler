'use client';

import Image from 'next/image';
import { type Session } from 'next-auth';
import { signOut } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { fallbackAvatar } from '@/lib/constants';

import { Button } from '../ui/button';

interface UserMenuProps {
  session: Session | null;
  variant?: 'desktop' | 'mobile';
}

export function UserMenu({ session, variant = 'desktop' }: UserMenuProps) {
  if (!session?.user) {
    return null;
  }

  if (variant === 'mobile') {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image
            src={session.user.image || fallbackAvatar}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full bg-background"
          />
          <span className="font-medium">{session.user.name}</span>
        </div>
        <Button
          onClick={() => signOut()}
          className="text-sm  text-error-1 hover:cursor-pointer hover:text-error-2 "
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full">
          <Image
            src={session.user.image || fallbackAvatar}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full bg-background"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="hover:cursor-pointer">
        <DropdownMenuItem className="font-medium">
          {session.user.name}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-error-1 hover:cursor-pointer hover:text-error-2"
          onClick={() => signOut()}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
