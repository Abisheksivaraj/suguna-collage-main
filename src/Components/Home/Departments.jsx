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
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="mt-[3rem]">
      <p className="text-center mt-9 font-semibold text-[2rem] underline text-[#f98d2f]">
        COURSES OFFERED
      </p>
      <Carousel
        className="min-h-[30rem] w-[100%] bg-[#fffbf6] cursor-pointer"
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1500}
        autoPlay={false}
      >
        <div className="relative w-[100%] flex flex-col justify-between items-center">
          <img
            src={mech}
            alt=""
            className="h-auto w-[20rem] rounded-[1rem] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]"
          />
          <p className="font-semibold text-[1.2rem]">Mechanical Engineering</p>
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
