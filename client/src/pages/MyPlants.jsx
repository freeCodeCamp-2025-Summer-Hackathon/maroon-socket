import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { getAllPlants } from '../services/plantService.js';


const MyPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <div className="bg-white w-full h-screen rounded-md p-8 flex flex-col justify-center items-start gap-14 mt-32">
            <div className="w-full h-full flex justify-start gap-7 ">
                {plants.map((plant, idx) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-col justify-center items-center gap-4 w-fit h-fit p-6 bg-secondary shadow-md shadow-gray-300 rounded-lg"
                        >
                            <div className="w-44 h-48 rounded-md">
                                <img
                                    src={plant.image_url || 'https://via.placeholder.com/200x200/4ade80/ffffff?text=Plant'}
                                    alt={plant.name}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 "
                                />
                            </div>
                            <h2>{plant.name}</h2>
                        </div>
                    );
                })}

                {/** Add new plants */}
                <Link to={'/addPlant'}>
                    <div className=" w-52 h-fit p-6 bg-secondary shadow-md shadow-gray-300 rounded-lg  md:flex flex-col justify-center items-center gap-8 cursor-pointer">
                        <span>
                            <FaPlus className="w-24 h-44 font-light" />
                        </span>
                        <p className="text-sm text-gray-400">Add new plant</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MyPlants;
