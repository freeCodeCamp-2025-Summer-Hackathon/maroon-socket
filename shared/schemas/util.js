import { z } from 'zod';

/**
 * This function will take a zodError and convert it into an easier to use format.
 * example output-
 * ``{"username": "username cannot be empty",
 *  "fullname": "fullname must have at least 5 characters"}``
 * @param {*} zodError
 * @returns {object}
 */

export function flattenError(zodError) {
    const treefiedError = z.treeifyError(zodError);

    if (treefiedError.properties !== undefined) {
        const properties = treefiedError.properties;
        const flattenedError = {};

        for (const property in properties) {
            const errorMessages = properties[property]?.errors;
            if (errorMessages && errorMessages.length > 0) {
                flattenedError[property] = errorMessages[0]; // Extract first error message
            }
        }

        return flattenedError;
    } else {
        return {};
    }
}
