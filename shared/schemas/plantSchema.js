import { z } from 'zod';

export const plantSchema = z.object({
    name: z
        .string()
        .min(5, 'Plant name must be at least 5 characters long')
        .regex(
            /^[a-zA-Z\s]+$/,
            'Plant name can only contain letters and spaces'
        ),
    notes: z.string().trim().nonempty( 'Notes cannot be empty'),
    water_freq: z
        .number()
        .int()
        .max(30, 'Water frequency can only be upto 30')
        .optional()
});
