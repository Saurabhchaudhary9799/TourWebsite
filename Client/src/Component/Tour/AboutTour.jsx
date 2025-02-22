import React from "react";
import { MdDateRange } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
const AboutTour = ({ tour }) => {
  let tourName = tour.name;
  tourName = tourName.toUpperCase();
  
  return (
    <section className="about-tour-section flex justify-center py-16">
      <div className="container flex flex-col md:flex-row">
        <div className=" bg-[#F3F4F5] md:w-3/6 flex flex-col gap-y-10 py-10">
          <div className="flex flex-col justify-start items-center gap-y-5">
            <div className="text-[#32af6f] text-xl md:text-2xl">QUICK FACTS</div>
            <div className="flex gap-x-2 items-center text-sm md:text-md">
              <span className="text-[#32af6f] ">
                <MdDateRange />
              </span>
              <span className="text-[#777]-500 mr-4">NEXT DATE</span>{" "}
              <span className="text-[#777]">june 2024</span>
            </div>
            <div className="flex gap-x-2 items-center text-sm md:text-md">
              <span className="text-[#32af6f]">
                <BsGraphUpArrow />
              </span>
              <span className="text-[#777]-500 mr-4">DIFFICULTY</span>
              <span className="text-[#777]">{tour.difficulty}</span>
            </div>
            <div className="flex gap-x-2 items-center text-sm md:text-md">
              <span className="text-[#32af6f]">
                <MdOutlinePersonOutline />
              </span>
              <span className="text-[#777]-500 mr-4">PARTICIPANTS</span>{" "}
              <span className="text-[#777]">{tour.maxGroupSize} People</span>
            </div>
            <div className="flex gap-x-2 items-center text-sm md:text-md">
              <span className="text-[#32af6f]">
                <MdOutlineStarBorder />
              </span>
              <span className="text-[#777]-500 mr-4">RATINGS</span>{" "}
              <span className="text-[#777]">{tour.ratingsAverage}/{tour.ratingsQuantity}</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-y-5">
            <div className="text-[#32af6f] text-xl md:text-2xl">YOUR TOUR GUIDES</div>
            <div className="flex gap-x-2 items-center text-sm md:text-md">
              <span className="text-[#32af6f]">
                <MdOutlineStarBorder />
              </span>
              <span className="text-[#777]-500 mr-4">LEAD GUIDE</span>{" "}
              <span className="text-[#777]">Miyah Myles</span>
            </div>
            <div className="flex gap-x-2 items-center text-sm md:text-md">
              <span className="text-[#32af6f]">
                <MdOutlineStarBorder />
              </span>
              <span className="text-[#777]-500 mr-4">TOUR GUIDES</span>{" "}
              <span className="text-[#777]">Dorothy Bower</span>
            </div>
          </div>
        </div>
        <div className=" md:w-3/6 flex flex-col gap-y-10 py-10">
            <div> 
               <h1 className="text-[#32af6f] text-3xl font-bold  text-center">ABOUT {tourName}</h1>
            </div>
            <div className="flex flex-col gap-y-5  items-center justify-center px-4 sm:px-10 text-[#777] text-lg">
               {tour.description}
               {/* <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p>
               Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTour;
