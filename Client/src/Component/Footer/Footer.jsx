import React from 'react'

const Footer = () => {
  return (
    <section className="footer-section bg-[#F3F4F5] py-16 px-16">
        <div className="container flex justify-between">
             <div className=' flex justify-center gap-x-5 text-3xl text-[#32af6f] '>
                 <i className='bi bi-back '></i>
                 NATOURS
             </div>
             <div className='flex flex-col'>
                 <ul className='flex justify-center gap-x-5 text-[#777] '>
                    <li className=' cursor-pointer hover:text-[#32af6f]'>About us </li>
                    <li className=' cursor-pointer hover:text-[#32af6f]'>Download App</li>
                    <li className=' cursor-pointer hover:text-[#32af6f]'>Become a guide</li>
                    <li className=' cursor-pointerhover:text-[#32af6f]'>Careers</li>
                    <li className=' cursor-pointer hover:text-[#32af6f]'>Contact</li>
                 </ul>
                 <div >
                     <p className='text-[#777]'>Copyright @ , 2024</p>
                 </div>
             </div>
        </div>
    </section>
  )
}

export default Footer