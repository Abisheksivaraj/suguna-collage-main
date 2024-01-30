import React from "react";
import FooterLogo from "../../assets/CollageLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa";
import { IoCall, IoIosArrowForward } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const FooterPage = () => {
  return (
    <div className="sm:flex sm:flex-col overflow-x-hidden">
      <div className="w-full mt-10 bg-black flex flex-col justify-start">
        <div className="">
          <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto sm:flex sm:flex-col gap-8 px-5 sm:px-8 pt-5 sm:pt-10 pb-0 items-center">
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
                  <IoIosArrowForward></IoIosArrowForward>Awards
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Facilities
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Departments
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Anti-Ragging Committee
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
                  <IoIosArrowForward></IoIosArrowForward>Admission
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                {" "}
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Scholarship
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Our Recruiters
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Placements
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Photo Gallery
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
                  <IoIosArrowForward></IoIosArrowForward>Suguna College of Arts
                  and Science
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Suguna College of
                  Engineering
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
                  <IoIosArrowForward></IoIosArrowForward>Suguna Innovation
                  Institute
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:flex sm:justify-evenly items-center pb-10">
          <div className="flex justify-around items-center gap-2">
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
            <div className="flex items-center gap-2">
              <MdEmail className="text-[#ff9637] text-3xl "></MdEmail>
              <div>
                <span className="text-white text-base sm:text-xl">
                  sugunapolytechniccollege@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/maps/place/Suguna+Polytechnic+College/@11.0509439,77.0322591,15z/data=!4m6!3m5!1s0x3ba857bbffffffff:0xfaed96bd33545bc0!8m2!3d11.0509439!4d77.0322591!16s%2Fg%2F1tl7m4b8?entry=ttu">
              <FaLocationDot className="text-[#ff9637] text-3xl"></FaLocationDot>
            </a>
            <div className="items-center">
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
