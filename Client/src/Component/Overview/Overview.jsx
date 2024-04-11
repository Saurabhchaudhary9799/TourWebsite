import React from 'react'

import Hero from './Hero'

//F3F4F5
const Overview = () => {
  return (
    <section className='overview-section bg-[#32af6f]   h-screen flex flex-col gap-y-1 relative  '>
       
       
        <Hero/>
        <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F5" fillOpacity="1.5" d="M0,256L1440,160L1440,320L0,320Z"></path></svg>
    </section>
  )
}

export default Overview