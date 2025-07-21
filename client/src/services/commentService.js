import { flattenError, commentSchema } from 'shared/schemas/index.js';

const apiUrl = import.meta.env.VITE_API_URL;

async function createComment(data, postId) {
    const validationResult = commentSchema.safeParse(data);

    if (validationResult.success === false) {
        return {
            errors: flattenError(validationResult.error),
            success: false,
            errorType: 'VALIDATION_ERROR'
        };
    }

    const token = localStorage.getItem('token');

    const res = await fetch(`${apiUrl}/api/post/${postId}/comment`, {
        method: 'POST',
        body: JSON.stringify(validationResult.data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return await res.json();
}

async function getAllComments(postId) {
    const res = await fetch(`${apiUrl}/api/post/${postId}/comment`);
    return await res.json();
}

export { createComment, getAllComments };
