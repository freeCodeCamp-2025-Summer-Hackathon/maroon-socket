import { ValidationError } from '../errors/ErrorClasses.js';
import { flattenError } from 'shared/schemas/index.js';

/**
 * Validation middleware factory that creates a middleware to validate request data against a Zod schema
 * @param {object} schema - Zod schema to validate against
 * @param {string} source - Source of data to validate ('body', 'query', 'params')
 * @returns {Function} Express middleware function
 */
export const validate = (schema, source = 'body') => {
    return (req, res, next) => {
        try {
            const dataToValidate = req[source];
            const validationResult = schema.safeParse(dataToValidate);

            if (!validationResult.success) {
                const errors = flattenError(validationResult.error);
                return next(new ValidationError(errors));
            }

            req[source] = validationResult.data;
            next();
        } catch (error) {
            next(error);
        }
    };
};
