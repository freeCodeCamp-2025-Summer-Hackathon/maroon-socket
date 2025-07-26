import { MdCreate } from 'react-icons/md';

export default function PostBtn({ onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className="bg-btn flex items-center justify-center gap-1 sm:gap-2 px-4 py-2 rounded-md text-white font-semibold text-sm sm:text-base md:text-lg font-poppins w-fit md:w-60"
            >
                <MdCreate className="text-base sm:text-lg md:text-xl" />
                {/* <span className="block sm:hidden">Create</span> */}
                <span className="hidden sm:block truncate">Create a post</span>
            </button>
        </>
    );
}
