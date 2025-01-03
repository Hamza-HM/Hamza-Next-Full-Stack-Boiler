import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { LoginFormData } from '@/types/auth-types';

import { InputField } from '../../../custom-ui/InputField';
import { Alert, AlertDescription } from '../../../ui/alert';
import { Button } from '../../../ui/button';
import { Form } from '../../../ui/form';
import { TextMorph } from '../../../ui/text-morph';

export default function LoginFormFields({
  form,
  onSubmit,
  isPending,
}: {
  form: ReturnType<typeof useForm<LoginFormData>>;
  onSubmit: (data: LoginFormData) => void;
  isPending: boolean;
}) {
  const t = useTranslations('Auth');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          name="email"
          control={form.control}
          placeholder={t('emailPlaceholder')}
          type="email"
          disabled={isPending}
        />
        <div className="grid gap-2">
          <InputField
            name="password"
            control={form.control}
            placeholder={t('passwordPlaceholder')}
            type="password"
            disabled={isPending}
            autoComplete="current-password"
          />
          <Link
            href="#"
            className="text-right text-sm underline-offset-4 hover:underline"
          >
            {t('forgotPassword')}
          </Link>
        </div>

        {form.formState.errors.root && (
          <Alert variant="destructive">
            <AlertDescription>
              {form.formState.errors.root.message}
            </AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isPending}>
          <TextMorph>{isPending ? t('signing') : t('signIn')}</TextMorph>
        </Button>
      </form>
    </Form>
  );
}
