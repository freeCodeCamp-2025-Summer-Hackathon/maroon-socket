import { useState, useEffect } from 'react';
import { FaPlus, FaDroplet } from 'react-icons/fa6';
import { Link } from 'react-router';
import { getAllPlants } from '../services/plantService.js';
import PlantBtn from '../components/PlantBtn.jsx';
import PlantCard from '../components/PlantCard.jsx';
import placeholder from '../assets/placeholder.jpg';

const MyPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlant, setSelectedPlant] = useState(null);

    const handleCardClick = (plant) => {
        setSelectedPlant(plant);
    };

    const closeModal = () => setSelectedPlant(null);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const result = await getAllPlants();
                if (result.success) {
                    setPlants(result.data);
                }
            } catch (error) {
                console.error('Error fetching plants:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlants();
    }, []);

    if (loading) {
        return (
            <div className="bg-white w-full h-screen rounded-md p-8 flex flex-col justify-center items-start gap-14 mt-32">
                <div className="w-full h-full flex justify-center items-center">
                    <p>Loading your plants...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full px-4 md:px-12 py-24 md:py-36 flex flex-col justify-center items-center gap-10 relative bg-secondary">
            <div className="flex flex-col justify-center items-center text-center gap-2 sm:pb-6 sm:mb-8">
                <h2 className="font-poppins font-bold text-xl sm:text-3xl md:text-4xl">
                    Your Green Sanctuary
                </h2>
                <p className="font-poppins text-xs sm:text-lg text-gray-600">
                    Track your plant babies, log growth, schedule care reminders
                    and see them thrive.
                </p>
            </div>

            {/** Create Plant Button */}
            <div className="w-full max-w-6xl flex justify-end">
                <Link to="/addPlant">
                    <PlantBtn />
                </Link>
            </div>
            <div className="w-full max-w-6xl px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center ">
                {plants.map((plant) => (
                    <PlantCard
                        key={plant.id}
                        plant={plant}
                        onClick={handleCardClick}
                    />
                ))}
                {selectedPlant && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative flex gap-4 flex-col transform transition-all animate-fade-in">
                            <button
                                className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-primary"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                            <div className=" w-full p-4 aspect-square rounded overflow-hidden">
                                <img
                                    src={selectedPlant.image_url || placeholder}
                                    alt={selectedPlant.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h2 className=" text-xl md:text-2xl px-4 font-semibold">
                                {selectedPlant.name}
                            </h2>

                            <p className="px-4 mb:2 text-xs md:text-sm text-gray-600 text-start">
                                <span className="inline-flex items-center gap-1">
                                    <FaDroplet className="text-primary" />
                                    {selectedPlant.water_freq ? (
                                        <>
                                            Water every{' '}
                                            <span className="font-medium">
                                                {selectedPlant.water_freq}
                                            </span>{' '}
                                            days
                                        </>
                                    ) : (
                                        <span className="italic text-gray-500">
                                            Frequency not set
                                        </span>
                                    )}
                                </span>
                            </p>

                            <p className="text-xs sm:text-sm px-4 text-gray-700">
                                <span className="font-medium">Note:</span>{' '}
                                {selectedPlant.note || 'None'}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlants;
