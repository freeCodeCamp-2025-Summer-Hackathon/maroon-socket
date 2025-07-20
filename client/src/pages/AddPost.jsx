import { useState } from 'react';
import { AiTwotoneCloseSquare } from 'react-icons/ai';
import ErrorMessage from '../components/ErrorMessage';
import { createPost, getAllPosts } from '../services/postService';

const postOptions = ['question', 'tip'];

const AddPost = ({ onClose, setPosts }) => {
    const [postType, setPostType] = useState(postOptions[0]);
    const [postFields, setPostFields] = useState({
        title: '',
        content: ''
    });
    const [errors, setErrors] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await createPost({ ...postFields, tag: postType });

            if (res.success === false && res.errorType === 'VALIDATION_ERROR')
                setErrors(res.errors);
            else if (
                res.success === false &&
                res.errorType === 'APPLICATION_ERROR'
            )
                setErrors({ message: res.message });
            else if (res.success === true) {
                const allPosts = await getAllPosts();
                setPosts(allPosts.data);
                onClose();
            }
        } catch (error) {
            console.log(error);
            alert('something bad has happened');
        }
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-700 ease-out z-50 h-full flex flex-col justify-center items-center py-16 px-4 space-y-11 ">
            <div className="w-full max-w-2xl px-8 py-4 space-y-8 shadow shadow-gray-500 bg-secondary rounded-md">
                <div className="flex flex-col space-y-4">
                    <button
                        className="self-end cursor-pointer"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <AiTwotoneCloseSquare className="text-3xl text-[#2C6A4E]" />
                    </button>
                    <h1 className="text-center text-3xl font-bold text-[#2C6A4E]">
                        Create Post
                    </h1>
                </div>

                <form
                    method="post"
                    onSubmit={handleSubmit}
                    className="space-y-8 flex flex-col w-full "
                >
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="post-Type"
                            className="block mb-1 font-medium text-gray-700"
                        >
                            Post Type:
                        </label>
                        <div className="flex items-center justify-between rounded-lg pl-1 pr-4 text-gray-700 bg-[#F2F5F2] border">
                            <select
                                id="post-Type"
                                name="postType"
                                value={postType}
                                onChange={(e) => setPostType(e.target.value)}
                                className="w-full focus:outline-none rounded-lg p-3 text-gray-700 bg-[#F2F5F2] bg-[length:24px_24px] bg-position-[down_4px_center]"
                            >
                                {postOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <ErrorMessage message={errors?.tag}></ErrorMessage>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="title"
                            className="block mb-1 font-medium text-gray-700"
                        >
                            Title:
                        </label>
                        <input
                            id="title"
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
                        <ErrorMessage message={errors?.title}></ErrorMessage>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="description"
                            className="block mb-1 font-medium text-gray-700"
                        >
                            Description:
                        </label>
                        <textarea
                            id="description"
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
                        <ErrorMessage
                            message={errors?.content || errors?.message}
                        ></ErrorMessage>
                    </div>
                    <div className="w-full py-4 flex">
                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#2C6A4E] py-3 font-bold text-white transition-colors hover:bg-opacity-90 text-xl focus:outline-none"
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
