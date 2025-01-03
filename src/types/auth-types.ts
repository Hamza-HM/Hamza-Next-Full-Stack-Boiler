import { z } from 'zod';

// sign in
export const LoginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

// sign up
export const signupSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm password must be at least 8 characters' })
      .regex(/[A-Z]/, {
        message: 'Confirm password must contain at least one uppercase letter',
      })
      .regex(/[0-9]/, {
        message: 'Confirm password must contain at least one number',
      }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type SignupFormData = z.infer<typeof signupSchema>;
