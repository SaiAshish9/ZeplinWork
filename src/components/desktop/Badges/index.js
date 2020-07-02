import React from "react";
import { Typography } from "antd";
// import Certification from "../../assets/svgs/certification";
// import Bars from "../../assets/svgs/bars";

import Upskill from "../../../test/upskill.png";
import Explore from "../../../test/explore.png";
import Professionally from "../../../test/Professionally.svg";
import Badge from "../../../test/badge.svg";

const data = [
  {
    title: "Upskill Yourself",
    icon: Upskill,
  },
  {
    title: "Explore Careers",
    icon: Explore,
  },
  {
    title: "Gain Experience",
    icon: Badge,
  },
  {
    title: "Grow Professionally",
    icon: Professionally,
  },
];

const Badges = () => (
  <div
    style={{
      padding: "10rem 15rem",
      background: "#fff",
      display: "flex",
      fontSize:20,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    {data.map((i, k) => (
      <div
        key={k}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
        style={{
          height:128.8,
          width:124
        }}
        data-aos="zoom-in" src={i.icon} alt={k} />

        <Typography
          style={{
            color: " #333e49",
            // fontSIze: 50,
            // fontWeight:'bold',
            lineHeight: "22px",
            marginTop: "2rem",
            fontSIze: "20px",
          }}
        >
          {i.title}
        </Typography>
      </div>
    ))}
  </div>
);

export default Badges;
