import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

// defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


const AdminDashboard = () => {
  const navigate = useNavigate();
  const [totalTours, setTotalTours] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalBookings ,setTotalBookings] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo) {
        navigate("/login");
      }
      const authToken = userInfo.token;
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authToken}`,
          },
        };
        const { data } = await axios.get(
          "https://natour-iy4i.onrender.com/api/v1/users/natour-stats",
          config
        );
        if (data) {
          setTotalUsers(data.totalUsers);
          setTotalTours(data.totalTours);
          setTotalBookings(data.totalBookings);
          setTotalRevenue(data.result[0].totalRevenue);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [totalUsers, totalRevenue, totalTours]);
  return (
    <div className="flex flex-col gap-y-10">
      <div className="grid grid-cols-4 p-4 gap-x-10 ">
        <div className="total-tours flex justify-center  items-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white hover:-translate-y-[3px] ease-in-out duration-300">
          {" "}
          <span className="text-xl text-[#777] font-bold">
            Total Tours :
          </span>{" "}
          {totalTours}
        </div>
        <div className="total-visitors flex justify-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white items-center hover:-translate-y-[3px] ease-in-out duration-300">
          <span className="text-xl text-[#777] font-bold">
            Total Visitors :{" "}
          </span>{" "}
          {totalUsers}
        </div>
        <div className="total-visitors flex justify-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white items-center hover:-translate-y-[3px] ease-in-out duration-300">
          <span className="text-xl text-[#777] font-bold">
            Total Bookings :{" "}
          </span>{" "}
          {totalBookings}
        </div>
        <div className="total-revenue flex justify-center border gap-x-5 py-10 border-[#32af6f] rounded-xl bg-white items-center hover:-translate-y-[3px] ease-in-out duration-300">
          <span className="text-xl text-[#777] font-bold">Total Revenue :</span>{" "}
          ${totalRevenue}
        </div>
      </div>
      <div className="flex gap-x-2">
      <div className="w-3/6">
        <Bar
          data={{
            labels:["totalUsers","totalTours","totalBookings"],
            datasets: [
              {
                label: "Count",
                data: [totalUsers,totalTours,totalBookings],
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            
            plugins: {
              title: {
                text: "Natour Stats",
              },
            },
          }}
        />
      </div>
      <div className="w-3/6">
        <Doughnut
          data={{
            labels:["totalUsers","totalTours","totalBookings"],
            datasets: [
              {
                label: "Count",
                data: [totalUsers,totalTours,totalBookings],
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Natour Stats",
              },
            },
          }}
        />
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
