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

const Counter = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
    }
`;

const Live = () => (
  <Layout>
    <Header />
    <SEO
      title="Live | MakeSPP 2020"
      keywords={[`MakeSPP`, `makespp`, `Saint Peter's Prep`, `hackathon`]}
    />
    <br/>
    <div>
      <Counter>
        <Countdown timeTillDate="10 11 2020, 2:00 pm" timeFormat="MM DD YYYY, h:mm a" />
      </Counter>
    </div>
    <Container>
      <Row>
        <Col sm={3} className="center">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="makespp"
            options={{ height: 400 }}
          />{" "}
        </Col>
        <Col sm={1}/>
        <Col sm={4} className="center">
        <br/><br/><br/>
        <h2>
          Submissions are due on
          <a href="https://makespp2020.devpost.com">
            {" "}<u>Devpost</u>{" "}
          </a>
          by <br/> 2 PM on October 11th
        </h2>
        <h2>
          <a
            href="https://discord.gg/mxmsaSK">
            <u> Join the Discord!</u>
          </a>
        </h2>
        <h2>
          <a href="http://mlh.io/code-of-conduct">
          <u>MLH Code of Conduct</u>
          </a>
        </h2>
        </Col>
        <Col sm={1}/>
        <Col sm={3} className="center">
        <iframe title="Discord Widget" src="https://discordapp.com/widget?id=731656931411755140&theme=light" width="350" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
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
      <Row>
      <Col sm={1}/>
      <Col sm={5} className="center">
      <h2>
        24/7 Minecraft Server:<br/>
        <i>Java IP:</i> 51.81.29.22:25610
        {" "}
        <i>Bedrock IP:</i> 51.81.29.22
        {" "}
        <i>Bedrock Port:</i> 25610
      </h2>
      <h2>
        The Minecraft Server includes <i>two minigames</i>: Village Defense & Build Battles
        + Survival Mode
      </h2>
      </Col>
      <Col sm={5} className="center">
      <h2>
        {/*}<a
          href="UNKNOWN">
          <u> If you do NOT have a team, click me!</u>
        </a>*/}
      </h2>
      <h2>
          All games are on <i>Discord</i>.
          <br/><br/>
          All other events are on <i>Zoom/YouTube Live</i>.
      </h2>
      </Col>
      <Col sm={1}/>
      </Row>

      <br/><br/>
      <Call color="#333" className="center" size="40px">
        Friday Schedule
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
            <span className="right">8 PM</span> <b>Game</b>: Skribbl.io
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
