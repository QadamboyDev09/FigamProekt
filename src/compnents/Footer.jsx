import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Social wrapper.png"

export const Footer = () => {
  return (
    <div className="bg-[#232536]">
      <div className="container mx-24 mx-auto mt-[150px]">
        <div className="flex justify-between py-[30px] text-white">
          {/* 1 web site name */}
          <div>
            <h1 className="text-[40px]">{`{Finsweet`}</h1>
          </div>
          {/* 2 navbar */}
          <div className="flex gap-[40px] items-center">
            <NavLink
              className={
                "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={
                "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              }
              to={"page2"}
            >
              Blog
            </NavLink>
            <NavLink
              className={
                "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              }
              to={"page3"}
            >
              About Us
            </NavLink>
            <NavLink
              className={
                "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#e6ab2d] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              }
              to={"page4"}
            >
              Contact us
            </NavLink>
            <Link
              className={
                "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              }
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="bg-[#333544] p-[50px] flex justify-between">
          <div>
            <h1 className="text-[36px] text-white ">Subscribe to our news letter to get <br /> latest updates and news</h1>
          </div>
          <div className="flex items-center gap-[60px]">
            <div>
              <input  className="border border-[#4C4C4C] rounded-lg bg-[#333544] p-[13px]  w-[330px] outline-none text-white" type="email" placeholder="Enter Your Email" />
            </div>
            <div>
            <button className="text-black py-[8px] bg-[#e6ab2d] px-[30px] hover:bg-white hover:border hover:border-[#e6ab2d] hover:text-[#e6ab2d] transition">
            Subscribe
            </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-[40px]">
          <div>
          <p className="text-[#FFFFFF]">Finstreet 118 2561 Fintown <br />Hello@finsweet.com  020 7993 2905</p>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
