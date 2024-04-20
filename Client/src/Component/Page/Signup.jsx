import React, { useState } from 'react'
import { Link  } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const Signup = () => {
   const [name , setName] = useState('');
   const [email , setEmail] = useState('');
   const [password , setPassword] = useState('');
   const [passwordConfirm , setPasswordConirm] =  useState('');

  const navigate = useNavigate();

  const handleSignup = async()  =>{
      try {
          const {data} = await axios.post('http://127.0.0.1:3000/api/v1/users/signup',{
            name ,email ,password,passwordConfirm
          },{
            headers: {
              'Content-Type': 'application/json'
            }
          })
           
          
          localStorage.setItem('userInfo',JSON.stringify(data));
          navigate("/")
       } catch (error) {
         console.log(error);
      }
  }


  return (
    <section className="signup-section py-10 bg-[#F3F4F5] "> 
   <div className="container  flex flex-col justify-between items-center gap-y-10 ">
      
       <div>
        <h1 className='text-3xl font-bold'>Enjoy your trip !</h1>
       </div>
       <div className='w-[300px]'>
         <form className='login-form flex flex-col gap-y-5 '>
         <div className='form-group border-b-2 border-[#32af6f] flex justify-start items-center   h-[50px]'>
                 <input className='w-full h-full border-none' type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
             </div>
             <div className='form-group border-b-2 border-[#32af6f] flex justify-start items-center   h-[50px]'>
                 <input className='w-full h-full border-none' type="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
             </div>
             <div className='form-group border-b-2 border-[#32af6f]  flex justify-start items-center  h-[50px]'>
                <input className='w-full h-full border-none' type="password" placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
             </div>
             <div className='form-group border-b-2 border-[#32af6f]  flex justify-start items-center  h-[50px]'>
                <input className='w-full h-full border-none' type="password" placeholder='Confirm Your Password' value={passwordConfirm} onChange={(e)=>setPasswordConirm(e.target.value)} />
             </div>
             
             <div>
                <div  onClick={handleSignup} className='flex justify-center items-center border h-[50px] bg-[#32af6f] text-white text-lg rounded-2xl hover:cursor-pointer'>SIGN UP</div>
             </div>
         </form>
       </div>
       <div>
          Already have an account? <span className='text-[#32af6f] hover:underline '><Link to={"/login"}>login</Link> </span> here
       </div>
   </div>
</section>
  )
}

export default Signup