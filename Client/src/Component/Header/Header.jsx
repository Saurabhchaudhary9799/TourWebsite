import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import {Link } from "react-router-dom"

import Profile from '../Profile/Profile';

const Header = () => {
   const [user ,setUser] = useState('');
    // const navigate = useNavigate();
    useEffect(()=>{
       const response = localStorage.getItem('userInfo');
       if(response){
        const userObj = JSON.parse(response).data;
        setUser(userObj.user);
        console.log(user)
       }
       
    },[])
    
    


  return (
     <div className='header-section flex justify-center  mt-5 bg-black py-3'>
         <div className="container  flex justify-between items-center px-10">
             <div className='flex justify-center items gap-x-2 text-3xl text-[#32af6f]'>
                 <i className='bi bi-back'></i> <span>NATOURS</span>
             </div>
             {user ? <Profile user={user}/> : <div className=' flex justify-center items-center px-3 py-2 gap-x-10'>
                <motion.div whileHover={{y:-2}} className='text-white'><Link to={"/login"}>LOGIN</Link></motion.div>
                <motion.div whileHover={{y:-2}}  className='border px-4 py-2 rounded-3xl text-white hover:text-black hover:bg-white'><Link to={"/signup"}>SIGNUP</Link></motion.div>
             </div> }
            
             
             

         </div>
     </div>
  )
}

export default Header