import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = ({handleClose}) => {
  const navigate = useNavigate();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [photo, setPhoto] = useState(null);
    
   const handleChanges = async() =>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/login");
    }
    
    const authToken = userInfo.token;
      try {
        const formData = new FormData(); // Create a FormData object
        if(name){formData.append('name', name);}
        if(email){formData.append('email', email);}
        
        if (photo) {
          formData.append('photo', photo); // Append the file to the FormData object
        }
        console.log(formData);
         const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': `Bearer ${authToken}`,
          }
         }
        
      
         const {data} = await axios.patch('https://tourwebsite.onrender.com/api/v1/users/updateMe',formData ,config);

         console.log(data);
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        
         if(data.status === 'success'){
            userInfo.result = data.data;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            handleClose();
            window.location.reload();
         }
         
      } catch (error) {
        console.log(error);
      } 
   }
  return (
    <section className="update-profile-section  flex flex-col gap-y-3 p-5">
         <div >
           <input className='w-full rounded-lg' type="text" placeholder='update name' value={name} onChange={(e) => setName(e.target.value)} /> 
         </div>
         <div>
         <input className='w-full rounded-lg ' type="email" placeholder='update email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
         </div>
         <div>
         <input className='w-full rounded-lg ' type="file"  onChange={(e) => { setPhoto(e.target.files[0])}} /> 
         </div>
         <div className='flex justify-center gap-x-2'>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#32af6f] text-white hover:cursor-pointer' onClick={handleChanges}>Save Changes</div>
            <div className='border p-2 w-[150px] text-center rounded-lg text-lg bg-[#C70039] hover:cursor-pointer' onClick={handleClose} >Close</div>
         </div>
    </section>
  )
}

export default UpdateProfile