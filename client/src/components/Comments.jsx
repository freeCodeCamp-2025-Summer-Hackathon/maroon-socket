const Comment = ({ comments }) => {
    return (
        <div className="bg-gray-50/50 antialiased max-w-2xl ml-6 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comments
            </h3>

            {/* Comments List */}
            <ul className="space-y-5">
                {comments.map((comment) => (
                    <li key={comment.id} className="flex items-start space-x-4">
                        <div className="flex-1 bg-white p-4 rounded-lg  hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-200 border-l-2 border-l-green-800">
                            <p className="font-semibold text-gray-800">
                                {comment.user.username}
                            </p>
                            <p className="text-gray-600 mt-1">
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
