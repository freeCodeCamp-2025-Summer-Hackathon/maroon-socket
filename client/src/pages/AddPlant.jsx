import { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import plantPotIcon2 from '../assets/plant-pot2.png';


const AddPlant = () => {
    const [newPlant, setNewPlant] = useState({
        plantName: '',
        notes: '',
        waterFreq: '',
        image: null
    });
    const imageRef = useRef(null);
    const [imageFormatError, setImageFormatError] = useState(false);

    // Image format Validation on client-side
    const imageValidation = (file) => {
        const allowedFormats = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];

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
        console.log(newPlant);

        // Plant data can be converted into FORMDATA when make API calls for handling file uploads
    };

    return (
        <div className="bg-secondary w-full h-full flex justify-center py-6 ">
            <div className=" w-2/5 h-fit bg-primary px-8 py-12 flex flex-col justify-around items-start gap-5 rounded-md ">
                <div className=" w-full flex justify-center items-center gap-2">
                    <h1 className="text-3xl font-semibold text-white pl-4">
                        Add Plant
                    </h1>
                    <span className="size-10">
                        <img
                            src={plantPotIcon2}
                            className="w-full h-full object-cover"
                        />
                    </span>
                </div>

                {/** Add Plant form */}
                <div className="w-full flex justify-center items-center">
                    <form
                        className="flex w-full h-full flex-col justify-center gap-10  rounded-md px-4"
                        onSubmit={handleSubmit}
                    >
                        <div className=" flex flex-col justify-center items-start gap-1">
                            <label
                                htmlFor="plantName"
                                className="font-semibold text-lg text-white"
                            >
                                Plant Name
                            </label>
                            <input
                                className="border-none w-full p-3 text-base rounded-lg shadow-md shadow-black focus:outline-none"
                                type="text"
                                id="plantName"
                                value={newPlant.plantName}
                                placeholder="e.g-Money plant"
                                name="plantName"
                                onChange={(e) => {
                                    setNewPlant({
                                        ...newPlant,
                                        plantName: e.target.value
                                    });
                                }}
                                required
                            />
                        </div>
                        <div className=" flex flex-col justify-center items-start gap-1">
                            <label
                                htmlFor="notes"
                                className="font-semibold text-lg text-white"
                            >
                                Notes
                            </label>
                            <textarea
                                className="border-none w-full px-3 py-2 text-base rounded-lg shadow-md shadow-black focus:outline-none"
                                rows={4}
                                id="notes"
                                placeholder="Write anything about your plant..."
                                onChange={(e) => {
                                    setNewPlant({
                                        ...newPlant,
                                        notes: e.target.value
                                    });
                                }}
                                value={newPlant.notes}
                                name="notes"
                                required
                            />
                        </div>
                        <div className=" flex flex-col justify-center items-start gap-1">
                            <label
                                htmlFor="waterFreq"
                                className="font-semibold text-lg text-white"
                            >
                                Watering Frequency
                            </label>
                            <select
                                className="border w-full px-3 py-2 text-base rounded-lg shadow-md shadow-black focus:outline-none"
                                id="waterFreq"
                                value={newPlant.waterFreq}
                                name="waterFreq"
                                onChange={(e) => {
                                    setNewPlant({
                                        ...newPlant,
                                        waterFreq: parseInt(e.target.value)
                                    });
                                }}
                                required
                            >
                                <option>--Select Watering Frequency--</option>
                                <option value="30">Monthly</option>
                                <option value="7">Weekly</option>
                                <option value="1">Daily</option>
                            </select>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1 ">
                            <div
                                id="plantImage"
                                className="w-40 h-36 p-2 flex justify-center items-center bg-white shadow-black rounded-lg shadow-md"
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
                            {imageFormatError ? (
                                <p className="text-sm text-red-500 ">
                                    Only .png .jpg .webp formats are allowed
                                </p>
                            ) : (
                                ''
                            )}
                            <input
                                ref={imageRef}
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                name="plantImage"
                                onChange={handleImage}
                                required
                                className="hidden"
                            />
                        </div>

                        {/** Submit Container */}
                        <div className="w-full flex justify-center items-center">
                            <button
                                className="border flex justify-center items-center text-lg w-full h-10 p-3 rounded-lg shadow-md text-white font-bold bg-black"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPlant;
