import React from 'react'

const HeroPage = () => {
  return (
    <section className=" hero relative px-4 w-full text-center flex justify-center items-center flex-col mb-8 bg-heroImage bg-no-repeat bg-cover bg-center z-[1] min-h-screen md:mb-14 md:px-3 lg:mb-[100px] lg:px-20 ">
      <h1 className="text-white font-bold mb-4 text-3xl md:text-5xl lg:text-6xl lg:mb-6">
        Discover The Latest Farm Tools For Modern Agriculture
      </h1>
      <p className="text-white text-lg mb-5 md:mb-8 md:max-w-[595px] lg:text-2xl lg:mb-12 ">
        Modernize Your Agricultural Practices: Cutting-Edge Tools for Today's
        Farmers
      </p>
      <div className="flex gap-x-4">
        <button className="text-primaryColor bg-white py-2 px-3 rounded-3xl md:rounded-3xl md:py-3 md:px-6">
          Read More
        </button>
        <button className="text-white bg-primaryColor py-2 px-3 rounded-3xl md:rounded-3xl md:py-3 md:px-6">
          View Products
        </button>
      </div>
    </section>
  );
}

export default HeroPage