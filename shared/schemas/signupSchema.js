import { z } from 'zod';

export const signupSchema = z
    .object({
        username: z
            .string()
            .min(5, 'Username must be at least 5 characters long')
            .regex(/^[a-zA-Z0-9]+$/, 'Username can only be alphanumeric'),
        fullName: z
            .string()
            .min(5, 'Full name must be at least 5 characters long')
            .regex(
                /^[a-zA-Z\s]+$/,
                'Full name can only contain letters and spaces'
            ),
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long'),
        passwordConfirm: z.string()
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: 'Passwords do not match',
        path: ['passwordConfirm']
    });
