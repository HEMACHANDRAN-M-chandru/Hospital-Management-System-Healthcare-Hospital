import React, { useContext } from "react";
// import { doctors } from '../assets/assets'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../Components/css/TopDoctor.css";

const TopDoctor = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);
  return (
    <div className="topdoc-container">
      <h1 className="heading">TOP DOCTORS TO BOOK</h1>
      <p className="docpara">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="topdocs">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            className="docnavigate"
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
            }}
          >
            <img className="docimg top-doc-img" src={item.image} alt="" />
            <div className="imgdiv">
              <div className="availableicon">
                <p className="point"></p>
                <p>Available</p>
              </div>
              <p className="name">{item.name}</p>
              <p className="spec">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="but">
        <button
          className="button"
          onClick={() => {
            navigate(`/doctors`);
            scrollTo(0, 0);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctor;
