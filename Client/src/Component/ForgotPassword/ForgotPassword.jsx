import React, { useState } from 'react'
import axios from 'axios';
const ForgotPassword = () => {
    const [email ,setEmail] = useState('');

 const handleForgotPassword = async() =>{
    try {
      console.log(email)
        const response  = await axios.post('https://tourwebsite.onrender.com/api/v1/users/forgotPassword',{
          email 
        },{
          headers: {
            'Content-Type': 'application/json'
          }
        })
       
        console.log(response);
     } catch (error) {
       console.log(error);
    }
 }

  return (
     <section className="forgot-password-section py-16">
        <div className="container flex flex-col justify-center items-center  gap-y-5">
        <div className='form-group border-b-2 border-[#32af6f] flex justify-start items-center   h-[50px] w-[250px]'>
                 <input className='w-full h-full border-none' type="email" placeholder='Email Address' value={email} onChange={(e)=> {setEmail(e.target.value);} } />
             </div>
             <div className='h-[50px] w-[250px]'>
                <div className='flex justify-center items-center border h-[50px] bg-[#32af6f] text-white text-lg rounded-2xl hover:cursor-pointer' onClick={handleForgotPassword}  >Fogot Password</div>
             </div>
        </div>
        
     </section>
  )
}

export default ForgotPassword