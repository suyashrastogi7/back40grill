import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../Images/Menu.svg";
import back from "../../Images/back.svg";

const Menupage = () => {
  return (
    <div>
      <div className="absolute top-32 left-24 md:inline hidden">
        <Link to="/">
          <img
            src={back}
            alt="back_button"
            className="cursor-pointer hover:opacity-60"
          />
        </Link>
      </div>
      <img className="w-screen" src={Menu} alt="" />
    </div>
  );
};

export default Menupage;
