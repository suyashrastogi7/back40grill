import React from "react";

//Images
import frame1 from "../../Images/frame1.png";
import frame2 from "../../Images/frame2.png";
import frame3 from "../../Images/frame3.png";

const Steaks = () => {
  return (
    <div className="h-screen w-screen justify-center p-9 items-center bg-[#F5E9DA]">
      <div className="flex flex-col my-3">
        <div className="flex mb-4 mx-auto">
          <div>
            <img
              className="lg:h-72 md:h-64 hover:scale-105 transition ease-in-out hover:-translate-y-4 hover:mr-4"
              src={frame1}
              alt="frame1"
            />
          </div>
          <div>
            <img
              className="lg:h-72 md:h-64 ml-4 hover:scale-105 transition ease-in-out hover:-translate-y-4 hover:ml-8"
              src={frame2}
              alt="frame2"
            />
          </div>
        </div>
        <div className="mx-auto">
          <img
            className="lg:h-80 md:h-72 hover:scale-105 transition ease-in-out hover:-translate-y-4 hover:mt-4"
            src={frame3}
            alt="frame3"
          />
        </div>
      </div>
    </div>
  );
};

export default Steaks;
