import PostCard from '../components/PostCard';
import Comments from '../components/Comments';
import CommentInputBox from '../components/CommentInputBox';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllComments } from '../services/commentService';

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
        <div className="flex justify-center p-6">
            <div className="w-screen h-screen flex flex-col bg-white max-w-fit gap-2 pt-20">
                {/*Post details*/}
                <PostCard post={location.state} fullContent={true}></PostCard>

                {/*Comments section*/}
                <Comments comments={comments} />

                {/*Comment Input Box*/}
                <CommentInputBox
                    postId={location.state.id}
                    setAllComments={setComments}
                />
            </div>
        </div>
    );
};

export default DetailedPost;
