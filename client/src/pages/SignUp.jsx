import { useState } from 'react';
import { FaUserPen, FaEnvelope, FaLock } from 'react-icons/fa6';
import { MdLockOutline } from 'react-icons/md';
import signUp from '../assets/sign_up.png';
import { Link } from 'react-router-dom';

function SignUp() {
    const [userData, setUserData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();

        if (
            !checkPasswords(userData.password, userData.passwordConfirm) ||
            !isEmail(userData.email)
        ) {
            return;
        }
        const apiUrl = import.meta.env.VITE_API_URL;

        const res = await fetch(`${apiUrl}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        console.log(await res.json());
    }

    function isEmail(emailId) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(emailId)) {
            return emailId;
        } else {
            alert('Check your mail Id');
            return false;
        }
    }
    function checkPasswords(pass, confirmPass) {
        if (pass === confirmPass) {
            return (pass, confirmPass);
        } else {
            alert('check your passwords');
            return false;
        }
    }
    return (
        <div className="bg-[#29433F] w-full min-h-screen flex justify-center items-center py-8">
            <div className="bg-[#29433F] w-full flex justify-center items-center px-4">
                <div className="bg-[#FEF7E7] rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full flex">
                    <div className="w-1/2 relative">
                        <img
                            src={signUp}
                            alt="a decorative plant pot"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side , Sign up form*/}
                    <div className="w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#29433F] mb-8 text-center">
                            Sign Up
                        </h2>
                        <form
                            className="w-full flex flex-col justify-center items-start gap-4"
                            onSubmit={handleSubmit}
                        >
                            <label
                                className="block font-medium text-gray-700"
                                htmlFor="username"
                            >
                                Username:
                            </label>
                            <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                                <span>
                                    <FaUserPen className="text-2xl text-gray-600" />
                                </span>
                                <input
                                    className="w-full border-none bg-transparent focus:outline-none text-gray-500"
                                    type="text"
                                    id="username"
                                    value={userData.username}
                                    placeholder="JohnD"
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            username: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <label
                                className="block font-medium text-gray-700"
                                htmlFor="fullname"
                            >
                                Full name:
                            </label>
                            <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                                <span>
                                    <FaUserPen className="text-2xl text-gray-600" />
                                </span>
                                <input
                                    className="w-full border-none bg-transparent focus:outline-none text-gray-500"
                                    type="text"
                                    id="fullname"
                                    value={userData.fullName}
                                    placeholder="John Doe"
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            fullName: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <label
                                className="block font-medium text-gray-700"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                                <span>
                                    <FaEnvelope className="text-xl text-gray-600" />
                                </span>
                                <input
                                    className="w-full border-none bg-transparent focus:outline-none text-gray-500"
                                    type="email"
                                    id="email"
                                    value={userData.email}
                                    placeholder="JohnD@gmail.com"
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            email: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <label
                                className="block font-medium text-gray-700"
                                htmlFor="password"
                            >
                                Password:
                            </label>
                            <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                                <span>
                                    <FaLock className="text-xl text-gray-600" />
                                </span>
                                <input
                                    className="w-full border-none focus:outline-none bg-transparent text-gray-500"
                                    type="password"
                                    id="password"
                                    value={userData.password}
                                    placeholder="pass123"
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            password: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <label
                                className="block font-medium text-gray-700"
                                htmlFor="passwordConfirm"
                            >
                                Confirm Password:
                            </label>
                            <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                                <span>
                                    <MdLockOutline className="text-2xl text-gray-600" />
                                </span>
                                <input
                                    className="w-full border-none focus:outline-none bg-transparent  text-gray-500"
                                    type="password"
                                    id="passwordConfirm"
                                    value={userData.passwordConfirm}
                                    placeholder="pass123"
                                    onChange={(e) =>
                                        setUserData({
                                            ...userData,
                                            passwordConfirm: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <button className="w-30 h-12 p-3 bg-primary rounded-md text-white cursor-pointer mt-2">
                                Register
                            </button>
                            <div className="text-sm flex justify-center items-center gap-1">
                                Already have an account?
                                <div className="text-[#29433F] cursor-pointer">
                                    <Link to="/login">Sign In</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
