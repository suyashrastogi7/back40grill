import React from "react";

//CSs
import "./index.css";

//Images
import patio from "../../Images/patio.png";

const Bar = () => {
  return (
    <div className="h-screen low w-screen bg-[#F5E9DA] md:grid md:grid-cols-3 flex flex-col gap-16 py-7 md:px-0 px-9">
      <div className="flex justify-center items-center">
        <h1 className="md:text-8xl text-7xl text-[#1D1213] md:text-vertical text-none w-full md:-rotate-90">
          Patio and Bar.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center grow">
        <img src={patio} alt="patio" className=" mb-9" />
        <p className="md:w-4/5 md:text-lg text-xl">
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
