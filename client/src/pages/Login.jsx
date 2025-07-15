import { useState } from 'react';
import { FaUserPen } from 'react-icons/fa6';
import { MdLockOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        if (!credentials.username.trim() || !credentials.password.trim()) {
            setError('Please provide username/email and password');
            return;
        }

        setLoading(true);

        try {
            const loginData = {
                username: credentials.username,
                password: credentials.password
            };

            const response = await fetch(
                'http://localhost:3000/api/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                }
            );

            let data;
            try {
                data = await response.json();
            } catch {
                data = {};
            }
            console.log(data);
            const token = data?.data?.token;

            if (response.ok) {
                if (token) {
                    sessionStorage.setItem('token', token);
                    navigate('/userHome');
                } else {
                    setError('Did not receive auth token from server');
                }
            } else {
                setError(data?.message);
            }
        } catch {
            setError('Login failed');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="bg-[#29433F] w-full h-screen flex justify-center items-center px-20">
            <div className="bg-[#29433F] w-full h-screen flex justify-center items-center px-20">
                <div className="bg-[#FEF7E7] rounded-2xl shadow-2xl overflow-hidden md:w-3/5 flex">
                    <div className="flex flex-col items-start gap-4 py-32 px-20 w-full">
                        <h1 className="text-3xl font-semibold text-[#29433F]">
                            Sign In
                        </h1>
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full">
                                {error}
                            </div>
                        )}
                        <form className="w-full flex flex-col justify-center items-start gap-4">
                            <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                                <span>
                                    <FaUserPen className="text-2xl text-gray-600" />
                                </span>
                                <input
                                    className="w-full border-none bg-transparent focus:outline-none text-gray-500"
                                    type="email"
                                    value={credentials.username}
                                    onChange={(e) =>
                                        setCredentials({
                                            ...credentials,
                                            username: e.target.value
                                        })
                                    }
                                    required
                                    placeholder="Username/Email*"
                                    disabled={loading}
                                />
                            </div>
                            <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                                <span>
                                    <MdLockOutline className="text-2xl text-gray-600" />
                                </span>
                                <input
                                    className="w-full border-none bg-transparent focus:outline-none text-gray-500"
                                    type="password"
                                    value={credentials.password}
                                    onChange={(e) =>
                                        setCredentials({
                                            ...credentials,
                                            password: e.target.value
                                        })
                                    }
                                    placeholder="Password*"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <button
                                className="w-40 h-12 p-3 bg-[#29433F] text-white cursor-pointer rounded-lg"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Login
                            </button>
                        </form>
                        <div className="flex gap-1 py-4 mt-3">
                            Don't have an account ?
                            <div className="text-[#29433F] cursor-pointer hover:underline">
                                <Link to="/signup">Register here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
