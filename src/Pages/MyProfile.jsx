import React, { useState } from "react";
import { assets } from "../assets/assets";
import "../Components/css/MyProfile.css";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Hemachandran Murugan",
    image: assets.profile_image,
    email: "chandru123@gmail.com",
    phone: "+563828299",
    adress: {
      line1: "chennai",
      line2: "pallavaram",
    },
    gender: "Male",
    dob: "2000-02-17",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="myprofile">
      <img className="profimg" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="profname"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="paraname">{userData.name}</p>
      )}
      <hr className="hrtag" />
      <div>
        <p className="continfo">CONTACT INFORMATION</p>
        <div className="details">
          <p className="email">Email Id:</p>
          <p className="emailid">{userData.email}</p>
          <p className="phone">Phone:</p>
          {isEdit ? (
            <input
              className="num"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="numcol">{userData.phone}</p>
          )}
          <p className="add">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="inputs"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="inputs"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="addlines">
              {userData.adress.line1}
              <br />
              {userData.adress.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="continfo">BASIC INFORMATION</p>
        <div className="align">
          <p className="gen">Gender:</p>
          {isEdit ? (
            <select
              className="option"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="fetchgender">{userData.gender}</p>
          )}
          <p className="gen">Birthday:</p>
          {isEdit ? (
            <input
              className="bdate"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="fetchbday">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="retype">
        {isEdit ? (
          <button className="saveinfo" onClick={() => setIsEdit(false)}>
            Save Information
          </button>
        ) : (
          <button className="editinfo" >     
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;


// onClick={() => setIsEdit(true)}