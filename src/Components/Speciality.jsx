import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
import "../Components/css/Speciality.css";

const Speciality = () => {
  return (
    <div className="speciality-container" id="speciality">
      <h1 className="h1">Find By Speciality</h1>
      <p className="para">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="speciality-catagory">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="click"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="image" src={item.image} alt="" />
            <p className="special">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
