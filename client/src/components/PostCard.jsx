import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PostCard = ({ post, fullContent = false }) => {
    const maxLength = 300;
    const isLong = post?.content.length > maxLength;

    return (
        <div className="w-full h-fit rounded-lg shadow shadow-gray-400 px-1 md:px-8 py-2 md:py-14 bg-white relative ">
            {/** USERNAME CONTAINER */}
            <div className="flex justify-start items-center gap-2 md:gap-3 px-2 py-3 md:py-4">
                <span aria-label="User-icon">
                    <FaUser className="size-8 bg-gray-500 rounded-full p-2 text-white" />
                </span>
                <p className="font-semibold">{post.user.username}</p>
            </div>

            {/** TITLE and DESCRIPTION */}
            <div className="flex flex-col w-full px-2 gap-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* TITLE */}
                    <h2 className="text-base md:text-lg font-poppins font-semibold">
                        <Link to={`/community/${post.id}`} state={post}>
                            {post.title}
                            <span className="absolute inset-0 hover:shadow-2xl"></span>
                        </Link>
                    </h2>
                    {/** TAG CONTAINER */}
                    <span
                        aria-label={`Post category: ${post.tag}`}
                        className={`w-16 md:w-24 h-6 md:h-7 flex justify-center items-center rounded-md shadow shadow-gray-400 ${post.tag === 'tip' ? 'bg-blue-600' : 'bg-green-600'}`}
                    >
                        <p className="text-white font-bold text-xs md:text-base">
                            {post.tag}
                        </p>
                    </span>
                </div>

                <div className="w-full h-fit bg-gray-200 shadow-sm p-2 rounded-lg">
                    <p className="text-sm md:text-base break-words hyphens-auto">
                        {fullContent
                            ? post?.content
                            : post?.content.slice(0, maxLength)}
                        {!fullContent && isLong && (
                            // Change the path accordingly
                            <Link to={`/community/${post.id}`} state={post}>
                                <span className="font-bold text-black">
                                    &nbsp;&hellip;
                                </span>
                                <button className="text-black underline text-xs sm:text-base font-bold cursor-pointer">
                                    Read More
                                </button>
                            </Link>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
