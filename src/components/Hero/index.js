import React from "react";
import heroImg from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <section
      className="text-gray-600 body-font"
      style={{ backgroundColor: "#DF8390" }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <br className="hidden lg:inline-block" />
          <p className="text-white font-thin leading-relaxed sm:text-2xl">
            Tutorin Dong!
          </p>
          <h1 className="font-bold text-white title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            TUTOR-IN
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-16 font-thin leading-relaxed sm:text-2xl text-white">
            Your Favorite Tutors At Your Service!
          </p>
          <div className="flex justify-center">
            <button
              style={{ backgroundColor: "white" }}
              className="text-black font-bold inline-flex bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Book Now!
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
