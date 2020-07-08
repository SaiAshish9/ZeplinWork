import React, { Suspense, lazy } from "react";
const GetStarted = lazy(() => import("../../../components/mobile/Homepage/GetStarted"));
const Navbar = lazy(() => import("../../../components/mobile/general/Navbar"));
const Tasks = lazy(() => import("../../../components/mobile/Homepage/Tasks"));
const Section3 = lazy(() =>
  import("../../../components/mobile/Homepage/Section3")
);
const Experience = lazy(() =>
  import("../../../components/mobile/Homepage/Experience")
);
const Badges = lazy(() => import("../../../components/mobile/Homepage/Badges"));
const JoinUs = lazy(() => import("../../../components/mobile/Homepage/JoinUs"));
const Footer = lazy(() => import("../../../components/mobile/general/Footer"));

const Homepage = () => {
  return (
    <Suspense fallback={<div></div>}>
      <div style={{ overflowX: "hidden" }}>
        <Navbar />
        <GetStarted />
        <Tasks />
        <Section3 />
        <Experience />
        <Badges />
        <JoinUs />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Homepage;
