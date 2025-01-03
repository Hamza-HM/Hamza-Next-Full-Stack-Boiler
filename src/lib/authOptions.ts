import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { JwtParams, SessionParams } from '@/types/auth';

export const authOptions = {
  debug: true,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },
      async authorize(credentials) {
        const user = {
          id: 32,
          name: 'douga',
          password: 'nextauth',
          email: 'douga@gmail.com',
        };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
        // try {
        //   const response = await fetch('api-url', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(credentials),
        //   });

        //   if (!response) {
        //     return null;
        //   }

        //   const user = await response.json();
        //   return user;
        // } catch (error) {
        //   console.error(' Token verification failed', error);
        //   return null;
        // }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: JwtParams) {
      if (account) {
        token.provider = account.provider;
        token.accessToken = account.accessToken;
      }
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: SessionParams) {
      if (session.user) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.image;
      }
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
    signUp: '/sign-up', // Correct casing if used
    signOut: '/signout',
    profile: '/profile',
  },
};
