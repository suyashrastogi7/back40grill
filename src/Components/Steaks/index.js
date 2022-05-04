import React from "react";

//Images
import frame1 from "../../Images/frame1.png";
import frame2 from "../../Images/frame2.png";
import frame3 from "../../Images/frame3.png";
import frame11 from "../../Images/Frame11.png";
import frame22 from "../../Images/Frame22.png";
import frame33 from "../../Images/Frame33.png";

const Steaks = () => {
  return (
    <div className="h-screen low w-screen justify-center p-9 items-center bg-[#F5E9DA]">
      <div className="flex flex-col w-full my-3 md:inline-block hidden">
        <div className="flex md:flex-row flex-col justify-center items-center mb-4 mx-auto">
          <div>
            <img
              className="lg:h-72 md:h-64 hover:scale-105 transition ease-in-out hover:-translate-y-4 hover:mr-4 md:mb-0 mb-9"
              src={frame1}
              alt="frame1"
            />
          </div>
          <div>
            <img
              className="lg:h-72 md:h-64 md:ml-4 ml-0 hover:scale-105 transition ease-in-out hover:-translate-y-4 md:hover:ml-8"
              src={frame2}
              alt="frame2"
            />
          </div>
        </div>
        <div className="mx-auto">
          <img
            className="lg:h-80 md:h-72 hover:scale-105 transition ease-in-out hover:-translate-y-4 hover:mt-4 mx-auto"
            src={frame3}
            alt="frame3"
          />
        </div>
      </div>
      <div className="flex flex-col my-3 md:hidden inline-block">
        <div className="flex md:flex-row flex-col mb-4 mx-auto">
          <div>
            <img
              className="lg:h-72 md:h-64 hover:scale-105 transition ease-in-out hover:-translate-y-4 hover:mr-4 md:mb-0 mb-9"
              src={frame11}
              alt="frame1"
            />
          </div>
          <div>
            <img
              className="lg:h-72 md:h-64 md:ml-4 ml-0 hover:scale-105 transition ease-in-out hover:-translate-y-4 md:hover:ml-8"
              src={frame22}
              alt="frame2"
            />
          </div>
        </div>
        <div className="mx-auto mt-4">
          <img
            className="lg:h-80 md:h-72 hover:scale-105 transition ease-in-out hover:-translate-y-4 hover:mt-4"
            src={frame33}
            alt="frame3"
          />
        </div>
      </div>
    </div>
  );
};

export default Steaks;
