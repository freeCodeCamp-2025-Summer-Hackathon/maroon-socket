import PostBtn from '../components/PostBtn';
import PostCard from '../components/PostCard';

// Dummy testing
const posts = [
    {
        id: 1,
        userName: 'EmilyGardens',
        title: 'Why are my monstera leaves turning yellow?',
        tag: 'Question',
        description:
            "I’ve been watering my monstera once a week and it's placed near a bright window. But recently, the leaves have started turning yellow. Could this be due to overwatering or something else?"
    },
    {
        id: 2,
        userName: 'PlantParentTom',
        title: 'Quick Tip: Let your monstera dry out!',
        tag: 'Tip',
        description:
            "If your monstera leaves are turning yellow, it's often due to overwatering. Make sure the top 2 inches of soil are dry before the next watering. Also, ensure your pot has drainage holes!"
    }
];

const Community = () => {
    return (
        <div className="w-full h-full px-12 py-16 flex flex-col justify-center items-center gap-12 relative pt-16 mt-24">
            {/** Welcome message */}
            <div className="flex flex-col justify-center items-center mb-11">
                <h2 className="font-poppins font-bold text-4xl">
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
