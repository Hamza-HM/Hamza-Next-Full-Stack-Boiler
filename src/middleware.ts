import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';
import { middlewareHelper } from './utils/middleware.config';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const modifiedRequestOrResponse = await middlewareHelper(request);

  // Check if middlewareHelper returned a NextResponse
  if (modifiedRequestOrResponse instanceof NextResponse) {
    return modifiedRequestOrResponse;
  }

  // If it's a NextRequest, pass it to intlMiddleware
  return intlMiddleware(modifiedRequestOrResponse);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!.+\\.[\\w]+$|_next|monitoring).*)', '/', '/(api|trpc)(.*)'], // Matcher rules
};
