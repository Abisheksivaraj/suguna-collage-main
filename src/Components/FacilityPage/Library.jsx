import React from "react";
import library from "../../assets/librarypic.jpg";
import spclibrary from "../../assets/sugunalibrary.webp";
import { GiBookCover } from "react-icons/gi";
import { FcRules } from "react-icons/fc";

const Library = () => {
  return (
    <div className="w-full">
      <div className="w-screen  p-4 ">
        <img
          src={library}
          alt=""
          className="blur-sm relative h-[10rem] sm:h-[20rem] md:h-[20rem] lg:h-[20rem] xl:h-[20rem] w-full"
        />
        <h1
          className="absolute top-[5rem] left-[9rem] font-bold text-[1.5rem] sm:top-[9rem] sm:left-[13rem] sm:text-[2.5rem] 
        md:left-[18rem] md:top-[9rem]
        xl:left-[30rem] 
        lg:left-[23rem] lg:top-[9rem] lg:text-[3rem]  
        2xl:left-[37rem] 2xl:top-[7rem] 2xl:text-[5rem] text-[white]"
        >
          LIBRARY
        </h1>
      </div>

      <div className="relative">
        <p
          className="p-4 text-[1.3rem] text-[#ff9637] font-bold
          sm:text-[1.5rem]
          md:text-[1.7rem]  
          lg:text-[2rem]  
          xl:text-[2.5rem] 
          2xl:text-[3rem] "
        >
          Library
        </p>
        <hr
          className="border ml-3 w-[23rem] border-[#1dc1d1] absolute top-11
          sm:w-[38rem] sm:top-12
          md:w-[46rem] md:top-[3.3rem]
          lg:w-[62rem] lg:top-[3.7rem]
          xl:w-[78rem]  xl:top-[4.3rem]
          2xl:w-[93rem] 2xl:top-[5rem]"
        />
      </div>

      <div>
        <p className="w-[25rem] p-4  sm:w-[40rem] md:w-[48rem] lg:w-[64rem] lg:text-[1.5rem] xl:w-[80rem] xl:text-[1.8rem] 2xl:w-[95rem] 2xl:text-[2.5rem]">
          &nbsp; &nbsp; &nbsp;The library department of Suguna Polytechnic
          Collage functions from 8.30am am to 4.30pm during all working days.All
          the Staffs and Students can utilize the library resources. They can
          borrow a book and return it on or before the due date. Bar code
          systems is maintained during issue and return of books.
        </p>
      </div>

      <div>
        <img src={spclibrary} alt="" className="w-full  p-4 rounded-3xl " />
      </div>

      <div className="p-4">
        <p className="sm:w-[40rem] md:w-[48rem] lg:w-[64rem] lg:text-[1.5rem] xl:w-[80rem] xl:text-[1.8rem] 2xl:w-[95rem] 2xl:text-[2.5rem]">
          Our college library has compilation of more than 9270 volumes which
          includes,
        </p>
      </div>

      <div
        className="flex flex-row items-start justify-center text-start  lg:text-[1.5rem]  
          xl:text-[2rem] 
          2xl:text-[2.5rem] "
      >
        <ul className="">
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            Reference Books
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            Text books
          </li>
          <li className="flex justify-center items-center gap-2">
            <GiBookCover />
            Magazines and Journals
          </li>
          <li className="flex justify-center items-center gap-2">
            <GiBookCover />
            Magazines and Journals
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            Study Materials
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            Lab Manuals
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            Back up Volumes
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            CD’S
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            Question Banks
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover />
            News Paper
          </li>
        </ul>
      </div>

      <div>
        <p
          className="p-4  lg:text-[1.5rem]  
          xl:text-[2rem] 
          2xl:text-[2.5rem] "
        >
          All the books are classified and arranged as per the DDC (Dewey
          Decimal Classification).
        </p>
      </div>

      <div>
        <p
          className=" p-4 text-[1rem] sm:text-[1.5rem]
          md:text-[1.7rem]  
          lg:text-[2rem]  
          xl:text-[2.5rem] 
          2xl:text-[3rem] text-[#ff9637] font-bold"
        >
          Library Working Hours
        </p>
      </div>

      <div className="flex p-4 items-center gap-8 absolute top-[73rem] sm:top-[88rem]  md:top-[92rem]  lg:top-[116rem] lg:text-[1.5rem] xl:top-[142rem] xl:text-[2rem]  2xl:top-[168rem] 2xl:text-[2.5rem]">
        <div>
          <p className="font-bold">Duration</p>
          <span>Monday to Saurday</span>
        </div>
        <div>
          <p className="font-bold">Timings</p>
          <span>8.30am to 4.30pm</span>
        </div>
      </div>

      <div>
        <p
          className="p-4 text-[1rem] absolute
          top-[78rem] text-[#ff9637] font-bold
          sm:text-[1.5rem]
          md:text-[1.7rem]  
          lg:text-[2rem]  
          xl:text-[2.5rem] 
          2xl:text-[3rem] "
        >
          Library General Rules and Regulations
        </p>
      </div>

      <div
        className=" absolute
          top-[81rem] p-4 "
      >
        <ul className="flex flex-col items-start justify-start gap-5">
          <li>
            <FcRules />
          </li>
          <li>
            <FcRules />
          </li>
          <li>
            <FcRules />
          </li>
          <li>
            <FcRules />
          </li>
          <li>
            <FcRules />
          </li>
          <li>
            <FcRules />
          </li>
          <li>
            <FcRules />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Library;
