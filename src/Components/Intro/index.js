import React, { useState } from "react";

//CSS
import "./index.css";

//Images
import burger from "../../Images/burger1.png";
import map_drop_light from "../../Images/map-drop-light.svg";
import map_drop_dark from "../../Images/map-drop-dark.svg";

const Intro = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-screen low w-screen flex md:flex-row flex-col items-center z-10">
      <div className="p-9 md:grow-0 grow md:ml-9 ml-0">
        <h1 className="text-[#24191E] text-center 2xl:text-5xl lg:text-5xl md:text-4xl text-3xl">
          B40G
        </h1>
        <div className="flex">
          <h1 className="uppercase text-[#38292a] 2xl:text-9xl lg:text-8xl md:text-8xl text-7xl opacity-50">
            The
          </h1>
          <h1 className="uppercase text-[#FF971D] 2xl:text-9xl lg:text-8xl md:text-8xl text-7xl 2xl:ml-6 lg:ml-5 md:ml-5 ml-6">
            Best
          </h1>
        </div>
        <h1 className="uppercase text-[#38292A] 2xl:text-9xl lg:text-8xl text-7xl md:text-8xl">
          Burgers
        </h1>
        <div className="relative">
          <button
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="flex justify-center items-center mx-auto px-6 py-5 mt-6 rounded-xl border-2 transition ease-in-out border-[#38292A] hover:bg-[#38292A] text-[#38292A] hover:text-white"
          >
            <h1 className="2xl:text-4xl lg:text-3xl md:text-3xl text-3xl">
              in Parksville
            </h1>
            {show ? (
              <img
                src={map_drop_light}
                className="h-8 w-8 ml-4"
                alt="map pointer"
              />
            ) : (
              <img
                src={map_drop_dark}
                className="h-8 w-8 ml-4"
                alt="map pointer"
              />
            )}
          </button>
          <div
            className={`text-center ${
              show ? "opacity-100" : "opacity-0"
            } absolute 2xl:left-12 lg:left-2 md:left-2 -left-8 md:bg-transparent bg-[#24191E] top-24 md:text-[#24191E] text-white shadow border-2 border-[#24191E] transition ease-in-out tooltip px-5 py-2 rounded-xl w-80`}
          >
            <h1 className="uppercase 2xl:text-2xl lg:text-xl text-xl tracking-wide">
              drop by
            </h1>
            <p className="font-semibold text-lg">
              745 Island Hwy E, Parksville, BC V9P 1T6, Canada
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F5E9DA] md:grow grow-0 md:h-full h-2/5 md:mt-0 mt-9 md:w-auto w-full md:flex md:justify-center md:items-center inline-block relative">
        <div className="custom-shadow h-full w-full -translate-x-13"></div>
        <img
          src={burger}
          className="md:h-5/6 low-img h-full md:mx-0 mx-auto md:-translate-y-0 -translate-y-12 rounded-xl hover:shadow-2xl hover:scale-105 md:hover:-translate-y-3 hover:-translate-y-16 transition ease-in-out"
          alt="burger"
        />
      </div>
    </div>
  );
};

export default Intro;
