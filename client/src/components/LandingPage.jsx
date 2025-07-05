import { Link,useNavigate } from "react-router-dom";
import heroImage from '../assets/heroImage.webp';


function LandingPage(){
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('login');
    };
    return(
        
        <div className="w-full h-full bg-white py-4 rounded-[20px]">
            {/*nav bar*/}
            <nav className="bg-white shadow-md flex justify-between items center w-full p-8 rounded-b-lg">
                <div className="flex items-center px-4">
                    <span class="text-2xl font-bold text-green-700">PlantPal</span>
                </div>
                <ul className="flex gap-5 px-20 text-gray-700">
                    <li className="text-green-700 font-semibold border-b-2 border-green-700">Home</li>
                    <li className="hover:text-green-700 hover:font-medium"><Link to="login">Login</Link></li>
                    <li className="hover:text-green-700 hover:font-medium"><Link to="signup">Sign Up</Link></li>
                </ul>
            </nav>
            {/*main section*/}
            <section className="flex flex-row justify-between items-center gap-6 p-10 bg-[#dcfce7]">
                <div className="flex flex-col items-start justify-center ml-20 ">
                    <h1 className="text-4xl font-extrabold text-green-700 py-10">Hi, welcome to PlantPal</h1>
                    <p className="text-lg font-semibold ">A plant care tracker and community for house plant lovers. </p>
                    <p className="text-base mb-10 text-left">Effortlessly manage your plants, connect with fellow enthusiasts,<br/> and watch your green friends thrive!</p>
                    <button onClick={handleClick} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg">Track your plants now!</button>
                </div>
                <div>
                    <img src={heroImage} alt="hero image" />
                </div>
            </section>
            {/*Testimonials*/}
            <section className="py-10 px-6 bg-[#f0fdf4]">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-8">What Our Users Are Saying</h2>
                <div className="flex flex-row items-center gap-8">
                    <div className="bg-[#fbfffb] p-8 m-4 rounded-lg shadow max-w-md w-full">
                        <p className="text-gray-700">"This app has been a game-changer for my indoor gardening. The reminders are spot on!"</p>
                    </div>
                    <div className="bg-[#fbfffb] p-8 m-4 rounded-lg shadow max-w-md w-full">
                        <p className="text-gray-700">"The community features are fantastic! I've learned so much from other plant lovers."</p>
                    </div>
                    <div className="bg-[#fbfffb] p-8 m-4 rounded-lg shadow max-w-md w-full">
                        <p className="text-gray-700">"The best app for plant lovers! I can track my plants' needs and connect with others."</p>
                    </div>
                </div>

            </section>
            {/*Explore*/}
            <section  className="py-10 px-6">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-8" >Explore the app</h2>
                <div className="flex flex-row gap-4 p-10">
                    <img src="" alt="App screenshot1" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="" alt="App screenshot2" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="" alt="App screenshot3" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            </section>
            <footer className="bg-[#a7f3d0] py-16 px-6 text-center text-green-800" >
                <div class="flex flex-row justify-center space-x-20 items-center mb-8">
                    <div class="mb-8">
                        <span class="text-3xl font-bold text-green-700">PlantPal</span>
                        <p class="text-green-600 text-sm mt-2">&copy; 2023 PlantPal. All rights reserved.</p>
                    </div>
                    <div class="flex flex-wrap justify-center space-x-6 text-lg">
                        <a href="#" class="hover:text-green-900 transition duration-300">About Us</a>
                        <a href="#" class="hover:text-green-900 transition duration-300">Features</a>
                        <a href="#" class="hover:text-green-900 transition duration-300">Privacy Policy</a>
                        <a href="#" class="hover:text-green-900 transition duration-300">Terms of Service</a>
                        <a href="#" class="hover:text-green-900 transition duration-300">Contact</a>
                    </div>
                </div>
                <div class="mt-8 pt-8 border-t border-green-400 text-green-700 text-sm">
                    <p>Made with 💚 for plant lovers everywhere.</p>
                </div>
            </footer>
        </div>
        
        
        // -[#] nav bar nav bar: Home(Selected) , Login(/login), Sign up(/sign-up)
        
        // Hero image(url: figma).
        // caption: A plant care tracker and community for houseplant lovers.
        // ctaButton : track your plants now!
        // image : dummy screenshot.
        // testimonial
        // footer
    )
}

export default LandingPage;