import axios from "axios";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const UserDetail = ({ user }) => {
    const navigate = useNavigate();
    // const [userId ,setUserId] = useState(null);

    const deleteUser = async(id)=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo) {
          navigate("/login");
        }
      
        const authToken = userInfo.token;
        console.log(authToken);
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
              'authorization': `Bearer ${authToken}`,
            }
           }
          await axios.delete(`https://tourwebsite.onrender.com/api/v1/users/${id}`,config);
           window.location.reload(); 
        } catch (error) {
          console.log(error);
        }
      }
      // onClick={()=>{
      //   setUserId(user.id);
        
      // }}
  return (
    <div className="grid grid-cols-12 gap-2" >
      <div className="col-span-3  text-center text-[#777] text-[15px] " >
        {user.id}
      </div>
      <div className=" col-span-2 text-center text-[#777] text-[15px] ">
        {user.name}
      </div>
      <div className="col-span-3  text-center text-[#777] text-[15px] ">
        {user.email}
      </div>
      <div className=" text-center text-[#777] text-[15px] ">
        {user.role}
      </div>

      <div className="col-span-2  text-center text-[#777] text-[15px] ">
        Booked Tours{" "}
      </div>
      <div className="  text-center text-[#777] text-[15px] " onClick={()=>{
        console.log(user.id)
        if(confirm("are you really want to delete that user ? ")){
          deleteUser(user.id);
        }
        
      }}>
        <span><MdEdit/></span>
      </div>
      
        

      
    </div>
  );
};

export default UserDetail;
