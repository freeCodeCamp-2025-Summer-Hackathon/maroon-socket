import { FaUser } from 'react-icons/fa6';

const Comment = ({ comments }) => {
    return (
        <div className="bg-gray-50/50 antialiased max-w-3xl ml-6 p-4 sm:p-6">
            <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-4">
                Comments
            </h3>

            {/* Comments List */}
            <ul className="space-y-5">
                {comments.map((comment) => (
                    <li key={comment.id} className="flex items-start space-x-4">
                        <div className="w-full mx-auto flex-1 bg-white p-2 rounded-lg  hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-200 border-l-2 border-l-green-800">
                            <div className="flex justify-start items-center gap-2 md:gap-3 px-1 py-2">
                                <span aria-label="User-icon">
                                    <FaUser className="size-8 bg-gray-500 rounded-full p-2 text-white" />
                                </span>
                                <p className="text-xs md:text-base font-semibold text-gray-800">
                                    {comment.user.username}
                                </p>
                            </div>

                            <p className="text-xs md:text-base text-gray-600 mt-1 px-1 pb-2 break-words hyphens-auto">
                                {comment.content}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comment;
