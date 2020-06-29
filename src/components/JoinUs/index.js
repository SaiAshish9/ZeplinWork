import React from "react";
import { Typography, Row, Col } from "antd";
import GooglePlay from "../../assets/images/google-play.png";
import AppStore from "../../assets/svgs/appStore";
import QrCode from "../../assets/svgs/qrCode";
import ArrowLoop from "../../assets/svgs/arrowLoop";
import AndroidMobilePic from '../../assets/images/AndroidMobile.png'
import LoginMobilePic from '../../assets/images/LoginMobile.png'

const JoinUs = () => (
  <Row
    style={{
      width: "100vw",
      paddingBottom:"10vh",
      background: "linear-gradient(136deg, #7a81ea 33%, #545bcd 100%)",
    }}
  >
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <Typography
        style={{
          color: "#fff",
          fontSize: "2.1rem",
          textAlign: "center",
          width: "70%",
          margin: "10vh 0 2vh",
        }}
      >
        We're on a mission to build India's strongest and youngest on-demand
        workforce.Join us today.
      </Typography>
    </Row>
    <Row>
      <Col
        span={12}
        style={{
          padding: "0 5vw 2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{ color: "white", fontSize: "1.1rem", marginTop: "5vh" }}
        >
          Get the Pracify app and work for your favourite companies.Create your
          account within minutes and pick gigs which match your skills and
          interests
        </Typography>
        <Row style={{ margin: "3vh 0" }}>
          <Col>
            <img
              src={GooglePlay}
              alt="gpay"
              style={{
                height: "3.8rem",
                width: "9rem",
                position: "relative",
                right: 10,
              }}
            />
          </Col>
          <Col style={{ position: "relative", right: 10, top: 10 }}>
            <AppStore />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "44%",
            alignItems: "center",
          }}
        >
          <Typography
            style={{ fontSize: "1.3rem", fontWeight: 600, color: "#fff" }}
          >
            Scan to Download
          </Typography>
          <Row style={{ margin: "20px 0" }}>
            <ArrowLoop />
          </Row>
          <QrCode />
        </Row>
      </Col>
      <Col style={{marginTop:'5vh'}}>
        <img src={LoginMobilePic} alt="Login" style={{ margin: 5,marginRight:'3rem' }} />
        <img src={AndroidMobilePic} alt="android" style={{ margin: 5 }} />
      </Col>
    </Row>
  </Row>
);

export default JoinUs;
