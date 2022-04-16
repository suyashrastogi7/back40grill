import React from "react";
import { Parallax } from "react-parallax";

//Images
import landing from "../../Images/Landing.png";

const Landing = () => {
  return (
    //
    <Parallax
      bgImage={landing}
      bgImageAlt="landing"
      bgImageStyle={{
        backgroundPosition: "center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
      }}
      strength={300}
    >
      <div className="h-screen w-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <h1 className="2xl:text-8xl lg:text-8xl md:text-7xl text-6xl text-white font-bold tracking-wide">
          B40G
        </h1>
      </div>
    </Parallax>
    //
  );
};

export default Landing;
