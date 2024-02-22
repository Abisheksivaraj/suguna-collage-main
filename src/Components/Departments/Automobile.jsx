import React from "react";
import autoPage from "../../assets/Department-img/auto-page.jpg";
import { GiOnTarget } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { MdOutlinePolicy } from "react-icons/md";
const Computer = () => {
  return (
    <div className="p-4">
      <div className="relative ">
        <img src={autoPage} alt="" className="blur-[2px] w-screen" />
        <span
          className="text-[white] absolute top-[5rem] left-[5rem] font-bold
        sm:top-[9rem] sm:left-[8rem] sm:text-[2rem] 
        md:top-[11rem] md:left-[9rem] md:text-[2.5rem]
        lg:top-[14rem] lg:left-[12rem] lg:text-[3.5rem]
        xl:top-[17rem] xl:left-[16rem] xl:text-[4rem]
        2xl:top-[24rem] 2xl:left-[16rem] 2xl:text-[5.5rem]
        "
        >
          Automobile Engineering
        </span>
      </div>

      <div className="relative w-full">
        <h1 className="pt-4 text-[#f98d2f] text-[1.2rem] font-semibold lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem]">
          About The Department
        </h1>
        <p className="w-[100%] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem]">
          &nbsp; &nbsp; &nbsp;&nbsp;Automobile engineering is a branch of
          engineering that deals with the design, development, manufacturing,
          and maintenance of automobiles. In colleges, automobile engineering
          programs provide students with a strong foundation in mechanical
          engineering principles, combined with specialized courses related to
          automotive technology. Students learn about vehicle design, engine
          components, vehicle dynamics, automotive electronics, and
          manufacturing processes. The curriculum often includes hands-on
          training in automotive workshops and laboratories, where students work
          with tools and equipment used in the automotive industry. Automobile
          engineering programs in colleges also focus on emerging technologies
          such as electric and hybrid vehicles, autonomous driving systems, and
          sustainable automotive solutions. Graduates of automobile engineering
          programs are well-equipped to pursue careers in automobile
          manufacturing companies, automotive design firms, research
          organizations, and government agencies related to transportation.
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
            &nbsp;&nbsp; “To be a premier department in Automobile engineering
            and reach the highest academic level in the field of Automobile
            Engineering by imparting knowledge, continuously enhancing Research
            & Development activities, supporting industries through consultancy
            programme and providing the nation with high quality engineers.”
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
            &nbsp;&nbsp; " To prepare students excel in their chosen professions
            by offering high quality education in automobile engineering with
            fundamental knowledge, interdisciplinary problem solving skills and
            confidence required. To provide supportive and diverse environment
            that encourage students to achieve the best of their abilities to be
            innovators or job providers."
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
