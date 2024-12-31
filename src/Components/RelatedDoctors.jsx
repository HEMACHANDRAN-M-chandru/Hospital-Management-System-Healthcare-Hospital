import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../Components/css/Relateddoctor.css";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);

  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );

      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="reldoc-container">
      <h1 className="title-heading">TOP DOCTORS</h1>
      <p className="rel-para">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="reldoc-show">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            className="rel-navigate"
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
            }}
          >
            <img className="rel-img" src={item.image} alt="" />
            <div className="rel-img-div">
              <div className="rel-availableicon">
                <p className="rel-point"></p>
                <p>Available</p>
              </div>
              <p className="rel-name">{item.name}</p>
              <p className="rel-spec">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rel-but">
        <button
          className="rel-button"
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

export default RelatedDoctors;
