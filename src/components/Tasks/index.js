import React from "react";
import { Row, Col, Typography } from "antd";
import JobsComponent from "../../assets/svgs/jobsComplete";
import ArrowBow from "../../assets/svgs/arrowBow";
import WorkRm from "../../assets/svgs/workRm";

const Tasks = () => (
  <Row style={{ marginBottom: "10vh" }}>
    <Col span={10}>
      <JobsComponent />
      <Row style={{ position: "relative", bottom: "20rem", left: "4rem" }}>
        <ArrowBow />
      </Row>
    </Col>
    <Col style={{ paddingLeft: "5rem", paddingTop: "7rem", width: "50%" }}>
      <Typography style={{ fontSize: "1.8rem", fontWeight: 600 }}>
        With Pracify you can work from wherever you want,whenever you want.
      </Typography>
      <Typography
        style={{ margin: "10px 0", fontSize: "1.5rem", fontWeight: 500 }}
      >
        Get paid for completing tasks online
      </Typography>

      <Col style={{ marginTop: "2rem" }}>
        <Col
          style={{
            padding: "2rem 1rem",
            borderTop: "1px solid #ea907a",
          }}
        >
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                background: "#fdf4f1",
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: "50%",
                marginRight: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Typography>
            <Typography
              style={{
                fontWeight: 600,
                color: "#ea907a",
                fontSize: "1.2rem",
              }}
            >
              Jobs for Everyone
            </Typography>
          </Row>
          <Typography
            style={{
              color: "#333e49",
              fontWeight: 700,
              opacity: 0.8,
              marginTop: 10,
              marginLeft:"9.5%"
            }}
          >
            Find and apply to jobs that match your skills & interest.
          </Typography>
        </Col>

        <Col
          style={{
            padding: "2rem 1rem",
            borderTop: "1px solid #ea907a",
          }}
        >
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                background: "#fdf4f1",
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: "50%",
                marginRight: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WorkRm />
            </Typography>
            <Typography
              style={{
                fontWeight: 600,
                color: "#ea907a",
                fontSize: "1.2rem",
              }}
            >
              Work Remotely
            </Typography>{" "}
          </Row>
        </Col>

        <Col
          style={{
            padding: "2rem 1rem",
            borderTop: "1px solid #ea907a",
            borderBottom: "1px solid #ea907a",
          }}
        >
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                backgroundColor: "#ea907a",
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: "50%",
                opacity: 0.1,
                marginRight: 20,
              }}
            ></Typography>
            <Typography
              style={{
                fontWeight: 600,
                color: "#ea907a",
                fontSize: "1.2rem",
              }}
            >
              Fast & Secure Payments
            </Typography>
          </Row>
        </Col>
      </Col>
    </Col>
  </Row>
);

export default Tasks;
