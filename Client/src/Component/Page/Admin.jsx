import React from 'react'
import { BsMoonStars } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';
const Admin = () => {
  return (
    <section className="admin-section flex justify-center h-[80vh] bg-[#F3F4F5] ">
        <div className='border w-1/6 flex flex-col justify-between pb-4 '>
             <div className='flex flex-col gap-y-5 p-4'>
                 <div className="border-b border-[#32af6f] text-center text-3xl font-bold">Admin</div>
                 <div className="border border-[#32af6f] hover:bg-[#32af6f] hover:rounded-3xl hover:text-white text-center p-2 text-lg  rounded-xl ease-in-out duration-300 "><Link to={"/admin"}>Dashboard</Link></div>
                 <div className="border border-[#32af6f] hover:bg-[#32af6f] hover:rounded-3xl hover:text-white text-center p-2 text-lg  rounded-xl ease-in-out duration-300 "><Link to={"/admin/create-tour"}>Create tour</Link></div>
                 <div className="border border-[#32af6f] hover:bg-[#32af6f] hover:rounded-3xl hover:text-white text-center p-2 text-lg  rounded-xl ease-in-out duration-300"><Link to={"/admin/update-tour"}>Update tour</Link  ></div>
                 <div className="border border-[#32af6f] hover:bg-[#32af6f] hover:rounded-3xl hover:text-white text-center p-2 text-lg  rounded-xl ease-in-out duration-300"><Link to={"/admin/delete-tour"}>Delete tour</Link></div>
                
             </div>
             <div className='border-t border-[#32af6f] p-4'>
                <span className='flex justify-center items-center gap-x-3 hover:text-[#32af6f]'>
                     <BsMoonStars/> Change Theme
                </span>
             </div>
        </div>
        <div className='border w-5/6 p-5'>
             <Outlet/>
             
        </div>
    </section>
  )
}

export default Admin