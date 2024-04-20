import React from 'react'
import { GoArrowRight } from "react-icons/go";
const Stories = () => {
  return (
    <section  className="  stories-section flex justify-center py-16 ">
        <div className="container  p-2 flex flex-col justify-center gap-y-5">
            <div className='flex justify-center text-[#32af6f] text-[300] font-bold text-2xl ease-in-out duration-300 hover:text-3xl hover:rotate-2'>
                <h1>WE MAKE PEOPLE GENUINELY HAPPY</h1>
            </div>
            <div className='  flex flex-col items-center justify-center py-10 gap-y-10 '>
                <div className='stories border flex w-[800px] p-5 gap-x-5 rounded-[20px]'>
                 <div className='w-2/6 flex justify-center items-center '>
                    <img className='rounded-[100px] w-48 h-48 object-cover' src="../../../public/img/users/user-1.jpg" alt="" />
                 </div>
                 <div className='w-4/6 flex flex-col gap-y-3'>
                    <h1 className='text-[#777] text-xl font-bold'>I HAD THE BEST WEEK EVER WITH MY FAMILY</h1>
                    <p className='text-[#777] text-lg '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis delectus cum, quisquam adipisci tenetur nihil reprehenderit consequatur autem ut tempore, modi molestias itaque, harum quas numquam placeat dolorem ducimus! Corrupti velit eius adipisci. Ipsum adipisci earum vitae accusantium hic. Vitae.</p>
                 </div>
                </div>
                <div className='stories border flex w-[800px] p-5 gap-x-5 rounded-[20px]'>
                 <div className='w-2/6 flex justify-center items-center '>
                    <img className='rounded-[100px] w-48 h-48 object-cover' src="../../../public/img/users/user-2.jpg" alt="" />
                 </div>
                 <div className='w-4/6 flex flex-col gap-y-3'>
                    <h1 className='text-[#777] text-xl font-bold'>WOW! MY LIFE IS COMPLETELY DIFFERENT NOW
</h1>
                    <p className='text-[#777] text-lg '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis delectus cum, quisquam adipisci tenetur nihil reprehenderit consequatur autem ut tempore, modi molestias itaque, harum quas numquam placeat dolorem ducimus! Corrupti velit eius adipisci. Ipsum adipisci earum vitae accusantium hic. Vitae.</p>
                 </div>
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <div className='w-[150px] flex justify-center items-center gap-x-1 text-[#32af6f] py-2 text-lg border-b border-[#32af6f] hover:text-white hover:bg-[#32af6f]'>Read all stories <span><GoArrowRight/></span>  </div>
            </div>
        </div>
    </section>
  )
}

export default Stories