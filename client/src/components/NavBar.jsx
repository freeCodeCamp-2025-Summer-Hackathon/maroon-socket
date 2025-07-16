import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="bg-white shadow-md flex justify-between items-center w-full p-8 rounded-b-lg">
            <div className="flex items-center px-4">
                <span className="text-2xl font-inter font-bold text-[#2d6a4f]">
                    PlantPal
                </span>
            </div>
            <ul className="flex gap-5 px-20 text-[#767676]">
                <li className="text-[#2d6a4f] font-inter font-semibold border-b-2">
                    Home
                </li>

                <li className="hover:text-[#2d6a4f] hover:font-medium">
                    <Link to="/community">Community</Link>
                </li>
                <li className="hover:text-[#2d6a4f] font-inter font-semibold hover:font-bold">
                    <Link to="/login">Login</Link>
                </li>
                <li className="hover:text-[#2d6a4f] font-inter font-semibold hover:font-bold">
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
