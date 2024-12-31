import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import "../Components/css/Banner.css";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      {/* -----left side */}
      <div className="leftdiv">
        <div className="leftdivtwo">
          <p>Book Appointment</p>
          <p className="hope"> With 100+ Trusted Doctors</p>
        </div>

        <button
          className="createaccount"
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
        >
          Create Account
        </button>
      </div>

      {/* -----right side */}
      <div className="right">
        <img className="rightimg" src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
