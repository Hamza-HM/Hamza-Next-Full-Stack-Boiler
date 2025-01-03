import { useTranslations } from 'next-intl';

import GitHubIcon from '@/components/icons/GithubIcon';
import Spinner from '@/components/loaders/Spinner';
import { useSocialAuth } from '@/hooks/auth/useSocialAuth';

// import AppleIcon from '../../icons/AppleIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import { Button } from '../../ui/button';

export default function SocialLoginButtons() {
  const t = useTranslations('Auth');
  const { currentProvider, isPending, handleSignIn } = useSocialAuth();
  return (
    <div className="flex flex-col gap-4">
      {/* <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSignIn('apple')}
        disabled={isPending}
      >
        <AppleIcon />
        {t('signInWithApple')}
        {isPending && currentProvider === 'apple' && <Spinner />}
      </Button> */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSignIn('google')}
        disabled={isPending}
      >
        <GoogleIcon />
        {t('signInWithGoogle')}
        {isPending && currentProvider === 'google' && <Spinner />}
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSignIn('github')}
        disabled={isPending}
      >
        <GitHubIcon />
        {t('signInWithGithub')}
        {isPending && currentProvider === 'github' && <Spinner />}
      </Button>
    </div>
  );
}
