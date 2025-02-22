import React from "react";
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
const TourList = ({tours}) => {
  return (
    <>
    {tours.map((tour) => (
        <div key={tour.id} className='border p-3 bg-white rounded-xl flex flex-col gap-y-3 ease-in-out duration-300 hover:-translate-y-[3px] '>
        <div className='border'>
           <img className='w-full h-full' src={tour.imageCover} alt="" />
           
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='tour-name  '>
            <h1 className='text-2xl font-bold'>{tour.name}</h1>
          </div>
        <div className='text-[#777] font-bold text-[15px]'> <span className='uppercase'>{tour.difficulty}</span> {tour.duration}-day tour </div>
        <div className='text-[#777] text-[15px]'><i>{tour.summary}</i></div>
        <div className="grid grid-cols-2 gap-2">
          <div className='text-[#777] text-[300] text-sm'><i className="bi bi-geo-alt text-[#32af6f] mr-1"></i>NYC ,USA</div>
          <div  className='text-[#777] text-[300] text-sm'><i class="bi bi-calendar-fill text-[#32af6f] mr-1"></i>January , 2024</div>
          <div  className='text-[#777] text-[300] text-sm'><i class="bi bi-flag text-[#32af6f] mr-1"></i>2 stops</div>
          <div  className='text-[#777] text-[300] text-sm'><i class="bi bi-person text-[#32af6f] mr-1"></i>10 people</div>
          
        </div>
        <div className='flex gap-x-2'>
             <div className='w-3/6 flex flex-col gap-y-1'>
               <div className='text-[#777] '><span className='text-[#777] text-sm font-bold'>${tour.price}</span>  per person</div>
               <div className='text-[#777]'><span className='text-[#777] text-sm font-bold'>{tour.ratingsAverage}</span> rating</div>
             </div>
             <div className='w-3/6 flex justify-center items-center'>
                <motion.div whileHover={{y:-2}} className='border p-2 rounded-3xl bg-[#32af6f] text-white'> <Link to={`/product/${tour.id}`}>Details</Link></motion.div>
             </div>
             </div> 
          </div>
       </div>
     ))}
    </>
    
     
  );
};

export default TourList;
