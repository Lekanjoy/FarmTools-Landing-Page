import React from "react";
import serviceImg from '../assets/servicesImg.svg'

const OurServices = () => {
  return (
    <section className="px-4 text-secondaryColor flex flex-col items-center pb-14 md:pb-[112px] md:flex-row md:px-10 max-lg:gap-x-10 lg:px-20 lg:gap-x-20">
      <div className="mb-6">
        <h2 className="font-bold text-primaryColor text-2xl mb-2 md:mb-4 md:text-3xl lg:mb-9 lg:text-5xl">
          Our Services
        </h2>
        <p className="font-semibold text-xl mb-2 md:mb-4 md:text-2xl lg:mb-9 ">
          Sales Of Different Farming Equipment With Up To 12 Months Warranty
        </p>
        <p className="mb-4 md:mb-4 md:text-2xl lg:mb-9">
          We bring to the a way to purchase different farm equipment from a
          legit plug and at an affordable price.
        </p>
        <button className="text-white bg-primaryColor rounded-3xl py-2 px-4">
          Read More
        </button>
      </div>
      <div className="w-full md:min-w-[400px] lg:min-w-[600px]">
        <img className="min-w-full" src={serviceImg} alt="" />
      </div>
    </section>
  );
};

export default OurServices;
