import React from 'react'
import { VscCompass } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { BsBook } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";

const Features = () => {
  return (
    <section className="feature-section border bg-[#32af6f] relative py-16 flex justify-center ">
          <div className="container flex justify-center gap-x-5 px-16  ">
            <div className='border w-[25%]  bg-white flex flex-col gap-y-2 py-10 ease-in-out duration-300  hover:-translate-y-[10px]'>
                <div className='  p-4 flex justify-center items-center' >
                  <span className='text-3xl text-[#32af6f]'><IoEarthOutline/></span>
                </div>
                <div className='flex justify-center'>
                  <h1 className='text-[#777] font-extrabold'>EXPLORE THE WORLD</h1>
                </div>
                <div className='p-3'>
                  <p className='text-center text-[400] text-[#777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sapiente.</p>
                </div>
            </div>
            <div className='border w-[25%]  bg-white flex flex-col gap-y-2 py-10 ease-in-out duration-300  hover:-translate-y-[10px]'>
                <div className='  p-4 flex justify-center items-center' >
                  <span className='text-3xl text-[#32af6f]'><VscCompass/></span>
                </div>
                <div className='flex justify-center'>
                  <h1 className='text-[#777] font-extrabold'>MEET NATURE</h1>
                </div>
                <div className='p-3'>
                  <p className='text-center text-[400] text-[#777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sapiente.</p>
                </div>
            </div>
            <div className='border w-[25%]  bg-white flex flex-col gap-y-2 py-10 ease-in-out duration-300  hover:-translate-y-[10px]'>
                <div className='  p-4 flex justify-center items-center' >
                  <span className='text-3xl text-[#32af6f]'><BsBook/></span>
                </div>
                <div className='flex justify-center'>
                  <h1 className='text-[#777] font-extrabold'>FIND YOUR WAY</h1>
                </div>
                <div className='p-3'>
                  <p className='text-center text-[400] text-[#777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sapiente.</p>
                </div>
            </div>
            <div className='border w-[25%]  bg-white flex flex-col gap-y-2 py-10 ease-in-out duration-300  hover:-translate-y-[10px]'>
                <div className='  p-4 flex justify-center items-center' >
                  <span className='text-3xl text-[#32af6f]'><CiHeart/></span>
                </div>
                <div className='flex justify-center'>
                  <h1 className='text-[#777] font-extrabold'>LIVE A HEALTHIER LIFE</h1>
                </div>
                <div className='p-3'>
                  <p className='text-center text-[400] text-[#777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sapiente.</p>
                </div>
            </div>
          </div>
          {/* <svg className=' absolute top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F5" fillOpacity="1" d="M0,128L1440,32L1440,0L0,0Z"></path></svg>
          
          <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F5" fillOpacity="1.5" d="M0,256L1440,160L1440,320L0,320Z"></path></svg>
           */}
    </section>
  )
}

export default Features