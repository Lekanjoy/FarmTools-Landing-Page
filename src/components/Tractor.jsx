import React from 'react'

const Tractor = ({productImg}) => {
  return (
    <div className="bg-white w-full h-[370px] rounded-lg border border-[#E5E5E6] md:hover:scale-95 md:duration-300">
      <img
        className="w-full max-h-[188px] object-cover rounded-lg"
        src={productImg}
        alt="A Farm Tractor"
      />
      <div className="p-4 text-secondaryColor font-medium md:font-semibold md:text-lg lg:text-xl">
        <h4>Tractor</h4>
        <p className="text-[rgba(52,_52,_52,_0.6)]">20-50HP Farm Tractor</p>
        <p className="text-primaryColor mb-1">#7,500,000</p>
        <button className="border border-primaryColor text-primaryColor text-base rounded-3xl py-2 px-5 ">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Tractor