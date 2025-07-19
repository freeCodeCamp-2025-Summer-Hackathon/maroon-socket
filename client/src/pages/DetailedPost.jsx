//import { CiPaperplane } from 'react-icons/ci';
import Comments from '../components/Comments';
import CommentInputBox from '../components/CommentInputBox';

// dummy post and comments
const post = {
    UserName: 'Someone',
    title: 'Water Conservation Tips',
    content:
        'Too much water, soils can become loose and plants can become unstable.'
};

const DetailedPost = () => {
    return (
        <div className="flex justify-center p-6">
            <div className="w-screen h-screen flex flex-col bg-white max-w-fit gap-2">
                {/*Post details*/}
                <div className="flex flex-col gap-1 mb-2 rounded-md border-2 border-green-600 border-opacity-20 shadow  px-4 m-4">
                    <div className="flex flex-row gap-2 py-2">
                        <div className="h-8 w-8 rounded-full text-white font-bold bg-[#3a6b3d] flex items-center justify-center">
                            {post.UserName.charAt(0).toUpperCase()}
                        </div>
                        <h5 className="font-semibold text-base flex items-center">
                            {post.UserName}
                        </h5>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="mb-4 text-gray-700">{post.content}</p>
                </div>

                {/*Comments section*/}
                <Comments />

                {/*Comment Input Box*/}
                <CommentInputBox />
            </div>
        </div>
    );
};

export default DetailedPost;
