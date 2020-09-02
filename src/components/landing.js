import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";

const Call = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size};
  color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
      font-size: 25px;
    }
`;

const Description = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  color: #333;
  padding: 0;
  line-height: 1.5;
  color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
      font-size: 20px;
    }
`;

const CardText = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  @media only screen and (max-width: 1024px) {
      font-size: 16px;
    }
  @media only screen and (max-width: 800px) {
        font-size: 13px;
    }
`;

const Card = styled.div`
  max-width: 400px;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    height: 330px;
  }
`;

const Sponsor = styled.img`
  display: block;
  margin: auto;
  max-width: 70%;
  padding: 30px;
`;

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 10px;
  @media only screen and (max-width: 1024px) {
    height: 200px;
    max-width: 100%;
  }
`;

const Profile = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 125px;
  width: 130px;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Site = styled.div`
  max-width: 75em;
  margin: 0 auto;
`;

const Landing = () => (
  <div className="landing">
    <Row>
      <Col sm={12}>
        <Call color="#333" size="36px" className="center">
          learn. make. innovate.
        </Call>
        <Description color="#333" size="28px" className="center">
          MakeSPP virtually brings together over 200 innovative young minds for a three-day
          hackathon and technology conference. we're a diverse and creative
          community of students dedicated to solving some of the most
          challenging problems with technology.
          <b>
            <u>
              <a href="https://makespp.typeform.com/to/ZzGcLGKb" target="_blank" rel="noreferrer"> join us.</a>
            </u>
          </b>
        </Description>
      </Col>
    </Row>
    <br />
    <Site>
      <Row>
        <Col sm={4}>
          <Img height="250px" src="/1.jpg" />
        </Col>
        <Col sm={4}>
          <Card bg="#F9BEBE;">
            <Call size="24px" color="#333">
              beginner oriented. expert welcomed.
            </Call>
            <CardText size="18px" color="#333">
              Learn to code websites and applications with fun project-based
              workshops & skilled mentors. <b>No experience necessary!</b>
              <br/><br/>
              Regardless if you're a entrepreneur, designer, or engineer, we all
              have one thing in common: <b>we make things</b>.
            </CardText>
          </Card></Col>
          <Col sm={4}>
            <Img height="250px" src="/2.jpg" />
          </Col>
      </Row>
      <br/>
      <Row>
      <Col sm={4}>
        <Card bg="#F9BEBE;">
          <Call size="24px" color="#333">
            share your solutions. win prizes.
          </Call>
          <CardText size="18px" color="#333">
          Whether you're working on your first <i>Hello World</i> or coding up an AI
          algorithm, makespp is a place for you to share your <b>vision with the world</b>.
          </CardText>
        </Card>
      </Col>
        <Col sm={4}>
          <Img height="250px" src="/3.jpg" />
        </Col>
        <Col sm={4}>
          <Card>
            <Call color="#333" size="24px">
               come for the swag. stay for the fun.
            </Call>
            <CardText size="18px" color="#333">
              With an amazing community and awesome swag (shipped to your home!) from the hottest tech
              companies, you'll have a <b>great time</b>.
            </CardText>
          </Card>
        </Col>
      </Row>
      <br/><br/>
      {/*}
      <Call color="#333" className="center" size="48px">
        Location
      </Call>
      <Description color="#333" className="center" size="28px">
        <b>October 9-11, 2020</b>
        <br />
        Saint Peter's Preparatory High School <br />
        144 Grand St, Jersey City, NJ 07302
        <br /> <br />
        <Iframe
          url="https://www.openstreetmap.org/export/embed.html?bbox=-74.13273476064207%2C40.656143375584584%2C-73.94734047353269%2C40.77584556137662&amp;layer=mapnik&amp;marker=40.71602137168535%2C-74.04003761708736
      &q=Saint+Peter's+Prep"
          width="90%"
          height="300px"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </Description>
*/}

      {/* <Call color="#333" className="center" size="48px">
        Guests
      </Call>
      <br /> <br />
      <Row>
        <Col sm={3}>
          <Profile src="/Santiago.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Santiago Siri</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Founder, Democracy Earth Foundation
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Joshua.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Joshua Barry</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Database Engineer, Google (SPP '10)
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Brendan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Brendan Bryant</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Product Manager, Conde Nast (SPP '08)
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Cat.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Cat Noone</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            CEO, Iris Health
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/gyan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Gyan Mishra</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Executive Director, Morgan Stanley
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/rachel.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Rachel Aliana </b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            CEO, <br />
            Adjacent Platform
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Phil.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Phillip McGovern</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Investment Banking Associate, <br />
            Goldman Sachs (SPP '11)
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/JC.png" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> JC Btaiche </b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Founder, <br />
            YoungLeaders
          </Description>

          <br />
        </Col>

        <Col sm={3}>
          <Profile src="/natalia.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Natalia Dorogi</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Venture Partner, <br />
            Romulus Capital. Columbia Engineering
          </Description>

          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Abhisek.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Abhisek Vyas</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Student, <br />
            Rutgers Business School
          </Description>

          <br />
        </Col>

        <Col sm={3}>
          <Profile src="/huy.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Huy Ha</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Software Engineer, Columbia '21
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/frank.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Frank Beatrice</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Software Engineer (SPP '14)
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/allen.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Allen Hai</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Software Engineer, ZEIT
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/skircak.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Michael Skircak</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Entrepreneur & Teacher, SPP
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Thenmozhi.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Thenmozhi Muthusamy</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Associate, Goldman Sachs
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Swetha.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Swetha Yalamanchili</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Vice President, Goldman Sachs
          </Description>
          <br />
        </Col>
      </Row> */}
      <Call color="#333" className="center" size="48px">
        FAQ
      </Call>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What is a hackathon?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            A hackathon is an event where you'll have the opportunity to turn your ideas into
            real projects. We provide skilled mentors, workshops, exclusive digital tools,
            friends, & so much more.
            MakeSPP has four tracks which you may choose to enter your project in: <b>social justice, education, healthcare, and environment.</b>
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            Who can attend? How is the event conducted?{" "}
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Any student in grades 7-12 is welcome to register. We will be conducting the hackathon primarily through Zoom & Discord.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don't know how to code?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            MakeSPP is the best place to start. We have beginner-friendly
            workshops and skilled mentors to help you build something amazing
            each day.
          </Description>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What does it cost?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            MakeSPP is completely free thanks to our sponsors. There'll be workshops and thousands in prizes -- AirPods, Raspberry Pis, drones, software and more!
          </Description>
        </Col>

        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don’t have a team or idea?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Don't worry! There will be team formation & brainstorming sessions
            at the beginning of the event.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            I have another question!
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Reach out to us at <a href="mailto:team@makespp.com">team@makespp.com.
            </a>{" "}
            <br />
          </Description>
        </Col>
      </Row>
      {/*<Call color="#333" className="center" size="48px">
        Schedule
      </Call><br/>
      <Call color="#333" className="center" size="40px">
        Day 1
      </Call>
      <Row>
        <Col sm={2} />
        <Col sm={8}>
          <div className="schedule">
            <item>
              <span className="right">8:00 - 8:40 AM</span> Opening Ceremony
            </item>
            <item>
              <span className="right">8:45 - 9:00 AM</span> Co-Host Opening: Hestia Academy
            </item>
            <item>
              {" "}
              <span className="right">9:05 AM</span> Team Formation
            </item>
            <item>
              {" "}
              <span className="right">9:20 AM</span> Making Starts
            </item>
            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: TBD {/*Creative
              Coding w/ Upperline Code (Beginner){" "}
            </item>
            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: TBD{/*Build Your
              First Website (Beginner)
            </item>
            <item>
              <span className="right">10 AM</span> <b>Workshop</b>: TBD {/*Intro to
              Python (Beginner){" "}
            </item>

            <item>
              <span className="right">11 AM</span> <b>Workshop</b>: TBD{/*Machine
              Learning w/ Upperline Code (Intermediate){" "}
            </item>

            <item>
              {" "}
              <span className="right">12 PM</span> Lunch Break
            </item>
            <item>
              <span className="right">12:30 PM</span> <b>Workshop</b>: {/*Build a
              Web App with Zeit (Intermediate){" "}
            </item>

            <item>
              <span className="right">1 PM</span> <b>Panel</b>: TBD {/*Entrepreneurship{" "}
            </item>

            <item>
              {" "}
              <span className="right">2 PM</span> <b>Activity</b>: TBD {/*Engineering
            </item>

            <item>
              <span className="right">2:30 PM</span> <b>Workshop</b>: TBD {/*Pitching
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
        <Col sm={2} />
      </Row><br/>
      <Call color="#333" className="center" size="40px">
        Day 2
      </Call><br/>
      <Call color="#333" className="center" size="30px">
TBD      </Call><br/>
      <Call color="#333" className="center" size="40px">
        Day 3
      </Call><br/>
      <Call color="#333" className="center" size="30px">
TBD      </Call>
      <br />*/}
      <br />
<Call color="#333" className="center" size="48px">
        Sponsors
      </Call>
      <br />
      <Row>
      </Row>
      <Row>
        <Col sm={4} />
        <Col sm={4}>
          <Sponsor src="/sponsors/hestia.svg" />
        </Col>
        <Col sm={4} />
      </Row>
      <Row>
        <Col sm={4}>
          <Sponsor src="/sponsors/jbg.png" />
        </Col>
        <Col sm={4}>
          <Sponsor src="/sponsors/jdj.png" />
        </Col>
        <Col sm={4}>
          <Sponsor src="/sponsors/linode.png" />
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <Sponsor src="/sponsors/desmos.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/aops.svg" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/wolfram.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/balsamiq.png" />
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <br />
          <Sponsor src="/sponsors/hackerearth.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/interviewcake.jpg" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/replit.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/taskade.png" />
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Sponsor src="/sponsors/stickergiant.png" />
        </Col>
      </Row>
      {/*
      <Row>
      <Col sm={3}>
        <br /> <br />
        <Sponsor src="/sponsors/hackerearth.png" />
      </Col>
      <Col sm={3}>
        <br /> <br />
        <Sponsor src="/sponsors/jpmorgan.jpg" />
      </Col>
      <Col sm={3}>
        <Sponsor className="max" src="/sponsors/yl.png" />
      </Col>


        <Col sm={3} />
        <Col sm={2}>
          <Sponsor className="max" src="/sponsors/insomnia.jpg" />
        </Col>

        <Col sm={2}>
          <Sponsor className="max" src="/sponsors/stickergiant.png" />
        </Col>

        <Col sm={3}>
          <Sponsor className="max" src="/sponsors/basiles.png" />
        </Col>
        <Col sm={2} />
      </Row>
      <Row>
        <Col sm={3}>
          <Sponsor src="/sponsors/desmos.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/sketch.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/1password.png" />
        </Col>

        <Col sm={3}>
          <Sponsor src="/sponsors/hackclub.png" />
        </Col>
      </Row>*/}
      <Row><Col sm={12}><Description className="center" size="20px">
        {" "}
        For our sponsorship prospectus, please click <Link to = "/prospectus.pdf" style={{
          color: `black`,
          textDecoration: `underline`
        }}>here</Link>.
        {" "}
      </Description></Col></Row><br />
      <Call color="#333" className="center" size="48px">
        Leadership
      </Call>
      <br /> <br />
      <Row>
        <Col sm={1.5} />
        <Col sm={3}>
        <Profile src="/team/eli.jpg" />
        <Description className="center" color="#333" size="18px">
          {" "}
          <b> Eli Blumenfeld</b>
        </Description>
        <Description className="center" color="#333" size="16px">
          {" "}
          Senior Organizer
        </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/team/tomek.jpg"/>
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Tomek Botwicz</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Director
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/team/shivansh.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Shivansh Kumar</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Senior Organizer
          </Description>
          <br />
        </Col>
      </Row>
      <Row>
        <Col sm={1} />
        <Col sm={2.5}>
          <Profile src="/team/alyssa.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Alyssa Fuentes</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/max.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Max Rueda</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/jason.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Jason Schreiber</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/natalie.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Natalie Spiska</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Graphic Designer
          </Description>
          <br />
        </Col>
        </Row>
        <Row>
        <Col sm={1} />
        <Col sm={2.5}>
          <Profile src="/team/josh.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Josh Kover</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Outreach
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/vikram.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Vikram Kadyan</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Outreach
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/alexa.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Alexa Janeczko</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Social Media Manager
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/avery.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Avery Aquino</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Social Media Manager
          </Description>
          <br />
        </Col>
        </Row>
        <Row>
        <Col sm={1} />
        <Col sm={2.5}>
          <Profile src="/team/eric.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Eric Han</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/kevin.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Kevin Shull</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/andrew.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Andrew Lin</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
          <Profile src="/team/chris.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Chris Gliatto</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={5} />
        <Col sm={14}>
          <Profile src="/team/michael.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Michael Holt</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Administrator
          </Description>
          <br />
        </Col>
      </Row>
    </Site>
    <div class="center">
      <a href="https://twitter.com/makespp">
        <img height="52px" src="/twitter.png" alt="twitter icon."/>
      </a>
      <a href="https://instagram.com/sppmakes">
        <img height="50px" src="/instagram.png" alt="instagram icon."/>
      </a>
    </div>
    <Description className="center" size="16px">
      <Link to ="https://hackcodeofconduct.org/1819-makespp" style={{
        color: `black`,
        fontWeight: `bold`,
        textDecoration: `underline`
      }}> Code of Conduct </Link>
    </Description>
    <Description color="#333" className="center" size="16px">
      © 2020 <a href="https://spprep.org"> Saint Peter's Prep High School</a>
    </Description>

<div class="center">
      <a href="http://2018.makespp.com">
        <b>2018</b>
      </a>&nbsp; | &nbsp;
      <a href="https://2019.makespp.com">
       <b>2019</b>
      </a> &nbsp; | &nbsp;
      <a href="https://makespp.com">
       <b>2020</b>
      </a>
    </div>
  </div>
);
export default Landing;
