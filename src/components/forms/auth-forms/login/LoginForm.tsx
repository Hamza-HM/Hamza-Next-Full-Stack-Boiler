'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { LoginFormData, LoginSchema } from '@/types/auth-types';

import Divider from '../../../Divider';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../ui/card';
import LoginFooter from '../AuthFooter';
import LegalNotice from '../AuthNotice';
import SocialLoginButtons from '../SocialLoginButtons';
import LoginFormContent from './LoginFormFields';

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('Auth');

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginFormData) {
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
            <SocialLoginButtons />
            <Divider />
            <LoginFormContent
              form={form}
              onSubmit={onSubmit}
              isPending={isPending}
            />
            <LoginFooter />
          </div>
        </CardContent>
      </Card>
      <LegalNotice />
    </div>
  );
}
