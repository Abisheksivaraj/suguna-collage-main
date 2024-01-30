import React from "react";
import Navbar from "../Home/Navbar";
import bg from "../../assets/Department-img/bg.avif";

const Department = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>

      <div className="relative">
        <img
          src={bg}
          alt=""
          className="w-screen bg-[rgba(0,0,0,0.7)] blur-sm"
        />

        <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[3rem] text-[white] font-serif font-bold">
          DEPARTMENTS
        </p>
      </div>
    </div>
  );
};

export default Department;
