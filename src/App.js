import React,{useEffect} from "react";
import "./App.css";
import "antd/dist/antd.css";
import "aos/dist/aos.css"
import 'animate.css/animate.min.css';
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import Badges from "./components/Badges";
import Experience from "./components/Experience";
import Tasks from "./components/Tasks";
import Section3 from "./components/Section3";
import Section1 from "./components/Section1";
import Aos from "aos";
// import Test from "./assets/test/Repeat Grid 3.svg";
// import './assets/font/static/Inter-Regular.ttf'


function App() {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);



  return (
    <React.Fragment>
      <Navbar />
      <GetStarted />
      {/* <img */}
      {/* src={Test} */}
      {/* alt="test" */}
      {/* /> */}
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
