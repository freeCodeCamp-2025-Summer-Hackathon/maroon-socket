import PostCard from '../components/PostCard';
import Comments from '../components/Comments';
import CommentInputBox from '../components/CommentInputBox';
import { useLocation } from 'react-router-dom';

const DetailedPost = () => {
    const location = useLocation();
    return (
        <div className="flex justify-center p-6">
            <div className="w-screen h-screen flex flex-col bg-white max-w-fit gap-2 pt-20">
                {/*Post details*/}
                <PostCard post={location.state} fullContent={true}></PostCard>

                {/*Comments section*/}
                <Comments />

                {/*Comment Input Box*/}
                <CommentInputBox />
            </div>
        </div>
    );
};

export default DetailedPost;
