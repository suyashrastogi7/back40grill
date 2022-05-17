import React, { useState } from "react";
import { HamburgerButton } from "react-hamburger-button";
import Instagram from "../../Images/instagram_light.svg";
import Facebook from "../../Images/facebook_light.svg";
import { Link } from "react-router-dom";

import "./index.css";

const Hamburger = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-16 w-16 fixed top-4 right-0">
      <div className="z-10 fixed rounded-full p-3 bg-gray-500">
        <HamburgerButton
          open={show}
          onClick={() => setShow((prev) => !prev)}
          width={30}
          height={25}
          strokeWidth={3}
          color="white"
          animationDuration={0.5}
        />
      </div>
      <div className={`${show ? "visible" : ""} menu`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/">Location</Link>
          </li>
        </ul>
        <div className="flex mt-6">
          <a href="https://www.instagram.com/theback40_parksville/">
            <img
              className="h-12 w-12 mr-2"
              src={Instagram}
              alt="instagram_icon"
            />{" "}
          </a>
          <div className="border-r-2 border-white mr-2"></div>
          <a href="https://m.facebook.com/theback40grill/">
            <img className="h-12 w-12" src={Facebook} alt="facebook_icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
