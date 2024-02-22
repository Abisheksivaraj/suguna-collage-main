import React from "react";
import eeePage from "../../assets/Department-img/eee-page.jpg";
import { GiOnTarget } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { MdOutlinePolicy } from "react-icons/md";
const Automobile = () => {
  return (
    <div className="p-4">
      <div className="relative ">
        <img src={eeePage} alt="" className="blur-[6px] w-screen" />
        <span
          className="text-[white] absolute top-[6rem] left-[5rem] font-bold
        sm:top-[7rem] sm:left-[8rem] sm:text-[2rem] 
        md:top-[8rem] md:left-[9rem] md:text-[2.5rem]
        lg:top-[10rem] lg:left-[12rem] lg:text-[3.5rem]
        xl:top-[17rem] xl:left-[18rem] xl:text-[4rem]
        2xl:top-[20rem] 2xl:left-[20rem] 2xl:text-[5.5rem]
        "
        >
          Electrical and Electronic Engineering
        </span>
      </div>

      <div className="relative w-full">
        <h1 className="pt-4 text-[#f98d2f] text-[1.2rem] font-semibold lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem]">
          About The Department
        </h1>
        <p className="w-[100%] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem]">
          &nbsp; &nbsp;Electrical and Electronic Engineering (EEE) is a
          discipline that deals with the study and application of electricity,
          electronics, and electromagnetism. In colleges, EEE programs provide
          students with a strong foundation in both electrical engineering and
          electronic engineering principles. Students learn about electrical
          circuits, power systems, control systems, electronics, digital
          systems, and telecommunications. The curriculum often includes courses
          in mathematics, physics, and computer science to support the study of
          these topics. EEE programs in colleges also focus on practical skills
          development, with laboratory experiments, design projects, and
          internships playing a crucial role in the learning process. Graduates
          of EEE programs are equipped to pursue careers in a wide range of
          industries, including power generation and distribution,
          telecommunications, electronics manufacturing, and automation. They
          may work as electrical engineers, electronics engineers, control
          engineers, or telecommunications engineers, among other roles,
          contributing to the development of new technologies and systems that
          power our modern world.
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
            &nbsp;&nbsp; Department of Electrical and Electronics Engineering
            aspires to be a recognized centre for imparting the state of the art
            knowledge in the field of Electrical and Electronics Engineering for
            the development of the society.
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
            &nbsp;&nbsp; The mission of Department of Electrical and Electronics
            Engineering is to impart application oriented technical education to
            1. Develop students to meet industry requirements 2. Evolve
            innovative applications of technology 3. Create career advancement
            opportunities 4. Disseminate the knowledge and skills acquired
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

export default Automobile;
