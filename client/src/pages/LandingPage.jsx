import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/heroImage.webp';
import NavBar from './NavBar.jsx';

function LandingPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('login');
    };
    return (
        <div className="w-screen h-screen bg-white py-4 rounded-[20px]">
            {/*nav bar*/}
            <NavBar />
            {/*main section*/}
            <section className="flex flex-row justify-between items-center gap-6 p-10">
                <div className="flex flex-col items-start justify-center ml-20 ">
                    <h1 className="text-4xl text-[#2d6a4f] font-extrabold py-10">
                        Hi, welcome to PlantPal
                    </h1>
                    <p className="text-lg text-[#1b4332] font-semibold ">
                        A plant care tracker and community for house plant
                        lovers.
                    </p>
                    <p className="text-base mb-10 text-left">
                        Effortlessly manage your plants, connect with fellow
                        enthusiasts,
                        <br /> and watch your green friends thrive!
                    </p>
                    <button
                        onClick={handleClick}
                        className="bg-[#2d6a4f] text-white font-bold py-4 px-8 rounded-full shadow-lg"
                    >
                        Track your plants now!
                    </button>
                </div>
                <div>
                    <img src={heroImage} alt="hero image" />
                </div>
            </section>
            <div className="w-40 h-1 bg-[#2d6a4f] rounded-full mx-auto my-4"></div>
            {/*Testimonials*/}
            <section className="py-10 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    What Our Users Are Saying
                </h2>
                <div className="flex flex-row items-center gap-8">
                    <div className="p-8 m-4 rounded-lg shadow max-w-md w-full">
                        <p className="text-[#767676]">
                            &quot;This app has been a game-changer for my indoor
                            gardening. The reminders are spot on!&quot;
                        </p>
                    </div>
                    <div className="p-8 m-4 rounded-lg shadow max-w-md w-full">
                        <p className="text-[#767676]">
                            &quot;The community features are fantastic! I've
                            learned so much from other plant lovers.&quot;
                        </p>
                    </div>
                    <div className="p-8 m-4 rounded-lg shadow max-w-md w-full">
                        <p className="text-[#767676]">
                            &quot;The best app for plant lovers! I can track my
                            plants' needs and connect with others.&quot;
                        </p>
                    </div>
                </div>
            </section>
            <div className="w-40 h-1 bg-[#2d6a4f] rounded-full mx-auto my-4"></div>
            {/*Explore*/}
            <section className="py-10 px-6 ">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Explore the app
                </h2>
                <div className="flex flex-row gap-4 p-10">
                    <img
                        src=""
                        alt="App screenshot1"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                        src=""
                        alt="App screenshot2"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <img
                        src=""
                        alt="App screenshot3"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </section>

            <footer className="py-16 px-6 text-center text-white bg-[#2d6a4f]">
                <div className="flex flex-row justify-center space-x-20 items-center mb-8">
                    <div className="mb-8">
                        <span className="text-3xl font-bold">PlantPal</span>
                        <p className="text-sm mt-2">
                            &copy; 2023 PlantPal. All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center space-x-6 text-lg">
                        <a
                            href="#"
                            className="hover:text-[#52b788] transition duration-300"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#52b788] transition duration-300"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#52b788] transition duration-300"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#52b788] transition duration-300"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#52b788] transition duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t">
                    <p>Made with 💚 for plant lovers everywhere.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
