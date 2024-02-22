import React from "react";
import csePage from "../../assets/Department-img/cse-page.jpg";
import { GiOnTarget } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { MdOutlinePolicy } from "react-icons/md";
const Computer = () => {
  return (
    <div className="p-4">
      <div className="relative ">
        <img src={csePage} alt="" className="blur-[2px] w-screen" />
        <span
          className="text-[white] absolute top-[4rem] left-[6rem] font-bold
        sm:top-[7rem] sm:left-[8rem] sm:text-[2rem] 
        md:top-[8rem] md:left-[9rem] md:text-[2.5rem]
        lg:top-[10rem] lg:left-[14rem] lg:text-[3.5rem]
        xl:top-[13rem] xl:left-[18rem] xl:text-[4rem]
        2xl:top-[16rem] 2xl:left-[20rem] 2xl:text-[5.5rem]
        "
        >
          Computer Engineering
        </span>
      </div>

      <div className="relative w-full">
        <h1 className="pt-4 text-[#f98d2f] text-[1.2rem] font-semibold lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem]">
          About The Department
        </h1>
        <p className="w-[100%] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem]">
          &nbsp; &nbsp; &nbsp;&nbsp;Computer engineering is a field of study
          that combines principles of electrical engineering and computer
          science to design, develop, and manage computer systems and other
          technological devices. In colleges, computer engineering programs
          typically offer a comprehensive curriculum that covers both hardware
          and software aspects of computing. Students learn about digital
          systems, computer architecture, programming languages, algorithms, and
          software development. They also gain practical experience through
          laboratory exercises, projects, and internships. Computer engineering
          programs in colleges aim to prepare students for careers in industries
          such as software development, hardware design, telecommunications, and
          robotics, among others. The field of computer engineering is dynamic
          and constantly evolving, requiring students to stay updated with the
          latest technologies and trends.
        </p>
      </div>

      <div
        className="w-full grid grid-row-3 grid-rows-1 gap-10 relative pt-5
      md:grid md:grid-cols-3 md:grid-rows-1 md:gap-5 p-4"
      >
        <div>
          <div className="">
            <GiOnTarget className=" h-[3rem] w-12 bg-[#f98d2f] rounded-tl-lg rounded-br-lg  p-2 text-[white]" />
            <h1 className="text-[1.2rem] font-semibold text-[#f98d2f] pt-1 lg:text-[2rem]">
              Vision
            </h1>
          </div>
          <p className="md:text-[16px] md:w-[100%] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]">
            &nbsp;&nbsp; We, at Suguna Polytechnic College will impart
            futuristic Technical Education and include high moral standards and
            discipline to develop technologically superior and ethically strong
            students, who will contribute to the prosperity of the society and
            the nation .
          </p>
        </div>
        <div>
          <div className="">
            <GiAchievement className=" h-[3rem] w-12 bg-[#f98d2f] rounded-tl-lg rounded-br-lg  p-2 text-[white]" />
            <h1 className="text-[1.2rem] font-semibold text-[#f98d2f] pt-1 lg:text-[2rem]">
              Mission
            </h1>
          </div>
          <p className="md:text-[16px] w-[100%] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]">
            &nbsp;&nbsp; Our Mission is to Educate and import Technical
            Knowledge to Students from all Sections of Society, with special
            focus on these rural area, so that they become enlightened
            individuals, thereby improving the living standard of their families
            and Society.
          </p>
        </div>
        <div>
          <div className="">
            <MdOutlinePolicy className=" h-[3rem] w-12 bg-[#f98d2f] rounded-tl-lg rounded-br-lg  p-2 text-[white]" />
            <h1 className="text-[1.2rem] font-semibold text-[#f98d2f] pt-1 lg:text-[2rem]">
              Quality Policy
            </h1>
          </div>
          <p className="md:text-[16px] w-[100%] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]">
            &nbsp;&nbsp; Suguna polytechnic college is committed impart quality
            technical education in the field of Engineering. The College stands
            for Academic Excellence, Good Discipline, Development of kills and
            Character formation of its Students to enable them serve the so
            society with commitments.
          </p>
        </div>
      </div>

      {/* <div>
        <GiOnTarget />
      </div> */}
    </div>
  );
};

export default Computer;
