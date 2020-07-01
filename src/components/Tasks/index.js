import React,{useState} from "react";
import { Row, Col, Typography } from "antd";
import JobsComponent from "../../assets/svgs/jobsComplete";
import ArrowBow from "../../assets/svgs/arrowBow";
// import WorkRm from "../../assets/svgs/workRm";
import WorkRemotely from '../../test/workRemotely.svg' 
import Jobs from "../../test/jobs.svg"
import Payments from "../../test/payments.svg"

const Tasks = () => {

  const [selected,setSelected]=useState(0)

const options = [
  {
    title: "Jobs for Everyone",
    description: "Find and apply to jobs that match your skills & interest.",
    icon: Jobs,
  },
  {
    title: "Work Remotely",
    description: "Work on the go using your smartphone or computer according to your own schedule. ",
    icon: WorkRemotely,
  },
  {
    title: "Fast & Secure Payments",
    description: "Get paid directly into your Pracify wallet after completing the work successfully.",
    icon: Payments,
  },
];


  return (
    <Row style={{ margin: "10vh 0" }}>
      <Col span={10}>
        <div>
          <JobsComponent />
        </div>
        <Row
          data-aos="slide-right"
          // className="animate__animated animate__slideInLeft"
          style={{ position: "relative", bottom: "20rem", left: "4rem" }}
        >
          <ArrowBow />
        </Row>
      </Col>
      <Col
        style={{
          paddingLeft: "5rem",
          paddingTop: "7rem",
          width: "40%",
          marginLeft: "10%",
        }}
      >
        <Typography
          style={{
            fontSize: 26,
            // fontWeight: "bolder",
            color: "#333e49",
            fontFamily: "Inter-SemiBold",
            fontWeight: 600,
            lineHeight: "36px",
            textAlign: "start",
            fontStretch: "normal",
          }}
        >
          With Pracify you can work from
          <br />
          wherever you want,whenever you want.
        </Typography>
        <Typography
          style={{
            margin: "10px 0",
            fontSize: 20,
            fontFamily: "Inter-Medium",
            fontWeight: 500,
            lineHeight: "40px",
            fontStretch: "normal",
            fontStyle: "normal",
          }}
        >
          Get paid for completing tasks online
        </Typography>

        <Col style={{ marginTop: "2rem" }}>
          {options.map((i, k) => (
            <Col
              key={k}
              onClick={() => {
                setSelected(k);
              }}
              style={{
                padding: "1.5rem 1rem",
                borderTop: "1px solid #ea907a",
                borderBottom: k === 2 && "1px solid #ea907a",
                cursor: "pointer",
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
                  {/* {i.icon} */}
                  <img alt={k} src={i.icon} />
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Inter-SemiBold",
                    color: "#ea907a",
                    lineHeight: "36px",
                    fontSize: 22,
                  }}
                >
                  {i.title}
                </Typography>
              </Row>
              {selected === k && (
                <Typography
                  className="animate__animated animate__fadeIn"
                  style={{
                    color: "#9ba0a6",
                    fontFamily: "Inter-Medium",
                    opacity: 0.6,
                    fontSize: 18,
                    marginTop: 5,
                    marginLeft: "12%",
                    lineHeight: "26px",
                  }}
                >
                  {i.description}
                </Typography>
              )}
            </Col>
          ))}
        </Col>
      </Col>
    </Row>
  );}

export default Tasks;
