const apiUrl = import.meta.env.VITE_API_URL;
import { flattenError, postSchema } from 'shared/schemas/index.js';

async function createPost(data) {
    const validationResult = postSchema.safeParse(data);
    if (validationResult.success === false) {
        return {
            errors: flattenError(validationResult.error),
            success: false,
            errorType: 'VALIDATION_ERROR'
        };
    }

    const token = localStorage.getItem('token');

    const res = await fetch(`${apiUrl}/api/post`, {
        method: 'POST',
        body: JSON.stringify(validationResult.data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return await res.json();
}

async function getAllPosts() {
    const res = await fetch(`${apiUrl}/api/post`);
    return await res.json();
}
export { createPost, getAllPosts };
