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
        title: 'The Complete Guide to Nurturing Healthy Indoor Plants',
        tag: 'Tip',
        description:
            `Taking care of indoor plants isn't just about watering them occasionally
             1. Know Your Plant's Needs
             2. Don’t Overwater
             3. Use Pots with Drainage
             4. Give Them the Right Light
             5. Rotate Regularly
             6. Dust the Leaves
             7. Repot When Necessary
             8. Fertilize — But Not Too Much
             9. Watch for Pests
             10. Be Patient and Observant, Caring for plants is more about attention than perfection`
    }
];

const Community = () => {
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
