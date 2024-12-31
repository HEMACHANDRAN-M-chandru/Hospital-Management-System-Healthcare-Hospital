import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import "../Components/css/Appointments.css";
import RelatedDoctors from "../Components/RelatedDoctors";
const Appointments = () => {
  const { docId } = useParams();

  const { doctors } = useContext(AppContext);

  const dyasOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);

  const [slotIndex, setSlotIndex] = useState(0);

  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting date with index

      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + 7);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        // increment current time by 30 minutes

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* ---------------------doctors details---------------------------- */}
        <div className="docdetail">
          <div>
            <img className="docimg app-doc-image" src={docInfo.image} alt="" />
          </div>
          <div className="docsinfo">
            {/* docinfo name degree experience */}
            <p className="docspara">
              {docInfo.name}
              <img className="verified " src={assets.verified_icon} alt="" />
            </p>
            <div className="doclist">
              <p className="qualification">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="doclist buts">{docInfo.experience}</button>
            </div>
            {/* doctor about */}
            <div>
              <p className="docabouts">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="docotorabout">{docInfo.about}</p>
            </div>
            <p className="appointfee">
              Appointment fees:<span className="amount"> ₹{docInfo.fees}</span>
            </p>
          </div>
        </div>
        {/* -------------------- booking slots     ---------------- */}
        <div className="bookingslots ">
          <p className="booking">Booking Appointment Slot</p>
          <div className="dates">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`selectdate ${
                    slotIndex === index ? "sel" : "nonsel"
                  }`}
                  key={index}
                >
                  <p>{item[0] && dyasOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="datetouch">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`days ${
                    item.time === slotTime ? "seldate" : "unseldate"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bookbtn">Book an Appointment</button>
        </div>

        {/* listing related doctors */}

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;
