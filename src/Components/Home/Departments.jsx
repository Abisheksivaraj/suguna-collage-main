import React from 'react'
import mech from "../../assets/deptimg/mech11.jpg"
import mechsanwich  from "../../assets/deptimg/mech11.jpg";
import automobile from "../../assets/deptimg/auto.jpg";
import cse from "../../assets/deptimg/cs.jpg";
import ece from "../../assets/deptimg/ECE.jpg";
import eee from "../../assets/deptimg/eee.jpg";
import instrumentation from "../../assets/deptimg/ice.jpg";

const Departments = () => {
  return (
    <div className='overflow-x-hidden'>
      <div>
        <p className="text-center mt-9 font-semibold text-[2rem] text-[#f98d2f]">
          COURSES OFFERED
        </p>
      </div>
      <div>
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          <div className="h-[19rem] w-[25rem] bg-[#a9a8a8] ml-5">
            <p className="text-center mt-2">Mechanical Engineering</p>
            <img src={mech} alt="" className="h-[15rem] ml-10 mt-2" />
          </div>

          <div className="h-[19rem] w-[25rem] bg-[#a9a8a8] ml-5">
            <p className="text-center mt-2">Mechanical Sandwich Engineering</p>
            <img src={mechsanwich} alt="" className="h-[15rem] ml-10 mt-2" />
          </div>

          <div className="h-[19rem] w-[22rem] bg-[#a9a8a8] ml-5">
            <p className="text-center mt-2">Automobile Engineering</p>
            <img src={automobile} alt="" className="h-[15rem] w-[21rem] ml-8" />
          </div>

          <div className="h-[19rem] w-[25rem] bg-[#a9a8a8] ml-5">
            <p className="text-center mt-2">Computer Engineering</p>
            <img src={cse} alt="" className="h-[15rem]" />
          </div>

          <div className="h-[19rem] w-[25rem] bg-[#a9a8a8] ml-5">
            <p className="text-center mt-2">
              Electrical and Electronics Engineering
            </p>
            <img src={eee} alt="" className="h-[15rem] ml-5" />
          </div>

          <div className="h-[19rem] w-[22rem] bg-[#a9a8a8] ml-5">
            <p className="text-center mt-2">
              Electrical and Communication Engineering
            </p>
            <img src={ece} alt="" className="h-[15rem]" />
          </div>

          <div className="h-[19rem] w-[25rem] bg-[#a9a8a8] ml-5">
            <p className="text-center mt-2">
              Instrumentation and Control Engineering
            </p>
            <img src={instrumentation} alt="" className="h-[15rem] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments