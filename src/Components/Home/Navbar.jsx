import React from "react";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/CollageLogo.png";

const Navbar = () => {
  return (
    <div>
      <div className=" h-[9rem] w-[100vw] bg-[#fff]">
        <div
          className=" sm:mx-0 sm:w-[100%] sm:px-4  flex items-center justify-between mx-10"
          id="clg-name"
        >
          <div className="w-[25rem] flex items-center justify-start">
            <img src={logo} alt="" className=" sm:h-[3rem] h-[5.5rem] mt-5" />
            <div className="text-[1.25rem] font-bold text-[#f98d2f] uppercase flex flex-col justify-center mt-4">
              <p className=" sm:text-[10px]  text-[1.5rem]">Suguna</p>
              <p className=" sm:text-[10px]  text-[1.15rem] text-[#83acb0] font-bold uppercase">
                Polytechnic College
              </p>
            </div>
          </div>

          <div>
            <a
              className="sm:text-[10px] py-4 px-9 rounded-tl-3xl rounded-br-3xl text-[white] bg-[#f98d2f] hover:bg-[#83acb0] font-semibold"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUdQIqy8IW6vnzEX5GrmVE6bzUGXEOD0A5Zd4wOLXCwbV4EA/viewform"
            >
              For Admission
            </a>
          </div>
        </div>

        <div className="flex  items-center justify-around mt-5 bg-[#f98d2f] h-[4rem]">
          <ul className="flex gap-10 font-semibold text-[18px]">
            <li className=" text-[white] hover:text-[black]">
              <a href="">Home</a>
            </li>
            <li className=" text-[white] hover:text-[black]">
              <a href="">About</a>
            </li>
            <li className=" text-[white] hover:text-[black]">
              <a href="">Department</a>
            </li>
            <li className="flex items-center text-[white]  hover:text-[black]">
              <a href="">Facilities</a>
            </li>
            <li className=" text-[white] hover:text-[black]">
              <a href="">Admissions</a>
            </li>
            <li className=" text-[white] hover:text-[black]">
              <a href="">Placements</a>
            </li>
            <li className=" text-[white] hover:text-[black]">
              <a href="">Gallery</a>
            </li>
            {/* <li className="hover:text-[#f98d2f]">COURSES</li> */}
            <li className="flex items-center text-[white]  hover:text-[black]">
              {/* PAGES <FaAngleDown className="mt-1" /> */}
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
