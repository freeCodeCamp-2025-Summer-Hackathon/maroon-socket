import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PostBtn from '../components/PostBtn';
import PostCard from '../components/PostCard';
import AddPost from './AddPost';
import { getAllPosts } from '../services/postService';

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const populatePosts = async () => {
            try {
                const res = await getAllPosts();
                setPosts(res.data);
                setFilteredPosts(res.data);
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        };

        populatePosts();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(
                (post) =>
                    post.content
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }, [searchTerm, posts]);

    return (
        <div className="w-full min-h-screen px-4 md:px-12 py-24 md:py-36 flex flex-col justify-center items-center gap-10 relative bg-secondary">
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

            <div className="w-full max-w-5xl flex flex-row md:justify-between gap-6 md:gap-8">
                {/* Search Input */}
                <input
                    type="text"
                    name="search_posts"
                    placeholder=" Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300 text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                {/* Create Post Button */}
                <PostBtn onClick={() => setShowForm(true)} />
            </div>

            {/** Post Cards */}
            <div className="w-full max-w-5xl flex flex-col gap-8 items-center">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                ) : (
                    <p className="text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
};

export default Community;
