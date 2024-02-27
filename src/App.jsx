import { useState } from "react";
import Homepage from "../src/pages/Homepage";
// import Department from "./Components/Departments/Department";
import Navbar from "./Components/Home/Navbar";
import Mechanical from "./Components/Departments/Mechanical";
import Library from "./Components/FacilityPage/Library";
import "./App.css";
import TransportPage from "./Components/FacilityPage/TransportPage";
import Computer from "./Components/Departments/Computer";
import Automobile from "./Components/Departments/Automobile";
import ECE from "./Components/Departments/ECE";
import EEE from "./Components/Departments/EEE";

function App() {
  return (
    // <Homepage />
    <Mechanical />
    // <Library />
    // <EEE />
    // <ECE/>
  );
}

export default App;
