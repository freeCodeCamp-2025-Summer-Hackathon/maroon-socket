import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";


// Just for testing 
const plants = [
    {
      name: "Peace Lily",
      url: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2UlMjBsaWx5fGVufDB8fDB8fHww",
      notes: "Beautiful flowering plant that thrives in low light and improves indoor air quality."
    },
    {
      name: "Fiddle Leaf Fig",
      url: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlkZGxlJTIwbGVhZiUyMGZpZ3xlbnwwfHwwfHx8MA%3D%3D",
      notes: "Popular for its large, glossy leaves, ideal for adding a modern touch to interiors."
    },
    
  ];
  


const MyPlants = () => {
  return (
<div className="bg-secondary w-screen h-screen rounded-md p-8 flex flex-col justify-center items-start gap-14 " >
    <h1 className="text-4xl font-bold ">My Plants</h1>
    <div className="w-full h-full flex justify-start gap-7 ">
        {
           plants.map((plant, idx)=>{
            return (
                <div key={idx} className="flex flex-col justify-center items-center gap-4 w-fit h-fit p-6 bg-white shadow-md shadow-gray-300 rounded-lg" >
                    <div className="w-44 h-48 rounded-md">
                        <img src={plant.url} className="w-full h-full object-cover"/>
                    </div>
                    <h2>{plant.name}</h2>
                </div>
            )
           })
        }

        {/** Add new plants */}
        <Link to={"/addPlant"} >
        <div className="w-52 h-fit p-6 bg-white shadow-md shadow-gray-300 rounded-lg flex flex-col justify-center items-center gap-8 cursor-pointer">
             <span ><FaPlus className="w-24 h-44 font-light" /></span>
             <p className="text-sm text-gray-400">Add new plant</p>
        </div>
        </Link> 
    </div>      
</div>
  )
}

export default MyPlants;