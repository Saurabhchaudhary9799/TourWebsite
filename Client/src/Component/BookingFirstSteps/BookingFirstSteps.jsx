import React from 'react'
import "./BookingFirstSteps.css"
import { GoArrowRight } from "react-icons/go";
const BookingFirstSteps = () => {
  return (
    <section className='booking-first-steps flex justify-center py-16  px-16 bg-[#32af6f]'>
         <div className="container  py-10 px-10 ">
             <div className='sm:w-[400px]'>
                <form  className='form flex flex-col gap-y-10 ' >
                    <div  >
                        <h1 className='text-xl md:text-3xl text-[#32af6f] font-extrabold hover:text-4xl hover:rotate-2'>START BOOKING NOW</h1>
                    </div>
                    <div className='form-group  h-[50px] bg-white flex justify-start items-center pl-5 rounded-[30px] '>
                        <input type="text" placeholder='Full Name' className='border-none'/>
                    </div>
                    <div className='form-group  h-[50px] bg-white flex justify-start items-center pl-5 rounded-[30px] '>
                        <input type="email" placeholder='Email Address' className='border-none'/>
                    </div>
                    <div className="form-group flex flex-col sm:flex-row sm:justify-center gap-x-5 ">
                        <div className='sm:w-3/6 flex justify-center gap-x-2'>
                            <input type="radio" name="small tour" id="small-tour" />
                            <label className='text-[#777] text-[300]'  >Small tour group</label>
                        </div>
                        <div className='sm:w-3/6 flex justify-center gap-x-2'>
                            <input type="radio" name="small tour" id="small-tour" />
                            <label className='text-[#777] text-[300]' >Large tour group</label>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center w-[150px] gap-x-2 text-white bg-[#32af6f] py-2 rounded-[30px] '> 
                            NEXT STEP <span><GoArrowRight/></span>
                        </div>
                    </div>
                </form>
             </div>
             
            </div>   
    </section>
  )
}

export default BookingFirstSteps