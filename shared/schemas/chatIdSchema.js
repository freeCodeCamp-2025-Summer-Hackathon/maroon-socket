import { z } from 'zod';

export const chatIdSchema = z.object({
    chatId: z
        .string()
        .regex(/^\d{10}$/, { message: 'Chat ID must be a 10 digit string' })
});
