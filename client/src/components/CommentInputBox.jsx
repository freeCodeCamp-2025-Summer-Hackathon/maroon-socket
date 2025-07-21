import { useState } from 'react';
import { createComment, getAllComments } from '../services/commentService';
import ErrorMessage from '../components/ErrorMessage';

const CommentInputBox = ({ postId, setAllComments }) => {
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});

    async function handleComment() {
        try {
            const res = await createComment({ content: comment }, postId);

            if (res.success === false && res.errorType === 'VALIDATION_ERROR')
                setErrors(res.errors);
            else if (
                res.success === false &&
                res.errorType === 'APPLICATION_ERROR'
            )
                setErrors({ message: res.message });
            else if (res.success === true) {
                const allPosts = await getAllComments(postId);
                setAllComments(allPosts.data);
                setComment('');
            }
        } catch (error) {
            console.log(error);
            alert('something bad has happened');
        }
    }

    return (
        <>
            <div className="mt-6">
                <textarea
                    className="w-full p-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none transition duration-200 ease-in-out"
                    aria-label="Add a comment"
                    rows="3"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button
                    aria-label="Post Comment"
                    className="mt-3 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none transition duration-200 ease-in-out"
                    onClick={handleComment}
                >
                    Post Comment
                </button>
            </div>
            <ErrorMessage
                message={errors?.content || errors?.message}
            ></ErrorMessage>
        </>
    );
};

export default CommentInputBox;
