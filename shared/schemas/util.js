import { z } from 'zod';

export function flattenError(zodError) {
    const treefiedError = z.treeifyError(zodError);

    if (treefiedError.properties !== undefined) {
        //assert properties type otherwise typescript will complain
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
