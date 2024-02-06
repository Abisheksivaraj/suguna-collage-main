import React from "react";
import mechpage from "../../assets/Mechanical/page1.jpg";
import lab from "../../assets/Mechanical/lab.jpg";

const Mechanical = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src={mechpage} alt="" className="w-full h-[15rem] p-4" />
        <span className="text-[1rem] p-4 font-extrabold text-[orange]">
          MECHANICAL ENGINEERING
        </span>
      </div>

      <div>
        <img src={lab} alt="" className="w-full p-4" />
      </div>

      <div className="w-full relative">
        <h1 className="p-4 text-[#ff9637] text-[1rem] font-bold text-center underline">
          Course Objectives
        </h1>
        <p className="p-4 text-[16px] absolute top-8 w-[103%]">
          &nbsp; &nbsp; &nbsp; Mechanical engineering is a branch of engineering
          that focuses on the design, analysis, manufacturing, and maintenance
          of mechanical systems. It involves the application of principles from
          physics and materials science to develop products and processes across
          various industries. Mechanical engineers work on a wide range of
          projects, from designing machinery and vehicles to developing heating
          and cooling systems, with a primary emphasis on optimizing efficiency,
          functionality, and safety.
        </p>
      </div>

      <div className="w-full absolute top-[48rem]">
        <h1 className="p-4 text-[#ff9637] mb-[-1rem] text-[1rem] font-bold text-center underline">
          Course Outcomes
        </h1>
        <p className="p-4 text-[16px] absolute top-8 w-[103%]">
          &nbsp; &nbsp; &nbsp; Mechanical engineering is a branch of engineering
          that focuses on the design, analysis, manufacturing, and maintenance
          of mechanical systems. It involves the application of principles from
          physics and materials science to develop products and processes across
          various industries. Mechanical engineers work on a wide range of
          projects, from designing machinery and vehicles to developing heating
          and cooling systems, with a primary emphasis on optimizing efficiency,
          functionality, and safety.
        </p>
      </div>

      <div className="absolute top-[70rem]">
        <div className="\">
          <h1 className="p-4 text-[#ff9637] text-[1rem] font-bold text-center underline">
            Lab Facilities
          </h1>
        </div>
        <ul className="">
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
          <li>Stregth of Material Lab</li>
        </ul>
      </div>

      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Mechanical;
