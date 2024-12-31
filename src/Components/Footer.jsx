import React from "react";
import { assets } from "../assets/assets";
import "../Components/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="alignment">
        {/* left side */}
        <div>
          <img className="leftimage" src={assets.title_logo} alt="" />
          <p className="leftpara">
            {" "}
            Our Hospitals are institutions that deal with health care
            activities. They offer treatment to patients with specialized staff
            and equipment. In other words, hospitals serve humanity and play a
            vital role in the social welfare of any society.
          </p>
        </div>

        {/* center side */}
        <div>
          <p className="centerpara">COMPANY</p>
          <ul className="un-list">
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right side */}
        <div>
          <p className="centerpara">GET IN TOUCH</p>
          <ul className="un-list">
            <li>+8477969789</li>
            <li className="li-email">info@healthcarehospital.com</li>
          </ul>
        </div>
      </div>
      {/* copy right------------------------------ */}
      <div>
        <hr />
        <p className="copyright">
          Copyright 2024 @ Healthcare Hospital - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
