import { z } from 'zod';

export const loginSchema = z.object({
    username: z.string().nonempty('Please provide an email or username'),
    password: z.string().min(8, 'Password must be at least 8 characters long')
});
