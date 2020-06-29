import React from 'react';
import Test from "../../assets/svgs/women.svg";
import Path from "../../assets/svgs/Path.svg";
import {Typography,Button} from 'antd'

const Verify = () => (
  <div
    style={{
      height: "8.31rem",
      width: "25.56rem",
      background: "#f3fefd",
      borderRadius: 23,
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        width: "60%",
      }}
    >
      <Typography
        style={{
          color: "#333743",
          fontWeight: 600,
          fontSize: "1.1rem",
        }}
      >
        Verify Student Status
      </Typography>
      <Typography
        style={{
          fontSize: "0.8rem",
          color: "#525252",
          fontWeight: 500,
        }}
      >
        Verify your student status to access exclusive student offers
      </Typography>
      <Button
        type="link"
        style={{
          padding: 0,
          color: "#52bdb2",
          fontSize: "0.8rem",
          fontWeight: "bold",
        }}
      >
        VERIFY STATUS
      </Button>
    </div>
    <img
      src={Test}
      alt="verify"
      style={{
        position: "relative",
        left: "17%",
        zIndex: 3,
      }}
    />
    <div style={{ position: "relative", zIndex: 2, top: "17%" }}>
      <img src={Path} alt="path" />
    </div>
  </div>
);

export default Verify