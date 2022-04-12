import React from "react";

//Images
import eye from "../../Images/eye.svg";
import facebook from "../../Images/facebook.svg";
import instagram from "../../Images/instagram.svg";

const Offers = () => {
  return (
    <div className="h-screen w-screen pb-7 bg-[#F5E9DA]">
      <div className="h-64 bg-white">
        <img src={eye} alt="keep an eye out" className="h-96 mx-auto" />
      </div>
      <div className="h-2/3 py-9 text-center flex flex-col justify-end">
        <h1 className="2xl:text-8xl text-center">KEEP AN EYE OUT</h1>
        <p className="2xl:w-1/2 my-3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          est vel elit quam lacus ac malesuada. Facilisi urna, dignissim
          pellentesque mi integer volutpat. Vitae fermentum urna lectus odio.
        </p>
        <div className="flex justify-center">
          <img
            src={facebook}
            alt="facebook"
            className="cursor-pointer border-r-4 pr-4 border-[#1D1213]"
          />

          <img
            src={instagram}
            alt="instagram"
            className="cursor-pointer ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
