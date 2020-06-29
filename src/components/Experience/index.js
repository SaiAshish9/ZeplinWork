import React from "react";
import { Row, Col, Typography } from "antd";
import Grid5 from "../../assets/svgs/grid5";

const Experience = () => (
  <Row
    style={{
      width: "100vw",
      paddingBottom: "10vh",
      transform: "skewY(-3deg)",
      background: "linear-gradient(136deg, #7a81ea 33%, #545bcd 100%)",
    }}
  >
    <Row
      style={{
        margin: "5rem",
        transform: "skewY(3deg)",
      }}
    >
      <Row style={{ padding: "2rem" }}>
        <Typography
          style={{ fontSize: "3rem", fontWeight: 500, color: "#fff" }}
        >
          Working with Pracify helps you earn money,gain experience,and grow
          professionally.
        </Typography>
      </Row>
      <Row style={{ padding: "1.5rem", width: "100%" }}>
        <Col style={{ marginRight: "30%" }}>
          <Typography
            style={{ fontSize: "2.5rem", fontWeight: 500, color: "#fff" }}
          >
            From
          </Typography>
          {[
            "Finding work",
            "Driven by necessity",
            "Unpaid Internships",
            "Payment hassles",
          ].map((i, k) => (
            <Typography
              style={{
                color: "#fff",
                margin: "10px 0",
                fontSIze: "1.5rem",
              }}
              key={k}
            >
              {i}
            </Typography>
          ))}
        </Col>
        <Col>
          <Typography
            style={{ fontSize: "2.5rem", fontWeight: 500, color: "#fff" }}
          >
            To
          </Typography>{" "}
          {[
            "Choosing work",
            "Driven by passion",
            "Paid Gigs",
            "Secure payments",
          ].map((i, k) => (
            <Typography
              style={{
                color: "#fff",
                margin: "10px 0",
                fontSIze: "2rem",
                lineHeight:1.25
              }}
              key={k}
            >
              {i}
            </Typography>
          ))}
        </Col>
      </Row>
    </Row>

    <Row
      style={{
        margin: 20,
        transform: "skewY(3deg)",
        position: "absolute",
        right: "-6vw",
        bottom: "25vh",
      }}
    >
      <Row
        style={{
          height: "8rem",
          width: "8rem",
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.07,
          position: "relative",
          left: "6rem",
          top: "10rem",
        }}
      ></Row>
      <Row
        style={{
          height: "8rem",
          width: "8rem",
          background: "#fff",
          opacity: 0.07,
          position: "relative",
          left: "3rem",
          top: "6rem",
        }}
      ></Row>
      <Grid5 />
    </Row>
  </Row>
);

export default Experience;
