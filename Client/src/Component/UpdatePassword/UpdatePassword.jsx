import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const UpdatePassword = ({handleClose}) => {
  const navigate = useNavigate();
  const [passwordCurrent ,setPasswordCurrent] = useState('');
  const [password ,setPassword] = useState('');
  const [passwordConfirm ,setPasswordConfirm] = useState('');

 
    
  const handleChanges = async() =>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/login");
    }

    const authToken = userInfo.token;
     try {
       
        const config = {
         headers: {
           'Content-Type': 'application/json',
           'authorization': `Bearer ${authToken}`,
         }
        }

        const {data} = await axios.patch('http://127.0.0.1:5000/api/v1/users/updateMyPassword',{passwordCurrent , password, passwordConfirm} ,config);

        console.log(data);
        // localStorage.setItem('userInfo' , JSON.stringify(data));
       //  if(response.data.status === 'success'){
       //     handleClose();
       //  }
     } catch (error) {
       console.log(error);
     } 
  }

  return (
    <section className="update-profile-section  flex flex-col gap-y-3 p-5">
         <div >
           <input className='w-full rounded-lg' type="password" placeholder='current password' value={passwordCurrent} onChange={(e) => setPasswordCurrent(e.target.value)}/> 
         </div>
         <div >
           <input className='w-full rounded-lg' type="password" placeholder='new password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
         </div>
         <div >
           <input className='w-full rounded-lg' type="password" placeholder='confirm new password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} /> 
         </div>
         <div className='flex justify-center gap-x-2'>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#32af6f] text-white hover:cursor-pointer' onClick={handleChanges}>Save Changes</div>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#C70039] hover:cursor-pointer' onClick={handleClose} >Close</div>
         </div>
    </section>
  )
}

export default UpdatePassword