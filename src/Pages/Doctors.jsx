import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../Components/css/Doctors.css";

const Doctors = () => {
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([]);

  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="browsedoc">BROWSE THROUGH YOUR DOCTOR SPECIALIST</p>
      <div className="doccategory">
        <button
          className={`filter ${showFilter ? "fil" : ""}`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div className={`doclists ${showFilter ? "show-fill" : "unshow-fill"}`}>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`catogories ${
              speciality === "General physician" ? "select" : ""
            } `}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`catogories ${
              speciality === "Gynecologist" ? "select" : ""
            } `}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`catogories ${
              speciality === "Dermatologist" ? "select" : ""
            } `}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`catogories  ${
              speciality === "Pediatricians" ? "select" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`catogories ${
              speciality === "Neurologist" ? "select" : ""
            } `}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`catogories ${
              speciality === "Gastroenterologist" ? "select" : ""
            } `}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="doctors">
          {filterDoc.map((item, index) => (
            <div
              className="docnavigate"
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
              }}
            >
              <img className="docimg" src={item.image} alt="" />
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
      </div>
    </div>
  );
};

export default Doctors;

// : scrollTo(0,0)
