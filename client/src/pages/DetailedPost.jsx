import { useState } from 'react';
import { CiPaperplane } from 'react-icons/ci';

// dummy post and comments
const post = {
    UserName: 'Someone',
    title: 'Water Conservation Tips',
    content:
        'Too much water, soils can become loose and plants can become unstable.'
};
const comments = [
    {
        UserName: 'Jane Doe',
        content: 'Great tips! I will definitely try these out.'
    },
    {
        UserName: 'Jhon Smith',
        content: 'Wow!'
    }
];
const DetailedPost = () => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment) {
            alert('Please enter a comment');
            return false;
        }
        // Here you would typically send the new comment to the server
        console.log('New Comment:', newComment);
    };
    return (
        <div className="w-screen h-screen flex flex-col bg-white gap-8 m-8">
            {/*Post details*/}
            <div className="flex flex-col gap-2 mb-2 rounded-md shadow px-4 m-4">
                <h5>UserName</h5>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="mb-4 text-gray-700">{post.content}</p>
            </div>
            {/*Comments*/}

            <ul className="space-y-4 mb-6 flex flex-col items-justify-start px-4 mx-4">
                {comments.map((comment, i) => (
                    <li key={i} className="flex flex-col items-start gap-1">
                        <div className="font-semibold text-black">
                            {comment.UserName}
                        </div>
                        <p className="mb-4 ml-6 text-gray-700">
                            {comment.content}
                        </p>
                    </li>
                ))}
            </ul>

            {/*Add comment feild*/}
            <form
                onSubmit={handleSubmit}
                className="absolute bottom-2 left-0 w-full flex items-center justify-center gap-2 px-6 py-4"
            >
                <input
                    className="border border-gray-300 rounded-full p-2 w-full max-w-md mb-4"
                    type="text"
                    value={newComment}
                    placeholder="Add a comment..."
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    type="submit"
                    className="p-1 rounded-full bg-[#3a6b3d] text-white hover:bg-[#29423e]"
                >
                    <CiPaperplane size={30} />
                </button>
            </form>
        </div>
    );
};

export default DetailedPost;
