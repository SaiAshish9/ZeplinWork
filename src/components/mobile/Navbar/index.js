import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { BsFilterLeft } from "react-icons/bs";
import { Drawer } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(!false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(19px)",
        background: "#fff",
        height: "10vh",
        position: "fixed",
        width: "100vw",
        top: 0,
      }}
    >
      <BsFilterLeft
        onClick={() => {
          setOpen(true);
        }}
        style={{
          position: "absolute",
          left: 20,
          fontSize: "2rem",
          zIndex: 3,
        }}
      />
      <img
        src={Logo}
        style={{
          height: "8vh",
        }}
        alt="Pracify"
      />
      <Drawer
        placement="right"
        closable={!false}
        visible={open}
        onClose={() => {
          setOpen(false);
        }}
        width={window.screen.width}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "10vh 5vw ",
            fontSize: 18,
            lineHeight: 1.22,
          }}
        >
          <p
            style={{
              margin: "1.5rem 0",
              color: "#62bcb0",
            }}
          >
            Home
          </p>
          <p
            style={{
              margin: "1rem 0",
            }}
          >
            Gigs
          </p>
          <p
            style={{
              margin: "1rem 0",
            }}
          >
            Internships
          </p>
          <p
            style={{
              margin: "1rem 0",
            }}
          >
            Login
          </p>
          <p
            style={{
              margin: "1rem 0",
              color: "#ea907a",
            }}
          >
            Download App
          </p>
          <p
            style={{
              margin: "1rem 0",
              color: "#7a81ea",
            }}
          >
            I'm a Company
          </p>
        </div>
      </Drawer>{" "}
    </div>
  );
};

export default Navbar;
