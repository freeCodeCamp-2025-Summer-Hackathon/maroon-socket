import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PostCard = ({ post, fullContent = false }) => {
    const maxLength = 300;
    const isLong = post?.description.length > maxLength;

    return (
        <div className="w-full h-fit rounded-md shadow shadow-gray-400 px-4 md:px-8 py-14 bg-white relative ">
            {/** USERNAME CONTAINER */}
            <div className="flex justify-start items-center gap-3 px-8 py-4">
                <span aria-label="User-icon">
                    <FaUser className="size-8 bg-gray-500 rounded-full p-2 text-white" />
                </span>
                <p className="font-semibold">{post.userName}</p>
            </div>

            {/** TITLE and DESCRIPTION */}
            <div className="flex flex-col w-full px-8 gap-4">
                <h2 className="text-lg font-poppins font-semibold">
                    {post.title}
                </h2>
                <div className="w-full h-fit bg-gray-200 p-4 rounded-md">
                    <p className="text-base">
                        {fullContent
                            ? post?.description
                            : post?.description.slice(0, maxLength)}
                        {!fullContent && isLong && (
                            // Change the path accordingly
                            <Link to={`/`}>
                                <span className="font-bold text-black">
                                    ......
                                </span>
                                <button className="text-black hover:text-blue-700 underline text-base font-bold cursor-pointer">
                                    Read More
                                </button>
                            </Link>
                        )}
                    </p>
                </div>
            </div>

            {/** TAG CONTAINER */}
            <span
                aria-label={`Post category: ${post.tag}`}
                className={`absolute top-20 right-12 md:top-14 md:right-16 px-2 w-24 h-7 flex justify-center items-center rounded-md shadow shadow-gray-400 ${post.tag === 'Tip' ? 'bg-blue-600' : 'bg-green-600'}`}
            >
                <p className="text-white font-bold">
                    {post.tag === 'Tip' ? 'Tip' : 'Question'}
                </p>
            </span>
        </div>
    );
};

export default PostCard;
