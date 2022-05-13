import React, { useState } from "react";
import { HamburgerButton } from "react-hamburger-button";
import Instagram from "../../Images/instagram_light.svg";
import Facebook from "../../Images/facebook_light.svg";

import "./index.css";

const Hamburger = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-16 w-16 fixed top-4 right-0">
      <div className="z-10 fixed rounded-full p-3 bg-gray-400">
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
          <li>Home</li>
          <li>Menu</li>
          <li>Location</li>
        </ul>
        <div className="flex mt-6">
          <img
            className="h-16 w-16 mr-2"
            src={Instagram}
            alt="instagram_icon"
          />{" "}
          <div className="border-r-2 border-white mr-2"></div>
          <img className="h-16 w-16" src={Facebook} alt="facebook_icon" />
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
