import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
// const [totolTours ,setTotalTours] = useState(0);
// const [totalUsers , setTotalUsers] = useState(0);

   

  useEffect(()=>{
    const fetchData = async() =>{
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
         const response =  await axios.get("http://127.0.0.1:3000/api/v1/users/stats",config)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
     
        
    }
    fetchData();
  },[])
  return (
    <div className='grid grid-cols-3 p-4 gap-x-10 '>
                <div className='total-tours flex justify-center  items-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white hover:-translate-y-[3px] ease-in-out duration-300'> <span className="text-xl text-[#777] font-bold">Total Tours :</span> 10</div>
                <div className='total-visitors flex justify-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white items-center hover:-translate-y-[3px] ease-in-out duration-300'><span className="text-xl text-[#777] font-bold" >Total Visitors : </span> 5</div>
                <div className='total-revenue flex justify-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white items-center hover:-translate-y-[3px] ease-in-out duration-300'><span className="text-xl text-[#777] font-bold" >Total Revenue :</span> $500</div>
             </div>
  )
}

export default Dashboard