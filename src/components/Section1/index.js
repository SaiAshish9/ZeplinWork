import React from "react";
import { Row, Col } from "antd";
import PinkGrid from "../../assets/svgs/pinkGrid";
// import Wallet from "../../assets/svgs/wallet";
// import Verify from "./verify";
// import BusinessCard from "./businessCard";
// import NotificationCard from "./notifications";
// import ProfileCard from "./profile";
import VerifyStatus from '../../test/verifyStatus.png'
import Card from '../../test/card.png'
import BusinessDev from '../../test/businessDev.png'
import Notifications from '../../test/notifications.png'
import ProfileScore from '../../test/profileScore.png'

const Section1 = () => (
  <Row
    align="center"
    style={{
      height: 408,
      margin: "20vh auto 80vh",
      width: 922,
    }}
  >
    <div
      className="animate__animated animate__fadeIn"
      style={{
        position: "absolute",
        left: 220,
        zIndex: 1,
        //    bottom: "-2%"
      }}
    >
      <PinkGrid />
    </div>

    <Col
      style={{
        height: 408,
        width: 922,
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
      <img
        src={VerifyStatus}
        alt="Verify Status"
        className="animate__animated animate__slideInLeft"
      />
      {/* <Verify /> */}
    </Col>
    <div
      className="animate__animated animate__slideInRight"
      style={{
        position: "absolute",
        right: "20%",
        zIndex: 4,
        //    bottom: "-2%"
      }}
    >
      <img src={Card} alt="card" />
      {/* <Wallet /> */}
    </div>

    {/* <BusinessCard /> */}

    <img
      src={BusinessDev}
      style={{
        position: "absolute",
        left: "14%",
        top: "140%",
        zIndex: 4,
      }}
      alt="business"
      className="animate__animated animate__slideInLeft"
    />

    {/* <ProfileCard /> */}

    <img
      src={ProfileScore}
      style={{
        position: "absolute",
        right: "40%",
        top: "138%",
        zIndex: 4,
      }}
      alt="profile"
    />

    {/* <NotificationCard /> */}

    <img
      src={Notifications}
      style={{
        position: "absolute",
        right: "10%",
        top: "140%",
        zIndex: 4,
      }}
      alt="notifications"
      className="animate__animated animate__slideInRight"
    />
  </Row>
);

export default Section1;
