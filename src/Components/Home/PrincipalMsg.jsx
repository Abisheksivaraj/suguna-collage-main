import React from "react";
import principal from "../../assets/Principal.png";
import { PiStudentDuotone } from "react-icons/pi";
import { LuMedal } from "react-icons/lu";
import { TEAnimation } from "tw-elements-react";
const PrincipalMsg = () => {
  return (
    <div className=" w-[100%] flex justify-start items-start flex-wrap overflow-x-hidden">
      <div className="w-[100%] flex px-12">
        <div className="sm:ml-[-1.5rem] w-[30%] pt-[3.3rem] pl-[0rem]">
          <img
            className="sm:h-[15rem] sm:w-[20rem] h-[15rem] w-[15rem] flex-1 rounded-tl-3xl rounded-br-3xl bg-slate-400"
            src={principal}
            alt="no image"
          />
        </div>

        <div className="sm:ml-8 w-[70%] flex flex-col  pl-[0rem] pt-[3rem]">
          <div className=" text-[#f98d2f] text-[1.5rem] font-bold ">
            Principal Message
          </div>
          <p className=" font-bold text-[2rem] pt-1">Mr.V.Govindarajalu</p>
          <div>
            <p className="sm:w--[10rem] text-[1rem] text-[gray]">
              Knowledge is one’s guide throughout his lifetime. It
              differentiates between good and bad, understand discipline and are
              common same. Teaching is the best profession in the world. It does
              not stop at subjects,practicals or just getting a certificate. It
              is guiding the student to observe and learn. I do not believe in
              words.I believe in action , which would speak for. Suguna
              Polytechnic College backed with Suguna Group of Industries &
              Institutions is the best place to “Explore your Future and achieve
              your dreams”.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-[50rem] sm:flex flex-col items-center  w-[100%] flex justify-between px-12 gap-4 pt-4">
        <div className="sm:flex sm:flex-col sm:items-center  sm:justify-center  w-[100%]">
          <PiStudentDuotone className="sm: h-[5rem] w-[5rem] p-3 text-[white] bg-[#f98d2f] rounded-br-3xl rounded-tl-3xl " />
          <br />
          <p className="sm:flex sm:flex-col sm:items-center  sm:justify-center text-[gray]">
            Suguna Polytechnic College ensures that the students prove
            themselves as good human beings and worthy citizens of our country
            apart from well qualified engineers.
          </p>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center  sm:justify-center w-[100%]">
          <PiStudentDuotone className="h-[5rem] w-[5rem] p-3 text-[white] bg-[#f98d2f] rounded-br-3xl rounded-tl-3xl " />
          <br />
          <p className="text-[gray]">
            Suguna Polytechnic College ensures that the students prove
            themselves as good human beings and worthy citizens of our country
            apart from well qualified engineers.
          </p>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center w-[100%]">
          <LuMedal className="h-[5rem] w-[5rem] text-[white] p-3 bg-[#f98d2f] rounded-br-3xl rounded-tl-3xl" />
          <br />
          <p className="text-[gray]">
            I invite you to experience the unique environment at Suguna
            Polytechnic College which is a blend of tradition and modernity and
            evolving continuously by winning laurels in each and every field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMsg;
