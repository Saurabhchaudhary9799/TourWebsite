import React from 'react'

const UpdatePassword = ({handleClose}) => {
  return (
    <section className="update-profile-section  flex flex-col gap-y-3 p-5">
         <div >
           <input className='w-full rounded-lg' type="password" placeholder='old password' /> 
         </div>
         <div >
           <input className='w-full rounded-lg' type="password" placeholder='new password' /> 
         </div>
         <div >
           <input className='w-full rounded-lg' type="password" placeholder='confirm new password' /> 
         </div>
         <div className='flex justify-center gap-x-2'>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#32af6f] text-white'>Save Changes</div>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#C70039]' onClick={handleClose} >Close</div>
         </div>
    </section>
  )
}

export default UpdatePassword