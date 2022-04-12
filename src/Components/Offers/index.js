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
        <h1 className="2xl:text-8xl lg:text-7xl md:text-7xl text-center">
          KEEP AN EYE OUT
        </h1>
        <p className="2xl:w-1/2 lg:w-2/3 md:w-1/2 text-xl my-3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          est vel elit quam lacus ac malesuada. Facilisi urna, dignissim
          pellentesque mi integer volutpat. Vitae fermentum urna lectus odio.
        </p>
        <div className="flex justify-center">
          <img
            src={facebook}
            alt="facebook"
            className="cursor-pointer lg:scale-100 md:scale-75 border-r-4 lg:pr-4 md:pr-8 border-[#1D1213] hover:opacity-75 transition ease-in-out duration-200"
          />

          <img
            src={instagram}
            alt="instagram"
            className="cursor-pointer lg:scale-100 md:scale-75 lg:ml-4 md:ml-0 hover:opacity-75 transition ease-in-out duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
