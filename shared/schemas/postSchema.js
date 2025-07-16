import { z } from 'zod';

export const postSchema = z.object({
    title: z.string().trim().nonempty('Title must not be empty'),
    content: z.string().trim().nonempty('Content must not be empty'),
    tag: z.enum(['question', 'tip'], {
        error: 'Tag must be either "question" or "tip"'
    })
});
