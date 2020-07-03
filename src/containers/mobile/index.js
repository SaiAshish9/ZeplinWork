import React,{Fragment,Suspense, lazy} from 'react'
const GetStarted =lazy(() =>import('../../components/mobile/GetStarted'))
const Navbar =lazy(() =>import("../../components/mobile/Navbar"))
const Tasks=lazy(()=>import("../../components/mobile/Tasks"))
const Section3=lazy(()=>import("../../components/mobile/Section3"))

const Mobile= () => {
    return (
      <Suspense fallback={<div></div>}>
        <Fragment>
            <Navbar />
            <GetStarted/>
            <Tasks/>
            <Section3/>
        </Fragment>
      </Suspense>
    );
}

export default Mobile