import React from "react";
import { Col, Row, Typography } from "antd";
import Option1 from "../../assets/svgs/option1.svg";
import Option2 from "../../assets/svgs/option2.svg";
import Option3 from "../../assets/images/option3.png";
import BlueGrid from "../../assets/svgs/blueGrid";

const Section3 = () => {
  return (
    <Row style={{ marginBottom: "17rem" }}>
      <Col
        span={12}
        style={{
          padding: "0 5rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              fontWeight: 600,
              color: "#4385e0",
              fontSize: "2.3rem",
            }}
          >
            Hassle Free.
            <span
              style={{
                fontWeight: 600,
                fontSize: "2.3rem",
                color: "#333e49",
                opacity: 0.9,
                marginLeft: 10,
              }}
            >
              Working has never this easy and fun.
            </span>
          </Typography>
        </div>
        <div style={{ marginTop: "10vh", display: "flex" }}>
          <Col>
            <Row
              style={{
                width: "1rem",
                height: "1rem",
                background: "#ff5e16",
                borderRadius: "50%",
                margin: "10px 0",
              }}
            ></Row>
            <Row
              style={{
                width: "1rem",
                height: "5.5rem",
                background: "#4d52d1",
                borderRadius: 9,
                margin: "10px 0",
              }}
            ></Row>
            <Row
              style={{
                width: "1rem",
                height: "1rem",
                background: "#4d52d1",
                borderRadius: "50%",
                margin: "10px 0",
              }}
            ></Row>
          </Col>
          <Col style={{ marginLeft: "10%" }}>
            <Row>
              <Typography
                style={{
                  color: "#b8b8b8",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  margin: "0 10px",
                }}
              >
                Selection
              </Typography>
              <Col>
                <Typography
                  style={{
                    color: "#4385e0",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    margin: "0 10px",
                  }}
                >
                  Submission
                </Typography>
                <hr
                  style={{
                    background: "#4385e0",
                    width: "30%",
                    height: 3,
                  }}
                />
              </Col>
              <Typography
                style={{
                  color: "#b8b8b8",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  margin: "0 10px",
                }}
              >
                Payment
              </Typography>
            </Row>
            <Typography
              style={{
                color: "#3d3d3d",
                fontSize: "1.2rem",
                fontWeight: 500,
                width: "70%",
              }}
            >
              Complete tasks before the deadline and submit proof of work
              completed on the mobile app or website.
            </Typography>
          </Col>
        </div>
      </Col>
      <Col span={2} style={{position: 'relative',bottom:'5rem'}}>
         <BlueGrid/>
      </Col>
      <Col span={10}>
        <div style={{ position: "absolute",right:"14rem" }}>
          <img src={Option1} alt="svg" />
        </div>
        <div style={{ position: "absolute",right:"3rem",zIndex:1,top:"7rem" }}>
          <img src={Option2} alt="svg" />
        </div>
        <div style={{ position: "absolute",right:"13.5rem",top:"17rem" }}>
          <img src={Option3} alt="svg" />
        </div>
      </Col>
    </Row>
  );
};

export default Section3;
