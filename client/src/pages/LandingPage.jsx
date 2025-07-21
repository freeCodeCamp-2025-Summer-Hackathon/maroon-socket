import NavBar from '../components/NavBar.jsx';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';
import quote from '../assets/quote.png';

function LandingPage() {
    return (
        <div className="w-full min-h-screen scroll-smooth" id="home">
            <NavBar />

            <main className="w-full">
                {/* Hero Section */}
                <section className="relative w-full min-h-screen bg-white overflow-hidden">
                    {/* Text */}
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center gap-6 z-20">
                        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Helping You Keep Your{' '}
                            <span className="text-primary">Plant</span> Happy
                        </h1>
                        <p className="font-poppins text-gray-500 max-w-xl text-base md:text-lg">
                            PlantPal helps you care for your plants, track
                            progress, and connect with a plant-loving community.
                        </p>
                        <Link to="/login">
                            <button className="bg-btn text-white px-6 py-3 rounded-lg font-semibold font-poppins hover:scale-110 transition duration-200">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* SVG Wave */}
                    <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
                        <svg
                            className="w-full h-40 sm:h-56 md:h-80"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="#3a6b3d"
                                fillOpacity="1"
                                d="M0,160L40,176C80,192,160,224,240,240C320,256,400,256,480,224C560,192,640,128,720,117.3C800,107,880,149,960,176C1040,203,1120,213,1200,181.3C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                    {/* Hero Image */}
                    <div className="absolute -bottom-3 w-full z-10">
                        <img
                            src={hero}
                            alt="Illustration of a group of people gardening and caring for plants"
                            className="w-full max-h-[50vh] lg:max-h-[55vh] object-contain"
                        />
                    </div>
                </section>

                {/* Feature section */}
                <Features />

                {/* Extra Quote section */}
                <section className="w-full bg-btn py-16 px-4">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                        <div className="w-full lg:w-1/2">
                            <img
                                src={quote}
                                alt="Illustration of a woman nurturing potted plants indoors"
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                            <blockquote className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                                "To nurture a plant is to slow down, <br /> pay
                                attention, <br /> and grow alongside it."
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Community section */}
                <section className="w-full py-16 px-4 bg-white">
                    <div className="container mx-auto flex flex-col items-center gap-6 text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">
                            Join the{' '}
                            <span className="text-primary">PlantPal</span>{' '}
                            Community
                        </h1>
                        <p className="text-base font-poppins text-gray-500">
                            Ask questions, share your green wisdom
                        </p>
                        <Link to="/login">
                            <button className="bg-btn text-white px-6 py-3 rounded-lg font-semibold font-poppins hover:scale-110 transition duration-200">
                                Join our green community
                            </button>
                        </Link>
                    </div>
                </section>
            </main>

            {/** Footer section */}
            <Footer />
        </div>
    );
}

export default LandingPage;
