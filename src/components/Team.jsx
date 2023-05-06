import React from "react";
import person1 from '../assets/person1.svg'
import person2 from '../assets/person2.svg'
import person3 from "../assets/person3.svg";

const Team = () => {
  return (
    <section className="px-4 pb-11 md:pb-24 lg:px-20">
      <div className="text-center mb-9">
        <h3 className="font-bold text-primaryColor text-2xl mb-2 md:mb-4 md:text-3xl lg:mb-9 lg:text-5xl">
          Our Team
        </h3>
        <p className="text-secondaryColor font-semibold text-xl mb-2 md:mb-4 md:text-2xl lg:mb-9">
          Meet The Brilliant Minds Behind The Scene
        </p>
      </div>

      <div className="flex flex-col gap-y-3 w-full md:flex-row md:justify-center md:flex-wrap md:gap-x-6 ">
        <img src={person1} alt="A Team member of FarmT" />
        <img src={person2} alt="A Team member of FarmT" />
        <img src={person3} alt="A Team member of FarmT" />
      </div>
    </section>
  );
};

export default Team;
