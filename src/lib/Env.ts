// // src/env.mjs
// import { createEnv } from '@t3-oss/env-nextjs';
// import { z } from 'zod';

// export const Env = createEnv({
//   server: {
//     GITHUB_ID: z.string().min(1),
//     GITHUB_SECRET: z.string().min(1),
//     DATABASE_URL: z.string().optional(),
//   },
//   client: {
//     NEXT_PUBLIC_BASE_URL: z.string().min(1),
//   },
//   shared: {
//     NODE_ENV: z.enum(['test', 'development', 'production']).optional(),
//   },
//   runtimeEnv: {
//     GITHUB_ID: process.env.GITHUB_CLIENT_ID,
//     GITHUB_SECRET: process.env.GITHUB_CLIENT_SECRET,
//     NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
//     NODE_ENV: process.env.NODE_ENV,
//     DATABASE_URL: process.env.DATABASE_URL,
//   },
// });
