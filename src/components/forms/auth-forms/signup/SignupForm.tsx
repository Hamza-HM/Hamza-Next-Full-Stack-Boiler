'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { SignupFormData, signupSchema } from '@/types/auth-types';

import Divider from '../../../Divider';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../ui/card';
import AuthFooter from '../AuthFooter';
import LegalNotice from '../AuthNotice';
import SocialAuthButtons from '../SocialLoginButtons';
import SignupFornFields from './SignupFormFields';

export default function Signup() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('Auth');

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  async function onSubmit(data: SignupFormData) {
    startTransition(async () => {
      try {
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            console.warn(data);
            resolve();
          }, 2000)
        );
      } catch (error) {
        form.setError('root', {
          message: error instanceof Error ? error.message : t('error'),
        });
      }
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{t('signIn')}</CardTitle>
          <CardDescription>{t('enterCredentials')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <SocialAuthButtons />
            <Divider />
            <SignupFornFields
              form={form}
              onSubmit={onSubmit}
              isPending={isPending}
            />
            <AuthFooter />
          </div>
        </CardContent>
      </Card>
      <LegalNotice />
    </div>
  );
}
