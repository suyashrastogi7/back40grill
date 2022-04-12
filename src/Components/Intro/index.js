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
    <div className="h-screen w-screen flex items-center">
      <div className="p-9">
        <h1 className="text-[#24191E] text-center 2xl:text-5xl">B40G</h1>
        <div className="flex">
          <h1 className="uppercase text-[#38292a] 2xl:text-9xl opacity-50">
            The
          </h1>
          <h1 className="uppercase text-[#FF971D] 2xl:text-9xl 2xl:ml-6">
            Best
          </h1>
        </div>
        <h1 className="uppercase text-[#38292A] 2xl:text-9xl">Burgers</h1>
        <div className="relative">
          <button
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="flex justify-center items-center mx-auto px-6 py-5 mt-6 rounded-xl border-2 transition ease-in-out border-[#38292A] hover:bg-[#38292A] text-[#38292A] hover:text-white"
          >
            <h1 className="2xl:text-4xl ">in Parksville</h1>
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
            } absolute left-12 top-24 text-[#24191E] border-2 border-[#24191E] transition ease-in-out tooltip px-5 py-2 rounded-xl w-80`}
          >
            <h1 className="uppercase 2xl:text-2xl">drop by</h1>
            <p className="font-semibold">
              745 Island Hwy E, Parksville, BC V9P 1T6, Canada
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F5E9DA] grow h-full flex justify-center items-center">
        <img
          src={burger}
          className="h-5/6 rounded-xl hover:shadow-2xl"
          alt="burger"
        />
      </div>
    </div>
  );
};

export default Intro;
