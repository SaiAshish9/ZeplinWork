import React, { useState } from "react";
import Wave from "../../../../assets/images/companyPageBlueGrid.svg";
import Img1 from "../../../../assets/images/companySection2a.svg";
import Img2 from "../../../../assets/images/companySection2b.svg";
import Img3 from "../../../../assets/images/companySection2c.svg";
import Img4 from "../../../../assets/images/companySection2d.svg";
import OutcomeBasedPayout from "../../../../assets/images/outcomeBasedPayout.svg";
import RealTimeTracking from "../../../../assets/images/realTimeTracking.svg";
import EndToEndExecution from "../../../../assets/images/endToEndExecution.svg";
import PanIndia from "../../../../assets/images/panIndia.svg";



const options = [
  {
    text: "Outcome Based Payout",
    desc: "Make gig economy work for your business and spend zero money on hiring. We charge only for the outcome achieved, not manpower deployed.",
    icon: OutcomeBasedPayout,
  },
  {
      text: "Real Time Tracking",
      desc:"Keep a check on the performance of workers by tracking work completed on the ground directly via our partner dashboard.",
      icon:RealTimeTracking
  },
    {
      text: "End to End Execution",
      desc:"We've streamlined end to end management processes in minutes.It couldn't get this faster, or easier",
      icon:EndToEndExecution
  },
    {
      text: "Pan India Execution",
      desc:"We make scaling business in unknown territories easy for you. Hire on demand workers for your business throughout India on Pracify.",
      icon:PanIndia
  }
]


const Section2 = () => {
  const [selected, setSelected] = useState(0);
//   const images = [Img1, Img2, Img3, Img4];

  return (
    <div style={{ width: "100vw", height: "90vh", display: "flex" }}>
      <div style={{ width: "60vw" }}>
        <img src={Wave} style={{ position: "absolute", left: 0 }} alt="wave" />

        <div style={{ padding: "9rem 5em" }}>
          <img
            data-aos={selected === 0 ? "zoom-up" : "fade-up"}
            style={{
              margin: 10,
              width: selected === 0 ? 300 : 220,
            }}
            src={Img1}
            alt="img"
          />
          <img
            data-aos={selected === 1 ? "zoom-up" : "fade-up"}
            style={{
              position: "relative",
              right: "7%",
              margin: 10,
              width: selected === 1 ? 300 : 220,
            }}
            src={Img2}
            alt="img"
          />
          <br />
          <img
            style={{
              position: "relative",
              bottom: "4rem",
              width: selected === 2 ? 300 : 220,
              margin: 10,
            }}
            data-aos={selected === 2 ? "zoom-up" : "fade-up"}
            src={Img3}
            alt="img"
          />
          <img
            style={{
              position: "relative",
              right: "6%",
              bottom: "5rem",
              width: selected === 3 ? 360 : 220,
              margin: "10px 0",
            }}
            data-aos={selected === 3 ? "zoom-up" : "fade-up"}
            src={Img4}
            alt="img"
          />
        </div>
      </div>
      <div style={{ width: "70vw", display: "flex", alignItems: "center" }}>
        <div
          style={{
            borderLeft: "2px solid #f4f4f4",
            padding: "2rem",
          }}
        >
          {options.map((i, k) => (
            <div
              key={k}
              onClick={() => {
                setSelected(k);
              }}
              style={{
                margin: "40px 1rem",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  margin: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "10%" }}>
                  <img src={i.icon} alt="img" />
                </div>
                <div>
                  <p
                    style={{
                      margin: "auto",
                      //   marginLeft: 20,
                      fontFamily: "Inter-SemiBold",
                      fontSize: 32,
                      lineHeight: "34px",
                      color: "#333e49",
                      opacity: selected !== k && 0.3,
                    }}
                  >
                    {i.text}
                  </p>
                </div>
              </div>
              {selected === k && (
                <p
                  style={{
                    marginLeft: "12%",
                    width: "60%",
                    color: "#333e49",
                    fontFamily: "Inter-Medium",
                    fontSize: 16,
                    lineHeight: "30px",
                  }}
                >
                  {i.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;