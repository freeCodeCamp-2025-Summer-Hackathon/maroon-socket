import React from 'react';
import '../index.css';
import logo from '../assets/logos/white_logo.svg';
import { Link } from 'react-router-dom';
import { FaInstagram, FaDiscord, FaYoutube, FaReddit } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative h-screen text-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-auto bg-[#3A6B3D]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block fill-white"
                    ></path>
                </svg>
                <div className="py-8 px-10 md:px-20">
                    {/* Logo Row */}
                    <div className="flex justify-start">
                        <img src={logo} alt="PlantPal Logo" className="h-32" />
                    </div>

                    {/* Content Row */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="flex flex-col gap-5">
                            <h2 className="font-inter font-normal text-white text-3xl">
                                About PlantPal
                            </h2>
                            <p className="font-poppins font-normal">
                                Plant care is essential for maintaining healthy
                                and thriving greenery. Scheduling watering and
                                providing proper care ensures your plants
                                receive the attention they need, anytime.
                                Whether it's adjusting sunlight exposure,
                                monitoring soil moisture, or pruning, consistent
                                care keeps your plants vibrant and flourishing.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 lg:px-16 md:px-8">
                            <h2
                                className="font-inter font-normal text-white text-3xl"
                                arial-label="Quick Links"
                            >
                                Quick Links
                            </h2>
                            <ul className="font-poppins font-normal flex flex-col gap-2">
                                <li>
                                    <Link
                                        to="/"
                                        className="hover:underline font-poppins"
                                        aria-label="Home"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="hover:underline font-poppins"
                                        aria-label="community"
                                    >
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/myplants"
                                        className="hover:underline font-poppins"
                                        aria-label="My Plants"
                                    >
                                        My Plants
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="hover:underline font-poppins"
                                        aria-label="login"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="font-inter font-normal text-white text-3xl">
                                Follow Us
                            </h2>
                            <p className="font-poppins font-normal">
                                Have questions? Reach out to us at{' '}
                                <a
                                    href="mailto:support@plantpal.com"
                                    className="hover:underline"
                                >
                                    support@plantpal.com
                                </a>
                                .
                            </p>
                            <div className="flex gap-6 mt-2">
                                <a
                                    href="https://www.instagram.com/freecodecamp/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                >
                                    <FaInstagram size={28} />
                                </a>
                                <a
                                    href="https://discord.com/invite/KVUmVXA"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Discord"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                >
                                    <FaDiscord size={28} />
                                </a>
                                <a
                                    href="https://www.youtube.com/@freecodecamp"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                >
                                    <FaYoutube size={28} />
                                </a>
                                <a
                                    href="https://www.reddit.com/r/FreeCodeCamp/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Reddit"
                                    className="text-white hover:text-[#dfff00] transition-colors"
                                >
                                    <FaReddit size={28} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Row */}
                    <div className="flex w-full justify-center">
                        <div className="mt-16 pt-8 border-t w-11/12 lg:w-3/5 border-gray-300">
                            <p className="text-center">
                                Made with 💚 for plant lovers everywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
