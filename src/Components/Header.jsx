import React from "react";
import { assets } from "../assets/assets";
import "../Components/css/Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* -----left side */}

      <div className="leftone">
        <p className="bookapp">
          WE CARE ABOUT YOUR HEALTH 
           <img className="plus-icon" src={assets.web_icon} alt="" />
          <br /> With Our Trusted Doctors
        </p>
        <div className="smallprofile">
          <img className="smallpro" src={assets.group_profiles} alt="" />
          <p>
            Simply browse
            <br className="break" />
            through our trusted Doctors.
          </p>
        </div>
        <a className="appointspecial" href="#speciality">
          Book Appointments
          <img className="arrow" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* -----right side */}

      <div className="headerimgdiv">
        <img className="headerimg" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
