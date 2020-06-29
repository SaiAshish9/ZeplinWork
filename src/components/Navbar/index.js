import React from 'react'
import { Row, Col, Button, Typography } from "antd";
import Logo from "../../assets/images/logo.png";


const Navbar = () => {
    return (
      <React.Fragment>
        <Row
          align="middle"
          justify="space-between"
          style={{ padding: "1.5rem" }}
        >
          <Col span={4}>
            <img
              src={Logo}
              style={{ height: "73.5px", width: "214px" }}
              alt="practify"
            />
          </Col>
          <Col span={12}>
            <Row align="center" justify="space-between">
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                }}
              >
                Gigs
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                }}
              >
                Internships
              </Typography>
              <Button
                type="text"
                style={{
                  height: "3rem",
                  padding: "0 2rem",
                  borderRadius: 7,
                  border: "solid 1px #333e49",
                  fontSize: "1.1rem",
                }}
              >
                Login
              </Button>
              <Button
                type="text"
                style={{
                  height: "3rem",
                  borderRadius: 7,
                  fontSize: "1.1rem",
                  padding: "0 2rem",
                  backgroundColor: "#ea907a",
                  color: "#fff",
                }}
              >
                Download App{" "}
              </Button>
              <Button
                type="text"
                style={{
                  height: "3rem",
                  borderRadius: 7,
                  fontSize: "1.1rem",
                  padding: "0 2rem",
                  backgroundColor: "#7a81ea",
                  color: "#fff",
                }}
              >
                I'm a Company
              </Button>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
}

export default Navbar
