import React from "react";

//Images
import landing from "../../Images/Landing.png";

const Landing = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${landing})` }}
    >
      <h1 className="2xl:text-8xl text-white font-bold tracking-wide">B40G</h1>
    </div>
  );
};

export default Landing;
