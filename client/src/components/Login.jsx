
import { useState } from "react";
import { FaUserPen } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Login(){
    const [verification,setVerification] = useState({email:"", password:""});

    function handleSubmit(e){
        e.preventDefault();
        console.log(verification);
    }
    return (
        
         <div className="bg-secondary rounded-2xl shadow-2xl overflow-hidden w-full flex">
            <div className="flex flex-col items-start gap-4 py-32 px-20 w-full">
                <h1 className="text-3xl font-semibold text-primary" >Sign In</h1>
                <form className="w-full flex flex-col justify-center items-start gap-4">
                        <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                        <span><FaUserPen className="text-2xl text-gray-600"/></span>
                        <input className="w-full border-none bg-transparent focus:outline-none text-gray-500" type="text" value= {verification.email} onChange={(e)=>setVerification({...verification, email: e.target.value})} placeholder="Your mail id" />
                        </div>
                        <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
                        <span><MdLockOutline className="text-2xl text-gray-600"/></span>
                        <input className="w-full border-none bg-transparent focus:outline-none text-gray-500" type="text" value = {verification.password} onChange={(e) => setVerification({...verification, password: e.target.value})}placeholder="Your Password" />
                        </div>
                        <div className="flex justify-center items-center gap-3 mt-6">
                            <input type="checkbox" className="bg-transparent size-4"></input>
                            <div className="text-base">Remember me</div>
                        </div>
                        <button className="w-40 h-12 p-3 bg-primary text-white cursor-pointer rounded-lg" onClick={(e)=>handleSubmit(e)}>Login</button>
                        
                </form>
                        <div className="flex gap-1 py-4 mt-3">
                            Don't have an account ?
                            <div className="text-primary cursor-pointer hover:underline"><Link to="/"
                            >Register here</Link>
                            </div>
                        </div>
                       
            </div>
        </div>
        
        
    )
}

export default Login;