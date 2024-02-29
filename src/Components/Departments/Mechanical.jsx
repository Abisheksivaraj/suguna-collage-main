import React from "react";
import mechpage from "../../assets/Mechanical/page1.jpg";
import lab from "../../assets/Mechanical/lab.jpg";

import Christo from "../../assets/Mech-staff/Christo C.png";
import Aravindhan from "../../assets/Mech-staff/Aravindhan.png";
import Santhosh from "../../assets/Mech-staff/santhoshBharathiM.png";
import Baskar from "../../assets/Mech-staff/Baskar S.png";
import Gopinath from "../../assets/Mech-staff/Gopinath S.png";
import Keerthana from "../../assets/Mech-staff/KEERTHANA S.png";
import Saravanan from "../../assets/Mech-staff/Saravanan K.png";
import Jenitaa from "../../assets/Mech-staff/JENITAA M.png";
import Ayyandurai from "../../assets/Mech-staff/ayyandurai K.png";

const Mechanical = () => {
  return (
    <div className="p-4 ">
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
        <p className="p-4 text-[16px] absolute top-8">
          &nbsp; &nbsp; &nbsp; Our Vision is Towards a Global Knowledge Hub,
          striving continuously in pursuit of excellence in Mechanical
          Engineering Education, Entrepreneurship and Innovation.
        </p>
      </div>

      <div className="w-full absolute top-[37rem] md:top-[40rem] lg:top-[44rem] xl:lg:top-[48rem]">
        <h1 className="p-4 text-[#ff9637]  text-[1rem] font-bold text-center underline">
          Our Mission
        </h1>
        <p className="p-4 text-[16px] absolute top-8 ">
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

      <div className="grid grid-cols-3 grid-rows-4 gap-[7.5rem] absolute top-[80rem] h-[auto]  bg-slate-100 p-4">
        <div className="col-start-2 flex items-center flex-col">
          <img
            src={Christo}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Christo.C</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Head Of The Department
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/christo-c-257a6a2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Profile
            </a>
          </button>
        </div>

        <div className="row-start-2 flex items-center flex-col">
          <img
            src={Santhosh}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Santhosh.B</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Lecturer
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/santhoshbharathi-m-39929a2a7p">
              Profile
            </a>
          </button>
        </div>

        <div className="row-start-2 flex items-center flex-col">
          <img
            src={Gopinath}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Gopinath.S</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Lecturer
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/gopinath-s-a709922b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              Profile
            </a>
          </button>
        </div>

        <div className="row-start-2 flex items-center flex-col">
          <img
            src={Aravindhan}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Aravindhan.M</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Lecturer
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/aravindhan-m-1453832b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              Profile
            </a>
          </button>
        </div>

        <div className="row-start-3 flex items-center flex-col">
          <img
            src={Baskar}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Baskar.S</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Lecturer
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/baskar-s-535a6b2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Profile
            </a>
          </button>
        </div>

        <div className="col-start-2 row-start-3 flex items-center flex-col">
          <img
            src={Keerthana}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Keerthana.S</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Lecturer
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/keerthana-s-226b102a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Profile
            </a>
          </button>
        </div>
        <div className="row-start-3 flex items-center flex-col">
          <img
            src={Jenitaa}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Jenitaa.M</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Lecturer
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/keerthana-s-226b102a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Profile
            </a>
          </button>
        </div>

        <div className="col-start-1 row-start-4">
          <img
            src={Saravanan}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Saravanan.K</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Lecturer
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/ayyan-durai-k-a684b02b6?utm_sourcehttps://www.linkedin.com/in/saravanan-k-a23a712b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Profile
            </a>
          </button>
        </div>
        <div className="col-start-3 row-start-4 flex items-center flex-col">
          <img
            src={Ayyandurai}
            alt=""
            className="h-[10rem] w-[20rem] object-contain"
          />
          <p className="pl-3  text-[1rem] font-bold">Ayyandurai.K</p>
          <span className="text-center  text-[1.1rem] font-bold w-full">
            Instructor
          </span>
          <button className="bg-slate-300 p-1 rounded-md">
            <a href="https://www.linkedin.com/in/ayyan-durai-k-a684b02b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Profile
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mechanical;
