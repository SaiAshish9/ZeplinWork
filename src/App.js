import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import Aos from "aos";
import "./assets/fonts/Inter-Regular.ttf";
import "./assets/fonts/Inter-SemiBold.ttf";
import "./assets/fonts/Inter-Bold.ttf";
import "./assets/fonts/Inter-Light.ttf";
import "./assets/fonts/Inter-ExtraLight.ttf";
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
