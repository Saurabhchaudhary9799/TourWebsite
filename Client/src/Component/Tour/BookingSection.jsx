import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const STRIPE_PUBLIC_KEY =
  "pk_test_51P9W9zSJaXjtM26GxyEOJAqwULk7uW7CxETWocJtrQUTDSW1b7pMPvhTfdWrLMbISKPfTUM9TlUmEfSXd4XdMWYY00ZJxncgkA";

const BookingSection = ({ tour }) => {
  const navigate = useNavigate();
  const tourId = tour.id;
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe(STRIPE_PUBLIC_KEY));
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
        setStripe(window.Stripe(STRIPE_PUBLIC_KEY));
      });
    }
  }, []);

  const handleBooking = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/login");
    }

    const authToken = userInfo.token;
    try {
      const config = {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      };
      // 1) Get checkout session from API
      const session = await axios.get(
        `http://127.0.0.1:5000/api/v1/bookings/checkout-session/${tourId}`,
        config
      );
      console.log(session),
        await stripe.redirectToCheckout({
          sessionId: session.data.session.id,
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="booking-section flex justify-center py-10 px-0  lg:py-16 lg:px-10 bg-[#F3F4F5] border">
      <div className="container flex flex-col lg:flex-row px-4 lg:px-16 py-10 rounded-xl bg-white">
        <div className="md:w-2/6  relative  h-32 hidden lg:block ">
          <img
            className="w-32 h-32 object-cover rounded-full absolute left-0 z-40 "
            src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714434048/d0q9inhbfffrjiw3wfic.jpg"
            alt=""
          />
          <img
            className="w-32 h-32 object-cover rounded-full absolute left-10 z-20 "
            src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714434319/puydp4p4qx1g2424z2xv.jpg"
            alt=""
          />
          <img
            className="w-32 h-32 object-cover rounded-full absolute left-20 "
            src="https://res.cloudinary.com/dltk6m7c5/image/upload/v1714434404/frrmksllx9cd4mteifxt.jpg"
            alt=""
          />
        </div>
        <div className=" lg:w-4/6   flex flex-col gap-y-5 lg:flex-row items-center justify-center lg:gap-x-5 ">
          <div>
            <h1 className="text-[#32af6f] text-3xl font-bold">
              WHAT ARE YOU WAITING FOR?
            </h1>
            <p className="text-lg text-[#777]">
              5 days. 1 adventure. Infinite memories. Make it yours today!
            </p>
          </div>
          <motion.div whileHover={{ y: -2 }}>
            <Link
              className="bg-[#32af6f] text-white text-xl font-bold p-3 rounded-3xl"
              onClick={handleBooking}
            >
            
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
