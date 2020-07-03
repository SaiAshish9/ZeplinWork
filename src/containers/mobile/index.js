import React,{Fragment,Suspense, lazy} from 'react'
const GetStarted =lazy(() =>import('../../components/mobile/GetStarted'))
const Navbar =lazy(() =>import("../../components/mobile/Navbar"))
const Tasks=lazy(()=>import("../../components/mobile/Tasks"))
const Section3=lazy(()=>import("../../components/mobile/Section3"))
const Experience=lazy(()=>import("../../components/mobile/Experience"))
const Badges=lazy(()=>import("../../components/mobile/Badges"))

const Mobile= () => {
    return (
      <Suspense fallback={<div></div>}>
        <Fragment>
            <Navbar />
            <GetStarted/>
            <Tasks/>
            <Section3/>
            <Experience />
            <Badges />
        </Fragment>
      </Suspense>
    );
}

export default Mobile