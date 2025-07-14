import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddPost from '../pages/AddPost.jsx';
import { FaPen } from 'react-icons/fa6';
import { MdCreate } from 'react-icons/md';

export default function PostBtn() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="bg-[#2C6A4E] flex justify-center gap-2 w-60 px-6 py-2 rounded-md text-white font-semibold text-lg font-poppins"
            >
                <MdCreate className='self-center'/>
                Create a Post
            </button>
            {showModal &&
                createPortal(
                    <AddPost onClose={() => setShowModal(false)} />,
                    document.body
                )}
        </>
    );
}
