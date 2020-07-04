import React, { Suspense, Fragment, lazy } from "react";
const Navbar = lazy(() => import("../../../components/desktop/CompanyPage/Navbar"));
const GetStarted = lazy(() => import("../../../components/desktop/CompanyPage/GetStarted"));
const Badges = lazy(() => import("../../../components/desktop/CompanyPage/Badges"));
const Footer = lazy(() => import("../../../components/desktop/Homepage/Footer"));
const Experience = lazy(() => import("../../../components/desktop/CompanyPage/Experience"));

const Company = () => {
    return (
      <Suspense fallback={<div></div>}>
        <Fragment>
          <Navbar />
          <GetStarted/>
          <Badges/>
          <Experience />
          <Footer/>
        </Fragment>
      </Suspense>
    );
}

export default Company
