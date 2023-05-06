import React, { useState, useEffect } from "react";
import testimonialData from "../testimonialData";
import quotes from "../assets/quote.svg";
import rightArrow from "../assets/leftarrow.svg";
import leftArrow from "../assets/right arrow.svg";

const Testimonials = () => {
  const [testimonials] = useState(testimonialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next Testimonial Click
  const handleNextTestimonial = () => {
    setCurrentIndex((prevState) =>
      prevState < testimonials.length - 1 ? prevState + 1 : (prevState = 0)
    );
  };

  // Handle Previous Testimonial Click
  const handlePrevTestimonial = () => {
    setCurrentIndex((prevState) =>
      prevState > 0 ? prevState - 1 : (prevState = testimonials.length - 1)
    );
  };

  //   AutoPlay Testimonials
  useEffect(() => {
    setInterval(() => {
      handlePrevTestimonial();
    }, 10000);
  }, []);

  return (
    <div className="relative bg-secondaryColor w-full text-center h-[400px] flex justify-center items-center flex-col px-4 lg:px-20">
      <img src={quotes} className="mb-4 w-20  md:mb-8" />
      <h5 className="text-lg mb-3 text-white md:max-w-md md:text-2xl md:mb-5 md:font-medium lg:max-w-4xl">
        {testimonials[currentIndex].text}
      </h5>
      <div className="mb-6 md:text-xl md:mb-8">
        <p className="text-primaryColor">{testimonials[currentIndex].name}</p>
        <p className="text-white ">{testimonials[currentIndex].location}</p>
      </div>
      <div className="flex gap-x-[6px]">
        {testimonials.map((test, index) => {
          return (
            <div
              key={index}
              className={`w-[30px] h-[10px] rounded-[41px] ${
                currentIndex === index ? "bg-primaryColor" : " bg-[#B7B7B7]"
              }`}
            ></div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <>
        <div
          onClick={handleNextTestimonial}
          className="bg-[#444444] w-[50px] h-[50px] rounded-full absolute right-20 cursor-pointer hover:scale-110 duration-300 hidden md:block"
        >
          <img src={rightArrow} alt="Right arrow to next testimonials" />
        </div>
        <div
          onClick={handlePrevTestimonial}
          className="bg-[#444444] w-[50px] h-[50px] rounded-full absolute left-20 cursor-pointer hover:scale-110 duration-300 hidden md:block"
        >
          <img src={leftArrow} alt="Left arrow to next testimonials" />
        </div>
      </>
    </div>
  );
};

export default Testimonials;
