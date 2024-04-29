// "use client"
// import React, { useState } from 'react'
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
// // import { MdTour } from "react-icons/md";
// import { Button, Modal } from 'flowbite-react';
// renderTrigger={() => <span className="text-white text-2xl"><CgProfile/></span>}


// import { Dropdown } from "flowbite-react";
// import {  HiLogout, HiViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";

const Profile = ({user}) => {
  const [isOpen ,setIsOpen] = useState(false);
  
  
 const handleSignout = () => {
    localStorage.removeItem('userInfo')
    setIsOpen(!isOpen);
    window.location.reload();
 }
  return (
     <>
       <div className="profile-section relative">
           <span onClick={()=>setIsOpen(!isOpen)} className="text-white text-2xl"><CgProfile/></span>
           {isOpen && 
           <div className=" z-30 bg-white absolute top-8 right-5  rounded-xl flex flex-col gap-y-1 pl-3">
               <div>{user.name}</div>
               <div>{user.email}</div>
               <div className="flex justify-start items-center gap-x-2 hover:text-[#777]"> 
               
               <span><FaRegUser/></span> <Link to={"/dashboard"}>Dashboard</Link></div>
               <div  onClick={handleSignout} className="flex justify-start items-center gap-x-2 hover:cursor-pointer hover:text-[#777]"><span><CiLogout/></span>Signout</div>
           </div>
}
       </div>
     </>
  );
}

export default Profile