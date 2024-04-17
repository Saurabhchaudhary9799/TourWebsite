import React, { useState } from 'react'
import { Link,redirect, useNavigate } from 'react-router-dom'
import Admin from './Admin';

const Login = () => {
    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin@123';
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin =() =>{
        
         if((email === adminEmail) && (password === adminPassword)){
            console.log(email , password);
            setIsLoggedIn(true)
         }else{
            console.log(`Incorrect Admin username & password`)
         }
    }

    if (isLoggedIn) {
        // Redirect to admin page if user is logged in
        navigate("/admin")
      }
    
  return (
<section className="login-section py-10 bg-[#F3F4F5] "> 
   <div className="container  flex flex-col justify-between items-center gap-y-10 ">
       <div><h1 className='text-xl '>Natours</h1></div>
       <div>
        <h1 className='text-3xl font-bold'>Good to see you again!</h1>
       </div>
       <div className='w-[300px]'>
         <form className='login-form flex flex-col gap-y-5 '>
              
             <div className='form-group border-b-2 border-[#32af6f] flex justify-start items-center   h-[50px]'>
                 <input className='w-full h-full' type="email" placeholder='Email Address' value={email} onChange={(e)=> {setEmail(e.target.value);} } />
             </div>
             <div className='form-group border-b-2 border-[#32af6f]  flex justify-start items-center  h-[50px]'>
                <input className='w-full h-full' type="password" placeholder='Password'  onChange={(e) => {setPassword(e.target.value); }} value={password} />
             </div>
             <div className='form-group  text-right'>
               <Link className='hover:text-[#32af6f] hover:underline'>Forgot password? </Link>
             </div>
             <div>
                <div className='flex justify-center items-center border h-[50px] bg-[#32af6f] text-white text-lg rounded-2xl hover:cursor-pointer' onClick={handleLogin} >LOGIN</div>
             </div>
         </form>
       </div>
       
   </div>
</section>
  )
}

export default Login