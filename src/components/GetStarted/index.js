import React,{useState} from 'react'
import { Row, Col, Button, Typography } from "antd";
import './index.css'
import {IoIosArrowForward} from 'react-icons/io'

const GetStarted = () => {

  const [slide,slideLeft]=useState(false)

    return (
      <Row style={{ marginTop: 233 }}>
        <Col span={24}>
          <Row align="center" justify="center">
            <Typography
              className="animate__animated animate__pulse"
              // className="animate__animated animate__bounceInDown"
              // className="animate__animated animate__heartBeat"
              style={{
                color: "#333e49",
                fontSize: 55,
                width: 756,
                height: 66,
                fontWeight: 600,
                lineHeight: 1.18,
                opacity: 0.9,
              }}
            >
              You Got Skills. We Got Work.
            </Typography>
          </Row>
          <Row align="center" justify="center">
            <Typography
              className="animate__animated animate__zoomInRight"
              style={{
                color: "#333e49",
                fontSize: 32,
                fontWeight: 600,
                lineHeight: 1,
                marginTop: 24,
                opacity: 0.9,
              }}
            >
              Earn money and experience while working on your own schedule
            </Typography>
          </Row>
          <Row align="center" justify="center" style={{ marginTop: 28 }}>
            <Button
              className="animate__animated animate__zoomIn"
              // className="animate__animated animate__rubberBand"
              onMouseEnter={() => {
                slideLeft(true);
              }}
              onMouseLeave={() => {
                slideLeft(false);
              }}
              type="text"
              id="getStartedBtn"
              style={{
                height: 60,
                width: 263,
                // padding: "0 4rem",
                borderRadius: 10,
                border: "solid 1px #ea907a",
                color: "#ea907a",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className={slide && "animate__animated animate__fadeIn"}
                style={{
                  transform: slide && "translateX(-10px)",
                  transition: slide && "1s backwards",
                }}
              >
                Get Started
              </span>
              {slide && (
                <IoIosArrowForward className="animate__animated animate__fadeIn" />
              )}
            </Button>
          </Row>
        </Col>
      </Row>
    );
}

export default GetStarted
