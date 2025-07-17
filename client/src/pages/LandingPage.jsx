import NavBar from '../components/NavBar.jsx';
import hero from "../assets/hero.png";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';
import quote from "../assets/quote.png"; 


function LandingPage() {
    return (
    <div className='w-full h-full relative scroll-smooth scroll-mt-20' id='home'>
       <NavBar/>
       {/** Contains all sections */}
       <main className='w-full h-full mt-24'>
           {/** Hero Section */} 
           <section className="relative h-[89vh] w-full py-5">
                    <div className="flex flex-col justify-center items-center gap-4 h-2/5 px-4 text-center">
                         <h1 className="font-poppins text-4xl font-bold ">Helping You Keep Your <span className='text-primary text-4xl font-poppins font-bold'>Plant</span> Happy</h1>
                       <div className='w-full flex flex-col justify-center items-center gap-8 -mt-2'>
                          <p className='font-poppins text-base text-gray-500'> PlantPal helps you care for your plants, track progress, and connect with a plant-loving community.</p> 
                        {/** Call to action */}
                          <Link to={'/login'}>
                            <button className='cursor-pointer bg-btn text-lg text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:scale-110 duration-200 transition-transform ease-in-out'>
                              Get Started
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
                      <img src={hero} className='object-cover w-full h-full' alt='Illustration of a group of people gardening and caring for plants'/>
                    </div>
               </div>
            </section>
           {/** Feature section */}
           <Features/>
           {/** Extra Quote section */}
            <section className='flex justify-around items-center gap-14 h-[120vh] w-full relative bg-btn ' >
               <div className="w-2/5 h-full flex justify-center items-center">
                  <img src={quote} className="object-cover rounded-lg" alt='Illustration of a woman nurturing potted plants indoors' />
               </div>
               <div className="w-2/5 h-full bg-btn flex flex-col justify-center">
                  <blockquote className="font-poppins font-bold text-white text-6xl leading-normal text-center">" To nurture a plant  <br></br>  is to slow down, <br></br>pay attention,<br></br> and grow alongside it. "</blockquote>
               </div>
            </section>    
           {/** Community section */}
           <section className='w-full h-[70vh] flex flex-col justify-center items-center relative'>   
                 {/** Join */}
                  <div className='w-full h-full flex flex-col justify-center items-center gap-4 z-40 mt-20'>
                    <div className='flex flex-col justify-center items-center '>
                       <h1 className='text-4xl font-bold font-poppins'>Join the <span className='text-primary text-4xl font-poppins font-bold'>PlantPal</span> Community</h1>
                       <p className='text-base font-poppins text-gray-500'>Ask questions, share your green wisdom</p>
                    </div> 
                    <Link to={'/login'}>
                      <button className='cursor-pointer bg-btn text-lg text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:scale-110 duration-200 transition-transform ease-in-out'>
                        Join our green community
                      </button>
                    </Link> 
              </div>  
           </section>
       </main>
       {/** Footer section */} 
       <section className='h-[90vh]'>
           <Footer />
       </section>
    </div> 
    );
}

export default LandingPage;
