import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const sidebarRef = useRef(null);

  // Header Scroll
  useEffect(() => {
    let scrollNav = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollNav.offsetHeight && window.scrollY <= 400) {
        scrollNav.classList.add("scroll");
      } else if (window.scrollY > 400) {
        scrollNav.classList.remove("scroll");
      } else {
        scrollNav.classList.remove("scroll");
      }
    });
  }, []);

  // Close Mobile Nav when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowNav(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <header
      id="header"
      className="bg-white fixed z-10 w-full h-[50px] flex justify-between border border-b shadow-md px-4 ease-in-out duration-300 md:py-4 md:items-center md:flex-row md:px-10 md:h-[10vh] lg:px-20 "
    >
      <img
        className="max-w-[100px] lg:max-w-fit "
        src={logo}
        alt="Farm Tools Logo Image"
      />
      <img
        id="hamburger"
        className="w-[30px] cursor-pointer md:hidden"
        src={hamburger}
        alt="Hamburger Menu"
        onClick={() => setShowNav(!showNav)}
      />

      <ul className="hidden flex-col md:flex md:flex-row md:gap-x-5">
        <li className="text-secondaryColor font-medium md:text-lg">Home</li>
        <li className="text-secondaryColor font-medium md:text-lg">Shop</li>
        <li className="text-secondaryColor font-medium md:text-lg">About</li>
        <li className="text-secondaryColor font-medium md:text-lg">Contact</li>
        <li className="text-secondaryColor font-medium md:text-lg">Blog</li>
      </ul>
      <button className="hidden bg-primaryColor rounded-3xl py-3 px-6 text-white font-bold w-[175px] hover:opacity-80 md:block">
        Join Us
      </button>

      {/* Mobile Navigations */}
      {showNav && (
        <div
          id="sidebar"
          className="absolute top-[49px] text-center py-6 px-4 h-screen bg-white left-0 md:hidden"
        >
          <ul className="flex flex-col gap-y-6">
            <li className="text-secondaryColor font-medium">Home</li>
            <li className="text-secondaryColor font-medium">Shop</li>
            <li className="text-secondaryColor font-medium">About</li>
            <li className="text-secondaryColor font-medium">Contact</li>
            <li className="text-secondaryColor font-medium">Blog</li>
          </ul>
          <button className=" bg-primaryColor rounded-3xl py-3 px-6 text-white font-bold w-[175px] mt-4 hover:opacity-80">
            Join Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
