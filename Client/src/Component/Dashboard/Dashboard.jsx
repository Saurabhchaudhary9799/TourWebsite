import React from 'react'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-3 p-4 gap-x-10 '>
                <div className='total-tours flex justify-center  items-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white hover:-translate-y-[3px] ease-in-out duration-300'> <span className="text-xl text-[#777] font-bold">Total Tours :</span> 10</div>
                <div className='total-visitors flex justify-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white items-center hover:-translate-y-[3px] ease-in-out duration-300'><span className="text-xl text-[#777] font-bold" >Total Visitors : </span> 5</div>
                <div className='total-revenue flex justify-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white items-center hover:-translate-y-[3px] ease-in-out duration-300'><span className="text-xl text-[#777] font-bold" >Total Revenue :</span> $500</div>
             </div>
  )
}

export default Dashboard