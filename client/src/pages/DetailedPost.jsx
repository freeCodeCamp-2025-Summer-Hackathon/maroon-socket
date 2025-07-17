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
        <div className="w-screen h-screen flex flex-col bg-white max-w-fit gap-6 m-8">
            {/*Post details*/}
            <div className="flex flex-col gap-1 mb-2 rounded-md border-2 border-green-600 border-opacity-20 shadow  px-4 m-4">
                <div className="flex flex-row gap-2 py-2">
                    <div className="h-8 w-8 rounded-full text-white font-bold bg-[#3a6b3d] flex items-center justify-center">
                        {post.UserName.charAt(0).toUpperCase()}
                    </div>
                    <h5 className="font-semibold text-base flex items-center">
                        {post.UserName}
                    </h5>
                </div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="mb-4 text-gray-700">{post.content}</p>
            </div>

            {/*Comments*/}
            <ul className="gap-1 flex flex-col items-justify-start px-4 ml-4 ">
                {comments.map((comment, i) => (
                    <li
                        key={i}
                        className="flex flex-col items-start gap-1 p-2 border-l-2 border-green-300 rounded-md shadow"
                    >
                        <div className="font-semibold text-black">
                            {comment.UserName}
                        </div>
                        <p className="mb-3 ml-6 text-gray-700">
                            {comment.content}
                        </p>
                    </li>
                ))}
            </ul>

            {/*Add comment feild*/}
            <form
                onSubmit={handleSubmit}
                className="absolute bottom-2 left-0 w-full flex items-center gap-2 px-6 py-4 ml-6"
            >
                <input
                    className="border border-gray-300 rounded-full p-2 w-full max-w-md"
                    type="text"
                    value={newComment}
                    placeholder="Add a comment..."
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    type="submit"
                    className="p-2 rounded-full bg-[#3a6b3d] text-white hover:bg-[#29423e]"
                >
                    <CiPaperplane size={24} />
                </button>
            </form>
        </div>
    );
};

export default DetailedPost;
