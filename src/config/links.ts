//  website links

export const privatePaths = {
  home: '/',
  landing: '/authenticated',
  //   dashboard: '/dashboard',
  logout: '/logout',
};

export const publicLinks = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  forgotPassword: '/forgot-password',
};
export const publicPaths = [
  publicLinks.signIn,
  publicLinks.signUp,
  publicLinks.forgotPassword,
];
export const ignoredPaths = ['/_next', '/api', '/monitoring', '/static'];

export const PROTECTED_ROUTES = privatePaths;
