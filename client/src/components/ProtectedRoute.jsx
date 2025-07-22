import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/');
        else setIsLoggedIn(true);
    }, [navigate]);

    return isLoggedIn ? children : null;
}

export default ProtectedRoute;
