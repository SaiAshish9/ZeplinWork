import React from "react";
import { Row, Col, Typography } from "antd";
import Certification from '../../assets/svgs/certification'
import Bars from '../../assets/svgs/bars'


const data = [
  {
    title: "Upskill Yourself",
    icon: "",
    bgColor: "#fee3df",
  },
  {
    title: "Explore Careers",
    bgColor: "#e1ddef",
    icon:""
  },
  {
    title: "Gain Experience",
    bgColor: "#d3e5ff",
    icon:<Certification/>
  },
  {
    title: "Grow Professionally",
    bgColor: "#e0efe4",
    icon:<Bars/>
  },
];

const Badges = () => (
  <Row
    style={{
      padding: "10rem 15rem",
      background: "#fff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    {data.map((i, k) => (
      <Col key={k}>
        <Row
          style={{
            height: "7.5rem",
            width: "7rem",
            borderRadius: 34,
            background: i.bgColor,
            marginBottom:20,
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
            {i.icon}
        </Row>

        <Typography
          style={{ color: " #333e49", fontSIze: 40, lineHeight: 1.1 }}
        >
          {i.title}
        </Typography>
      </Col>
    ))}
  </Row>
);

export default Badges;
