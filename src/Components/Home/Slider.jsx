import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="mt-[3rem]">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2500}
        autoPlay={true}
      >
        <div className="relative">
          <img src={img2} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative ">
          <img src={img1} alt="" className=" sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative ">
          <img src={img3} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative">
          <img src={img4} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative ">
          <img src={img5} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative ">
          <img src={img6} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative">
          <img src={img7} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative ">
          <img src={img8} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>

        <div className="relative ">
          <img src={img9} alt="" className="sm:h-[300px] w-screen h-[600px]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
