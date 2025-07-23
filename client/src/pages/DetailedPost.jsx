import DetailedPostCard from '../components/DetailedPostCard';
import Comments from '../components/Comments';
import CommentInputBox from '../components/CommentInputBox';
import { useEffect, useState } from 'react';
import { getAllComments } from '../services/commentService';
import { Link, useLocation } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa6';

const DetailedPost = () => {
    const location = useLocation();
    const postId = location.state.id;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const populatePosts = async () => {
            try {
                const res = await getAllComments(postId);
                setComments(res.data);
            } catch (error) {
                console.log(error);
                alert('someting went wrong');
            }
        };

        populatePosts();
    }, [postId]);

    return (
        <div className="min-h-screen w-full py-6 px-2 sm:px-4 flex justify-center bg-secondary">
            <div className="w-full max-w-6xl flex flex-col bg-white gap-4 mt-16 sm:mt-20 pt-6 px-4 sm:px-8 rounded-lg sm:shadow-md">
                {/* Back Button */}
                <Link to="/community" aria-label="Back to community">
                    <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <FaArrowLeft />
                        <span>Back</span>
                    </button>
                </Link>

                {/* Post details */}
                <DetailedPostCard post={location.state} fullContent={true} />

                {/* Comments section */}
                <Comments comments={comments} />

                {/* Comment Input Box */}
                <CommentInputBox
                    postId={location.state.id}
                    setAllComments={setComments}
                />
            </div>
        </div>
    );
};

export default DetailedPost;
