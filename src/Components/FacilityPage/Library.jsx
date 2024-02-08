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
        <p className="w-[25rem] p-4  sm:w-[40rem] md:w-[48rem] lg:w-[64rem] lg:text-[1.5rem] xl:w-[80rem] xl:text-[1.3rem] 2xl:w-[95rem] 2xl:text-[2.5rem]">
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
        <p className="sm:w-[40rem] md:w-[48rem] lg:w-[64rem] lg:text-[1.5rem] xl:w-[80rem] xl:text-[1.3rem] 2xl:w-[95rem] 2xl:text-[2.5rem]">
          Our college library has compilation of more than 9270 volumes which
          includes,
        </p>
      </div>

      <div
        className="flex flex-row items-start justify-center text-start  lg:text-[1.5rem]  
          xl:text-[1.3rem] 
          2xl:text-[2.5rem] "
      >
        <ul className="">
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Reference Books
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Text books
          </li>
          <li className="flex justify-center items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Magazines and Journals
          </li>
          <li className="flex justify-center items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Magazines and Journals
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Study Materials
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Lab Manuals
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Back up Volumes
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            CD’S
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            Question Banks
          </li>
          <li className="flex justify-start items-center gap-2">
            <GiBookCover className="w-6 h-6" />
            News Paper
          </li>
        </ul>
      </div>

      <div>
        <p
          className="p-4  lg:text-[1.5rem]  
          xl:text-[1.3rem] 
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
          xl:text-[2rem] 
          2xl:text-[3rem] text-[#ff9637] font-bold"
        >
          Library Working Hours
        </p>
      </div>

      <div className="flex p-4 items-center gap-8 absolute top-[73rem] sm:top-[88rem]  md:top-[92rem]  lg:top-[116rem] lg:text-[1.5rem] xl:top-[120rem] xl:text-[1.3rem]  2xl:top-[168rem] 2xl:text-[2.5rem]">
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
            sm:text-[1.5rem]  sm:top-[93rem]
          md:text-[1.7rem] md:top-[97rem]  
          lg:text-[2rem]  lg:top-[122rem] 
          xl:text-[2rem]  xl:top-[127rem]
          2xl:text-[3rem]  2xl:top-[178rem]"
        >
          Library General Rules and Regulations
        </p>
      </div>

      <div
        className=" absolute
          top-[81rem] p-4  
          sm:text-[1rem]  sm:top-[96rem]
          md:text-[1.1rem] md:top-[100rem]  
          lg:text-[1.5rem]  lg:top-[126rem] 
          xl:text-[1.5rem]  xl:top-[130rem]
          2xl:text-[2.5rem]  2xl:top-[183rem]"
      >
        <ul className="flex flex-col items-start justify-start gap-5">
          <li className="flex justify-start items-center gap-2">
            <FcRules className="flex-shrink-0 w-[1rem] h-[1rem]" />
            <span>The library will function from 8.30am – 4.30pm</span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <FcRules className="flex-shrink-0 w-[1rem] h-[1rem]" />
            <span>
              Use of Mobile phones is not permitted inside the Library premises.
            </span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <FcRules className="flex-shrink-0 w-[1rem] h-[1rem] flex-grow" />
            <span>
              Users are not allowed to carry eatables/drinks inside the Library
              premises.
            </span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <FcRules className="flex-shrink-0 w-[1rem] h-[1rem]" />
            <span>
              Readers should observe strict silence inside the Library.
            </span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <FcRules className="flex-shrink-0 w-[1rem] h-[1rem]" />
            <span>
              {" "}
              Library books are not allowed to taken outside without proper
              entry and reservation
            </span>
          </li>
          <li className="flex justify-start items-center gap-2">
            <FcRules className="flex-shrink-0 w-[1rem] h-[1rem] " />
            <span>
              The library will be closed on all sundays and other government
              holidays.
            </span>
          </li>
          <li className="flex justify-start items-start gap-2">
            <FcRules className="w-[1rem] h-[1rem] flex-shrink-0 mt-2" />
            <span>
              No dues should be obtained from the library at the end of every
              academic Semester to ensure that books are returned properly
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Library;
