import React from "react";
import { Typography } from "antd";
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
      // padding: "1rem",
      background: "#fff",
      display: "flex",
      fontSize:'1rem',
      flexDirection: "row",
      flexWrap: "wrap",
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
          // height:128.8,
          width:'36vw'
        }}
        data-aos="zoom-in" src={i.icon} alt={k} />

        <Typography
          style={{
            color: " #333e49",
            // fontSIze: 50,
            // fontWeight:'bold',
            lineHeight: "22px",
            marginTop: "1rem",
            marginBottom: "3rem",
            fontSIze: 15,
          }}
        >
          {i.title}
        </Typography>
      </div>
    ))}
  </div>
);

export default Badges;
