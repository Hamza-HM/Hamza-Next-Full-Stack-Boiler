// src/app/auth/error/page.tsx
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (error: string) => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration. Please check if all environment variables are properly set.';
      case 'AccessDenied':
        return 'Access was denied to this resource. You may need different permissions.';
      case 'Verification':
        return 'The verification token has expired or has already been used.';
      case 'OAuthSignin':
        return 'Error in constructing an authorization URL. This could be a configuration issue.';
      case 'OAuthCallback':
        return 'Error in handling the response from an OAuth provider.';
      case 'OAuthCreateAccount':
        return 'Could not create OAuth provider user in the database.';
      case 'EmailCreateAccount':
        return 'Could not create email provider user in the database.';
      case 'Callback':
        return 'Error in the OAuth callback handler route.';
      case 'OAuthAccountNotLinked':
        return 'The email on the OAuth account is already linked to another account.';
      case 'EmailSignin':
        return 'Error sending the email verification message.';
      case 'CredentialsSignin':
        return 'The credentials you provided were invalid.';
      default:
        return 'An unexpected authentication error occurred.';
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-4">
            <div className="flex">
              <div className="shrink-0">
                {/* You can add an error icon here if desired */}
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Error Type: {error}
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  {error && getErrorMessage(error)}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
