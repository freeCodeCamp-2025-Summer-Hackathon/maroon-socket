import { z } from 'zod';

export const commentSchema = z.object({
    content: z.string().trim().nonempty('Comment content must not be empty')
});
