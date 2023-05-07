import React from "react";
import logo from '../assets/logoFooter.svg'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center text-center bg-[#011507] px-4 py-5 md:justify-between md:items-start md:text-left md:flex-row md:gap-x-24 lg:gap-x-48 lg:px-20 lg:py-12">
      <div className="mb-12 md:mb-0">
        <img src={logo} alt="FarmT logo" />
      </div>

      <div className="flex flex-col md:justify-between md:flex-row md:gap-x-9 lg:gap-x-[82px]">
        <ul className="flex flex-col gap-y-5 mb-10 md:mb-0">
          <li className="listTitle">About us</li>
          <li className="listLink">Company</li>
          <li className="listLink">Partners</li>
          <li className="listLink">Blog</li>
          <li className="listLink">Company</li>
        </ul>

        <ul className="flex flex-col gap-y-5 mb-10 md:mb-0">
          <li className="listTitle">Customer Care</li>
          <li className="listLink">Customer service</li>
          <li className="listLink">Size guide</li>
          <li className="listLink">Shipping</li>
        </ul>

        <ul className="flex flex-col gap-y-5 mb-10 md:mb-0">
          <li className="listTitle">Contact Us</li>
          <li className="listLink">Address</li>
          <li className="listLink">Mail</li>
          <li className="listLink">Phone</li>
        </ul>

        <ul className="flex flex-col gap-y-5">
          <li className="listTitle">Social Media</li>
          <li className="listLink">Facebook</li>
          <li className="listLink">Twitter</li>
          <li className="listLink">Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
