import React, { useState } from 'react'

const UpdateProfile = ({handleClose}) => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');

   const handleChanges = () =>{
    
   }
  return (
    <section className="update-profile-section  flex flex-col gap-y-3 p-5">
         <div >
           <input className='w-full rounded-lg' type="text" placeholder='update name' value={name} onChange={(e) => setName(e.target.value)} /> 
         </div>
         <div>
         <input className='w-full rounded-lg ' type="email" placeholder='update email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
         </div>
         <div className='flex justify-center gap-x-2'>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#32af6f] text-white' onClick={handleChanges}>Save Changes</div>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#C70039]' onClick={handleClose} >Close</div>
         </div>
    </section>
  )
}

export default UpdateProfile