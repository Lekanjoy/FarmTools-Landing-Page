import React from 'react'

const Community = () => {
  return (
    <section className="px-4 w-full flex justify-center items-center bg-communityImage bg-no-repeat bg-cover bg-center z-[1] h-[541px]">
      <div className="bg-[#0F0F0F] text-white rounded-2xl p-8 w-[90%]  md:w-[600px]md:px-8 md:py-6  lg:w-[725px] lg:px-14 lg:py-12">
        <p className="mb-4 text-sm md:mb-6 md:text-lg md:font-medium">
          Join Our Community
        </p>
        <h5 className="font-semibold text-xl md:text-2xl md:max-w-md md:font-bold mb-5 md:mb-10 lg:max-w-xl lg:text-3xl">
          Get Best Cleaning And Maintainance Tips At Your Finger Tips
        </h5>
        <form autoComplete="true" className="relative">
          <input
            type="email"
            className="bg-[#414141] outline-none pl-4 rounded-3xl w-full h-12 md:h-[60px] lg:h-[75px]"
          />
          <button className=" bg-primaryColor h-10 px-6 font-medium rounded-3xl text-center absolute right-2 top-[4.4px] md:right-3 md:top-[9px]  md:w-[175px] md:h-[40px] md:font-bold md:text-lg lg:h-[56px] ">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Community