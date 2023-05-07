import React from "react";
import aboutImg from "../assets/aboutUsImg.svg";

const AboutUs = () => {
  return (
    <section className="flex flex-col w-full items-center pb-14 md:pb-24 md:flex-row px-4 md:gap-x-10  lg:px-20 lg:gap-x-16">
      <div className="mb-6 lg:max-w-lg md:mb-0">
        <img src={aboutImg} alt="" />
      </div>

      <div className="md:max-w-[370px] lg:max-w-[566px]">
        <h2 className="font-semibold text-primaryColor text-2xl mb-2 md:mb-4 md:font-bold md:text-3xl lg:mb-9 lg:text-5xl">
          About Us
        </h2>
        <p className="font-semibold text-xl mb-2 md:mb-4 md:text-xl lg:text-2xl lg:mb-9">
          One Of The Best Leading Farming Equipment Company
        </p>
        <p className="mb-4 md:mb-4 md:text-xl lg:text-2xl lg:mb-9">
          We bring to the a way to purchase different farm equipment from a
          legit plug and at an affordable price.
        </p>
        <button className="text-white bg-primaryColor rounded-3xl py-2 px-4">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
