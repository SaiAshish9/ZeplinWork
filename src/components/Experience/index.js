import React from "react";
import { Row, Typography } from "antd";
import Grid5 from "../../assets/svgs/grid5";

const Experience = () => (
  <Row
    style={{
      width: "100vw",
      padding: "122px 150px",
      transform: "skewY(-3deg)",
      background: "linear-gradient(136deg, #7a81ea 33%, #545bcd 100%)",
    }}
  >
    <Row
      style={{
        // margin: "5rem",
        transform: "skewY(3deg)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography style={{ fontSize: 48, fontWeight: 500, color: "#fff" }}>
          Working with Pracify helps you earn money,
        </Typography>
        <Typography style={{ fontSize: 48, fontWeight: 500, color: "#fff" }}>
          gain experience,and grow professionally.
        </Typography>
      </div>
      <Row style={{ padding: "1.5rem 0", width: "100%" }}>
        <div style={{ marginRight: "30%" }}>
          <Typography
            style={{ fontSize: "2.5rem", fontWeight: 500, color: "#fff" }}
          >
            From
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 150,
              fontSize: 20,
            }}
          >
            {[
              "Finding work",
              "Driven by necessity",
              "Unpaid Internships",
              "Payment hassles",
            ].map((i, k) => (
              <p
                style={{
                  color: "#fff",
                  // margin: "10px 0",
                  fontSIze: 48,
                  lineHeight: 1.25,
                }}
                key={k}
              >
                {i}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Typography
            style={{ fontSize: "2.5rem", fontWeight: 500, color: "#fff" }}
          >
            To
          </Typography>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 150,
              fontSize: 20,
            }}
          >
            {[
              "Choosing work",
              "Driven by passion",
              "Paid Gigs",
              "Secure payments",
            ].map((i, k) => (
              <p
                style={{
                  color: "#fff",
                  // margin: "10px 0",
                  fontSIze: 48,
                  lineHeight: 1.25,
                }}
                key={k}
              >
                {i}
              </p>
            ))}
          </div>
        </div>
      </Row>
    </Row>

    <Row
      style={{
        margin: 20,
        transform: "skewY(3deg)",
        position: "absolute",
        right: 0,
        bottom: "25vh",
      }}
    >
      <Row
        style={{
          height: 153,
          width: 153,
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.1,
          position: "relative",
          left: "6rem",
          top: "10rem",
        }}
      ></Row>
      <Row
        style={{
          height: 153,
          width: 153,
          background: "#fff",
          opacity: 0.1,
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
