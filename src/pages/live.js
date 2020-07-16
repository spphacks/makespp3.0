import React from "react";
// import { Link } from "gatsby";
import Header from "../components/smallheader";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-grid-system";

import Countdown from "../components/countdown";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Description = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  color: #333;
  padding: 0;
  line-height: 1.3;
  color: ${props => props.color};
`;

const Live = () => (
  <Layout>
    <Header />
    <SEO
      title="Live | MakeSPP 2020"
      keywords={[`MakeSPP`, `Saint Peter's Prep`, `hackathon`]}
    />
    <div className="center">
      <h1>
        <Countdown date={`April 25, 2020 17:30:00`} />
      </h1>
    </div>
    <Container>
      <Row>
        <Col sm={4}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="makespp"
            options={{ height: 400 }}
          />{" "}
        </Col>
        <Col className="center" sm={4}>
          <h2>
            WiFi SSID: SPP-Guest <br /> WiFi Password: makeSPP
          </h2>

          <h2>
            Projects must be submitted on
            <a className="blue" href="https://makespp.hackerearth.com">
              <u> HackerEarth</u>
            </a>{" "}
            by 5:30 PM
          </h2>

          <h2>
            <a
              className="blue"
              href="https://discord.gg/raZPeya
"
            >
              <u> Discord Signup</u>
            </a>{" "}
          </h2>

          <h2>
            <a
              className="blue"
              href="https://hackcodeofconduct.org/676-makespp"
            >
              <u> Code of Conduct</u>
            </a>{" "}
          </h2>
        </Col>

        <Col className="center" sm={4}>
          <h2>
            <u> Pitch your Project Workshop @ 4 PM</u>
          </h2>

          <h2>
            <a className="blue" href="https://enlight.nyc">
              <u> Enlight Projects</u>
            </a>
            : Web Development & Machine Learning
          </h2>

          <h2>
            <a className="blue" href="https://repl.it">
              <u> Repl.it Cloud IDE</u>
            </a>
          </h2>

          <h2>
            <a
              className="blue"
              href="https://support.balsamiq.com/sales/cloudpromo/"
            >
              <u> Balsamiq Cloud Free Trial</u>
            </a>
            <br />
            Code: BQGSWTKRC040819
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="schedule">
            <item>
              <span className="right">7:45 - 8:15 AM</span> Breakfast & Check-In
            </item>

            <item>
              {" "}
              <span className="right">8:15 AM</span> Team Building Sessions
            </item>

            <item>
              {" "}
              <span className="right">8:30 AM</span> Opening Ceremony
            </item>

            <item>
              {" "}
              <span className="right">9 AM</span> Making Starts
            </item>

            <item>
              <span className="right">9 AM</span> <b>Workshop</b>: Creative
              Coding w/ Upperline Code (Beginner){" "}
            </item>

            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: Build Your
              First Website (Beginner)
            </item>
            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: Intro to
              Python (Beginner){" "}
            </item>

            <item>
              <span className="right">11 AM</span> <b>Workshop</b>: Machine
              Learning w/ Upperline Code (Intermediate){" "}
            </item>

            <item>
              {" "}
              <span className="right">12 PM</span> Lunch
            </item>
            <item>
              <span className="right">12:30 PM</span> <b>Workshop</b>: Build a
              Web App with Zeit (Intermediate){" "}
            </item>

            <item>
              <span className="right">1:30 PM</span>{" "}
              <b>Entrepreneurship Panel</b>{" "}
            </item>

            <item>
              {" "}
              <span className="right">2:30 PM</span> <b>Engineering Activity</b>
            </item>

            <item>
              <span className="right">4:00 PM</span> <b>Workshop</b>: Pitching
              Your Project{" "}
            </item>

            <item>
              {" "}
              <span className="right">4:00 PM</span> Snack
            </item>

            <item>
              {" "}
              <span className="right">5:30 PM</span> Making Ends & Expo Begins
            </item>

            <item>
              {" "}
              <span className="right">6:30 PM</span> Judging Ends
            </item>
            <item>
              {" "}
              <span className="right">6:30 PM</span> Dinner
            </item>

            <item>
              {" "}
              <span className="right">6:50 PM</span> Expo Ends
            </item>

            <item>
              {" "}
              <span className="right">7 PM</span> Top 5 Teams Demo & Q/A
            </item>

            <item>
              {" "}
              <span className="right">8 PM</span> Winners Announced & Closing
              Remarks{" "}
            </item>
          </div>
        </Col>
      </Row>
    </Container>
    <Description color="#333" className="center" size="16px">
      © 2020 <a href="https://spprep.org"> Saint Peter's Prep High School</a>
    </Description>{" "}
  </Layout>
);

export default Live;
