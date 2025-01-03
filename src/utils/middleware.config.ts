import { privatePaths, publicLinks } from '@/config/links';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const isProtectedRoute = (pathname: string) =>
  pathname.startsWith(privatePaths.landing) ||
  pathname.startsWith(`/:locale/${privatePaths.landing}`);

export async function middlewareHelper(
  request: NextRequest
): Promise<NextRequest | NextResponse> {
  if (isProtectedRoute(request.nextUrl.pathname)) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const localeMatch = request.nextUrl.pathname.match(/(\/.*)\/dashboard/);
      const locale = localeMatch ? localeMatch[1] : '';
      const signinUrl = new URL(`${locale}${publicLinks.signIn}`, request.url);
      return NextResponse.redirect(signinUrl);
    }
  }

  return request;
}
