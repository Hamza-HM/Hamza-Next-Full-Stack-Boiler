import { BuiltInProviderType } from 'next-auth/providers/index';
import { LiteralUnion, signIn } from 'next-auth/react';
import { useState, useTransition } from 'react';

export const useSocialAuth = () => {
  const [isPending, startTransition] = useTransition();
  const [currentProvider, setCurrentProvider] = useState<
    LiteralUnion<BuiltInProviderType> | undefined
  >();

  const handleSignIn = (provider: LiteralUnion<BuiltInProviderType>) => {
    setCurrentProvider(provider);
    startTransition(async () => {
      try {
        if (!provider) {
          console.error('Provider is required for sign-in.');
          return;
        }

        await signIn(provider, {
          callbackUrl: '/sign-in',
        });
      } catch (error) {
        console.error('Sign-in failed:', error);
      }
    });
  };

  return {
    isPending,
    handleSignIn,
    currentProvider,
  };
};
