declare module 'next-auth' {
  interface User {
    id: number;
    email: string;
    name?: string | null;
    image?: string | null;
    accessToken?: string;
    provider?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
    email: string;
    name?: string | null;
    image?: string | null;
    accessToken?: string;
    provider?: string;
  }
}

declare module 'next-auth/session' {
  interface Session {
    user: {
      id: number;
      email: string;
      name?: string | null;
      image?: string | null;
      accessToken?: string;
    };
  }
}

export type SessionParams = {
  session: Session;
  token: JWT;
};

export type JwtParams = {
  token: JWT;
  account: Account;
  user: User;
};
