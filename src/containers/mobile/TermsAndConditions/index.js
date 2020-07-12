import React,{Suspense, lazy} from 'react'

const Navbar =lazy(()=>import("../../../components/mobile/general/Navbar"))
const Footer = lazy(() =>
  import("../../../components/mobile/general/Footer")
);
const Content = lazy(() =>import("./Content"))

const Terms = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<div></div>}>
                  <Navbar />
                  <Content/>
                  <Footer />
            </Suspense>
        </React.Fragment>
    )
}

export default Terms
