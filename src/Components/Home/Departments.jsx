// import React from "react";
// import mech from "../../assets/deptimg/mech11.jpg";
// import mechsanwich from "../../assets/deptimg/mech.jpg";
// import automobile from "../../assets/deptimg/auto.jpg";
// import cse from "../../assets/deptimg/cs.jpg";
// import ece from "../../assets/deptimg/ECE.jpg";
// import eee from "../../assets/deptimg/eee.jpg";
// import instrumentation from "../../assets/deptimg/ice.jpg";

// const Departments = () => {
//   return (
//     <div>
//       <div>
//         <p className="text-center mt-9 font-semibold text-[2rem] underline text-[#f98d2f]">
//           COURSES OFFERED
//         </p>
//       </div>
//       <div>
//         <div className="grid gap-x-10 gap-y-12 grid-cols-3 mt-5 ">
//           <div className="h-[18rem] w-[22rem] bg-[#a9a8a8] ml-10 rounded-[1rem] relative">
//             <p className="text-center mt-2 font-semibold text-[1.2rem]">
//               Mechanical Engineering
//             </p>
//             <div className="flex flex-col items-center justify-center absolute top-0 left-0 h-[100%] w-[100%] bg-[#dddcdc] opacity-[0.3s] rounded-[1rem] transition-[0.3s] hover:opacity-1">
//               <button className="transition-0.3s transform:translate-x-[-20px]">
//                 <p className="border-solid border-2 border-[#efceb1] text-[#f98d2f] font-semibold text-[1.2rem] hover:bg-[#f98d2f]  hover:text-[white] rounded-lg p-1">
//                   READ MORE
//                 </p>
//               </button>
//             </div>

//             <img
//               src={mech}
//               alt=""
//               className="h-[15rem] w-[21rem] ml-2 rounded-[1rem]"
//             />
//           </div>

//           <div className="h-[18rem] w-[22rem] bg-[#a9a8a8] ml-8 rounded-[1rem]">
//             <p className="text-center mt-2 font-semibold text-[1.2rem]">
//               Mechanical Sandwich Engineering
//             </p>
//             <img
//               src={mechsanwich}
//               alt=""
//               className="h-[15rem] w-[21rem] ml-2 rounded-[1rem]"
//             />
//           </div>

//           <div className="h-[18rem] w-[22rem] bg-[#a9a8a8] ml-5 rounded-[1rem]">
//             <p className="text-center mt-2 font-semibold text-[1.2rem]">
//               Automobile Engineering
//             </p>
//             <img
//               src={automobile}
//               alt=""
//               className="h-[15rem] w-[21rem] ml-2 rounded-[1rem]"
//             />
//           </div>

//           <div className="h-[18rem] w-[22rem] bg-[#a9a8a8] ml-10 rounded-[1rem]">
//             <p className="text-center mt-2 font-semibold text-[1.2rem]">
//               Computer Engineering
//             </p>
//             <img
//               src={cse}
//               alt=""
//               className="h-[15rem] w-[21rem] ml-2 rounded-[1rem]"
//             />
//           </div>

//           <div className="h-[18rem] w-[23rem] bg-[#a9a8a8] ml-6 rounded-[1rem]">
//             <p className="text-center mt-2 font-semibold text-[1.2rem]">
//               Electrical and Electronics Engineering
//             </p>
//             <img
//               src={eee}
//               alt=""
//               className="h-[15rem] w-[22rem] ml-2 rounded-[1rem]"
//             />
//           </div>

//           <div className="h-[18rem] w-[22rem] bg-[#a9a8a8] ml-5 rounded-[1rem]">
//             <p className="text-center mt-2 font-semibold text-[1.2rem]">
//               Electrical and Communication Engineering
//             </p>
//             <img
//               src={ece}
//               alt=""
//               className="h-[13rem] w-[21rem] ml-2 rounded-[1rem]"
//             />
//           </div>

//           <div className="h-[18rem] w-[25rem] bg-[#a9a8a8] ml-[28rem] rounded-[1rem] overflow-hidden ">
//             <p className="text-center mt-2 font-semibold text-[1.2rem] ">
//               Instrumentation and Control Engineering
//             </p>
//             <img
//               src={instrumentation}
//               alt=""
//               className="h-[15rem] w-[23rem] ml-4 rounded-[1rem]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Departments;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mech from "../../assets/deptimg/mech11.jpg";
import mechsanwich from "../../assets/deptimg/mech.jpg";
import automobile from "../../assets/deptimg/auto.jpg";
import cse from "../../assets/deptimg/cs.jpg";
import ece from "../../assets/deptimg/ECE.jpg";
import eee from "../../assets/deptimg/eee.jpg";
import instrumentation from "../../assets/deptimg/ice.jpg";

const Departments = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="mt-[3rem] ">
      <p className="text-center mt-9 font-semibold text-[2rem] underline text-[#f98d2f]">
        COURSES OFFERED
      </p>
      <Carousel
        className="h-[22rem] w-screen bg-[#fffbf6] flex cursor-pointer mt-5"
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1500}
        autoPlay={true}
      >
        <div className="relative">
          <img
            src={mech}
            alt=""
            className="h-[13rem] w-[20rem] ml-3 rounded-[1rem]  scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="ml-11 mt-7 font-semibold text-[1.2rem]">
            Mechanical Engineering
          </p>
        </div>

        <div className="relative ">
          <img
            src={mechsanwich}
            alt=""
            className="h-[13rem] w-[20rem] ml-2 rounded-[1rem]  scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="ml-3 mt-7 font-semibold text-[1.2rem]">
            Mechanical Sandwich Engineering
          </p>
        </div>

        <div className="relative ">
          <img
            src={automobile}
            alt=""
            className="h-[13rem] w-[20rem] ml-2 rounded-[1rem]  scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="ml-[4rem] mt-7 font-semibold text-[1.2rem]">
            Automobile Engineering
          </p>
        </div>

        <div className="relative">
          <img
            src={cse}
            alt=""
            className="h-[13rem] w-[20rem] ml-2 rounded-[1rem]  scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="ml-[4rem] mt-7 font-semibold text-[1.2rem]">
            Computer Engineering
          </p>
        </div>

        <div className="relative ">
          <img
            src={ece}
            alt=""
            className="h-[13rem] w-[20rem] ml-10 rounded-[1rem]  scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="mr-[2rem] mt-6 font-semibold text-[1.2rem]">
            Electrical and Communication Engineering
          </p>
        </div>

        <div className="relative ">
          <img
            src={eee}
            alt=""
            className="h-[13rem] w-[20rem] ml-10 rounded-[1rem]  scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="ml-6 mt-7 font-semibold text-[1.2rem]">
            Electrical and Electronics Engineering
          </p>
        </div>

        <div className="relative">
          <img
            src={instrumentation}
            alt=""
            className="h-[13rem] w-[20rem] ml-7 rounded-[1rem]  scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="ml-1 mt-7 font-semibold text-[1.2rem]">
            Instrumentation and Control Engineering
          </p>
        </div>

        {/* <div className="relative ">
          <img src={img8} alt="" className="w-screen h-[600px]" />
        </div>

        <div className="relative ">
          <img src={img9} alt="" className="w-screen h-[600px]" />
        </div> */}
      </Carousel>
    </div>
  );
};

export default Departments;
