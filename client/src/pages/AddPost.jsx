import { useState } from 'react';
import { AiTwotoneCloseSquare } from 'react-icons/ai';

const AddPost = ({ onClose }) => {
    const [postType, setPostType] = useState('');
    const [postFields, setPostFields] = useState({
        title: '',
        content: ''
    });
    const postOptions = ['Question', 'Tip'];
    function handleSubmit(e) {
        e.preventDefault();
        if (!postType || !postFields.title || !postFields.content) {
            alert('Please provide Post Type, title and description');
            return false;
        }
        console.log(postType);
        console.log(postFields);
    }
    return (
        <div className="w-full bg-transparent flex flex-col items-center py-16 px-4 min-h-screen bg-white gap-10">
            <div className="w-full max-w-2xl p-4 space-y-14">
                <div className="flex flex-col space-y-10">
                    <button
                        className="self-end cursor-pointer"
                        onClick={onClose}
                    >
                        <AiTwotoneCloseSquare className="text-3xl text-[#2C6A4E]" />
                    </button>
                    <h1 className="text-center text-2xl font-bold text-[#2C6A4E]">
                        Create Post
                    </h1>
                </div>

                <form
                    method="post"
                    onSubmit={handleSubmit}
                    className="space-y-6 flex flex-col w-full"
                >
                    <div>
                        <div className="flex items-center justify-between rounded-lg pl-1 pr-4 text-gray-700 bg-[#F2F5F2] border mt-1">
                            <select
                                name="postType"
                                value={postType}
                                onChange={(e) => setPostType(e.target.value)}
                                className="w-full focus:outline-none rounded-lg p-3 text-gray-700 bg-[#F2F5F2] bg-[length:24px_24px] bg-position-[down_4px_center]"
                            >
                                <option value="" disabled>
                                    Select a post type
                                </option>
                                {postOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <input
                        type="text"
                        name="title"
                        onChange={(e) => {
                            setPostFields({
                                ...postFields,
                                title: e.target.value
                            });
                        }}
                        value={postFields.title}
                        placeholder="Title of the Post"
                        className="w-full rounded-lg p-3 text-gray-700 bg-[#F2F5F2] placeholder:font-poppins placeholder:text-gray-400 focus:outline-green-800"
                    />
                    <textarea
                        name="content"
                        placeholder="Detailed description of the post..."
                        onChange={(e) => {
                            setPostFields({
                                ...postFields,
                                content: e.target.value
                            });
                        }}
                        value={postFields.content}
                        rows="4"
                        className="w-full rounded-lg p-3 text-gray-700 bg-[#F2F5F2] placeholder:font-poppins placeholder:text-gray-400 focus:outline-green-800"
                    />
                    <div className="w-3/5 py-4">
                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#2C6A4E] py-3 font-bold text-white transition-colors hover:bg-opacity-90 focus:outline-none"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
