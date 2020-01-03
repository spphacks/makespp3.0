import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import Iframe from "react-iframe";

let images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

const Call = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size};
  color: ${props => props.color};
`;

const Description = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  color: #333;
  padding: 0;
  line-height: 1.3;
  color: ${props => props.color};
`;

const Card = styled.div`
  background: ${props => props.bg};
  padding: 10px;
  margin-bottom: 20px;
  height: 230px;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 10px;

  @media only screen and (max-width: 1024px) {
    height: 330px;
  }
`;

const Role = styled.p`
  text-align: center;
  padding-bottom: 10px;
  font-weight: bold;
`;

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 10px;

  @media only screen and (max-width: 1024px) {
    height: 200px;
    max-width: 100%;
  }
`;

const Sponsor = styled.img`
  display: block;
  margin: auto;
  max-width: 70%;
  padding: 20px;
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

const Twitter = styled.a`
  font-size: 24px;
  padding: 10px;
  background: #38a1f3;
  border-radius: 10px;
  color: #fff;
`;

const Instagram = styled.a`
  font-size: 24px;
`;
const Landing = () => (
  <div className="landing">
    <Row>
      <Col sm={6}>
        <Call color="#333" size="36px">
          {" "}
          Learn. Make. Innovate.
        </Call>
        <Description color="#333" size="28px">
          MakeSPP brings together over 100 innovative young minds for an all-day
          hackathon and technology conference. We're a diverse and creative
          community of students dedicated to solving some of the most
          challenging problems with technology.{" "}
          <b>
            <u>
              <Link to="/register">Join Us.</Link>
            </u>{" "}
          </b>
        </Description>
      </Col>
      <Col sm={6}>
        <Img height="300px" src="/4.jpg" />
        <br />
        <br />
      </Col>
    </Row>
    <Site>
      <Row>
        <Col sm={6}>
          <Card bg="#f9e5eb;">
            <Call size="24px" color="#333;">
              {" "}
              <img height="30px" src="/learn.png" />
              <br />
              Beginner oriented.{" "}
            </Call>
            <Description color="#333" size="18px">
              {" "}
              Learn to code websites and applications with fun project-based
              workshops & skilled mentors. <b>No experience necessary!</b>
              <br /> <br />
              You'll also have the opportunity to attend our entrepreneurship
              session, talks, & panel.
            </Description>
          </Card>
        </Col>
        <Col sm={6}>
          <Img height="250px" src="/8.jpg" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={6}>
          <Img height="250px" src="/5.jpg" />
        </Col>
        <Col sm={6}>
          <Card bg="#deeaf7;">
            <Call color="#333" size="24px">
              {" "}
              <img height="30px" src="/build.png" />
              <br />
              Build something amazing.{" "}
            </Call>
            <Description color="#333" size="18px">
              {" "}
              Regardless if you're a entepreneur, designer, or engineer, we all
              have one thing in common: <b>we make things</b>. <br />
              <br /> Let's use our creativity to make a difference.
            </Description>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={6}>
          <Card bg="#f9e5eb;">
            <Call size="24px" color="#333;">
              {" "}
              <img height="30px" src="/share.png" />
              <br />
              Share and win prizes.{" "}
            </Call>
            <Description color="#333" size="18px">
              You'll have the opportunity to win prizes worth thousands of
              dollars — AirPods, tablets, drones, Raspberry Pis, software
              subscriptions, and much more! In addition to grand prizes, we also
              have four tracks which you may choose to enter your project in:{" "}
              <b>social justice, education, healthcare, and environment.</b>
            </Description>
          </Card>
        </Col>
        <Col sm={6}>
          <Img height="250px" src="/1.jpg" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={6}>
          <Img height="250px" src="/6.jpg" />
        </Col>
        <Col sm={6}>
          <Card bg="#deeaf7;">
            <Call color="#333" size="24px">
              {" "}
              <img height="30px" src="/fun.png" />
              <br />
              Fun, food, and swag.{" "}
            </Call>
            <Description color="#333" size="18px">
              {" "}
              With delicious food and awesome swag from the hottest tech
              companies, you'll have a <b>great time</b>.
              <br /> <br />
              Whether you're working on a marketing pitch or coding up a new AI
              algorithm, MakeSPP is a place for everyone to thrive.{" "}
            </Description>
          </Card>
        </Col>
      </Row>
      <br />
      <Call color="#333" className="center" size="48px">
        Location
      </Call>
      <Description color="#333" className="center" size="28px">
        <b>April 25th, 2020</b>
        <br />
        <b>8AM - 8PM</b>
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
            A hackathon is where you have the opportunity turn your ideas into
            real projects. We'll provide skilled mentors, speakers, workshops,
            food, friends, & so much more.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            Who can attend?{" "}
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Any student in grades 7-12 is welcome to apply to attend.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don't know how to code?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            MakeSPP is the best place to start. We'll have beginner-friendly
            workshops and skilled mentors to help you build something amazing
            over the day.
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
            MakeSPP is completely free thanks to our sponsors. There will be
            food, snacks, drinks, and thousands of dollars worth of prizes.
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
            Email us at <a href="mailto:team@makespp.com">
              team@makespp.com.
            </a>{" "}
            <br />
          </Description>
        </Col>
      </Row>
      {/* <Call color="#333" className="center" size="48px">
        Schedule
      </Call>
      <Row>
        <Col sm={2} />
        <Col sm={8}>
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
              <span className="right">1 PM</span> <b>Entrepreneurship Panel</b>{" "}
            </item>

            <item>
              {" "}
              <span className="right">2 PM</span> <b>Engineering Activity</b>
            </item>

            <item>
              <span className="right">2:30 PM</span> <b>Workshop</b>: Pitching
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
      </Row> */}
      <br />
      <br />
      {/* <Call color="#333" className="center" size="48px">
        Sponsors
      </Call>
      <br />
      <Row>


      </Row>
      <Row>
        <Col sm={4} />
        <Col sm={4}>
          <Sponsor src="/sponsors/GS.jpg" />
        </Col>
        <Col sm={4} />
      </Row>
      <Row>
        <Col sm={2} />
        <Col sm={4}>
          <Sponsor src="/sponsors/jdj.png" />
        </Col>
        <Col sm={4}>
          <Sponsor src="/sponsors/smp.jpg" />
        </Col>{" "}
        <Col sm={2} />
      </Row>
      <Row>
        <Col sm={3}>
          <Sponsor src="/sponsors/njit.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/balsamiq.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/mongodb.jpg" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/zeit.svg" />
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <br />
          <Sponsor src="/sponsors/upperline.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/linode.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/uworld.png" />
        </Col>
        <Col sm={3}>
          <Sponsor src="/sponsors/jbg.png" />
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <Sponsor src="/sponsors/miles.png" />
        </Col>
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
      </Row>
      <Row>
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
      </Row> */}
      <Call color="#333" className="center" size="48px">
        Leadership
      </Call>
      <br /> <br /> <br />
      {/* <Row>
        <Col sm={2}>
          <Profile src="/team/samay.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Samay Shamdasani</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Director
          </Description>
        </Col>
        <Col sm={2}>
          <Profile src="/team/nathan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Nathan Blumenfeld</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Finance Lead
          </Description>
        </Col>
        <Col sm={2}>
          <Profile src="/team/max.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Maxim Geller</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations Lead
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/shash.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Shashwat Punjani</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations Lead
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/thomas.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Thomas Narramore</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Marketing Lead
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/dan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Daniel Ambrosio</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Event Experience Lead
          </Description>
          <br />
        </Col>
      </Row> */}
      <Row>
        {/* <Col sm={2}>
          <Profile src="/team/owen.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Owen Kealey</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Event Experience
          </Description>
        </Col>{" "} */}
        <Col sm={2} />
        <Col sm={2}>
          <Profile src="/team/tomek.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Tomek Botwicz</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/eli.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Eli Blumenfeld</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Marketing
          </Description>
        </Col>
        <Col sm={2}>
          <Profile src="/team/shivansh.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Shivansh Kumar</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Event Experience
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/victor.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Victor Tyne</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Finance
          </Description>
          <br />
        </Col>

        {/* <Col sm={2}>
          <Profile src="/team/tyler.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Tyler Greene</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Event Experience
          </Description>
        </Col> */}

      </Row>
      <Row>
        <Col sm={1} />
        <Col sm={2}>
          <Profile src="/team/jonas.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Jonas Eaton</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/ethan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Ethan MacMillan</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        {/* <Col sm={2}>
          <Profile src="/team/liam.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Liam Concannon</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col> */}
        <Col sm={2}>
          <Profile src="/team/sam.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Samuel Leonte</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Operations
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/suvan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Suvan Bhat</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Marketing
          </Description>
          <br />
        </Col>
        <Col sm={2}>
          <Profile src="/team/ben.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Ben Norris</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Marketing
          </Description>
          <br />
        </Col>
        <Col sm={5} />
        <Col sm={2}>
          <Profile src="/team/holtm.png" />
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
        <Col sm={5} />
      </Row>
    </Site>
    <div class="center">
      <a href="https://twitter.com/makespp">
        <img height="50px" src="/twitter.png" />
      </a>
      <a href="https://instagram.com/sppmakes">
        <img height="50px" src="/instagram.png" />
      </a>
    </div>

    <Description color="#333" className="center" size="16px">
      © 2020 <a href="https://spprep.org"> Saint Peter's Prep High School</a>
    </Description>

<div class="center">
      
      <a href="https://2018.makespp.com">
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

// Last year-- Must do (state dept. t shirts, video in square)
// Footer + CoC -- Must do

export default Landing;
