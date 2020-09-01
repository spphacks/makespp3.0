import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";

const Background = styled.header`
  margin: 0;
  padding: 0;
  color: #fff;
  margin: 0;
  background: linear-gradient(to right, #200122, #6f0000);
`;

const ParticleContainer = styled.div`
  position: absolute;
  height: 400vh
  width: 400vh;
`;

const Logo = styled.img`
  position: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  @media only screen and (max-width: 1024px) {
    content:url("/logosmall.png");
    position: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}
`;

const Tagline = styled.h1`
  position: auto;
  text-align: center;
  max-width: 900px;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 33px;
  }
`;

const SubTagline = styled.h1`
  position: auto;
  text-align: center;
  max-width: 700px;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 17px;
    max-width: 500px;
  }
`;

const Date = styled.h1`
  position: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Register = styled.h1`
  position: auto;
  padding: 10px;
  border: 5px solid #fff;
  border-radius: 10px;
  font-size: 40px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  transition: all 300ms ease;
  &:hover {
    background: #ca043f;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Header = ({ siteTitle }) => (
  <Background>
  <ParticleContainer><Particles
    height="100vh"
    params={{
      particles: {
        number: {
          value: 400,
        },
        size: {
          value: 3,
          random: true,
          anim: {
            speed: 5,
            size_min: 0.3
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          random: true,
          speed: 1,
          direction: "right",
          out_mode: "out"
        }
      },
    }}
  /></ParticleContainer>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`
      }}
    >
      {" "}
      <Logo src="/logo.png" />
    </Link>
    <Tagline> New Jersey's Premier Virtual High School Hackathon </Tagline>
    <SubTagline>Learn to build & pitch a product with workshops and thousands in prizes.</SubTagline>
    <br></br>
      <Date>October 9-11, 2020</Date>
    <Row>
      <Col sm={5.2} />
      <Col sm={0}>
      <Link to="https://makespp.typeform.com/to/ZzGcLGKb">
        <Register> Register </Register>
      </Link>
      </Col>
      </Row>
    {/* <Link to="/live">
      <Register> MakeSPP Live </Register>
    </Link> */}
  </Background>
);

export default Header;
