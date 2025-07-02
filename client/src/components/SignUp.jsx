import React, { useEffect, useState } from 'react'
import { FaUserPen, FaEnvelope, FaLock } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import signUp from '../assets/sign_up.png';


function SignUp() {
  const [userData, setUserData] = useState({firstName:"", lastName: "", email:"", passWord:"", confirmPassword: ""});
  const [terms,setTerms] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    // isEmail(userData.email);
    // checkPasswords(userData.passWord,userData.confirmPassword)
    if(isEmail(userData.email) && checkPasswords(userData.passWord,userData.confirmPassword)){
      console.log({userData});
    }else {
      return false;
    }
  }
  
  function isEmail(emailId) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(emailId)){
      return emailId
    }else {
      alert("Check your mail Id");
      return false;
    }
  }
  function checkPasswords(pass,confirmPass){
    if(pass===confirmPass){
      return pass,confirmPass;
    }else{
      alert("check your passwords");
      return false;
    }
  }
 return (
   <div className="bg-[#FEF7E7] rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full flex">
    <div className='w-1/2 relative'>
        <img src={signUp} alt="a decorative plant pot" className="w-full h-full object-cover" />
    </div>

    {/* Right Side , Sign up form*/}
    <div className="w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-[#29433F] mb-8 text-center">Sign Up</h2>
        <form className="w-full flex flex-col justify-center items-start gap-4">
          <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
            <span><FaUserPen className="text-2xl text-gray-600"/></span>
            <input className="w-full border-none bg-transparent focus:outline-none text-gray-500" type="text" value={ userData.firstName } placeholder="Your First Name" onChange={(e)=>setUserData({...userData, firstName: e.target.value})}/>
          </div>
          <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
            <span><FaUserPen className="text-2xl text-gray-600"/></span>
            <input className="w-full border-none bg-transparent focus:outline-none text-gray-500" type="text" value= { userData.lastName } placeholder="Your Last Name" onChange={(e)=>setUserData({...userData, lastName: e.target.value})}/>
          </div>
          <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
            <span ><FaEnvelope className="text-xl text-gray-600"/></span>
            <input className="w-full border-none bg-transparent focus:outline-none text-gray-500" type="text" value = { userData.email } placeholder="Your Email id" onChange = {(e) => setUserData({...userData, email: e.target.value})} />
          </div>
          <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
            <span ><FaLock className="text-xl text-gray-600"/></span>
            <input className="w-full border-none focus:outline-none bg-transparent text-gray-500" type="text" value= { userData.passWord } placeholder="Enter Password" onChange = {(e) => setUserData({...userData, passWord: e.target.value})}/>
          </div>
          <div className="w-full flex justify-center items-center gap-4 rounded-lg border-[1px] border-gray-400 py-3 px-5 shadow">
            <span ><MdLockOutline className="text-2xl text-gray-600"/></span>
            <input className="w-full border-none focus:outline-none bg-transparent  text-gray-500" type="text" value= { userData.confirmPassword } placeholder="Re-enter Password" onChange = {(e) => setUserData({...userData, confirmPassword: e.target.value})}/>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <input className="size-4 bg-transparent border-2 border-gray-400" type="checkbox" checked={terms} onChange={(e)=>setTerms(e.target.checked)} />
            <label className="text-sm">I agree to all the terms.</label>
          </div>
          <button className={`w-30 h-12 p-3 bg-[#29433F] rounded-md text-white cursor-pointer ${terms ? "" : " cursor-not-allowed"}`} disabled={!terms} onClick={(e)=>handleSubmit(e)}>Register</button>
          <div className="text-sm flex justify-center items-center gap-1">
            Already have an account? <div className="text-[#29433F] cursor-pointer">Sign In</div>
          </div>
        </form>
    </div>
   </div>
  
 )
}

export default SignUp;
