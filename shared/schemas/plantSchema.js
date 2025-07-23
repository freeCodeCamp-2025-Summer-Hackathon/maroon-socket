import { z } from 'zod';

export const plantSchema = z.object({
    name: z
        .string()
        .min(1, 'Plant name is required')
        .min(2, 'Plant name must be at least 2 characters long')
        .max(100, 'Plant name cannot exceed 100 characters')
        .trim(),
    note: z
        .union([
            z.string().trim().max(500, 'Notes cannot exceed 500 characters'),
            z.literal('')
        ])
        .optional(),
    water_freq: z
        .string()
        .transform((val) => {
            if (!val || val === '') return null;
            const num = parseInt(val);
            if (isNaN(num)) throw new Error('Water frequency must be a number');
            return num;
        })
        .refine(
            (val) => val === null || (val >= 1 && val <= 30),
            'Water frequency must be between 1 and 30 days'
        )
        .optional()
});
