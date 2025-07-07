import { useState, useRef } from "react"
import {FiUpload} from 'react-icons/fi';

 

const AddPlant = () => {
const [newPlant, setNewPlant] = useState({plantName:"", notes:"", waterFreq:"", image:null});
const imageRef = useRef(null);
const [imageFormatError, setImageFormatError] = useState(false);

// Image format Validation on client-side
const imageValidation = (file)=>{
     const allowedFormats = ["image/png", "image/jpg", "image/webp"];

     if(!allowedFormats.includes(file.type)){
        setImageFormatError(true);
        return false;
     }
     setImageFormatError(false);
     return true;
}

const handleImage = (e)=>{
    const file = e.target.files[0];

    const result = imageValidation(file);

    if(file && result){
        setNewPlant({...newPlant, image:file});
        console.log(newPlant.image);
    }else{
        setNewPlant({...newPlant, image:null });
    }
    
}

const handleSubmit = async (e)=>{
   e.preventDefault();
   console.log(newPlant);

   // Plant data can be converted into FORMDATA when make API calls for handling file uploads
}

  return (
    <div className="bg-secondary w-[50dvw] h-[93vh] rounded-md p-2 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold">Add Plant</h1>
        {/** Add Plant form */}
        <div className="w-5/6 h-full  flex justify-center items-center">
            <form className="flex w-3/5 h-full flex-col justify-center gap-6  rounded-md p-4"  >
                <div className="flex flex-col justify-center items-start gap-1">
                    <div id="plantImage" className="w-32 h-28 p-2 flex justify-center items-center bg-white rounded-lg shadow-md" onClick={()=>imageRef.current.click()}>
                        {
                           newPlant.image ? (<p>{newPlant.image.name}</p>) :  (<FiUpload className="size-20 text-3xl"  />)
                        }
                    </div>
                    {
                        imageFormatError ? (<p className="text-sm text-red-500 " >Only .png .jpg .webp formats are allowed</p>) : ("")
                    }
                    <label htmlFor="plantImage" className="font-semibold text-lg" >Upload Plant Image</label>

                    <input ref={imageRef} type="file" accept=".png, .jpg, .jpeg" name="plantImage" onChange={handleImage} required className="hidden"/>
                </div>
                <div className=" flex flex-col justify-center items-start gap-1">
                   <label htmlFor="plantName" className="font-semibold text-lg" >Plant Name</label>
                   <input className="border-none w-full p-3 text-base rounded-lg shadow-md focus:outline-none" type="text" id="plantName" value={newPlant.plantName}
                     placeholder="e.g-Money plant" name="plantName"
                     onChange={(e)=>{setNewPlant({...newPlant, plantName:e.target.value})}} required/>
                </div>
                <div className=" flex flex-col justify-center items-start gap-1">
                    <label htmlFor="notes" className="font-semibold text-lg" >Notes</label>
                    <textarea  className="border-none w-full px-3 py-2 text-base rounded-lg shadow-md focus:outline-none" rows={4} id="notes" placeholder="Write anything about your plant..." 
                    onChange={(e)=>{setNewPlant({...newPlant, notes:e.target.value})}}
                    value={newPlant.notes} name="notes" required />
                </div>
                <div className=" flex flex-col justify-center items-start gap-1">
                    <label htmlFor="waterFreq" className="font-semibold text-lg" >Watering Frequency</label>
                    <select className="border w-full px-3 py-2 text-base rounded-lg shadow-md focus:outline-none" id="waterFreq" value={newPlant.waterFreq} name="waterFreq"
                    onChange={(e)=>{setNewPlant({...newPlant, waterFreq:parseInt(e.target.value)})}} required>
                        <option>--Select Watering Frequency--</option>
                        <option value="30">Monthly</option>
                        <option value="7">Weekly</option>
                        <option value="1">Daily</option>
                    </select>
                </div>
                {/** Submit Container */}
                <div className="w-full flex justify-center items-center">
                <button className="border flex justify-center items-center text-lg w-48 h-10 p-3 rounded-lg shadow-md text-white font-bold bg-black"
                 type="submit" onClick={handleSubmit} >Done</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPlant