import { useState } from 'react';

const CommentInputBox = () => {
    const handleComment = () => {
        console.log(comment);
        setComment('');
    };
    const [comment, setComment] = useState('');
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
        </>
    );
};

export default CommentInputBox;
