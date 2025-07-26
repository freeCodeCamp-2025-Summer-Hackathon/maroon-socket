import { Link } from 'react-router';
import Plantlogo from '../assets/logos/green_logo.svg';
import { useEffect, useState } from 'react';

function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoggedIn(true);
        }
    }, []);

    // Functions to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={Plantlogo}
                        alt="Plant Logo"
                        className="w-24 lg:w-28 py-4"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-3 md:gap-5 lg:px-20 text-gray-600">
                    <li className="hover:underline underline-offset-8 font-semibold font-poppins text-primary">
                        <Link to={'/'}>Home</Link>
                    </li>

                    {isLoggedIn ? (
                        <>
                            <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                                <Link to={'/userHome'}>My Plants</Link>
                            </li>
                            <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                                <Link to="/profile">Profile</Link>
                            </li>
                        </>
                    ) : null}

                    <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                        <Link to="/community">Community</Link>
                    </li>

                    {isLoggedIn ? null : (
                        <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={toggleMobileMenu}
                    aria-label="mobile menu button"
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                            isMobileMenuOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                            isMobileMenuOpen
                                ? '-rotate-45 -translate-y-1.5'
                                : ''
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex flex-col py-4 px-4 space-y-4 text-gray-600">
                    <li className="hover:bg-gray-50 rounded-md px-2 py-1">
                        <Link
                            to={'/'}
                            className="block font-semibold font-poppins text-primary"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>

                    {isLoggedIn ? (
                        <>
                            <li className="hover:bg-gray-50 rounded-md px-2 py-1">
                                <Link
                                    to={'/userHome'}
                                    className="block font-semibold font-poppins"
                                    onClick={closeMobileMenu}
                                >
                                    My Plants
                                </Link>
                            </li>
                            <li className="hover:bg-gray-50 rounded-md px-2 py-1">
                                <Link
                                    to="/profile"
                                    className="block font-semibold font-poppins"
                                    onClick={closeMobileMenu}
                                >
                                    Profile
                                </Link>
                            </li>
                        </>
                    ) : null}

                    <li className="hover:bg-gray-50 rounded-md px-2 py-1">
                        <Link
                            to="/community"
                            className="block font-semibold font-poppins"
                            onClick={closeMobileMenu}
                        >
                            Community
                        </Link>
                    </li>

                    {isLoggedIn ? null : (
                        <li className="hover:bg-gray-50 rounded-md px-2 py-1">
                            <Link
                                to="/login"
                                className="block font-semibold font-poppins"
                                onClick={closeMobileMenu}
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
