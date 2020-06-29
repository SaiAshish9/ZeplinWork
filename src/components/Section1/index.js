import React from "react";
import { Row, Col } from "antd";
import PinkGrid from "../../assets/svgs/pinkGrid";
import Wallet from "../../assets/svgs/wallet";
import Verify from "./verify";
import BusinessCard from "./businessCard";
import NotificationCard from "./notifications";
import ProfileCard from "./profile";

const Section1 = () => (
  <Row
    align="center"
    style={{
      height: "60vh",
      marginTop: "20vh",
      marginBottom: "50vh",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: "10%",
        zIndex: 1,
        //    bottom: "-2%"
      }}
    >
      <PinkGrid />
    </div>

    <Col
      span={16}
      style={{
        height: "27rem",
        border: "10px solid #f7f7f7",
        borderBottom: "none",
        borderRadius: "2rem",
        position: "relative",
        padding: "3rem",
        zIndex: 2,
        background: "#fff",
        marginTop: "10vh",
      }}
    >
      <Verify />
    </Col>
    <div
      style={{
        position: "absolute",
        right: "20%",
        zIndex: 4,
        //    bottom: "-2%"
      }}
    >
      <Wallet />
    </div>
    <BusinessCard />
    <ProfileCard/>
    <NotificationCard />
  </Row>
);

export default Section1;
