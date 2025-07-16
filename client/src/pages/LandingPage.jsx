// import { useNavigate } from 'react-router-dom';
// import heroImage from '../assets/heroImage.webp';
import NavBar from '../components/NavBar.jsx';
// import heroBG from '../assets/hero-bg.png';
import hero from "../assets/hero.png";
import { Link } from 'react-router-dom';

function LandingPage() {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('login');
    // };
    return (
    <>
       <NavBar/>

       {/** Contains all sections */}
       <main>
           {/** Hero Section */} 
           <section className="relative h-[89vh] w-full border-b-2 border-black py-5">
                    <div className="flex flex-col justify-center items-center gap-4 h-2/5 px-4 text-center">
                         <h1 className="font-poppins text-4xl font-bold ">Helping You Keep Your <span className='text-primary text-4xl font-poppins font-bold'>Plant</span> Happy</h1>
                       <div className='w-full flex flex-col justify-center items-center gap-8'>
                            <div className='flex flex-col justify-center items-center gap-2 w-full'>
                             <p className="text-lg font-poppins font-bold text-primary -mb-1">
                              PlantPal is your all-in-one tool to track, care for, and connect over houseplants.
                             </p>
                             <p className="text-sm font-poppins text-gray-500">
                               Get care reminders, share progress, and grow together with a plant-loving community.
                             </p>
                            </div> 
                        {/** Call to action */}
                          <Link to={'/login'}>
                            <button className='cursor-pointer bg-primary text-white px-8 py-3 rounded-lg font-poppins font-semibold'>
                            Check your timely updates
                            </button>
                          </Link>  
                       </div>  
                   </div>

              {/* SVG Wave */}
                   <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                      <svg className="w-full h-56" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" >
                        <path  fill="#3a6b3d"  fillOpacity="1"
                        d="M0,160L40,176C80,192,160,224,240,240C320,256,400,256,480,224C560,192,640,128,720,117.3C800,107,880,149,960,176C1040,203,1120,213,1200,181.3C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" ></path>
                      </svg>
                   </div>
               
               {/** Hero image */}
               <div className='w-full flex justify-center'>
                    <div className='w-3/5 h-3/5 absolute bottom-0 z-10'>
                      <img src={hero} className='object-cover w-full h-full'/>
                    </div>
               </div>
            </section>


           {/** Feature section */}
           <section className='h-screen w-full border-b-2 border-black'>

           </section>
           
           {/** Testimonial section */}
           <section className='h-screen w-full border-b-2 border-black' >

           </section>

           {/** Extra section */}
           <section className='w-full h-screen border-b-2 border-black'>

           </section>
       </main>

       {/** Footer section */} 
    </> 
    );
}

export default LandingPage;
