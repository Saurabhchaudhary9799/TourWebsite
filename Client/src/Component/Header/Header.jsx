import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Profile from "../Profile/Profile";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMenu } from "react-icons/fi";
const Header = () => {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState("");
  const [tours, setTours] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const response = localStorage.getItem("userInfo");
    if (response) {
      const userObj = JSON.parse(response).result;
      setUser(userObj.user);
      console.log(user);
    }
  }, [1]);

  const handleSearch = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `https://natour-iy4i.onrender.com/api/v1/tours/search/${search}`
      );
     
      if (data) {
        setTours(data.tour);
      }
      if(tours.length == 0){
         toast("tour not found");
      }
      else {
        navigate("/all-tours", { state: { tours } });
        window.location.reload();
      }

    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <div className="header-section flex justify-center items-center  mt-5 bg-black py-2">
      <div className="container  flex justify-between items-center px-10  ">
        <div className="flex justify-center items gap-x-2 text-3xl text-[#32af6f]">
          <Link to={"/"}>
            <i className="bi bi-back"></i> <span>NATOURS</span>
          </Link>
        </div>
        <div className="border-none border-yellow hidden justify-center item-center  md:flex">
          <div>
            <input
              className="border-none rounded-l-xl"
              type="search"
              placeholder="Search tour"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div
            className="flex justify-center items-center bg-white p-2 rounded-r-xl  "
            onClick={handleSearch}
          >
            <CiSearch />
            <ToastContainer />
          </div>
        </div>
        <div className=" hidden md:block ">
        {user ? (
          <Profile user={user} />
        ) : (
          <div className=" flex justify-center items-center px-3 py-2 gap-x-10">
            <motion.div whileHover={{ y: -2 }} className="text-white">
              <Link to={"/login"}>LOGIN</Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="border px-4 py-2 rounded-3xl text-white hover:text-black hover:bg-white"
            >
              <Link to={"/signup"}>SIGNUP</Link>
            </motion.div>
            
          </div>
        )}
        </div>
        <div className="flex md:hidden text-white">
            <span><FiMenu/></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
