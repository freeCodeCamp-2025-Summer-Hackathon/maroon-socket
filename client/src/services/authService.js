import { flattenError, signupSchema } from 'shared/schemas';

async function signupUser(userData) {
    const validationResult = signupSchema.safeParse(userData);

    if (validationResult.success === false) {
        const errors = flattenError(validationResult.error);
        return { errors, success: "false", errorType: 'ZOD_ERROR' };
    }

    const apiUrl = import.meta.env.VITE_API_URL;

    const res = await fetch(`${apiUrl}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    return await res.json();
}

export { signupUser };
