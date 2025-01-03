'use client';

export default function GlobalError({
  error,
  params: { locale },
}: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="max-w-md space-y-6 text-center">
            {/* <AlertOctagon className="mx-auto size-16 text-yellow-500" /> */}

            <h1 className="text-3xl font-bold tracking-tight">
              Oops! Something went wrong
            </h1>

            <p className="text-lg text-gray-500">
              We encountered an unexpected error. Our team has been notified.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Try Again
              </button>

              <button
                onClick={() => (window.location.href = '/')}
                className="w-full"
              >
                Return Home
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 rounded-md bg-red-50 p-4 text-left text-red-900">
                <p className="break-all font-mono text-sm">{error.message}</p>
                {error.digest && (
                  <p className="mt-2 font-mono text-sm">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
