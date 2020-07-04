import React, { Suspense, Fragment, lazy } from "react";
const Navbar = lazy(() => import("../../../components/desktop/Homepage/Navbar"));
const GetStarted = lazy(() => import("../../../components/desktop/Homepage/GetStarted"));
const Footer = lazy(() => import("../../../components/desktop/Homepage/Footer"));
const JoinUs = lazy(() => import("../../../components/desktop/Homepage/JoinUs"));
const Badges = lazy(() => import("../../../components/desktop/Homepage/Badges"));
const Experience = lazy(() => import("../../../components/desktop/Homepage/Experience"));
const Tasks = lazy(() => import("../../../components/desktop/Homepage/Tasks"));
const Section3 = lazy(() => import("../../../components/desktop/Homepage/Section3"));
const Section1 = lazy(() => import("../../../components/desktop/Homepage/Section1"));


const index = () => {
    return (
      <Suspense fallback={<div></div>}>
        <Fragment>
          <Navbar />
          <GetStarted />
          <Section1 />
          <Tasks />
          <Section3 />
          <Experience />
          <Badges />
          <JoinUs />
          <Footer />
        </Fragment>
      </Suspense>
    );
}

export default index
