import { FaHandsClapping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function SignupSuccessCard() {
    return (
        <div className="bg-[#3A6B3D] w-full min-h-screen flex justify-center items-center p-8">
            <div className="bg-[#FEF7E7] rounded-2xl shadow-2xl max-w-5xl w-full h-[300px] justify-center items-center gap-6 flex flex-col">
                <FaHandsClapping className=" text-6xl text-[#3A6B3D]" />
                <p className="text-xl font-[Poppins] font-bold">
                    You have sucssessfully signed up! Proceed to
                    <Link to="/login" className="text-[#3A6B3D]">
                        &nbsp; Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
