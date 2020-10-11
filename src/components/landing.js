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

const ScheduleButton = styled.h1`
  display: inline-block;
  padding: 5px;
  border: 3px solid;
  border-radius: 10px;
  font-size: 20px;
  color: #DC143C;
  transition: all 300ms ease;
  &:hover {
    background: #DCDCDC;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }

  animation: 1s Zoom linear infinite,
  2s Always ease alternate infinite;
  }
  @keyframes Zoom {
      100% { background-position: 100vw 0px; }
  }

  @keyframes Always {
      100% { transform: scale(1.05);}
  }

`;

const CardText = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  @media only screen and (max-width: 1024px) {
      font-size: 18px;
    }
  @media only screen and (max-width: 800px) {
        font-size: 16px;
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
  @media only screen and (max-width: 580px) {
    max-width: 50%;
   }
`;

const Prize = styled.img`
  margin: 0;
  display: block;
  max-width: 70%;
  @media only screen and (max-width: 580px) {
    max-width: 40%;
    margin-left: auto;
    margin-right: auto;
    }
`;

const Check = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
  @media only screen and (max-width: 580px) {
    max-width: 20%;
    }
`;

const PrizeSub = styled.img`
    display: block;
    margin: auto;
    max-width: 70%;
    padding: 30px;
   @media only screen and (max-width: 580px) {
     max-width: 30%;
    }
`;

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 10px;
  @media only screen and (max-width: 1024px) {
    height: 250px;
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

const CardSpacerContainer = styled.div`
@media only screen and (max-width: 768px) {
  ;
}
`;

const FAQSpacerContainer = styled.div`
@media only screen and (min-width: 102px) {
  ;
}
`;

const Landing = () => (
  <div className="landing">
    <Row>
      <Col sm={12}>
        <Call color="#333" size="36px" className="center">
          learn. make. innovate.
        </Call>
        <Description color="#333" size="28px" className="center">
          MakeSPP virtually brings together over 500 innovative young minds for a three-day
          hackathon and technology conference. we're a diverse and creative
          community of students dedicated to solving some of the most
          challenging problems with technology.{" "}
          {/*<b>
            <u>
              <a href="https://makespp.typeform.com/to/ZzGcLGKb" target="_blank" rel="noreferrer">join us</a>
            </u>
          </b>.*/}
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
        <CardSpacerContainer><br/></CardSpacerContainer>
          <Card bg="#F9BEBE;">
            <Call size="24px" color="#333">
              beginner focused. expert welcomed.
            </Call>
            <CardText size="18px" color="#333">
              learn to code websites and applications with fun project-based
              workshops & skilled mentors. <b>no experience necessary!</b>
              <br/><br/>
              regardless if you're a entrepreneur, designer, or engineer, we all
              have one thing in common: <b>we make things</b>.
            </CardText>
          </Card>
          </Col>
          <Col sm={4}>
            <Img height="250px" src="/2.jpg" />
          </Col>
      </Row>
      <CardSpacerContainer><br/></CardSpacerContainer>
      <br/>
      <Row>
      <Col sm={4}>
        <Card bg="#F9BEBE;">
          <Call size="24px" color="#333">
            share your solutions. win prizes.
          </Call>
          <CardText size="18px" color="#333">
          whether you're working on your first <i>Hello World</i> or coding up an AI
          algorithm, makespp is a place for you to share your <b>vision with the world</b>. <br/><br/>you'll come away with your own app, website, or other project, even if you know <b>nothing going in</b>.
          </CardText>
        </Card>
        </Col>
        <Col sm={4}>
          <Img height="250px" src="/3.jpg" />
        </Col>
        <Col sm={4}>
        <CardSpacerContainer><br></br></CardSpacerContainer>
          <Card>
            <Call color="#333" size="24px">
               come for the fun. stay for the swag.
            </Call>
            <CardText size="18px" color="#333">
              with an amazing community and awesome swag (shipped to your home!) from the hottest tech
              companies, you'll have a <b>great time</b>.
              <br/><br/>
              that's enough for now. so what are you doing waiting, <b><i><a href="https://makespp.typeform.com/to/ZzGcLGKb" target="_blank" rel="noreferrer">register now</a></i></b>!
            </CardText>
          </Card>
        </Col>
      </Row>
      <FAQSpacerContainer><br/><br/></FAQSpacerContainer>
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
            MakeSPP has four main tracks which you may choose to enter your project in: <b>education, environment, creative website, and Google Cloud</b> -- along with a sponsor-specific echoAR track.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            Who can attend? How is the event conducted?{" "}
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Any student in grades 7-12 is welcome to register. We will be conducting the hackathon through Zoom & Discord.
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
            MakeSPP is completely free thanks to our sponsors. There'll be workshops and thousands in prizes -- Xbox Series S, AirPods, MX Master mice, Google Home Minis, software and more!
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don’t have a team or idea?
          </Call>
          <Description className="center" color="#333" size="16px">
            Don't worry! There will be team formation session
            at the beginning of the event. Teams are limited to <b>4 people</b>.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            I have another question!
          </Call>
          <Description className="center" color="#333" size="16px">
            Reach out to us at <a href="mailto:team@makespp.com">team@makespp.com.
            </a>
            <br/>
          </Description>
        </Col>
      </Row>
      <Call color="#333" className="center" size="48px">
        Prizes
      </Call>
      <Call color="#333" className="center" size="25px">
        <i>All team members will receive a prize.</i>
      </Call>
      <Row>
      <Col sm={3}/>
      <Col sm={6}>
          <Sponsor src="/prizes/xbox.jpg" />
      </Col>
      <Col sm={3}/>
      </Row>
      <Row>
      <Col sm={3.5}/>
      <Col sm={2.5}>
        <Prize src="/prizes/1password.png" />
      </Col>
      <Col sm={2.5}>
        <Prize src="/sponsors/bugsee.svg" />
      </Col>
      <Col sm={3.5}/>
      </Row>
      <Row>
        <Col sm={12}>
        <Call className="center" color="#333" size="24px">
          First Place: <i>Xbox Series S</i>{" "}<br/><i>6 Months Free of 1Password Premium</i><br/><i>$250 Bugsee Credits</i>
        </Call>
        </Col>
      </Row>
      <Row>
      <Col sm={1.5}/>
      <Col sm={3}>
          <PrizeSub src="/prizes/airpods.jpg" />
      </Col>
      <Col sm={2}/>
      <Col sm={5}>
          <PrizeSub src="/prizes/mouse.jpg" />
      </Col>
      </Row>
      <Row>
        <Col sm={6}>
        <Call className="center" color="#333" size="24px">
          Second Place: <i>AirPods</i>
        </Call>
        </Col>
        <Col sm={6}>
        <Call className="center" color="#333" size="24px">
          Third Place: <i>MX Master Mouse</i>{" "}
        </Call>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col sm={1.075}/>
      <Col sm={2.7}>
          <PrizeSub src="/prizes/rocketbook.jpg" />
      </Col>
      <Col sm={2}>
          <PrizeSub src="/prizes/speaker.jpg" />
      </Col>
      <Col sm={0.1}/>
      <Col sm={2.5}>
          <PrizeSub src="/prizes/mini.jpg" />
      </Col>
      <Col sm={2.5}>
          <PrizeSub src="/prizes/amazon.png" />
      </Col>
      </Row>
      <Row>
        <Col sm={1}/>
        <Col sm={2.5}>
        <h3 className="center" color="#333">
          <b>Environment Track: <i>RocketBook</i></b>
        </h3>
        </Col>
        <Col sm={2.5}>
        <h3 className="center" color="#333">
          <b>Education Track: {" "}<i>House of Marley Speaker</i>{" "}</b>
        </h3>
        </Col>
        <Col sm={2.5}>
        <h3 className="center" color="#333">
          <b>Google Cloud Track: <i>Google Home Mini</i></b>
        </h3>
        </Col>
        <Col sm={2.5}>
        <h3 className="center" color="#333">
          <b>EchoAR Track: <i>$50 Amazon Gift Card</i>{" "}</b>
        </h3>
        </Col>
      </Row>
      <br/><br/>
      <Call color="#333" className="center" size="48px">
        Schedule (EST)
      </Call>
      <Call color="#333" className="center" size="20px">
        Note: All games/workshops/lectures are <i>optional</i>.
      </Call><br/>
      <Call color="#333" className="center" size="40px">
        October 9th
      </Call>
      <br/>
      <Row>
        <Col sm={4.5}/>
        <Col sm={3}>
        <Check src="/checkmark.png" />
        </Col>
        {/*<Col sm={8}>
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
              <img height="25px" src="/discord.svg" alt="discord icon."/>
            </item>
            <item>
              <span className="right">6:20 PM</span> Icebreakers
                <img height="25px" src="/discord.svg" alt="discord icon."/>
            </item>
            <item>
              <span className="right">6:40-8 PM</span> Dinner Break
            </item>
            <item>
              <span className="right">8 PM</span>
              <span classname="right"> <a href="https://twitch.tv/makespp2020" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Workshop</b>: Intro to HTML/CSS (Twitch)</ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">8 PM</span> <b>Game</b>: Skribbl.io
              <img height="25px" src="/discord.svg" alt="discord icon."/>
            </item>
            <item>
              <span className="right">9 PM</span> Worktime
            </item>
          </div>
        </Col>*/}
        <Col sm={4.5}/>
      </Row><br/>
      <Call color="#333" className="center" size="40px">
        October 10th
      </Call><br/>
      <Row>
        <Col sm={4.5}/>
        <Col sm={3}>
        <Check src="/checkmark.png" />
        </Col>
        {/*<Col sm={8}>
          <div className="schedule">
            <item>
              <span className="right">9 AM</span> Morning Message <img height="25px" src="/discord.svg" alt="discord icon."/>
            </item>
            <item>
              <span classname="right"> <a href="https://us02web.zoom.us/j/82158559126?pwd=eWxaTklPbys4TUZicnNJcjRyYkVKUT09" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Workshop</b>: Intro to Python </ScheduleButton></a></span>
              <span className="right">10 AM</span>
            </item>
            <item>
              <span className="right">10:30 AM</span>
              <span classname="right"> <a href="https://zoom.us/j/92297011718" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Workshop</b>: Build an echoAR App </ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">11 AM</span> <b>Game</b>: Among Us <img height="25px" src="/discord.svg" alt="discord icon."/>
            </item>
            <item>
              <span className="right">1 PM</span>
              <span classname="right"> <a href="https://us02web.zoom.us/j/83849584443?pwd=bWhBZlpBeGNVb0lXMWFPanQ4WHIzQT09" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Workshop</b>: Intro to JavaScript </ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">3 PM</span>
              <span classname="right"> <a href="https://twitch.tv/makespp2020" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Panel</b>: Entrepreneurship</ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">3 PM</span> <b>Game</b>: Makey Makeoff <img height="25px" src="/discord.svg" alt="discord icon."/>
            </item>
            <item>
              <span className="right">4 PM</span>
              <span classname="right"> <a href="https://us02web.zoom.us/j/89270081772?pwd=bmlXUmpSdzZnQk9IcTk0L29TR2JDQT09" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Workshop</b>: Machine Learning</ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">5 PM</span>
              <span classname="right"> <a href="https://twitch.tv/makespp2020" target="_blank" rel="noreferrer">
              <ScheduleButton><b>Panel</b>: Future of E-Learning</ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">6 PM</span>
              <span classname="right"> <a href="https://virginiatech.zoom.us/j/4836087091" target="_blank" rel="noreferrer">
              <ScheduleButton><b>MLH Activity</b>: Capture the Flag</ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">7 PM</span> <b>Game</b>: Minecraft Build Battles <img height="25px" src="/discord.svg" alt="discord icon."/>
            </item>
            <item>
              <span className="right">8 PM</span>
              <span classname="right"> <a href="https://virginiatech.zoom.us/j/4836087091" target="_blank" rel="noreferrer">
              <ScheduleButton><b>MLH Activity</b>: Painting with Bob Ross</ScheduleButton></a></span>
            </item>
            <item>
              <span className="right">9 PM</span> Worktime
            </item>
          </div>
        </Col>*/}
        <Col sm={2}/>
      </Row><br/>
      <Call color="#333" className="center" size="40px">
        October 11th
      </Call><br/>
      <Row>
        <Col sm={2}/>
        <Col sm={8}>
          <div className="schedule">
              <item>
                <span className="right">11 AM</span> <b>Reminder</b>: Prepare Presentation
              </item>
              <item>
                <span className="right">12 PM</span>
                <span classname="right"> <a href="https://us02web.zoom.us/j/82866365418?pwd=eFpOZllpNTBUQSttcHcwaTNWaEMwdz09" target="_blank" rel="noreferrer">
                <ScheduleButton><b>Workshop</b>: Pitching Your Product</ScheduleButton></a></span>
              </item>
              <item>
                <span className="right">1 PM</span> <b>Reminder</b>: Submissions Due Soon
              </item>
              <item>
                <span className="right">2 PM</span> Submissions Due
              </item>
              <item>
                <span className="right">2 PM</span> <b>Game</b>: Codenames <img height="25px" src="/discord.svg" alt="discord icon."/>
              </item>
              <item>
                <span className="right">2:30 PM</span> MEME WARRRRR <img height="25px" src="/discord.svg" alt="discord icon."/>
              </item>
              <item>
                <span className="right">3 PM</span> <b>Game</b>: Minecraft Village Defense <img height="25px" src="/discord.svg" alt="discord icon."/>
              </item>
              <item>
                <span className="right">2-5 PM</span> Judging
              </item>
              <item>
                <span className="right">5-6 PM</span>
                <span classname="right"> <a href="https://us02web.zoom.us/j/83305769250?pwd=QlBtYjJvbzBwcExobTFjVTZtT0JoUT09" target="_blank" rel="noreferrer">
                <ScheduleButton>Closing Ceremony & Winners</ScheduleButton></a></span>
              </item>
          </div>
        </Col>
        <Col sm={4.5} />
      </Row>
      <br />
      <br />
<Call color="#333" className="center" size="48px">
        Sponsors
      </Call>
      <br />
      <Row>
      </Row>
      <Row>
        <Col sm={2} />
        <Col sm={8}>
            <a href="https://www.hestia.academy" target="_blank" rel="noreferrer" aria-label="Hestia Academy"><Sponsor src="/sponsors/hestia.svg" /></a>
        </Col>
        <Col sm={2} />
      </Row>
      <Row>
        <Col sm={4}>
            <a href="https://www.thejillbiggsgroup.com" target="_blank" rel="noreferrer" aria-label="Jill Biggs Group"><Sponsor src="/sponsors/jbg.png" /></a>
        </Col>
        <Col sm={4}>
          <a href="https://www.jdjfoundation.org" target="_blank" rel="noreferrer" aria-label="JDJ Foundation"><Sponsor src="/sponsors/jdj.png" /></a>
        </Col>
        <Col sm={4}>
          <a href="https://milesquareinsurance.com" target="_blank" rel="noreferrer" aria-label="Mile Square Insurance"><Sponsor src="/sponsors/miles.png" /></a>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <a href="https://www.balsamiq.com" target="_blank" rel="noreferrer" aria-label="Balsamiq"><Sponsor src="/sponsors/balsamiq.svg" /></a>
        </Col>
        <Col sm={4}>
          <a href="https://www.linode.com" target="_blank" rel="noreferrer" aria-label="Linode"><Sponsor src="/sponsors/linode.svg" /></a>
        </Col>
        <Col sm={4}>
          <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank" rel="noreferrer" aria-label="Sticker Mule"><Sponsor src="/sponsors/stickermule.svg" /></a>
        </Col>
      </Row>
      <Row>
        <Col sm={1.125}/>
        <Col sm={3.75}>
          <a href="https://www.enlight.nyc" target="_blank" rel="noreferrer" aria-label="Enlight"><Sponsor src="/sponsors/enlight.png" /></a>
        </Col>
        <Col sm={2.5}>
          <a href="https://www.stickergiant.com" target="_blank" rel="noreferrer" aria-label="StickerGiant"><Sponsor src="/sponsors/stickergiant.png" /></a>
        </Col>
        <Col sm={3.5}>
          <a href="https://echoar.xyz" target="_blank" rel="noreferrer" aria-label="echoAR"><Sponsor src="/sponsors/echoar.png" /></a>
        </Col>
        <Col sm={1.125}/>
      </Row>
      <Call color="#333" className="center" size="48px">Support
      </Call>
      <Row>
        <Col sm={2}>
          <a href="https://www.desmos.com" target="_blank" rel="noreferrer" aria-label="Desmos"><Sponsor src="/sponsors/desmos.png" /></a>
        </Col>
        <Col sm={2}>
          <a href="https://www.wolfram.com/language" target="_blank" rel="noreferrer" aria-label="Wolfram"><Sponsor src="/sponsors/wolfram.png" /></a>
        </Col>
        <Col sm={2}>
          <a href="https://www.repl.it" target="_blank" rel="noreferrer" aria-label="Replit"><Sponsor src="/sponsors/replit.png" /></a>
        </Col>
        <Col sm={3}>
          <a href="https://www.interviewcake.com" target="_blank" rel="noreferrer" aria-label="Interview Cake"><Sponsor src="/sponsors/interviewcake.svg" /></a>
        </Col>
        <Col sm={3}>
          <a href="https://www.artofproblemsolving.com" target="_blank" rel="noreferrer" aria-label="Art of Problem Solving"><Sponsor src="/sponsors/aops.svg" /></a>
        </Col>
      </Row>
      <Row>
        <Col sm={0.5}/>
        <Col sm={2.5}>
          <a href="https://www.taskade.com" target="_blank" rel="noreferrer" aria-label="Taskade"><Sponsor src="/sponsors/taskade.png" /></a>
        </Col>
        <Col sm={2.5}>
          <a href="https://www.1password.com" target="_blank" rel="noreferrer" aria-label="1Password"><Sponsor src="/sponsors/1password.svg" /></a>
        </Col>
        <Col sm={2.5}>
          <a href="https://hackathons.hackclub.com" target="_blank" rel="noreferrer" aria-label="Hack Club"><Sponsor src="/sponsors/hackclub.png" /></a>
        </Col>
        <Col sm={1.5}>
          <a href="https://www.bugsee.com" target="_blank" rel="noreferrer" aria-label="Bugsee"><Sponsor src="/sponsors/bugsee.svg" /></a>
        </Col>
        <Col sm={2}>
          <a href="https://www.datacamp.com" target="_blank" rel="noreferrer" aria-label="DataCamp"><Sponsor src="/sponsors/datacamp.svg" /></a>
        </Col>
        <Col sm={0.5}/>
      </Row>
      {/*<Row>
        <Col sm={4.5}/>
        <Col sm={2}>
          <a href="https://www.datacamp.com" target="_blank" rel="noreferrer"><Sponsor src="/sponsors/datacamp.svg" /></a>
        </Col>
        <Col sm={4.5}/>
      </Row>*/}
      <Row><Col sm={12}><Description className="center" size="20px">
        For our sponsorship prospectus, please click <Link to = "/prospectus.pdf" style={{color: `black`, textDecoration: `underline`}}>here</Link>.
      </Description></Col></Row><br />
      <Call color="#333" className="center" size="48px">
        Leadership
      </Call>
      <br /> <br />
      <Row>
        <Col sm={1.5} />
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
        <Col sm={3.5} />
        <Col sm={2.5}>
          <Profile src="/team/tyler.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b>Tyler Kay</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Tech Crew
          </Description>
          <br />
        </Col>
        <Col sm={2.5}>
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
        <Col sm={3.5} />
      </Row>
    </Site>
    <div class="center">
      <a href="https://twitter.com/makespp">
        <img height="52px" src="/twitter.svg" alt="twitter icon."/>
      </a>
      <a href="https://discord.gg/mxmsaSK">
        <img height="52px" src="/discord.svg" alt="discord icon."/>
      </a>
      <a href="https://instagram.com/sppmakes">
        <img height="50px" src="/instagram.png" alt="instagram icon."/>
      </a>
    </div>
    <Description className="center" size="16px">
      <Link to ="http://mlh.io/code-of-conduct" style={{
        color: `black`,
        fontWeight: `bold`,
        textDecoration: `underline`
      }}> MLH Code of Conduct </Link>
    </Description>
    <Description color="#333" className="center" size="16px">
      © 2020 <a href="https://spprep.org"> St. Peter's Prep High School</a></Description>

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
