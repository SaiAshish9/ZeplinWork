import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import Aos from "aos";
import { useMediaQuery } from "react-responsive";
const Desktop = lazy(() => import("./containers/desktop"));
const Mobile = lazy(() => import("./containers/mobile"));

function App() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  const mediaSIze = useMediaQuery({
    query: "(min-width:600px)",
  });

  return (
    <Suspense fallback={<div></div>}>
      {mediaSIze ? <Desktop /> : <Mobile />}
    </Suspense>
  );
}

export default App;
