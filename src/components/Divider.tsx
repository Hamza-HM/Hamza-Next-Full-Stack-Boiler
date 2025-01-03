import { useTranslations } from 'next-intl';

export default function Divider() {
  const t = useTranslations('Auth');

  return (
    <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
      <span className="relative z-10 bg-background px-2 text-muted-foreground">
        {t('orContinueWith')}
      </span>
    </div>
  );
}
