import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <section className="signup-section py-10 bg-[#F3F4F5] "> 
   <div className="container  flex flex-col justify-between items-center gap-y-10 ">
      
       <div>
        <h1 className='text-3xl font-bold'>Enjoy your trip !</h1>
       </div>
       <div className='w-[300px]'>
         <form className='login-form flex flex-col gap-y-5 '>
         <div className='form-group border-b-2 border-[#32af6f] flex justify-start items-center   h-[50px]'>
                 <input className='w-full h-full' type="text" placeholder='Full Name' />
             </div>
             <div className='form-group border-b-2 border-[#32af6f] flex justify-start items-center   h-[50px]'>
                 <input className='w-full h-full' type="email" placeholder='Email Address' />
             </div>
             <div className='form-group border-b-2 border-[#32af6f]  flex justify-start items-center  h-[50px]'>
                <input className='w-full h-full' type="password" placeholder='Your Password' />
             </div>
             <div className='form-group border-b-2 border-[#32af6f]  flex justify-start items-center  h-[50px]'>
                <input className='w-full h-full' type="password" placeholder='Confirm Your Password' />
             </div>
             
             <div>
                <div className='flex justify-center items-center border h-[50px] bg-[#32af6f] text-white text-lg rounded-2xl'>SIGN UP</div>
             </div>
         </form>
       </div>
       <div>
          Already have an account? <span className='text-[#32af6f] hover:underline'><Link to={"/login"}>login</Link> </span> here
       </div>
   </div>
</section>
  )
}

export default Signup