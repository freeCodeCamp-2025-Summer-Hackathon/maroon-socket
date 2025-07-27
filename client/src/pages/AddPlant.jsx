import { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import plantPotIcon2 from '../assets/plant-pot2.png';
import { createPlant } from '../services/plantService.js';
import { useNavigate } from 'react-router';

const AddPlant = () => {
    const [newPlant, setNewPlant] = useState({
        plantName: '',
        note: '',
        waterFreq: '',
        image: null
    });
    const imageRef = useRef(null);
    const [imageFormatError, setImageFormatError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState(null);
    const navigate = useNavigate();

    // Image format Validation on client-side
    const imageValidation = (file) => {
        const allowedFormats = [
            'image/png',
            'image/jpg',
            'image/jpeg',
            'image/webp'
        ];

        if (!allowedFormats.includes(file.type)) {
            setImageFormatError(true);
            return false;
        }
        setImageFormatError(false);
        return true;
    };

    const handleImage = (e) => {
        const file = e.target.files[0];

        const result = imageValidation(file);

        if (file && result) {
            setNewPlant({ ...newPlant, image: file });
            console.log(newPlant.image);
        } else {
            setNewPlant({ ...newPlant, image: null });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);

        try {
            console.log('Submitting plant data:', newPlant);
            const result = await createPlant(newPlant);
            console.log('Plant creation result:', result);

            if (result.success) {
                setSubmitResult({ type: 'success', data: result.data });
                // Reset form on success
                setNewPlant({
                    plantName: '',
                    note: '',
                    waterFreq: '',
                    image: null
                });
            } else {
                setSubmitResult({
                    type: 'error',
                    message: result.message || 'Failed to create plant'
                });
            }
        } catch (error) {
            console.error('Error creating plant:', error);
            setSubmitResult({
                type: 'error',
                message: 'Network error or server unavailable'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-secondary flex justify-center py-6 px-4 md:px-10 lg:px-20 pt-20 sm:pt-24">
            <div className="px-3 sm:px-6 py-4 sm:py-10 flex flex-col md:flex-row gap-4 md:gap-10 items-start justify-between w-full max-w-6xl rounded-md bg-white shadow-md">
                {/* Left Column (Heading + Icon) */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4">
                    <div className="w-full flex justify-center md:justify-start items-center gap-2">
                        <h1 className="text-xl md:text-3xl font-semibold">
                            Add Plant
                        </h1>
                        <span className="size-8 sm:size-10">
                            <img
                                alt="plant pot icon"
                                src={plantPotIcon2}
                                className="w-full h-full object-cover"
                            />
                        </span>
                    </div>
                </div>

                {/* Right Column (Form) */}
                <div className="w-full md:w-2/3">
                    <form
                        className="flex flex-col justify-center gap-4 sm:gap-8"
                        onSubmit={handleSubmit}
                    >
                        {/* Plant Name */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="plantName"
                                className="font-semibold text-base md:text-lg"
                            >
                                Plant Name
                            </label>
                            <input
                                className="w-full p-3 text-sm md:text-base rounded-lg border sm:border-2 border-btn outline-btn"
                                type="text"
                                id="plantName"
                                value={newPlant.plantName}
                                placeholder="e.g - Money plant"
                                name="plantName"
                                onChange={(e) =>
                                    setNewPlant({
                                        ...newPlant,
                                        plantName: e.target.value
                                    })
                                }
                                required
                            />
                        </div>

                        {/* Notes */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="note"
                                className="font-semibold text-base md:text-lg"
                            >
                                Notes
                            </label>
                            <textarea
                                className="w-full p-3 text-sm md:text-base rounded-lg border sm:border-2 border-btn outline-btn"
                                rows={4}
                                id="note"
                                placeholder="Write anything about your plant..."
                                onChange={(e) =>
                                    setNewPlant({
                                        ...newPlant,
                                        note: e.target.value
                                    })
                                }
                                value={newPlant.note}
                                name="note"
                                required
                            />
                        </div>

                        {/* Watering Frequency */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="waterFreq"
                                className="font-semibold text-base md:text-lg"
                            >
                                Watering Frequency
                            </label>
                            <select
                                className="w-full p-3 text-sm md:text-base rounded-lg border sm:border-2 border-btn outline-btn"
                                id="waterFreq"
                                value={newPlant.waterFreq}
                                name="waterFreq"
                                onChange={(e) =>
                                    setNewPlant({
                                        ...newPlant,
                                        waterFreq: parseInt(e.target.value)
                                    })
                                }
                                required
                            >
                                <option value="" disabled>
                                    Select watering frequency
                                </option>
                                <option value="30">Monthly</option>
                                <option value="7">Weekly</option>
                                <option value="1">Daily</option>
                            </select>
                        </div>

                        {/* Upload Image */}
                        <div className="flex flex-col gap-1">
                            <div
                                id="plantImage"
                                className="h-36 p-2 flex justify-center items-center w-full text-base rounded-lg border sm:border-2 border-btn outline-btn cursor-pointer"
                                onClick={() => imageRef.current.click()}
                            >
                                {newPlant.image ? (
                                    <p>{newPlant.image.name}</p>
                                ) : (
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <FiUpload className="size-16 text-xl bg-black text-white rounded-full p-4" />
                                        <p className="text-sm">Upload image</p>
                                    </div>
                                )}
                            </div>
                            {imageFormatError && (
                                <p className="text-sm text-red-500">
                                    Only .png .jpg .webp formats are allowed
                                </p>
                            )}
                            <input
                                ref={imageRef}
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                name="plantImage"
                                onChange={handleImage}
                                className="hidden"
                            />
                        </div>

                        {/* Submit Result */}
                        {submitResult && (
                            <div
                                className={`w-full p-3 rounded-lg ${
                                    submitResult.type === 'success'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                }`}
                            >
                                {submitResult.type === 'success' ? (
                                    <div>
                                        <p className="font-semibold">
                                            Plant added successfully!
                                        </p>
                                        <p>Name: {submitResult.data.name}</p>
                                        {submitResult.data.image_url && (
                                            <p>
                                                Image uploaded:{' '}
                                                <a
                                                    href={
                                                        submitResult.data
                                                            .image_url
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline"
                                                >
                                                    View Image
                                                </a>
                                            </p>
                                        )}
                                        <p>
                                            Watering frequency:{' '}
                                            {submitResult.data.water_freq} days
                                        </p>
                                    </div>
                                ) : (
                                    <p>Error: {submitResult.message}</p>
                                )}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="w-full flex flex-wrap gap-4 mt-8 justify-center items-center">
                            <button
                                className="bg-btn text-white px-6 py-3 rounded-lg text-sm md:text-base font-semibold font-poppins outline outline-btn hover:scale-105 transition duration-300 ease-in-out"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Adding...' : 'Add'}
                            </button>
                            <button
                                className="text-black outline outline-btn px-6 py-3 rounded-lg text-sm md:text-base font-semibold font-poppins hover:scale-105 transition duration-300"
                                type="button"
                                disabled={isSubmitting}
                                onClick={() => navigate('/userHome')}
                            >
                                Go to Home
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPlant;
