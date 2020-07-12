import React, { Suspense, lazy } from "react";

const Navbar = lazy(() =>
  import("../../../components/desktop/Homepage/Navbar")
);
const Footer = lazy(() =>
  import("../../../components/desktop/Homepage/Footer")
);
const Content = lazy(() => import("./Content"));

const Privacy = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div></div>}>
        <Navbar />
        <Content />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
};

export default Privacy;
