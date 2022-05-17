import React from "react";
import { Parallax } from "react-parallax";

//Images
import landing from "../../Images/Landing.png";
import landing2 from "../../Images/landing2.png";
import logo from "../../Images/logo.svg";

const Landing = () => {
  return (
    //
    <div>
      <div className="inline-block md:hidden">
        <Parallax
          bgImage={landing2}
          bgImageAlt="landing"
          bgImageStyle={{
            backgroundPosition: "center",
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
          }}
          strength={300}
        >
          <div className="h-screen w-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
            <img src={logo} alt="logo" className="h-48" />
          </div>
        </Parallax>
      </div>
      <div className="md:inline-block hidden">
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
            <img src={logo} alt="logo" className="h-48" />
          </div>
        </Parallax>
      </div>
    </div>
    //
  );
};

export default Landing;
