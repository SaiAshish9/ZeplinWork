import React from 'react'
import { Row, Col, Button, Typography } from "antd";

const GetStarted = () => {
    return (
      <Row style={{ marginTop: "10vh" }}>
        <Col span={24}>
          <Row align="center" justify="center" style={{ margin: "3rem 0" }}>
            <Typography
              style={{
                color: "#333e49",
                fontSize: "3.1rem",
                fontWeight: 600,
                lineHeight: 1.18,
              }}
            >
              You Got Skills. We Got Work.
            </Typography>
          </Row>
          <Row align="center" justify="center" style={{ margin: "3rem 0" }}>
            <Typography
              style={{
                color: "#333e49",
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              Earn money and experience while working on your own schedule
            </Typography>
          </Row>
          <Row align="center" justify="center" style={{ margin: "3rem 0" }}>
            <Button
              type="text"
              style={{
                height: "3rem",
                padding: "0 4rem",
                borderRadius: 7,
                border: "solid 1px #ea907a",
                color: "#ea907a",
                fontSize: "1.1rem",
              }}
            >
              Get Started
            </Button>
          </Row>
        </Col>
      </Row>
    );
}

export default GetStarted
