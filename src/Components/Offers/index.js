import React from "react";

//Images
import eye from "../../Images/eye.svg";
import facebook from "../../Images/facebook.svg";
import instagram from "../../Images/instagram.svg";

const Offers = () => {
  return (
    <div className="h-screen w-screen md:pb-7 pb-7 bg-[#F5E9DA] low">
      <div className="h-64 low bg-white">
        <img src={eye} alt="keep an eye out" className="h-96 mx-auto" />
      </div>
      <div className="h-2/3 md:py-9 py-2 text-center flex flex-col justify-end px-5 md:px-0">
        <h1 className="2xl:text-8xl lg:text-7xl md:text-7xl text-5xl text-center">
          KEEP AN EYE OUT
        </h1>
        <p className="2xl:w-1/2 lg:w-2/3 md:w-1/2 text-xl my-3 mx-auto">
          We regularly post our specials, combos, and other offers for the day
          on our Facebook and Instagram pages. Don't think you'd wanna miss out!
        </p>
        <div className="flex justify-center">
          <a href="https://facebook.com/theback40grill/">
            <img
              src={facebook}
              alt="facebook"
              className="cursor-pointer lg:scale-100 md:scale-75 border-r-4 lg:pr-4 md:pr-8 pr-5 border-[#1D1213] hover:opacity-75 transition ease-in-out duration-200"
            />
          </a>

          <a href="https://www.instagram.com/theback40_parksville/">
            <img
              src={instagram}
              alt="instagram"
              className="cursor-pointer lg:scale-100 md:scale-75 lg:ml-4 md:ml-0 ml-5 hover:opacity-75 transition ease-in-out duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offers;
