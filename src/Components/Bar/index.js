import React from "react";

//CSs
import "./index.css";

//Images
import patio from "../../Images/patio.png";

const Bar = () => {
  return (
    <div className="h-screen w-screen bg-[#F5E9DA] grid grid-cols-3 gap-16 py-7">
      <div className="flex justify-center items-center">
        <h1 className="text-8xl text-[#1D1213] text-vertical rotate-180">
          Patio and Bar.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center grow">
        <img src={patio} alt="patio" className=" mb-9" />
        <p className="w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit tortor
          dignissim lacus neque neque. Egestas in amet, quis quam vitae. Sit
          viverra scelerisque ullamcorper amet vulputate a vitae.
        </p>
      </div>
      <div className="border-l border-[#1D1213]"></div>
    </div>
  );
};

export default Bar;
