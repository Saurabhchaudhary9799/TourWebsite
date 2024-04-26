import React from 'react'
import "./Hero.css"
const Hero = ({tour}) => {
    const location = tour.startLocation;
    
  return (
    <section className="hero-section h-96 relative ">
        <img className='h-full w-full object-cover' src={`../../../public/img/tours/${tour.imageCover}`} alt="" />
        <div className='hero  absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='short-intro'>
                <div><h1 className='text-white text-5xl font-extrabold'>{tour.name}</h1></div>
            </div>
        </div>
    </section>
  )
}

export default Hero