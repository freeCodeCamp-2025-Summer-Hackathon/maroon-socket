import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PostBtn from '../components/PostBtn';
import PostCard from '../components/PostCard';
import AddPost from './AddPost';
import { getAllPosts } from '../services/postService';

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const populatePosts = async () => {
            try {
                const res = await getAllPosts();
                setPosts(res.data);
            } catch (error) {
                console.log(error);
                alert('someting went wrong');
            }
        };

        populatePosts();
    }, []);

    return (
        <div className="w-full h-full px-4 md:px-12 py-12 md:py-16 flex flex-col justify-center items-center gap-12 relative mt-20 bg-secondary">
            {/**Post form */}
            {showForm &&
                createPortal(
                    <AddPost
                        onClose={() => setShowForm(false)}
                        setPosts={setPosts}
                    />,
                    document.body
                )}

            {/** Welcome message */}
            <div className="flex flex-col justify-center items-center text-center gap-2 pb-2 sm:pb-6 sm:mb-8">
                <h2 className="font-poppins font-bold text-xl sm:text-3xl md:text-4xl">
                    Welcome to the PlantCare Community
                </h2>
                <p className="font-poppins text-xs sm:text-lg text-gray-600">
                    Share tips, ask questions, and connect with fellow plant
                    lovers.
                </p>
            </div>

            {/** Create POST Button */}
            <div className="w-full max-w-5xl flex justify-end">
                <PostBtn onClick={() => setShowForm(true)} />
            </div>

            {/** Post Cards */}
            <div className="w-full max-w-5xl flex flex-col gap-8 items-center">
                {posts.map((post) => {
                    return <PostCard key={post.id} post={post} />;
                })}
            </div>
        </div>
    );
};

export default Community;
