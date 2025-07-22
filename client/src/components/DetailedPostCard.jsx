import React from 'react';
import { FaUser } from 'react-icons/fa';

const DetailedPostCard = ({ post }) => {
    return (
        <div className="w-full h-fit md:px-8 py-3 md:py-4 border-b-2 relative mx-auto">
            {/* USERNAME */}
            <div className="flex justify-start items-center gap-2 md:gap-3 px-2 py-3 md:py-4 pt-0">
                <span aria-label="User-icon">
                    <FaUser className="size-8 bg-gray-500 rounded-full p-2 text-white" />
                </span>
                <p className="font-semibold">{post.user?.username}</p>
            </div>

            {/* TITLE + TAG */}
            <div className="flex flex-col w-full px-2 gap-4 sm:gap-10">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* TITLE */}
                    <h2 className="text-base md:text-lg lg:text-2xl font-poppins font-semibold">
                        {post.title}
                    </h2>

                    {/* TAG */}
                    <span
                        aria-label={`Post category: ${post.tag}`}
                        className={`w-16 md:w-24 h-6 md:h-7 flex justify-center items-center rounded-md shadow shadow-gray-400 ${
                            post.tag === 'tip' ? 'bg-blue-600' : 'bg-green-600'
                        }`}
                    >
                        <p className="text-white font-bold text-xs md:text-base">
                            {post.tag}
                        </p>
                    </span>
                </div>

                {/* CONTENT */}
                <div className="w-full h-fit bg-gray-200 p-2 sm:p-4 rounded-lg">
                    <p className="text-sm md:text-lg break-words hyphens-auto">
                        {post.content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailedPostCard;
