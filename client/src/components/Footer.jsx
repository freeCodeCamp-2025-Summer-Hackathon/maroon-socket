import '../index.css';
import logo from '../assets/logos/white_logo.svg';
import { Link } from 'react-router-dom';
import {
    FaInstagram,
    FaDiscord,
    FaYoutube,
    FaReddit,
    FaGithub
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative w-full text-white">
            <div className="relative w-full bg-primary overflow-hidden">
                {/* SVG Wave */}
                <div className="w-full">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-20 md:h-28"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
                               82.39-16.72,168.19-17.73,250.45-.39C823.78,
                               31,906.67,72,985.66,92.83c70.05,18.48,
                               146.53,26.09,214.34,3V0H0V27.35A600.21,
                               600.21,0,0,0,321.39,56.44Z"
                            className="fill-white"
                        ></path>
                    </svg>
                </div>

                {/* Footer Content */}
                <div className="px-6 sm:px-10 md:px-20 py-10 flex flex-col gap-10">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={logo}
                            alt="PlantPal Logo"
                            className="h-24 md:h-28"
                        />
                    </div>

                    {/* Content Row */}
                    <div className="grid gap-10 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {/* About */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-inter font-bold text-black text-xl md:text-2xl">
                                About PlantPal
                            </h2>
                            <p className="font-poppins text-base text-white">
                                Plant care is essential for maintaining healthy
                                and thriving greenery. Scheduling watering and
                                providing proper care for your plants.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-4 sm:px-4">
                            <h2
                                className="font-inter font-bold text-black text-xl md:text-2xl "
                                arial-label="Quick Links"
                            >
                                Quick Links
                            </h2>
                            <ul className="font-poppins flex flex-col gap-2 text-white">
                                <li>
                                    <a
                                        href="#home"
                                        className="hover:underline"
                                        aria-label="Home"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="hover:underline"
                                        aria-label="community"
                                    >
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/myplants"
                                        className="hover:underline"
                                        aria-label="My Plants"
                                    >
                                        My Plants
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="hover:underline"
                                        aria-label="login"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social & Contact */}
                        <div className="flex flex-col gap-4">
                            <h2 className="font-inter font-bold text-black text-xl md:text-2xl">
                                Follow Us
                            </h2>
                            <p className="font-poppins text-white">
                                Have questions? Reach out to us at&nbsp;
                                <a
                                    href="mailto:support@plantpal.com"
                                    className="hover:underline"
                                >
                                    support@plantpal.com
                                </a>
                                .
                            </p>
                            <div className="flex gap-4 mt-2">
                                <a
                                    href="https://github.com/freeCodeCamp-2025-Summer-Hackathon/maroon-socket/tree/main"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                    aria-label="Discord"
                                >
                                    <FaDiscord size={24} />
                                </a>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube size={24} />
                                </a>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                    aria-label="Reddit"
                                >
                                    <FaReddit size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="w-full border-t border-gray-300 pt-6 mt-6 text-center">
                        <p className="text-white text-sm">
                            Made with 💚 for the{' '}
                            <Link
                                to="https://www.freecodecamp.org/"
                                className="hover:underline"
                            >
                                FreeCodeCamp
                            </Link>{' '}
                            Hackathon
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
