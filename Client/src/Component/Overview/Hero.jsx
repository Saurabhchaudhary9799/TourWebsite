
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero-section py-16 flex justify-center'>
      <div className="container flex flex-col gap-y-5">
        <div className='flex justify-center gap-x-8'>
          <div className='text-5xl text-white font-bold'>O</div>
          <div className='text-5xl text-white font-bold'>U</div>
          <div className='text-5xl text-white font-bold'>T</div>
          <div className='text-5xl text-white font-bold'>D</div>
          <div className='text-5xl text-white font-bold'>O</div>
          <div className='text-5xl text-white font-bold'>O</div>
          <div className='text-5xl text-white font-bold'>R</div>
          <div className='text-5xl text-white font-bold'>S</div>
        </div>
        <div className='flex justify-center gap-x-8'>
          <div className='flex justify-center gap-x-3'>
            <div className="text-white">I</div>
            <div className="text-white">S</div>
          </div> 
          <div className='flex justify-center gap-x-3'>
            <div className="text-white">W</div>
            <div className="text-white">H</div>
            <div className="text-white">E</div>
            <div className="text-white">R</div>
            <div className="text-white">E</div>
          </div>
          <div className='flex justify-center gap-x-3'>
            <div className="text-white">L</div>
            <div className="text-white">I</div>
            <div className="text-white">F</div>
            <div className="text-white">E</div>
          </div>
          <div className='flex justify-center gap-x-3'>
            <div className="text-white">H</div>
            <div className="text-white">A</div>
            <div className="text-white">P</div>
            <div className="text-white">P</div>
            <div className="text-white">E</div>
            <div className="text-white">N</div>
            <div className="text-white">S</div>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <motion.div initial={{x:500}} animate={{x:0}} whileHover={{scale:1.2}} className='border-none w-48 bg-white py-3 px-4 rounded-3xl text-sm flex justify-center items-center'>
            <Link to="/all-tours">DISCOVER OUR TOURS</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

