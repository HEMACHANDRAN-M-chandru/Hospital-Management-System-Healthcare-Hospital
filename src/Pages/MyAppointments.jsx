import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../Components/css/MyAppointments.css";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="appointment">
        My <span className="gold">Appointments</span>
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div className="docs" key={index}>
            <div>
              <img className="doctorimg" src={item.image} alt="" />
            </div>
            <div className="list">
              <p className="name">{item.name}</p>
              <p className="my-spec">{item.speciality}</p>
              <p className="address">Address:</p>
              <p className="addline">{item.address.line1}</p>
              <p className="addline">{item.address.line2}</p>
              <p className="date">
                <span className="span">Date & Time:</span> 25-July-2024 | 8:30
                PM
              </p>
            </div>
            <div></div>
            <div className="btns">
              <button className="btnone btnone-one">Pay Online</button>
              <button className="btntwo">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
