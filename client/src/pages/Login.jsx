import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaUserPen, FaLock } from 'react-icons/fa6';
import ErrorMessage from '../components/ErrorMessage';
import signUp from '../assets/sign_up.png';
import { loginUser } from '../services/authService';

function Label({ htmlFor, children }) {
    return (
        <label className="block font-medium text-gray-700" htmlFor={htmlFor}>
            {children}
        </label>
    );
}

function Input({ type, onChange, id, placeholder, value, disabled, children }) {
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
                disabled={disabled}
            />
        </div>
    );
}

function Login() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await loginUser(userData);

            if (res.success === false && res.errorType === 'VALIDATION_ERROR') {
                setErrors(res.errors);
                setLoading(false);
                return;
            }

            if (
                res.success === false &&
                res.errorType === 'APPLICATION_ERROR'
            ) {
                setErrors({ message: res.message });
                setLoading(false);
                return;
            }

            if (res.success === false) {
                setErrors({ message: 'Something went wrong' });
                setLoading(false);
                return;
            }

            if (res.success === true) {
                const token = res.data.token;
                if (localStorage) {
                    localStorage.setItem('token', token);
                    navigate('/userHome');
                }
            }
        } catch (error) {
            setErrors({ message: error.message });
            return;
        }
    }

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
                        Login
                    </h2>
                    <form
                        className="w-full flex flex-col justify-center items-start gap-4"
                        onSubmit={handleSubmit}
                    >
                        <Label htmlFor="username">Username/Email:</Label>
                        <Input
                            type="text"
                            id="username"
                            value={userData.username}
                            placeholder="johnd"
                            disabled={loading}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    username: e.target.value
                                })
                            }
                        >
                            <FaUserPen className="text-2xl inline-block text-gray-600" />
                        </Input>
                        <ErrorMessage message={errors?.username}></ErrorMessage>

                        <Label htmlFor="password">Password: </Label>
                        <Input
                            type="password"
                            id="password"
                            value={userData.password}
                            placeholder="pass1234"
                            disabled={loading}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    password: e.target.value
                                })
                            }
                        >
                            <FaLock className="text-xl text-gray-600" />
                        </Input>
                        <ErrorMessage message={errors?.password}></ErrorMessage>

                        <button
                            className="w-30 h-12 p-3 bg-[#29423E] rounded-md text-[#F7FBF7] cursor-pointer mt-2"
                            type="submit"
                            disabled={loading}
                        >
                            Login
                        </button>
                        <ErrorMessage message={errors?.message}></ErrorMessage>

                        <div className="text-sm flex justify-center items-center gap-1">
                            Don't have an account?
                            <div className="text-[#29433F] cursor-pointer">
                                <Link to="/signup">Sign up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
