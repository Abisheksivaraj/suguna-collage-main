import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoReorderThree } from "react-icons/io5";
import logo from "../../assets/CollageLogo.png";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="h-[9rem] w-full bg-[WHITE] p-4">
      <div className="w-full flex justify-between">
        <div
          className={`w-full sm:mx-0 sm:w-[100%] sm:px-4 flex items-center justify-between px-10`}
        >
          {/* logo */}
          <div
            className={`w-[50%]] flex ${
              isClicked === true ? "flex-col" : "flex-row"
            } items-center justify-start`}
          >
            <div className="flex">
              <img src={logo} alt="" className="h-[3rem] sm:h-[3rem] mt-5" />
              <div className="font-bold text-[#f98d2f] uppercase flex flex-col justify-center mt-4">
                <p className="text-[1rem] sm:text-[1rem]">Suguna</p>
                <p className="text-[1rem] sm:text-[1rem] text-[#83acb0] font-bold uppercase">
                  Polytechnic College
                </p>
              </div>
            </div>
          </div>

          {/* btn */}
          <div className={`w-[50%] flex items-center justify-center`}>
            <a
              className="text-[10px] py-4 px-3 rounded-tl-3xl rounded-br-3xl text-[white] bg-[#f98d2f] hover:bg-[#83acb0] font-semibold sm:text-[10px]"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUdQIqy8IW6vnzEX5GrmVE6bzUGXEOD0A5Zd4wOLXCwbV4EA/viewform"
            >
              For Admission
            </a>
          </div>
        </div>

        {/* three dash icon */}
        <div
          className={`flex lg:hidden items-start justify-start pt-[1rem] pr-[1px] mr-[2rem] cursor-pointer  `}
        >
          <IoReorderThree
            className="h-[3rem] w-[3rem] text-light_grey border-light_grey lg:hidden"
            onClick={() => setIsClicked(() => (isClicked ? false : true))}
          />
        </div>
      </div>

      {/* nav */}
      <div
        className={`w-[45%] lg:w-[100%] h-[100vh] lg:h-8 lg:flew-row lg:flex bg-[white] transition-all duration-500 ease-in-out rounded-r-md ${
          isClicked ? `flex-col ml-0` : `ml-[-50%] lg:ml-[-100%]`
        } fixed z-10`}
      >
        <div
          className={`navbar-nav flex ${
            isClicked ? `flex-col ml-0` : `hidden`
          } lg:w-auto lg:justify-between lg:flex-row lg:flex lg:items-center items-start cursor-pointer font-extrabold justify-between gap-6  p-4 p-lg-0`}
        >
          <span className="hover:text-[#1DC1D1]">HOME</span>
          <div className="flex flex-row items-center gap-1 ">
            <span className="hover:text-[#1DC1D1]">ABOUTUS</span>
            <RiArrowDropDownLine className="h-8 w-6 hover:text-[#1DC1D1]" />
          </div>
          <div>
            <span className="hover:text-[#1DC1D1]">DEPARTMENTS</span>
            <RiArrowDropDownLine className="h-8 w-6 hover:text-[#1DC1D1]" />
          </div>

          <div className="flex flex-row items-center gap-1 ">
            <span className="hover:text-[#1DC1D1]">FACILITIES</span>
            <RiArrowDropDownLine className="h-8 w-6 hover:text-[#1DC1D1]" />
          </div>
          <span className="hover:text-[#1DC1D1]">ADMISSIONS</span>
          <span className="hover:text-[#1DC1D1]">PLACEMENTS</span>
          <span className="hover:text-[#1DC1D1]">GALLERY</span>
          <span className="hover:text-[#1DC1D1]">CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
