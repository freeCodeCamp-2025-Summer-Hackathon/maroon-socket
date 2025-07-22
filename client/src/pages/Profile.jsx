import { useState } from 'react';

function Profile() {
    const [chatId, setChatId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function openTelegramForChatId() {
        const apiUrl = import.meta.env.VITE_TELEGRAM_BOT_URL;
        window.open(apiUrl, '_blank');
        return;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!chatId) {
            console.log('no chat id present');
        }

        try {
            const res = await fetch('http://localhost:3000/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ chatId })
            });
            const data = await res.json();
            console.log(data);
            if (!res.ok) {
                setError(data.errors.chatId || 'Failed to save Chat ID');
            } else {
                setSuccess('Chat ID saved successfully!');
            }
        } catch (err) {
            console.log(err);
            setError(`Error: ${err.message}`);
        }
    }

    return (
        <div className="flex flex-col mt-24 items-center">
            <h1 className="font-bold font-poppins text-lg">Step 1</h1>
            <div className="my-3">
                <button
                    className="bg-btn text-white px-6 py-3 rounded-lg font-semibold font-poppins hover:scale-110 transition duration-200"
                    onClick={openTelegramForChatId}
                >
                    Connect Telegram
                </button>
            </div>

            <p className="mx-auto">
                This will take you to a new window that will open Telegram.
            </p>

            <h1 className="font-bold font-poppins text-lg mt-5">Step 2</h1>
            <form
                className="bg-white  rounded px-8 pt-2 pb-8"
                onSubmit={handleSubmit}
            >
                <div>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="chatid"
                        type="text"
                        placeholder="10 digit Chat ID"
                        value={chatId}
                        onChange={(e) => setChatId(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center my-3">
                    <button
                        className="bg-btn text-white px-6 py-3 rounded-lg font-semibold font-poppins hover:scale-110 transition duration-200 w-auto"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
                {error && <div className="text-red-600 mt-2">{error}</div>}
                {success && (
                    <div className="text-green-600 mt-2">{success}</div>
                )}
            </form>
        </div>
    );
}

export default Profile;
