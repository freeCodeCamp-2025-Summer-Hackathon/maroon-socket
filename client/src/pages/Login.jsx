import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaUserPen, FaLock } from 'react-icons/fa6';
import ErrorMessage from '../components/ErrorMessage';
import authHero from '../assets/auth-hero.png';
import { loginUser } from '../services/authService';
import AuthContext from '../components/AuthContext';

function Label({ htmlFor, children }) {
    return (
        <label className="block font-medium text-gray-700" htmlFor={htmlFor}>
            {children}
        </label>
    );
}

function Input({ type, onChange, id, placeholder, value, disabled, children }) {
    return (
        <div className="w-full flex justify-center has-[:focus-visible]:border-primary has-[:focus-visible]:border-[2px] items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
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
    const { setLoggedIn } = useContext(AuthContext);

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
                    setLoggedIn(true);
                    navigate('/userHome');
                }
            }
        } catch (error) {
            setErrors({ message: error.message });
            return;
        }
    }

    return (
        <div className="flex overflow-clip h-screen w-screen ">
            <div className="bg-[#FEF7E7] w-1/3 hidden md:flex md:items-center  ">
                <img
                    src={authHero}
                    alt="a decorative plant pot"
                    className="h-3/4 mt-24"
                />
            </div>

            <div className="w-full md:w-2/3 flex md:px-6 flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-[#29433F] mb-8 text-left">
                    Login
                </h2>
                <form
                    className="md:w-1/2 flex flex-col justify-center items-start gap-4"
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
                        className="bg-btn text-white px-6 py-3 rounded-lg cursor-pointer font-semibold font-poppins hover:scale-110 transition duration-200"
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
    );
}

export default Login;
