import React from 'react'
import TourSection from './TourSection'
import TransactionSection from './TransactionSection'

const Dashboard = ({user}) => {
  return (
      <section className='dashboard-section flex justify-center bg-[#F3F4F5] py-16 '>
          <div className="container flex flex-col gap-y-10  ">
                <div className='flex   justify-center gap-x-5'>
                    <img className='w-32 h-32 rounded-full' src="../../../../public/img/users/user-1.jpg" alt="user_profile" />
                    <div className="user-details flex flex-col gap-y-1 justify-center  pl-5">
                         <h1 className='text-2xl font-extrabold'>{user.name}</h1>
                         <h1 className='text-xl font-bold text-[#777]'>{user.email}</h1>
                         <div className='flex gap-x-3 '>
                             <div className=' w-32 text-center py-2 rounded-3xl bg-[#32af6f] text-white'>Update Profile</div>
                             <div className='border w-32 text-center py-2 rounded-3xl border-[#32af6f]'>Reset Password</div>
                         </div>
                    </div>
                </div>
                <TourSection/>
                <TransactionSection/>
          </div>
      </section>
  )
}

export default Dashboard