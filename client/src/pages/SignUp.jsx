import { useState } from 'react';
import {
    FaUserPen,
    FaEnvelope,
    FaLock,
    FaHandsClapping
} from 'react-icons/fa6';
import ErrorMessage from '../components/ErrorMessage';
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

function SignUpSuccessCard() {
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

function SignUp() {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const [signupSuccess, setsignupSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await signupUser(userData);

            if (res.success === 'false' && res.errorType === 'ZOD_ERROR') {
                setErrors(res.errors);
                return;
            } else if (res.success === 'false') {
                setErrors({ generic: 'something went wrong' });
                return;
            }
            setsignupSuccess(true);
        } catch (error) {
            console.log(error);
            setErrors({ generic: 'something went wrong' });
        }
    }

    if (signupSuccess) {
        return <SignUpSuccessCard></SignUpSuccessCard>;
    } else {
        return (
            <div className="bg-primary w-full min-h-screen flex justify-center items-center p-8">
                <div className="bg-[#FEF7E7] rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full flex">
                    <div className="w-1/2">
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
                            <Label htmlFor="username">Username:</Label>
                            <Input
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
                                placeholder="JohnD@gmail.com"
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
                                placeholder="pass123"
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
                                placeholder="pass123"
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

                            <button
                                className="w-30 h-12 p-3 bg-[#29423E] rounded-md text-[#F7FBF7] cursor-pointer mt-2"
                                type="submit"
                            >
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
        );
    }
}

export default SignUp;
