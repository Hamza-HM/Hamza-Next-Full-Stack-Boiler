import NextAuth from 'next-auth';

import { authOptions } from '@/lib/authOptions';

// export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authOptions);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// import NextAuth from 'next-auth/next';
// import GithubProvider from 'next-auth/providers/github';

// const handler = NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
