import React from "react";
import transport from "../../assets/transport.jpg";

const TransportPage = () => {
  return (
    <div className="p-4 relative">
      <div>
        <img src={transport} alt="" className="w-full" />
        <span
          className="absolute top-[3rem] left-[9rem] font-bold text-[1.5rem] sm:top-[4rem] sm:left-[13rem] sm:text-[2.5rem] 
        md:left-[18rem] md:top-[6rem]
          
        lg:left-[25rem] lg:top-[6rem] 
        xl:left-[32rem]  lg:text-[5rem]  
        2xl:left-[31rem] 2xl:top-[9rem] 2xl:text-[7rem] text-[white]"
        >
          Transport
        </span>
      </div>
    </div>
  );
};

export default TransportPage;
