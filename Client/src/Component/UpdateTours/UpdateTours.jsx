import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./UpdateTours.css"
const UpdateTours = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    
  
  return (
<section className="update-tours-section border ">
     <div className="container border px-16 py-10">
         <div className='grid grid-cols-2 gap-4'>
               <div >
                   <input type="text" placeholder='Name' className='w-full h-full rounded-xl' />
               </div>
               <div >
                   <input type="text" placeholder='Difficulty' className='w-full h-full rounded-xl' />
               </div>
               <div >
                   <input type="text" placeholder='Duration' className='w-full h-full rounded-xl' />
               </div>
               <div >
                   <input type="text" placeholder='Participants' className='w-full h-full rounded-xl' />
               </div>
               <div >
                   <input type="text" placeholder='Start Location' className='w-full h-full rounded-xl' />
               </div>
               <div  ><DatePicker className='date-picker'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date"
      /></div>
             <div className='col-span-2' >
                   <input type="text" placeholder='Locations' className='w-full h-full rounded-xl' />
               </div>
               <div className='col-span-2' >
                   <input type="text" placeholder='Price' className='w-full h-full rounded-xl' />
               </div>
               <div className='col-span-2' >
                    <div className='border p-2 rounded-xl bg-[#32af6f] text-center text-white'>Update Tour</div>
               </div>
         </div>
         
     </div>
</section>
  )
}

export default UpdateTours