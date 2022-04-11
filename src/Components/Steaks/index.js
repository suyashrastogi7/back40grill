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
            <img className="h-72" src={frame1} alt="frame1" />
          </div>
          <div>
            <img className="h-72 ml-4" src={frame2} alt="frame2" />
          </div>
        </div>
        <div className="mx-auto">
          <img className="h-80" src={frame3} alt="frame3" />
        </div>
      </div>
    </div>
  );
};

export default Steaks;
