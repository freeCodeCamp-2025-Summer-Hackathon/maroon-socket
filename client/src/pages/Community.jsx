import { useEffect, useState } from 'react';
import PostBtn from '../components/PostBtn';
import PostCard from '../components/PostCard';

const Community = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL;

        const fetchPosts = async () => {
            try {
                const res = await fetch(`${apiUrl}/api/post`);
                const json = await res.json();
                setPosts(json.data);
            } catch (error) {
                console.log(error);
                alert('someting went wrong');
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="w-full h-full md:px-12 py-16 flex flex-col justify-center items-center gap-12 relative pt-16 mt-20 bg-secondary">
            {/** Welcome message */}
            <div className="flex flex-col justify-center items-center max-md:gap-2 mb-11">
                <h2 className="font-poppins font-bold text-2xl md:text-4xl">
                    Welcome to the PlantCare Community
                </h2>
                <p className=" font-poppins text-sm text-gray-600">
                    Share tips, ask questions, and connect with fellow plant
                    lovers.
                </p>
            </div>
            {/** Create POST Button */}
            <div className="w-5/6 flex justify-end">
                <PostBtn />
            </div>

            <div className=" flex flex-col w-5/6 h-fit justify-center items-center gap-10 ">
                {posts.map((post) => {
                    return <PostCard key={post.id} post={post} />;
                })}
            </div>
        </div>
    );
};

export default Community;
