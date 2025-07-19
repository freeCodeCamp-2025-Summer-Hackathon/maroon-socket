import { useState } from 'react';
import { FaUserPen, FaEnvelope, FaLock } from 'react-icons/fa6';
import ErrorMessage from './ErrorMessage';
import { MdLockOutline } from 'react-icons/md';
import signUp from '../assets/sign_up.png';
import { Link } from 'react-router-dom';
import { signupUser } from '../services/authService';

function Label({ htmlFor, children }) {
    return (
        <label className="block font-medium text-gray-700" htmlFor={htmlFor}>
            {children}
        </label>
    );
}

function Input({ type, onChange, id, placeholder, value, children }) {
    return (
        <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
            {children}
            <input
                className="w-full border-none bg-transparent focus:outline-none text-gray-500"
                type={type}
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

function SignupForm({ setSignupSuccess }) {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await signupUser(userData);

            if (res.success === false && res.errorType === 'VALIDATION_ERROR') {
                setErrors(res.errors);
                return;
            }

            if (
                res.success === false &&
                res.errorType === 'APPLICATION_ERROR'
            ) {
                setErrors({ message: res.message });
                return;
            }
        } catch (error) {
            setErrors({ message: error.message });
            return;
        }

        setSignupSuccess(true);
    }

    return (
        <div className="bg-primary w-full min-h-screen flex justify-center items-center p-4">
            <div className="bg-[#FEF7E7] rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full flex min-h-[760px] max-h-[90vh]">
                <div className="w-1/2 hidden md:block">
                    <img
                        src={signUp}
                        alt="a decorative plant pot"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side , Sign up form*/}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center overflow-y-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#29433F] mb-6 text-center">
                        Sign Up
                    </h2>
                    <form
                        className="w-full flex flex-col space-y-2"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-1">
                            <Label htmlFor="username">Username:</Label>
                            <Input
                                type="text"
                                id="username"
                                value={userData.username}
                                placeholder="johnd"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        username: e.target.value
                                    })
                                }
                            >
                                <FaUserPen className="text-2xl inline-block text-gray-600" />
                            </Input>
                            <ErrorMessage
                                message={errors?.username}
                            ></ErrorMessage>

                            <Label htmlFor="fullName">Full Name:</Label>
                            <Input
                                type="text"
                                id="fullName"
                                value={userData.fullName}
                                placeholder="John Doe"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        fullName: e.target.value
                                    })
                                }
                            >
                                <FaUserPen className="text-2xl inline-block text-gray-600" />
                            </Input>
                            <ErrorMessage
                                message={errors?.fullName}
                            ></ErrorMessage>

                            <Label htmlFor="email">Email:</Label>
                            <Input
                                type="email"
                                id="email"
                                value={userData.email}
                                placeholder="johnd@email.com"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        email: e.target.value
                                    })
                                }
                            >
                                <FaEnvelope className="text-xl text-gray-600" />
                            </Input>
                            <ErrorMessage
                                message={errors?.email}
                            ></ErrorMessage>

                            <Label htmlFor="password">Password: </Label>
                            <Input
                                type="password"
                                id="password"
                                value={userData.password}
                                placeholder="pass1234"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        password: e.target.value
                                    })
                                }
                            >
                                <FaLock className="text-xl text-gray-600" />
                            </Input>
                            <ErrorMessage
                                message={errors?.password}
                            ></ErrorMessage>

                            <Label htmlFor="passwordConfirm">
                                Confirm Password:
                            </Label>
                            <Input
                                type="password"
                                id="passwordConfirm"
                                value={userData.passwordConfirm}
                                placeholder="pass1234"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        passwordConfirm: e.target.value
                                    })
                                }
                            >
                                <MdLockOutline className="text-3xl text-gray-600" />
                            </Input>
                            <ErrorMessage
                                message={
                                    errors?.passwordConfirm || errors?.generic
                                }
                            ></ErrorMessage>
                        </div>
                        <ErrorMessage message={errors.message}></ErrorMessage>
                        <button
                            className="w-full h-12  bg-[#29423E] hover:bg-[#1f312e] rounded-md text-[#F7FBF7] cursor-pointer mt-4 transition-colors duration-200"
                            type="submit"
                        >
                            Register
                        </button>
                        <div className="text-sm flex justify-center items-center gap-1">
                            Already have an account?
                            <Link
                                to="/login"
                                className="text-[#29433F] cursor-pointer hover:underline"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
