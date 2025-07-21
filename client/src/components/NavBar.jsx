import { Link } from 'react-router-dom';
import Plantlogo from '../assets/logos/green_logo.svg';

function NavBar() {
    return (
        <nav className="bg-white shadow-md flex items-center p-6 fixed top-0 left-0 w-full z-50">
            <div className="w-full flex justify-between items-center px-8">
                <div className="w-28 flex justify-center items-center">
                    <img alt="PlantPal Logo" src={Plantlogo} className="object-cover w-full h-7" />
                </div>
                <ul className=" flex gap-5 px-20 text-gray-600">
                    <li className="hover:underline underline-offset-8 font-semibold font-poppins text-primary ">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="hover:underline underline-offset-8 font-semibold font-poppins text-primary ">
                        <Link to={'/userHome'}>My Plants</Link>
                    </li>
                    <li className=" hover:underline underline-offset-8 font-semibold font-poppins ">
                        <Link to="/community">Community</Link>
                    </li>
                    <li className="hover:underline underline-offset-8 font-semibold font-poppins  ">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
