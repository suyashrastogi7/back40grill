import React from "react";

//Images
import up from "../../Images/up.svg";
import logo from "../../Images/logo.svg";
import Union from "../../Images/Union.svg";

const Footer = () => {
  return (
    <div className="md:h-screen h-auto w-screen bg-[#1D1213] p-7 flex flex-col md:justify-center justify-start items-center">
      <div className="md:inline-block hidden ">
        <div className="grid grid-cols-5 gap-2 text-white justify-center">
          <div>
            <img src={logo} alt="logo" className="h-36 ml-9 mt-7" />
          </div>
          <div>
            <h1 className="2xl:text-4xl lg:text-3xl md:text-3xl uppercase my-5">
              Visit Us
            </h1>
            <h1 className="my-5 lg:text-xl md:text-lg">Location</h1>
            <p className="lg:w-2/3 md:w-3/4 lg:text-xl md:text-lg">
              745 Island Hwy E, Parksville, BC V9P 1T6, Canada
            </p>
          </div>
          <div>
            <h1 className="2xl:text-4xl lg:text-3xl md:text-3xl uppercase my-5">
              our Hours
            </h1>
            <p className="my-5 lg:text-xl md:text-lg lg:w-2/3 md:w-3/4">
              Monday - Friday 10 am - 8 pm
            </p>
            <h1 className="lg:text-xl md:text-lg">Closed on Sundays</h1>
          </div>
          <div>
            <h1 className="2xl:text-4xl lg:text-3xl md:text-3xl uppercase my-5">
              Keep in Touch
            </h1>
            <p className="my-5 lg:text-xl md:text-lg ">
              Follow us on{" "}
              <a
                className="underline"
                href="https://www.instagram.com/theback40_parksville/"
              >
                Instagram
              </a>
            </p>
            <p className="lg:text-xl md:text-lg">
              Follow us on{" "}
              <a
                className="underline"
                href="https://m.facebook.com/theback40grill/"
              >
                Facebook
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={up}
              alt="up arrow"
              className="h-12 w-12 mx-auto my-5 cursor-pointer hover:opacity-75 transition ease-in-out"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            />
            <h1 className="2xl:text-2xl md:text-xl text-center">Back to Top</h1>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.8770573522247!2d-124.28918708443871!3d49.31661187933511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488854e12218de3%3A0xe76419c15de7bac6!2s745%20Island%20Hwy%20E%2C%20Parksville%2C%20BC%20V9P%201T6%2C%20Canada!5e0!3m2!1sen!2sin!4v1649759064030!5m2!1sen!2sin"
            className="mx-auto h-64 w-full my-9 rounded-xl "
            style={{ border: 0 }}
            title="map box"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h1 className="text-4xl text-center text-white tracking-wide">
          Reservations on Call !
        </h1>
        <p className="text-white text-center text-xl mt-2">2509512257</p>
      </div>

      <div className="inline-block md:hidden">
        <div className="md:grid md:grid-cols-5 flex flex-col md:text-left text-center gap-2 text-white md:justify-center justify-start">
          <div>
            <img src={logo} alt="logo" className="h-36 mx-auto mb-4" />
          </div>
          <div>
            <h1 className="2xl:text-4xl lg:text-3xl md:text-3xl text-3xl uppercase md:my-5 my-1">
              Visit Us
            </h1>
            <h1 className="md:my-5 my-2 lg:text-xl md:text-lg text-2xl">
              Location
            </h1>
            <p className="lg:w-2/3 md:w-3/4 w-1/2 mx-auto md:mx-0 lg:text-xl md:text-lg text-lg">
              745 Island Hwy E, Parksville, BC V9P 1T6, Canada
            </p>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.8770573522247!2d-124.28918708443871!3d49.31661187933511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488854e12218de3%3A0xe76419c15de7bac6!2s745%20Island%20Hwy%20E%2C%20Parksville%2C%20BC%20V9P%201T6%2C%20Canada!5e0!3m2!1sen!2sin!4v1649759064030!5m2!1sen!2sin"
              className="mx-auto md:h-64 h-32 w-full md:my-9 my-5 rounded-xl "
              style={{ border: 0 }}
              title="map box"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <h1 className="2xl:text-4xl lg:text-3xl text-3xl md:text-3xl uppercase md:my-5 my-2">
              our Hours
            </h1>
            <p className="md:my-5 my-1 lg:text-xl md:text-lg lg:w-2/3 md:w-3/4">
              Monday - Friday 10 am - 8 pm
            </p>
            <h1 className="lg:text-xl md:text-lg text-lg">Closed on Sundays</h1>
          </div>
        </div>

        <h1 className="md:inline-block hidden text-4xl text-white tracking-wide">
          Reservations on Call !
        </h1>
        <p className="text-white text-center text-xl mt-2">2509512257</p>
      </div>

      <img src={Union} className="mt-7 h-12 pb-1" alt="thankyou" />
    </div>
  );
};

export default Footer;
