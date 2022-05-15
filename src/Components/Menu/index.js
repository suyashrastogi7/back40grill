import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./index.css";

//Images
import food1 from "../../Images/food1.png";
import food2 from "../../Images/food2.png";

const Menu = () => {
  return (
    <div className="h-screen low w-screen bg-[#F5E9DA] md:grid md:grid-cols-3 flex flex-col items-center justify-around py-7">
      <div className="md:flex md:flex-col static md:h-full h-auto items-center justify-around">
        <p className="2xl:w-1/2 md:inline-block hidden lg:w-2/3 md:w-1/2 2xl:text-xl lg:text-lg">
          Our menu is versatile and features a range of options you can choose
          from. From some of the most hearty and sumptuous dishes to green
          healthy salads. We even have options for kids!
        </p>
        <h1 className="md:-rotate-90 -rotate-0 2xl:text-8xl lg:text-7xl md:text-8xl text-6xl md:mb-0 mb-6 text-[#38292A]">
          MENU
        </h1>
      </div>
      <div className="md:flex md:flex-col static h-full grow md:grow-0 justify-around items-center md:mb-0 mb-6">
        <img
          src={food1}
          className="md:h-80 md:w-80 h-64 w-64 md:mb-0 mb-6"
          alt="food1"
        />
        <img src={food2} className="md:h-80 md:w-80 h-64 w-64" alt="food2" />
      </div>
      <div className="flex flex-col items-center h-full justify-around">
        <h1 className="2xl:text-8xl lg:text-7xl md:text-8xl text-[#38292A] text-center px-auto grow md:inline-block hidden text-vertical">
          VERSATILE
        </h1>
        <h1 className="xl:w-1/2 md:w-2/3 text-xl text-center mb-6 ">
          To check out the various dishes and ingredients, view our menu.
        </h1>
        <button className="uppercase bg-[#FF971D] hover:bg-[#1D1213] transition ease-in-out 2xl:text-3xl lg:text-2xl md:text-xl text-2xl text-white px-6 py-2 rounded-xl">
          <Link to="/menu">
            <h1>View Menu</h1>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menu;
