import React from "react";
import principal from "../../assets/Principal.png";
import { PiStudentDuotone } from "react-icons/pi";
import { LuMedal } from "react-icons/lu";
import { TEAnimation } from "tw-elements-react";
const PrincipalMsg = () => {
  return (
    <div className="flex items-start overflow-x-hidden">
      <div>
        <TEAnimation
        // animation="[slide-right_1s_ease-in-out]"
        // reset
        // start="onLoad"
        >
          <img
            className="h-[36rem] w-[45rem] mt-[3rem] ml-10 flex-1 rounded-tl-3xl rounded-br-3xl bg-slate-400"
            src={principal}
            alt="no image"
          />
        </TEAnimation>
      </div>

      <div className="flex-2 ml-[3rem] mt-[3rem] w-full">
        <div className=" text-[#f98d2f] text-[1.5rem] font-bold ml-[4rem]">
          Principal Message
        </div>
        <p className="ml-[4rem] font-bold text-[2rem] mt-1">
          Mr.V.Govindarajalu
        </p>
        <div>
          <p className="text-[1rem] text-[gray] w-[30rem] ml-[4rem] mt">
            Knowledge is one’s guide throughout his lifetime. It differentiates
            between good and bad, understand discipline and are common same.
            Teaching is the best profession in the world. It does not stop at
            subjects,practicals or just getting a certificate. It is guiding the
            student to observe and learn. I do not believe in words.I believe in
            action , which would speak for. Suguna Polytechnic College backed
            with Suguna Group of Industries & Institutions is the best place to
            “Explore your Future and achieve your dreams”.
          </p>
        </div>

        <div className="flex justify-around mt-[2rem] w-full">
          <div className="w-[15rem]">
            <PiStudentDuotone className="h-[5rem] w-[5rem] p-3 text-[white] bg-[#f98d2f] rounded-br-3xl rounded-tl-3xl" />
            <br />
            <p className="text-[gray]">
              Suguna Polytechnic College ensures that the students prove
              themselves as good human beings and worthy citizens of our country
              apart from well qualified engineers.
            </p>
          </div>
          <div className="w-[17rem]">
            <LuMedal className="h-[5rem] w-[5rem] text-[white] p-3 bg-[#f98d2f] rounded-br-3xl rounded-tl-3xl" />
            <br />
            <p className="text-[gray]">
              I invite you to experience the unique environment at Suguna
              Polytechnic College which is a blend of tradition and modernity
              and evolving continuously by winning laurels in each and every
              field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMsg;
