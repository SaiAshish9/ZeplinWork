import React,{useEffect,Suspense,lazy} from "react";
import "./App.css";
import "antd/dist/antd.css";
import "aos/dist/aos.css"
import 'animate.css/animate.min.css';
import Aos from "aos";
import "./assets/fonts/Inter-Regular.ttf"
import "./assets/fonts/Inter-SemiBold.ttf";
import "./assets/fonts/Inter-Bold.ttf";
import "./assets/fonts/Inter-Light.ttf";
import "./assets/fonts/Inter-ExtraLight.ttf";

const Navbar=lazy(()=> import("./components/Navbar"))
const GetStarted =lazy(()=>import("./components/GetStarted"))
const Footer = lazy(()=> import("./components/Footer"))
const JoinUs=lazy(()=>import("./components/JoinUs"))
const Badges =lazy(()=> import("./components/Badges"))
const Experience =lazy(()=> import("./components/Experience"))
const Tasks =lazy(()=>import("./components/Tasks"))
const Section3 =lazy(()=>import("./components/Section3")) 
const Section1 =lazy(()=>import("./components/Section1"))
// import Test from "./assets/test/Repeat Grid 3.svg";
// import './assets/font/static/Inter-Regular.ttf'




function App() {

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);



  return (
    <Suspense fallback={<div></div>}>
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
    </Suspense>
  );
}

export default App;
