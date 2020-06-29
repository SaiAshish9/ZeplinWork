import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import Badges from "./components/Badges";
import Test from "./assets/svgs/test";
import Experience from "./components/Experience";
import Tasks from "./components/Tasks";
import Section3 from "./components/Section3";
import Section1 from "./components/Section1";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <GetStarted />
      {/* <Test/> */}
      <Section1/>
      <Tasks />
      <Section3 />
      <Experience />
      <Badges />
      <JoinUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
