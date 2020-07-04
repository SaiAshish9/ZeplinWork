import React, { Suspense, Fragment, lazy } from "react";
// import Test from "../../../assets/images1/Path 4121.svg";



const Navbar = lazy(() => import("../../../components/desktop/CompanyPage/Navbar"));
const GetStarted = lazy(() => import("../../../components/desktop/CompanyPage/GetStarted"));
const Badges = lazy(() => import("../../../components/desktop/CompanyPage/Badges"));
const Footer = lazy(() => import("../../../components/desktop/Homepage/Footer"));
const Experience = lazy(() => import("../../../components/desktop/CompanyPage/Experience"));
const Section1 = lazy(() => import("../../../components/desktop/CompanyPage/Section1"));



const Company = () => {
    return (
      <Suspense fallback={<div></div>}>
        <Fragment>
          <Navbar />
          <GetStarted/>
          {/* <img
          src={Test}
          alt="t"
          // style={{background:'black'}}
          /> */}
          <Section1 />
          <Badges/>
          <Experience />
          <Footer/>
        </Fragment>
      </Suspense>
    );
}

export default Company
