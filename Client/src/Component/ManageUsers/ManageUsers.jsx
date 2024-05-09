import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserDetail from "../UserDetails/UserDetail";
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
        "https://tourwebsite.onrender.com/api/v1/users",
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
    <section className="manage-user-section  ">
      <div className="container  py-5 px-2 flex flex-col w-[80vw] overflow-hidden ">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3  text-center font-extrabold ">
            User_id
          </div>
          <div className=" col-span-2 text-center font-extrabold ">Name</div>
          <div className="col-span-3  text-center font-extrabold ">
            Email
          </div>
          <div className=" text-center font-extrabold ">Role</div>
         
          <div className="col-span-2  text-center font-extrabold ">
            Booked Tours{" "}
          </div>
        </div>
        {users.map((user, index) => {
          return <UserDetail key={index} user={user}/>
        })}
      </div>
    </section>
  );
};

export default ManageUsers;
