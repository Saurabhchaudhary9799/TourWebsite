import React, { useState , useEffect } from 'react'
import axios, { all } from 'axios'
// import Tour from '../Tour/Tour'
import {motion} from "framer-motion"
const AllTours = () => {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        setLoading(true);
        
        const response = await axios.get('http://localhost:3000/api/v1/tours');
       
        setData(response.data);
       
        setLoading(false);
      } catch (error) {
        
        setError(error);
       
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  if (loading) {
    return <div>Loading...</div>;
  }

 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

   const allTours = data.data;
   const tours=allTours.tours;
   
  return (
    <section className="all-tours-section flex justify-center py-16 px-16 bg-[#F3F4F5]">
      <div className="container grid grid-cols-3 gap-4">
 
      {tours.map((tour) => (
           <div key={tour.id} className='border p-3 bg-white rounded-xl flex flex-col gap-y-3 ease-in-out duration-300 hover:-translate-y-[3px] '>
            <div className='border'>
               <img className='w-full h-full' src="https://natours.netlify.app/img/nat-2.jpg" alt="" />
               
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
                    <motion.div whileHover={{y:-2}} className='border p-2 rounded-3xl bg-[#32af6f] text-white'> Details</motion.div>
                 </div>
                 </div>
              </div>
           </div>
        ))}
        
      </div>
    </section>
  )
}

export default AllTours