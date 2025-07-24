import { Link } from 'react-router';
import Plantlogo from '../assets/logos/green_logo.svg';
import { useEffect, useState } from 'react';

function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <nav className="bg-white shadow-md flex items-center fixed top-0 left-0 w-full z-50">
            <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <img
                        src={Plantlogo}
                        alt="Plant Logo"
                        className="w-24 lg:w-28 py-4"
                    />
                </div>

                <ul className="flex gap-3 md:gap-5 lg:px-20 text-gray-600">
                    <li className="hover:underline underline-offset-8 font-semibold font-poppins text-primary">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                        <Link to={'/userHome'}>My Plants</Link>
                    </li>
                    <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                        <Link to="/community">Community</Link>
                    </li>
                    {isLoggedIn ? (
                        <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                            <Link to="/profile">Profile</Link>
                        </li>
                    ) : null}

                    {isLoggedIn ? null : (
                        <li className="hover:underline underline-offset-8 font-semibold font-poppins">
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
