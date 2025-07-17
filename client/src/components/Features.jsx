import { FaClock, FaLeaf, FaUsers } from 'react-icons/fa6';

const plantPalFeatures = [
    {
        icon: (
            <FaLeaf className="bg-primary rounded-full p-3 text-white size-11" />
        ),
        title: 'Personalized Plant Profiles',
        description:
            'Easily add your plants with names, photos, and care notes.'
    },
    {
        icon: (
            <FaClock className="bg-primary rounded-full p-3 text-white size-11" />
        ),
        title: 'Care Schedule & Reminders',
        description:
            "Get automatic watering, fertilizing, and repotting reminders based on your plant's specific needs!"
    },
    {
        icon: (
            <FaUsers className="bg-primary rounded-full p-3 text-white size-11" />
        ),
        title: 'Plant Parent Community',
        description:
            'Join a friendly community of plant lovers. Share progress, ask for help.'
    }
];

const Features = () => {
    return (
        <section className="h-[110vh] w-full flex flex-col justify-around items-center gap-7 relative bg-secondary pb-32">
            <div className="w-full flex flex-col justify-center items-center gap-2 ">
                <h1 className="text-4xl font-bold font-poppins">
                    Everything You Need for Happy Plants
                </h1>
                <p className="text-base font-poppins text-gray-500">
                    Powerful features designed to make plant care simple and
                    enjoyable.
                </p>
            </div>
            <div className="w-3/4 flex justify-center items-center gap-16 ">
                {plantPalFeatures.map((feat, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`w-2/5 h-fit  min-h-fit rounded-lg shadow-lg shadow-gray-500 bg-white p-9 flex flex-col justify-center gap-6 duration-500 transition-transform ease-in-out hover:scale-125 cursor-pointer ${idx === 1 ? '-mt-44' : ''}`}
                        >
                            <span className="">{feat.icon}</span>
                            <div className="flex flex-col justify-center gap-3 ">
                                <h2 className="font-poppins font-bold text-lg ">
                                    {feat.title}
                                </h2>
                                <p className="font-poppins text-gray-500 line-clamp-3 text-sm">
                                    {feat.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
