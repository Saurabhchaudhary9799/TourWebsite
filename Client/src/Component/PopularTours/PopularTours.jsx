import React from 'react'
import "./PopularTours.css"
import {motion} from "framer-motion"
const PopularTours = () => {
  return (
    <section style={{backgroundColor:"#F3F4F5"}} className="popular-tours-section flex justify-center py-16">
        <div className="container  flex flex-col gap-y-5">
             <div className='flex justify-center'>
                <h1 className='text-4xl font-extrabold text-[#32af6f]'>MOST POPULAR TOURS</h1>
             </div>
             <div className="popular-tours flex justify-center gap-x-10 py-10 ">
                 <div  className=" relative tour-card w-[350px] h-[500px]  ">
                    <div className="  front absolute  border h-[100%] w-[100%]  flex flex-col gap-y-2 ">
                        <div className='relative border'>
                            <img className='h-[100%] w-[100%]' src="../../../public/img/tours/tour-1-2.jpg" alt="" />
                            <div className=' absolute    bottom-0  right-[10px] flex flex-col items-end'>
                               <span className='px-3 py-2 text-3xl text-white font-extrabold' style={{backgroundColor:"#32af6f" , opacity:0.8}}>THE FOREST</span>
                               <span className='px-3 py-2 text-3xl text-white font-extrabold' style={{backgroundColor:"#32af6f",opacity:0.8}}>HIKER</span>

                            </div>
                        </div>
                        <div className=' py-2 px-10'>
                            <div className='border-b flex justify-center p-2 item-center'> 7 day tours</div>
                            <div className='border-b flex justify-center p-2 item-center'> Up to 40 people   </div>
                            <div className='border-b flex justify-center p-2 item-center'>6 tour guides</div>
                            <div className='border-b flex justify-center p-2 item-center'>Sleep in provided tents</div>
                            <div className=' flex justify-center p-2 item-center'>Difficulty : medium</div>
                        </div>
                        
                    </div>
                    <div style={{backgroundColor:"#32af6f"}} className="back absolute h-[100%] w-[100%] border  flex flex-col px-10 py-16 gap-y-8 justify-center items-center ">
                          <span className='text-2xl text-white'>ONLY</span>
                          <span className='text-2xl text-white'>$897</span>
                           <button className='border p-4 rounded-[30px] bg-white text-[#777] text-[400]'>BOOK NOW!</button>
                    </div>
                 </div>
                 <div  className=" relative tour-card w-[350px] h-[500px]  ">
                    <div className="  front absolute  border h-[100%] w-[100%]  flex flex-col gap-y-2 ">
                        <div className='relative border'>
                            <img className='h-[100%] w-[100%]' src="../../../public/img/tours/tour-1-3.jpg" alt="" />
                            <div className=' absolute    bottom-0  right-[10px] flex flex-col items-end'>
                               <span className='px-3 py-2 text-3xl text-white font-extrabold' style={{backgroundColor:"#32af6f" , opacity:0.8}}>THE FOREST</span>
                               <span className='px-3 py-2 text-3xl text-white font-extrabold' style={{backgroundColor:"#32af6f",opacity:0.8}}>HIKER</span>

                            </div>
                        </div>
                        <div className=' py-2 px-10'>
                            <div className='border-b flex justify-center p-2 item-center'> 7 day tours</div>
                            <div className='border-b flex justify-center p-2 item-center'> Up to 40 people   </div>
                            <div className='border-b flex justify-center p-2 item-center'>6 tour guides</div>
                            <div className='border-b flex justify-center p-2 item-center'>Sleep in provided tents</div>
                            <div className=' flex justify-center p-2 item-center'>Difficulty : medium</div>
                        </div>
                        
                    </div>
                    <div style={{backgroundColor:"#32af6f"}} className="back absolute h-[100%] w-[100%] border  flex flex-col px-10 py-16 gap-y-8 justify-center items-center ">
                          <span className='text-2xl text-white'>ONLY</span>
                          <span className='text-2xl text-white'>$897</span>
                           <button className='border p-4 rounded-[30px] bg-white text-[#777] text-[400]'>BOOK NOW!</button>
                    </div>
                 </div>
                 <div  className=" relative tour-card w-[350px] h-[500px] ">
                    <div className="  front absolute  border h-[100%] w-[100%]  flex flex-col gap-y-2 ">
                        <div className='relative border'>
                            <img className='h-[100%] w-[100%]' src="../../../public/img/tours/tour-1-1.jpg" alt="" />
                            <div className=' absolute    bottom-0  right-[10px] flex flex-col items-end'>
                               <span className='px-3 py-2 text-3xl text-white font-extrabold' style={{backgroundColor:"#32af6f" , opacity:0.8}}>THE FOREST</span>
                               <span className='px-3 py-2 text-3xl text-white font-extrabold' style={{backgroundColor:"#32af6f",opacity:0.8}}>HIKER</span>

                            </div>
                        </div>
                        <div className=' py-2 px-10'>
                            <div className='border-b flex justify-center p-2 item-center'> 7 day tours</div>
                            <div className='border-b flex justify-center p-2 item-center'> Up to 40 people   </div>
                            <div className='border-b flex justify-center p-2 item-center'>6 tour guides</div>
                            <div className='border-b flex justify-center p-2 item-center'>Sleep in provided tents</div>
                            <div className=' flex justify-center p-2 item-center'>Difficulty : medium</div>
                        </div>
                        
                    </div>
                    <div style={{backgroundColor:"#32af6f"}} className="back absolute h-[100%] w-[100%] border  flex flex-col px-10 py-16 gap-y-8 justify-center items-center ">
                          <span className='text-2xl text-white'>ONLY</span>
                          <span className='text-2xl text-white'>$897</span>
                           <button className='border p-4 rounded-[30px] bg-white text-[#777] text-[400]'>BOOK NOW!</button>
                    </div>
                 </div>
             </div>
             <div className='py-10  flex justify-center items-center'>
                 <motion.div whileHover={{scale:1.1}} className='border px-10 py-5 rounded-[35px] bg-[#32af6f] text-white'>
                    DISCOVER OUR TOURS
                 </motion.div>
             </div>
        </div>
    </section>
  )
}

export default PopularTours