import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
    const [show,handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return()=>{
        window.removeEventListener("scroll")
    }
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avtar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avtar"
      />
    </div>
  );
};

export default Nav;
