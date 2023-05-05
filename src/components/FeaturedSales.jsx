import React from "react";
import Tractor from "./Tractor";
import Tractor1 from "../assets/Tractor1.svg";
import Tractor2 from "../assets/Tractor2.svg";
import Tractor3 from "../assets/Tractor3.svg";
import Tractor4 from "../assets/Tractor4.svg";
import Tractor5 from "../assets/Tractor5.svg";
import Tractor6 from "../assets/Tractor6.svg";
import Tractor7 from "../assets/Tractor7.svg";
import Tractor8 from "../assets/Tractor8.svg";

const FeaturedSales = () => {
  return (
    <section className="px-4 py-6 bg-[#F7FFF8] w-full  md:py-12 md:gap-x-10 lg:px-20 ">
      <div className="text-center mb-9">
        <h3 className="font-bold text-primaryColor text-2xl mb-2 md:mb-4 md:text-3xl lg:mb-9 lg:text-5xl">
          Featured Sales
        </h3>
        <p className="text-secondaryColor font-semibold text-xl mb-2 md:mb-4 md:text-2xl lg:mb-9">
          Our Products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-4 mb-6 md:mb-8 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 md:gap-y-8">
        <Tractor productImg={Tractor1} />
        <Tractor productImg={Tractor2} />
        <Tractor productImg={Tractor3} />
        <Tractor productImg={Tractor4} />
        <Tractor productImg={Tractor5} />
        <Tractor productImg={Tractor6} />
        <Tractor productImg={Tractor7} />
        <Tractor productImg={Tractor8} />
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="w-3/4 p-3 rounded-3xl bg-primaryColor text-center text-white font-semibold  md:font-bold md:text-lg md:w-[467px] md:h-[56px] hover:opacity-90">
          Shop
        </button>
      </div>
    </section>
  );
};

export default FeaturedSales;
