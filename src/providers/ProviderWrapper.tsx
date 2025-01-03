import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/authOptions';

import { AuthProvider } from './AuthProvider';
import { I18nProvider } from './I18nProvider';
import { ThemeProvider } from './NextThemeProvider';

export async function ProviderWrapper({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <I18nProvider locale={locale}>
        <AuthProvider session={session}>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </I18nProvider>
    </>
  );
}
