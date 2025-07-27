import { useEffect, useState } from 'react';
import MyPlants from './MyPlants';
import Profile from './Profile';

const UserHome = () => {
    const [chatIdPresent, setChatIdPresent] = useState(false);

    useEffect(() => {
        async function getUserInfo() {
            const apiurl = import.meta.env.VITE_API_URL;
            const token = localStorage.getItem('token');
            const res = await fetch(`${apiurl}/api/user`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const { chatIdSet } = await res.json();

            if (chatIdSet) setChatIdPresent(true);
            else setChatIdPresent(false);
        }

        getUserInfo();
    }, []);
    return (
        <div>
            {chatIdPresent ? (
                <MyPlants />
            ) : (
                <Profile setChatIdPresent={setChatIdPresent} />
            )}
        </div>
    );
};

export default UserHome;
