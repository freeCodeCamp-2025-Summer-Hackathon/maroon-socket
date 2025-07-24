import { FaPlus } from 'react-icons/fa6';

export default function PlantBtn({ onClick }) {
    return (
        <>
            <button
                className="bg-btn flex items-center justify-center gap-1 sm:gap-2 px-4 py-2 rounded-md text-white font-semibold text-sm sm:text-base md:text-lg font-poppins w-fit md:w-60"
            >
                <FaPlus className="text-base sm:text-lg md:text-xl" />
                <span className="block sm:hidden">Add</span>
                <span className="hidden sm:block truncate">Add a plant</span>
            </button>
        </>
    );
}
