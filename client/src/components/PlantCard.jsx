import React from 'react';
import { FaDroplet } from 'react-icons/fa6';
import placeholder from '../assets/placeholder.jpg';

const PlantCard = ({plant, onClick}) => {
    return (
        <div
            onClick={() => onClick(plant)}
            className="cursor-pointer flex flex-col justify-center items-center gap-4 w-full max-w-[16rem] py-4 px-2 sm:pb-8 sm:pt-4 sm:px-4 mb-10 bg-white shadow-md shadow-gray-300 rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105 ease-in-out "
        >
            <div className=" w-full sm:w-full aspect-square rounded-md overflow-hidden">
                <img
                    src={plant.image_url || placeholder}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-center font-semibold text-base md:text-lg text-gray-800">
                {plant.name}
            </h2>
            <p className="text-xs md:text-sm text-gray-600 text-center">
                <span className="inline-flex items-center gap-1">
                    <FaDroplet className="text-primary" />
                    {plant.water_freq ? (
                        <>
                            Water every{' '}
                            <span className="font-medium">
                                {plant.water_freq}
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
        </div>
    );
};

export default PlantCard;
