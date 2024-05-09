import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../UpdateTours/UpdateTours";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTour = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  //  const [startLocation ,setStartLocation] = useState('');
  const [imageCover, setImageCover] = useState(null);
  const [summary, setSummary] = useState("");
  const [price, setPrice] = useState("");

  // const [selectedDate, setSelectedDate] = useState(null);

  // console.log(location.state.tour.id);
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  const formData = new FormData();
  const handleCreateTour = async () => {
    setLongitude(parseFloat(longitude));
    setLatitude(parseFloat(latitude));

    if (isNaN(longitude) || isNaN(latitude)) {
      return toast(
        "Please enter valid numbers for both longitude and latitude."
      );
    }

    if (
      longitude < -180 ||
      longitude > 180 ||
      latitude < -90 ||
      latitude > 90
    ) {
      return toast(
        "Longitude must be between -180 and 180 degrees, and latitude must be between -90 and 90 degrees."
      );
    }

    const startLocation = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/login");
    }

    const authToken = userInfo.token;

    if (name) {
      formData.append("name", name);
    }
    if (difficulty) {
      formData.append("difficulty", difficulty);
    }
    if (startLocation) {
      formData.append("startLocation", startLocation);
    }
    if (duration) {
      formData.append("duration", duration);
    }
    if (price) {
      formData.append("price", price);
    }
    if (summary) {
      formData.append("summary", summary);
    }
    if (imageCover) {
      formData.append("imageCover", imageCover);
    }

    if (maxGroupSize) {
      formData.append("maxGroupSize", maxGroupSize);
    }
    console.log(formData);
    // console.log(
    //   name,
    //   duration,
    //   difficulty,
    //   maxGroupSize,
    //   price,
    //   summary,
    //   startLocation,
    //   imageCover
    // );
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${authToken}`,
        },
      };
      // ",{name,duration,difficulty,maxGroupSize ,price ,summary,startLocation}
      const response = await axios.post("https://tourwebsite.onrender.com/api/v1/tours",formData ,config);
      console.log(response);
      if (response.data.status === "success") {
        toast("Tour is created successfully");
      }
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <section className="create-tours-section  ">
      <div className="container px-4 py-4 lg:px-16 lg:py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="maximum group size"
              value={maxGroupSize}
              onChange={(e) => setMaxGroupSize(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div>
          {/* <div>
            <input
              type="text"
              placeholder="Start Location"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div> */}
          {/* <div>
            <DatePicker
              className="date-picker"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
            />
          </div> */}

          <div className="lg:col-span-2">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="lg:col-span-2">
            <input
              type="text"
              placeholder="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full h-full rounded-xl border border-[#777]"
            />
          </div>
          <div className="lg:col-span-2">
            <input
              type="file"
              placeholder="image cover "
              onChange={(e) => setImageCover(e.target.files[0])}
              className="w-full h-full rounded-xl border border-[#777]"
            />
          </div>

          <div className="lg:col-span-2">
            <div
              className="border p-2 rounded-xl bg-[#32af6f] text-center text-white hover:cursor-pointer"
              onClick={handleCreateTour}
            >
              Create Tour
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTour;
