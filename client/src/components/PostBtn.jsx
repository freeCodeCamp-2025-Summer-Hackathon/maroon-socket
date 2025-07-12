import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddPost from '../pages/AddPost.jsx';

export default function PostBtn() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="bg-[#2C6A4E] py-3 px-6 rounded-full text-white font-semibold text-xl font-poppins"
            >
                Add Post
            </button>
            {showModal &&
                createPortal(
                    <AddPost onClose={() => setShowModal(false)} />,
                    document.body
                )}
        </>
    );
}
