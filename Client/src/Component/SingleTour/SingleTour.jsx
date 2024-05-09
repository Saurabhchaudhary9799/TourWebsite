import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SingleTour = ({tour}) => {
const navigate = useNavigate()
// const [tourId ,setTourId] = useState('');
    
const deleteTour = async(id)=>{
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
     await axios.delete(`http://127.0.0.1:5000/api/v1/tours/${id}`,config);
      window.location.reload();
      
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div key={tour.id} className="flex flex-col lg:flex-row gap-x-2">
              <div className="lg:w-2/6 ">
                <img
                  className="w-full h-full rounded-xl"
                  src={tour.imageCover}
                  alt=""
                />
              </div>
              <div className="lg:w-4/6  p-2 flex flex-col gap-y-5">
                <div className="flex gap-x-2  sm:gap-x-4   items-center">
                  <h1 className="text-2xl font-bold">{tour.name}</h1>
                  <p className="text-lg">{tour.difficulty}</p>
                  <p className="text-lg">{tour.duration}-day tour</p>
                </div>
                <div>
                  <p className="text-[#777]">
                    {" "}
                    <i> {tour.summary}</i>
                  </p>
                </div>
                <div className="flex  ">
                  <div className="flex flex-col gap-y-2  ">
                    <div>
                      <span className="text-[#777]-500 font-bold text-xl">
                        Price :{" "}
                      </span>{" "}
                      $ {tour.price}
                    </div>
                    <div>
                      <span className="text-[#777]-500 font-bold text-xl">
                        Ratings :{" "}
                      </span>{" "}
                      {tour.ratingsAverage}/{tour.ratingsQuantity}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 sm:flex-row p-2  justify-center items-center sm:gap-x-2">
                    <div
                      className="bg-[#32af6f] p-2 rounded-2xl hover:cursor-pointer"
                      onClick={()=>{
                        navigate('/admin/update-tour',{state:{tour}})
                      }}
                    >
                      Update Tour
                    </div>
                    <div className="bg-[#C70039] p-2 rounded-2xl hover:cursor-pointer" onClick={()=>{
                      // console.log(tour.id);
                      // setTourId(tour.id);
                      // console.log(tourId);
                      if(confirm("are you really want to delete that tour ? ")){
                        deleteTour(tour.id);
                      }
                    }} >
                      Delete Tour
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SingleTour