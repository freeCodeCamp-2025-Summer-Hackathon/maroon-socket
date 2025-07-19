import { flattenError, signupSchema, loginSchema } from 'shared/schemas';

async function signupUser(userData) {
    const validationResult = signupSchema.safeParse(userData);

    if (validationResult.success === false) {
        const errors = flattenError(validationResult.error);
        return { errors, success: false, errorType: 'VALIDATION_ERROR' };
    }

    const apiUrl = import.meta.env.VITE_API_URL;

    const res = await fetch(`${apiUrl}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    return await res.json();
}

async function loginUser(userData) {
    const validationResult = loginSchema.safeParse(userData);

    if (validationResult.success === false) {
        const errors = flattenError(validationResult.error);
        return { errors, success: false, errorType: 'VALIDATION_ERROR' };
    }

    const apiUrl = import.meta.env.VITE_API_URL;

    const res = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    return await res.json();
}

export { signupUser, loginUser };
