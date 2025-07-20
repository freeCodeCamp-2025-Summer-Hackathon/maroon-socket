import { MdCreate } from 'react-icons/md';

export default function PostBtn({ onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className="bg-btn flex justify-center gap-2 w-fit md:w-60 px-6 py-2 rounded-md text-white font-semibold text-lg font-poppins"
            >
                <MdCreate className="self-center" />
                Create a Post
            </button>
        </>
    );
}
