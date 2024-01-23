import React from "react";
import Navbar from "../Components/Home/Navbar";
import Slider from "../Components/Home/Slider";
import PrincipalMsg from "../Components/Home/PrincipalMsg";
import VisionMission from "../Components/Home/VisionMission";
import Departments from "../Components/Home/Departments";
import Facilities from "../Components/Home/Facilities";
import Recruiters from "../Components/Home/Recruiters";
import FooterPage from "../Components/Home/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <PrincipalMsg />
      <VisionMission />
      <Departments />
      <Facilities />
      <Recruiters />

      <FooterPage />
    </div>
  );
};

export default Homepage;
