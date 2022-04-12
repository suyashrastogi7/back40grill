import React from "react";

//CSS
import "./index.css";

//Images
import food1 from "../../Images/food1.png";
import food2 from "../../Images/food2.png";

const Menu = () => {
  return (
    <div className="h-screen w-screen bg-[#F5E9DA] grid grid-cols-3 py-7">
      <div className="flex flex-col items-center justify-around">
        <p className="2xl:w-1/2 lg:w-2/3 md:w-1/2 2xl:text-xl lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pharetra,
          vel enim, sapien, auctor eleifend maecenas congue elementum. Nisi, a,
          aliquam praesent nullam urna ut. Rutrum adipiscing suspendisse
          convallis egestas.
        </p>
        <h1 className="-rotate-90 2xl:text-8xl lg:text-7xl md:text-8xl text-[#38292A]">
          MENU
        </h1>
      </div>
      <div className="flex flex-col justify-around items-center">
        <img src={food1} className="h-80 w-80" alt="food1" />
        <img src={food2} className="h-80 w-80" alt="food2" />
      </div>
      <div className="flex flex-col items-center justify-around">
        <h1 className="2xl:text-8xl lg:text-7xl md:text-8xl text-[#38292A] text-center px-auto grow  text-vertical">
          VERSATILE
        </h1>
        <h1 className="xl:w-1/2 md:w-2/3 text-2xl text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pharetra,
          vel enim, sap
        </h1>
        <button>
          <h1 className="uppercase bg-[#FF971D] hover:bg-[#1D1213] transition ease-in-out 2xl:text-3xl lg:text-2xl md:text-xl text-white px-6 py-2 rounded-xl">
            View Menu
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Menu;
