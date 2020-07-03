import React from 'react'
import MobileBg from "../../../assets/test/mobileBg.svg";
import Mobile from "../../../assets/test/mobile.png";
import MobileGrid from "../../../assets/test/mobileGrid.svg";
import MobileInclinedBg from "../../../assets/test/mobileInclinedBg.svg";
import ArrowBow from "../../../test/arrowTarget.svg";

const Tasks = () => {
    return (
      <React.Fragment>
        <div style={{marginBottom:'10vh'}}>
          <img
            src={MobileBg}
            style={{
              width: "70%",
              position: "relative",
              zIndex: 2,
            }}
            alt="bg"
          />
          <img
            src={Mobile}
            alt="grid"
            style={{
              position: "absolute",
              left: "20%",
              width: "80%",
              marginTop: "2rem",
              zIndex: 3,
            }}
          />
          <img
            src={MobileGrid}
            alt="grid"
            style={{
              position: "absolute",
              left: "10vw",
              zIndex: 1,
            }}
          />
          <img
            src={MobileInclinedBg}
            alt="grid"
            style={{
              position: "absolute",
              left: "40%",
              zIndex: -1,
              marginTop: "18rem",
              width: "60%",
              //   bottom: "12rem",
            }}
          />
          <img
            data-aos="slide-right"
            data-aos-offset="100"
            style={{ 
            position: "absolute",
            zIndex:2,
            left: "1%",
            marginTop:"15rem",
            width:"30%"
             }}
             src={ArrowBow}
             alt="arrow"
          />
        </div>
      </React.Fragment>
    );
}

export default Tasks
