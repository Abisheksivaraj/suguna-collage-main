import React from "react";
import FooterLogo from "../../assets/CollageLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const FooterPage = () => {
  return (
    <div className="sm:flex sm:flex-col overflow-x-hidden">
      <div className="w-full mt-10 bg-black flex flex-col justify-center">
        <div className="">
          <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto sm:flex sm:flex-col gap-8 px-5 sm:px-8 pt-5 sm:pt-10 pb-0 items-center justify-center">
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-20 h-20 rounded-full"
                src={FooterLogo}
                alt="footer-logo"
              />
              <h1 className="text-white flex flex-col items-center">
                <span className="text-[#ff9637] text-2xl sm:text-4xl border-b-3 border-b-orange-400 ">
                  SUGUNA
                </span>
                <span className="text-[#83acb0] font-medium text-xl sm:text-2xl">
                  POLYTECHNIC COLLEGE
                </span>
              </h1>
            </div>
            <div className="flex gap-6">
              <div className="">
                <FaFacebookF className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaFacebookF>
              </div>
              <div className="">
                <FaTwitter className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaTwitter>
              </div>
              <div className="">
                <FaInstagramSquare className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaInstagramSquare>
              </div>
              <div className="">
                <FaYoutube className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaYoutube>
              </div>
            </div>
          </div>
          <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto sm:p-5">
            <h1 className="text-white text-2xl sm:text-4xl font-bold pb-2">
              Quick Links
            </h1>
            <ul className="text-white text-base sm:text-xl">
              <li className=" hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>About Us
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Awards
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Facilities
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Departments
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Anti-Ragging Committee
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto sm:p-5">
            <ul className="text-white text-base sm:text-xl">
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Admission
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                {" "}
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Scholarship
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Our Recruiters
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Placements
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto sm:p-5">
            <h1 className="text-white text-2xl sm:text-4xl font-bold pb-2">
              Our Institutions
            </h1>
            <ul className="text-white text-base sm:text-xl">
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Suguna College of Arts and Science
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Suguna College of Engineering
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Suguna PIP School
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward />
                  Suguna Innovation Institute
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:flex sm:flex-col sm:gap-5  sm:justify-evenly items-center pb-8">
          <div className="flex flex-col items-center gap-2">
            <IoCall className="text-[#ff9637] text-3xl"></IoCall>
            <div>
              <span className="text-white text-base sm:text-xl">
                +91 8870008623
              </span>
              <br />
              <span className="text-white text-base sm:text-xl">
                +91 9600860934
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <MdEmail className="text-[#ff9637] text-3xl "></MdEmail>
              <div>
                <span className="text-white text-base sm:text-xl">
                  sugunapolytechniccollege@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-[#ff9637] text-3xl" />
              <span className="text-white font-bold text-base sm:text-xl">
                Kalapatti Main Rd, near Vinayaka Temple, GKD Nagar,
              </span>
              <br />
              <span className="text-white text-base sm:text-xl">
                Nehru Nagar West, Coimbatore, Tamil Nadu - 641014
              </span>
            </div>
          </div>
        </div>
        <div className="w-full items-center text-center pt-5 pb-3">
          <span className="text-[#979696] text-[20px]">
            Copyright © 2023 Suguna Polytechnic College
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
