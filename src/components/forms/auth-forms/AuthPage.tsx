'use client';

import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { FormWrapper } from '@/components/forms/auth-forms/FormWrapper';
import { IllustrationSection } from '@/components/IllustrationSection';
import { privatePaths, publicLinks } from '@/config/links';

export default function AuthPage({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const session = useSession();

  if (
    (pathname === publicLinks.signIn || pathname === publicLinks.signUp) &&
    session?.data?.user
  ) {
    redirect(privatePaths.landing);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen w-full flex-col justify-center md:flex-row">
        <FormWrapper>{children}</FormWrapper>
        <IllustrationSection />
      </div>
    </div>
  );
}
