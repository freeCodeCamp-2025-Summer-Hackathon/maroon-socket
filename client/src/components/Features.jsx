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
        <section className="min-h-screen w-full flex flex-col justify-around items-center gap-10 px-4 py-16 bg-secondary relative">
            <div className="w-full flex flex-col justify-center items-center text-center gap-2">
                <h1 className="text-2xl md:text-4xl font-bold font-poppins">
                    Everything You Need for Happy Plants
                </h1>
                <p className="text-base font-poppins text-gray-500">
                    Powerful features designed to make plant care simple and
                    enjoyable.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-wrap justify-around items-stretch gap-6 sm:gap-10 w-full max-w-6xl">
                {plantPalFeatures.map((feat, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col justify-around p-6 sm:p-8 bg-white shadow-lg rounded-xl shadow-gray-500 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer basis-[90%] sm:basis-[45%] lg:basis-[30%] ${
                            idx === 1 ? 'sm:mt-0 lg:-mt-24' : ''
                        }`}
                    >
                        <div className="text-3xl mb-4">{feat.icon}</div>
                        <h2 className="text-lg font-bold font-poppins mb-2">
                            {feat.title}
                        </h2>
                        <p className="text-sm text-gray-500 font-poppins line-clamp-3">
                            {feat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
