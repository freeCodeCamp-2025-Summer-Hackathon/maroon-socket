import { useState } from 'react';

function Profile() {
    const [chatId, setChatId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function openTelegramForChatId() {
        const url = 'https://t.me/plantpal_notify_bot?start=true';
        window.open(url, '_blank');
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
            <h1 className="font-bold">Step 1</h1>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded "
                    onClick={openTelegramForChatId}
                >
                    Connect Telegram
                </button>
            </div>

            <p className="mx-auto">
                This will take you to a new window that will open Telegram.
            </p>

            <h1 className="mt-5 font-bold">Step 2</h1>
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
                <div>
                    <button
                        type="submit"
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded"
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
