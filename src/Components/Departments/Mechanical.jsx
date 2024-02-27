import React from "react";
import mechpage from "../../assets/Mechanical/page1.jpg";
import lab from "../../assets/Mechanical/lab.jpg";

import Christo from "../../assets/Mech-staff/Christo C.png";
import Aravindhan from "../../assets/Mech-staff/Aravindhan.png";
import Ayyandurai from "../../assets/Mech-staff/AYYANDURAI K.png";
import Baskar from "../../assets/Mech-staff/Baskar S.png";
import Gopinath from "../../assets/Mech-staff/Gopinath S.png";
import Keerthana from "../../assets/Mech-staff/KEERTHANA S.png";
import Saravanan from "../../assets/Mech-staff/Saravanan K.png";

const Mechanical = () => {
  return (
    <div className="p-4">
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
          Our Vision
        </h1>
        <p className="p-4 text-[16px] absolute top-8 w-[103%]">
          &nbsp; &nbsp; &nbsp; Our Vision is Towards a Global Knowledge Hub,
          striving continuously in pursuit of excellence in Mechanical
          Engineering Education, Entrepreneurship and Innovation.
        </p>
      </div>

      <div className="w-full absolute top-[38rem]">
        <h1 className="p-4 text-[#ff9637] mb-[-1rem] text-[1rem] font-bold text-center underline">
          Our Mission
        </h1>
        <p className="p-4 text-[16px] absolute top-8 w-[103%]">
          &nbsp; &nbsp; &nbsp; To impart total quality education through
          effective hi-tech teaching-learning techniques and
          department-industries collaboration. To mold the young dynamic
          potential minds to emerge as full-fledged future professionals so as
          to achieve top ten ranking status in the national level. To achieve
          international standards to fulfill the Government’s “Make In India”
          industrial policy through innovation and research.
        </p>
      </div>

      <div className="absolute top-[55rem]">
        <div className="\">
          <h1 className="p-4 text-[#ff9637] text-[1rem] font-bold text-center underline">
            Lab Facilities
          </h1>
        </div>
        <div>
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
      </div>

      <div className="absolute top-[90rem]">
        <div className="grid grid-cols-3 grid-rows-5 gap-8">
          <div className="col-start-2 mt-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg">
            <img src={Christo} alt="" className="h-[35rem] w-[40rem]" />
            <p className="text-center text-[2rem] font-medium">Christo.C</p>
            <span className="text-center p-7 text-[2rem] font-semibold">
              Head Of The Department
            </span>
          </div>
          <div className="row-start-2  mt-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg">
            <img src={Aravindhan} alt="" />
          </div>
          <div className="row-start-2  mt-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg"></div>
          <div className="row-start-2  mt-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg"></div>
          <div className="col-start-3 row-start-3  ml-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg">
            <img src={Baskar} alt="" />
          </div>
          <div className="col-start-2 row-start-3  mt-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg">
            <img src={Gopinath} alt="" />
          </div>
          <div className="col-start-1 row-start-3  mt-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg">
            <img src={Keerthana} alt="" />
          </div>
          <div className="row-start-4  mt-[-8rem] h-[30rem] w-[28rem] bg-slate-400 rounded-lg">
            <img src={Saravanan} alt="" />
          </div>
          <div className="col-start-3 row-start-4  h-[30rem] w-[28rem] bg-slate-400 rounded-lg">
            <img src={Ayyandurai} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mechanical;
