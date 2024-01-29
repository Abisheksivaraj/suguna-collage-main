import React from 'react'
import vision from "../../assets/vision.jpg"

const VisionMission = () => {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <div>
        <img
          src={vision}
          className="sm:h-[25rem] sm:w-[37rem]  sm:mt-[10rem] sm:opacity-75 sm:relative"
          alt=""
        />
        <div>
          <div className="border-l-2"></div>
          <p className="sm:h-[9rem] sm:p-3 sm:w-[18rem] sm: bg-white sm:absolute sm:top-[117rem] sm:left-[20rem] sm:rounded-tl-3xl sm:rounded-br-3xl sm:opacity-85 sm:font-semibold sm:text-[gray]">
            “Education is the most powerful weapon which you can use to change
            the world”
            <br />
            <br /> <p className="text-[black]">- Nelson Mandela</p>
          </p>
        </div>
      </div>

      <div className="sm:flex sm:flex-col sm:w-full  sm:mt-[3rem]">
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center w-[100%]">
          <p className="text-[#f98d2f] text-[1.5rem] font-bold">Our Vision</p>
          <p className=" w-[35rem] text-[gray]">
            In Suguna Polytechnic College we impart futuristic technical
            education and inculcate high moral standards and discipline through
            our dedicated faculty, thus develop technologically superior and
            ethically stronger students, who contribute to the prosperity of the
            society and the Nation.
          </p>
        </div>
        <br />
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center w-[100%]">
          <p className="text-[#f98d2f] text-[1.5rem] font-bold"> Our Mission</p>
          <p className="w-[35rem] text-[gray]">
            Our Mission is to educate and impart technical knowledge to students
            from all sections of society, with special focus on those from rural
            areas, so that they become enlightened individuals, thereby
            improving the living standard of their families and society.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisionMission