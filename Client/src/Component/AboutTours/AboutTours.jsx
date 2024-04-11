import React from 'react'
import {motion} from "framer-motion"
import { GoArrowRight } from "react-icons/go";
const AboutTours = () => {
  return (
    <section className="about-tours py-16 flex justify-center" style={{backgroundColor:"#F3F4F5"}}>
        <div className="container flex flex-col gap-y-10">
             <div className='flex justify-center p-2'>
                 <motion.h1 whileHover={{rotate:2}} className='text-[25px] hover:text-[30px] text-[#[32af6f]] font-extrabold'>EXCITING TOURS FOR ADVENTUROUS PEOPLE</motion.h1>
             </div>
             <div className='flex gap-x-10 justify-center px-16 '>
                <div className=' w-3/6 px-10 flex flex-col py-2 gap-y-2'>
                    <div className='flex flex-col gap-y-5'>
                        <h1 className='text-[15px] text-[#777] font-bold'>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h1>
                        <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, optio nesciunt recusandae sapiente numquam dignissimos ducimus ullam eum. Enim, fugit?</p>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <h1 className='text-[15px] text-[#777] font-bold'>LIKE ADVENTUROUS LIKE YOU HAVE NEVER BEFORE</h1>
                        <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, optio nesciunt recusandae sapiente numquam dignissimos ducimus ullam eum. Enim, fugit?</p>
                    </div>
                    <div>
                        <div className='flex p-1 border-b-2 justify-center border-[#32af6f] w-[120px] items-center text-[#32af6f] hover:bg-[#32af6f]  hover:text-white'>
                            learn more <span><GoArrowRight/></span>
                        </div>
                    </div>
                </div>
                <div className='relative  w-3/6 '>
                    <div className='ease-in-out absolute left-[20px] top-0  z-1  hover:border-[15px] p-4 hover:rounded-[15px] hover:border-[#32af6f] hover:z-40'><img src="https://natours.netlify.app/img/nat-3.jpg" alt="" /></div>
                    <div className='ease-in-out  z-2 absolute bottom-[30px] right-0 hover:border-[15px]  p-4 hover:rounded-[15px] hover:border-[#32af6f]   hover:z-40'><img src="https://natours.netlify.app/img/nat-1.jpg" alt="" /></div>
                    <div className='ease-in-out z-3 absolute bottom-0 left-[100px] hover:border-[15px] p-4 hover:rounded-[15px] hover:border-[#32af6f]' ><img src="https://natours.netlify.app/img/nat-2.jpg" alt="" /></div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default AboutTours