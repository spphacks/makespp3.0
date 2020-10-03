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

const Call = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size};
  color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
      font-size: 25px;
    }
`;

const Live = () => (
  <Layout>
    <Header />
    <SEO
      title="Live | MakeSPP 2020"
      keywords={[`MakeSPP`, `makespp`, `Saint Peter's Prep`, `hackathon`]}
    />
    <div className="center">
      <h1>
        <Countdown date={`October 11, 2020 2:00:00`} />
      </h1>
    </div>
    <Container>
      <Row>
        <Col sm={3}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="makespp"
            options={{ height: 400 }}
          />{" "}
        </Col>
        <Col sm={1}/>
        <Col sm={3}>
        <iframe src="https://discordapp.com/widget?id=731656931411755140&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </Col>
        <Col sm={1.5}/>
        <Col sm={3.5}>
        <h2>
          Projects must be submitted on
          <a className="blue" href="https://makespp2020.devpost.com">
            {" "}<u>Devpost</u>{" "}
          </a>
          by 2 PM
        </h2>
        <h2>
          <a
            href="https://discord.gg/mxmsaSK">
            <u> Join the Discord!</u>
          </a>
        </h2>
        <h2>
          <a className="blue" href="http://mlh.io/code-of-conduct">
          <u>MLH Code of Conduct</u>
          </a>
        </h2>
        </Col>
{/*
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
        </Col>*/}
      </Row>
      <br/><br/>
      <Call color="#333" className="center" size="40px">
        Today's Schedule
      </Call>
      <Row>
        <Col>
        <div className="schedule">
          <item>
            <span className="right">5 PM</span> Opening Ceremony
          </item>
          <item>
            <span className="right">5:15 PM</span> Platforms & Schedule Overview
          </item>
          <item>
            <span className="right">5:25 PM</span> Hestia Academy Keynote
          </item>
          <item>
            <span className="right">5:55 PM</span> Team Formation
          </item>
          <item>
            <span className="right">6:20 PM</span> Icebreakers
          </item>
          <item>
            <span className="right">6:40-8 PM</span> Dinner Break
          </item>
          <item>
            <span className="right">8 PM</span> <b>Workshop</b>: Intro to HTML/CSS
          </item>
          <item>
            <span className="right">8 PM</span> <b>Activity</b>: Skribbl.io
          </item>
          <item>
            <span className="right">9 PM</span> Begin Projects (Good Planning Time!)
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
