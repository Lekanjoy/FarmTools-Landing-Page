import React from 'react'
import blogImg1 from "../assets/blogImg3.svg";
import blogImg2 from "../assets/blogImg2.svg";

const Blog = () => {
  return (
    <article className="px-4 mt-10 pb-10 md:pb-24 md:mt-24 lg:px-20">
      <div className="text-center mb-9">
        <h3 className="font-bold text-primaryColor text-2xl mb-2 md:mb-4 md:text-3xl lg:mb-9 lg:text-5xl">
          Blog
        </h3>
        <p className="text-secondaryColor font-semibold text-xl mb-2 md:mb-4 md:text-2xl lg:mb-9">
          Latest Post
        </p>
      </div>
      <div className="w-full flex flex-col md:items-center md:flex-row md:gap-x-6">
        <div className="blog relative flex flex-col justify-end px-7 pb-10 mb-4 text-white w-full bg-blogImage bg-no-repeat bg-cover bg-center z-[1] h-[406px] md:mb-0 md:min-w-[50%]">
          <p className="text-sm mb-4 font-medium md:text-base">April 16 2023</p>
          <h4 className="mb-9 font-semibold text-2xl md:text-3xl">
            4 ways to take care of your plough
          </h4>
          <button className=" bg-primaryColor w-fit rounded-3xl py-2 px-4 hover:scale-105 duration-200">
            Read More
          </button>
        </div>

        <div className="flex gap-x-3 md:gap-x-6">
          <div className="text-secondaryColor min-h-[406px]">
            <img
              className="w-full object-cover h-52 mb-3"
              src={blogImg1}
              alt=""
            />
            <p className="text-sm mb-2 md:text-base">April 16, 2023</p>
            <h5 className="mb-2 font-semibold md:font-medium md:text-xl">
              <a href="" className="decoration-blue hover:underline">
                Several Ways To Maintain Your Tractors
              </a>
            </h5>
            <p className="text-xs md:text-base">
              Tractors are essential pieces of farm equipment. They make
              plowing and planting easy.Tractors are even used on construction sites.
              That is why...
            </p>
          </div>
          <div className="text-secondaryColor min-h-[406px]">
            <img
              className="w-full object-cover h-52 mb-3"
              src={blogImg2}
              alt=""
            />
            <p className="text-sm mb-2 md:text-base">April 16, 2023</p>
            <h5 className="mb-2 font-semibold md:font-medium md:text-xl">
              <a href="" className="decoration-blue hover:underline">
                Several Ways To Maintain Your Tractors
              </a>
            </h5>
            <p className="text-xs md:text-base">
              Tractors are essential pieces of farm equipment. They make
              plowing and planting easy.Tractors are even used on construction sites.
              That is why...
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Blog