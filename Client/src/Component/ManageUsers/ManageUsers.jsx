import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
 
  const fetchAllUsers = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/login");
    }
  
    const authToken = userInfo.token;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      const { data } = await axios.get(
        "http://127.0.0.1:3000/api/v1/users",
        config
      );
      setUsers(data.doc);
      console.log("users", users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { 
    fetchAllUsers();
  }, []);

  return (
    <section className="manage-user-section border ">
      <div className="container border py-5 px-2 flex flex-col">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 border text-center font-extrabold ">
            User_id
          </div>
          <div className="border col-span-2 text-center font-extrabold ">Name</div>
          <div className="col-span-3 border text-center font-extrabold ">
            Email
          </div>
          <div className="border text-center font-extrabold ">Role</div>
         
          <div className="col-span-3 border text-center font-extrabold ">
            Booked Tours{" "}
          </div>
        </div>
        {users.map((user, index) => {
          return <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 border text-center text-[#777] text-[15px] ">
            {user.id}
          </div>
          <div className="border col-span-2 text-center text-[#777] text-[15px] ">{user.name}</div>
          <div className="col-span-3 border text-center text-[#777] text-[15px] ">
            {user.email}
          </div>
          <div className="border text-center text-[#777] text-[15px] ">{user.role}</div>
         
          <div className="col-span-3 border text-center text-[#777] text-[15px] ">
            Booked Tours{" "}
          </div>
        </div>;
        })}
      </div>
    </section>
  );
};

export default ManageUsers;
