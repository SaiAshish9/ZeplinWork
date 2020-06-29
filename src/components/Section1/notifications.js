import React from "react";
import { Row, Col, Typography } from "antd";
import AccountImg from "../../assets/svgs/account.svg";
import BriefcaseImg from "../../assets/svgs/briefcase.svg";
import AwardImg from "../../assets/svgs/award.svg";

const Notifications = [
  {
    img: AccountImg,
    text: "Please verify your student status on Pracify",
  },
  {
    img: BriefcaseImg,
    text: "You have been selected for Marketing Internship",
  },
  {
    img: AwardImg,
    text: "You have been selected for Product Testing Gig",
  },
];

const BusinessCard = () => (
  <div
    style={{
      //   height: "14.43rem",
      width: "15.75rem",
      position: "absolute",
      right: "14%",
      top: "145%",
      zIndex: 4,
      background: "#fff",
      borderRadius: 28,
      padding: "1rem",
      boxShadow: "0 26px 40px 0 rgba(0, 0, 0, 0.08)",
    }}
  >
    <Typography
      style={{
        fontSize: "0.8rem",
        fontWeight: 600,
        marginLeft: 10,
        color: "#333e49",
        marginBottom: 20,
      }}
    >
      Notifications
    </Typography>

    {Notifications.map((i, k) => (
      <div key={k}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
            <img
            src={i.img}
            alt={k}
            />
          <Typography
            style={{
              fontSize: 9,
              fontWeight: 600,
            }}
          >
            {i.text}
          </Typography>
        </div>
        <hr
          style={{
            width: "100%",
            opacity: 0.3,
            background: "rgba(0, 0, 0, 0.08)",
            borderRadius: 20,
          }}
        />
      </div>
    ))}
  </div>
);

export default BusinessCard;
