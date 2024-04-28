import React, { useState } from 'react'
import { useUser } from '../ContextConfig/ContextConfig'
import Loading from '../Loading/Loading';

const ManageTours = () => {
 const {tours ,loading ,error} = useUser();

 if(loading) return <Loading/>
  if(error) return <h1>Error...</h1>

    
  return (
    <section className="manage-tours-section border">
        <div className="container  flex flex-col gap-y-10 px-5">
            {
                tours.map((tour) =>{
                 return <div key={tour.id} className='flex gap-x-2'>
                       <div className='w-2/6 '>
                        <img className='w-full h-full rounded-xl' src={`../../../public/img/tours/${tour.imageCover}`} alt="" />
                       </div>
                       <div className='w-4/6  p-2 flex flex-col gap-y-5'>
                          <div className='flex gap-x-4  items-center'>
                          <h1 className='text-2xl font-bold'>{tour.name}</h1>
                          <p className='text-lg'>{tour.difficulty}</p>
                          <p className='text-lg'>{tour.duration}-day tour</p>

                          </div>
                          <div>
                            <p className='text-[#777]'> <i> {tour.summary}</i>
                           </p>
                          </div>
                          <div className='flex  '>
                            <div className='flex flex-col gap-y-2  '>
                                 <div >
                                     <span className='text-[#777]-500 font-bold text-xl' >Price : </span> $ {tour.price}
                                 </div>
                                 <div >
                                     <span className='text-[#777]-500 font-bold text-xl' >Ratings : </span>  {tour.ratingsAverage}/{tour.ratingsQuantity}
                                 </div>
                            </div>
                            <div className='flex p-2  justify-center items-center gap-x-2'>
                               <div className='bg-[#32af6f] p-2 rounded-2xl'>Update Tour</div>
                               <div className='bg-[#C70039] p-2 rounded-2xl'>Delete Tour</div>
                            </div>
                          </div>
                          
                       </div>
                 </div>
                })
            }
        </div>
    </section>
  )
}

export default ManageTours