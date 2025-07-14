import { FaUser } from 'react-icons/fa6';

const PostCard = ({ post }) => {
    return (
        <div className="w-full h-fit rounded-md shadow shadow-gray-400 px-8 py-14 bg-secondary relative ">
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
                    <p className="text-base">{post.description}</p>
                </div>
            </div>

            {/** TAG CONTAINER */}
            <span
                aria-label={`Post category: ${post.tag}`}
                className={`absolute top-14 right-16 px-2 w-24 h-7 flex justify-center items-center rounded-md shadow shadow-gray-400 ${post.tag === 'Tip' ? 'bg-blue-600' : 'bg-green-600'}`}
            >
                <p className="text-white font-bold">
                    {post.tag === 'Tip' ? 'Tip' : 'Question'}
                </p>
            </span>
        </div>
    );
};

export default PostCard;
