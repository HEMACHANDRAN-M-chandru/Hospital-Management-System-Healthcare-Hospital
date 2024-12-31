import React from "react";
import { assets } from "../assets/assets";
import "../Components/css/Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <p>
          CONTACT <span className="spn"> US</span>
        </p>
      </div>
      <div className="contactimg cont">
        <img className="conimg" src={assets.contact_image} alt="" />
        <div className="conlist">
          <p className="ouroff">Our Office Address</p>
          <p className="offadd">
            Healthcare Hospital, <br />
            123 Wellness Avenue, <br />
            City Center, Cheenai-600022
          </p>
          <p className="offmail">info@healthcarehospital.com</p>
          <p className="phoneno"> Phone:+8477969789</p>

          <p className="offcareer">CAREERS</p>
          <p className="conjob">
            For current job openings,visit the Careers section on our website or
            email <br /> your resume to{" "}
            <span className="offmail">careers@healthcarehospital.com.</span>{" "}
            Together, let’s shape the future of healthcare!
          </p>
          <button className="conbtn">EXPLORE JOBS</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
