import React from "react";

//Images
import up from "../../Images/up.svg";

const Footer = () => {
  return (
    <div className="h-screen w-screen bg-[#1D1213] p-7 flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 gap-2 text-white justify-center">
        <div>
          <h1 className="2xl:text-4xl my-5">LOGO</h1>
        </div>
        <div>
          <h1 className="2xl:text-4xl uppercase my-5">Visit Us</h1>
          <h1 className="my-5 text-xl">Location</h1>
          <p className="w-2/3 text-xl">
            745 Island Hwy E, Parksville, BC V9P 1T6, Canada
          </p>
        </div>
        <div>
          <h1 className="2xl:text-4xl uppercase my-5">our Hours</h1>
          <p className="my-5 text-xl w-1/2">Monday - Friday 10 am - 8 pm</p>
          <h1 className="text-xl">Closed on Sundays</h1>
        </div>
        <div>
          <h1 className="2xl:text-4xl uppercase my-5">Keep in Touch</h1>
          <p className="my-5 text-xl">
            Follow us on{" "}
            <a className="underline" href="https://www.instagram.com">
              Instagram
            </a>
          </p>
          <p className="text-xl">
            Follow us on{" "}
            <a className="underline" href="https://www.instagram.com">
              Facebook
            </a>
          </p>
        </div>
        <div className="flex flex-col">
          <img
            src={up}
            alt="up arrow"
            className="h-12 my-5 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
          <h1 className="2xl:text-2xl text-center">Back to Top</h1>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.8770573522247!2d-124.28918708443871!3d49.31661187933511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488854e12218de3%3A0xe76419c15de7bac6!2s745%20Island%20Hwy%20E%2C%20Parksville%2C%20BC%20V9P%201T6%2C%20Canada!5e0!3m2!1sen!2sin!4v1649759064030!5m2!1sen!2sin"
          className="mx-auto h-64 w-full my-9 rounded-xl "
          style={{ border: 0 }}
          title="map box"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1 className="text-4xl text-white tracking-wide">
        Reservations on Call !
      </h1>
    </div>
  );
};

export default Footer;
