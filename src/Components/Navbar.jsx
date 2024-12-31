import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import "../Components/css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const [token, setToken] = useState(true);
  return (
    <div className="navcontainer">
      <img
        className="logo"
        onClick={() => navigate("/")}
        src={assets.title_logo}
        alt=""
      />
      <ul className="linkscontainer">
        <NavLink to="/" className="nav">
          <li className="links">HOME</li>
          <hr className="hr" />
        </NavLink>

        <NavLink to="/doctors" className="nav">
          <li className="links">DOCTORS</li>
          <hr className="hr" />
        </NavLink>
        <NavLink to="/about" className="nav">
          <li className="links">ABOUT</li>
          <hr className="hr" />
        </NavLink>
        <NavLink to="/contact" className="nav">
          <li className="links">CONTACT</li>
          <hr className="hr" />
        </NavLink>
      </ul>
      <div className="btns">
        {token ? (
          <div className="group">
            <div className="profile-container">
              <img className="proimg" src={assets.profile_image} alt="" />
              <img className="dropicon" src={assets.dropdown_icon} alt="" />
            </div>

            <div className="dropdown">
              <p onClick={() => navigate(" my-profile")}>My Profile</p>
              <p onClick={() => navigate("my-appointments")} className="">
                My Appointments
              </p>
              <p onClick={() => setToken(false)} className="">
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate("/login")} className="createacc">
            Create Account
          </button>
        )}

        {/* <img className='menuicon' onClick={()=> setShowMenu(true)} src={assets.menu_icon} alt="" />
             
            <div className={` ${ showMenu ? 'menu-first' : 'menu-second'}menu-one`}>
             <div className='menu-div'> 
                <img className='menu-logo' src={assets.title_logo} alt="" />
                <img className='menu-cross' onClick={()=> setShowMenu(false)}src={assets.cross_icon} alt="" />
             </div>
             <ul className='menu-ul'>
                <NavLink  onClick={()=> setShowMenu(false)} to='/'><p className='menu-links'>HOME</p></NavLink>
                <NavLink  onClick={()=> setShowMenu(false)} to='/doctors'><p className='menu-links'>DOCTORS</p></NavLink>
                <NavLink  onClick={()=> setShowMenu(false)} to='/about'><p className='menu-links'>ABOUT</p></NavLink>
                <NavLink  onClick={()=> setShowMenu(false)} to='/contact'><p className='menu-links'>CONTACT</p></NavLink>
            </ul>
            </div>
             */}
      </div>
    </div>
  );
};

export default Navbar;
