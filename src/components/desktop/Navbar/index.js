import React from 'react'
import { Row, Col, Button, Typography } from "antd";
import Logo from "../../../assets/images/logo.png";


const Navbar = () => {
    return (
      <React.Fragment>
        <Row
          align="middle"
          justify="space-between"
          style={{
             padding: "20px 27px",
             position:"fixed",
             width:'100vw',
             top:0,
             zIndex:6,
             backdropFilter:"blur(19px)",
        
        }}
        >
          <Col>
            <img
              src={Logo}
              style={{ height: "90px", }}
              alt="practify"
            />
          </Col>
          <Col>
            <Row align="center" justify="space-between">
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: "normal",
                  lineHeight: 1.22,
                  cursor: "pointer",
                  marginRight: "30px",
                }}
              >
                Gigs
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  lineHeight: 1.22,
                  cursor: "pointer",
                  marginRight: "30px",
                }}
              >
                Internships
              </Typography>
              <Button
                type="text"
                style={{
                  height: 49,
                  width: 122,
                  padding: "0 2rem",
                  borderRadius: 6,
                  border: "solid 1px #333e49",
                  fontSize: "1.1rem",
                  marginRight: "30px",
                }}
              >
                Login
              </Button>
              <Button
                type="text"
                style={{
                  height: 49,
                  width: 200,
                  borderRadius: 7,
                  fontSize: 18,
                  lineHeight: 1.22,
                  padding: "0 2rem",
                  fontFamily: "Inter",
                  backgroundColor: "#ea907a",
                  color: "#fff",
                  marginRight: "30px",
                }}
              >
                Download App{" "}
              </Button>
              <Button
                type="text"
                style={{
                  height: 49,
                  width: 200,
                  borderRadius: 7,
                  fontSize: 18,
                  padding: "0 2rem",
                  backgroundColor: "#7a81ea",
                  color: "#fff",
                  marginRight: "30px",
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
