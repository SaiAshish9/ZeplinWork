import React,{Fragment,Suspense, lazy} from 'react'
const GetStarted =lazy(() =>import('../../components/mobile/GetStarted'))
const Navbar =lazy(() =>import("../../components/mobile/Navbar"))

const Mobile= () => {
    return (
      <Suspense fallback={<div></div>}>
        <Fragment>
            <Navbar />
            <GetStarted/>
        </Fragment>
      </Suspense>
    );
}

export default Mobile