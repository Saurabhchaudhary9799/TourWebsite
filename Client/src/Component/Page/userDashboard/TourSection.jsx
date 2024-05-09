import React, { useEffect, useState } from "react";
import axios from "axios";
import BookedTour from "../../BookedTour/BookedTour";
const TourSection = () => {
  const [status, setStatus] = useState("completed");
  const [allBookings, setAllBookings] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (!userInfo) {
    navigate("/login");
  }

  const authToken = userInfo.token;

  const fetchTours = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await axios.get(
        "http://127.0.0.1:5000/api/v1/users/bookings",
        config
      );
      
        const loggedUser = data.user;
        setAllBookings(loggedUser.bookings);
       
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  console.log('allBookings',allBookings);
  const handleCompletedTour = () => {
    setStatus("completed");
  };

  const handleIncomingTour = () => {
    setStatus("incoming");
  };

  const handleCancelledTour = () => {
    setStatus("cancelled");
  };

  return (
    <section className="tour-section ">
      <div className="container flex flex-col gap-y-3">
        <h1 className="text-3xl text-[#32af6f] text-center font-bold">
          Your Tours
        </h1>
        <div className="flex justify-center  gap-x-10">
          <div
            className="hover:cursor-pointer"
            onClick={handleCompletedTour}
            style={{ color: `${status === "completed" ? "green" : "#777"}` }}
          >
            Completed Tour
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={handleIncomingTour}
            style={{ color: `${status === "incoming" ? "green" : "#777"}` }}
          >
            Incoming Tour
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={handleCancelledTour}
            style={{ color: `${status === "cancelled" ? "green" : "#777"}` }}
          >
            Cancelled Tour
          </div>
        </div>
        <div>
          {status === "completed" && <div>Completed Tour</div>}
          {status === "incoming" &&  <BookedTour allBookings ={allBookings}/>}
          {status === "cancelled" && <div>Cancelled Tour</div>}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
